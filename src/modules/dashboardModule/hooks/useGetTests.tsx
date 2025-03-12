import {useCallback, useEffect, useMemo, useState} from "react";
import {getSiteById, getTests} from "../../../api/api.ts";
import {TDirections, TestKeys, TestWithSite, TSort} from "../../../shared/types.ts";
import {cleanUrl} from "../utils.ts";

const useGetTests = () => {
    const [tests, setTests] = useState<TestWithSite[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [sortConfig, setSortConfig] = useState<TSort | null>(null);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setDebouncedSearch(search);
            setLoading(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, [search]);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                setLoading(true);
                const testsData = await getTests();

                const modifiedTestData = await Promise.all(
                    testsData.map(async (test) => {
                        try {
                            const siteInfo = await getSiteById(test.siteId);
                            return {
                                ...test,
                                siteUrl: cleanUrl(siteInfo.url),
                            };
                        } catch (error) {
                            console.error(`Failed to fetch site for siteId: ${test.siteId}`, error);
                            return {...test, siteUrl: "N/A"};
                        }
                    })
                );

                setTests(modifiedTestData);
            } catch (error) {
                console.error("Failed to fetch tests", error);
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchTests();
    }, []);

    const filteredData = useMemo(() => {
        if (!tests) return null;

        const lowerSearch = debouncedSearch.toLowerCase();
        return tests.filter(
            (test) =>
                test.name.toLowerCase().includes(lowerSearch)
        );
    }, [tests, debouncedSearch]);

    const sortedData = useMemo(() => {
        if (!filteredData || !sortConfig) return filteredData;

        return [...filteredData].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (aValue < bValue) return sortConfig.direction === TDirections.ASC ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === TDirections.ASC ? 1 : -1;
            return 0;
        });
    }, [filteredData, sortConfig]);

    const onSort = useCallback((key: TestKeys) => {
        setSortConfig((prev) => ({
            key,
            direction:
                prev?.key === key && prev.direction === TDirections.ASC
                    ? TDirections.DESC
                    : TDirections.ASC,
        }));
    }, []);

    return {
        search,
        setSearch,
        loading,
        error,
        tests: sortedData,
        total: filteredData?.length,
        onSort,
        sortConfig,
    };
};

export default useGetTests;