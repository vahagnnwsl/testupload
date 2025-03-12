import {TestKeys, TestWithSite, TSort} from "../shared/types.ts";

export type TSearchProps = {
    search: string
    setSearch: (search: string) => void
    total?: number
}

export type TTableProps = {
    onSort: (headerKey: TestKeys) => void
    sortedData: TestWithSite[] | null
    sortConfig: TSort | null
}