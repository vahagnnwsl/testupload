import SearchComponent from "../components/searchComponent/searchComponent.tsx";
import MainContainer from "../../../shared/components/mainContainer/mainContainer.tsx";
import useGetTests from "../hooks/useGetTests.tsx";
import TableComponent from "../components/tableComponent/tableComponent.tsx";
import Loader from "../../../shared/components/loader/loader.tsx";
import NoResult from "../../../shared/components/noResult/noResult.tsx";

const DashboardView = () => {
    const {
        search,
        setSearch,
        total,
        onSort,
        tests,
        sortConfig,
        loading
    } = useGetTests()
    return (
        <MainContainer title={"Dashboard"}>
            <SearchComponent search={search} setSearch={setSearch} total={total}/>
            {
                loading ?
                    <Loader/> :
                    <>
                        {
                            total === 0 ? <NoResult/> : <TableComponent
                                onSort={onSort}
                                sortedData={tests}
                                sortConfig={sortConfig}
                            />
                        }
                    </>

            }

        </MainContainer>
    )
}

export default DashboardView;