import {TSearchProps} from "../../../types.ts";
import {FC} from "react";
import s from './style.module.css'
import SearchIcon from "../../../../assets/icons/searchIcon.tsx";
const SearchComponent: FC<TSearchProps> = ({search,setSearch,total}) => {
    return(
        <div className={s.searchContainer}>
            <div className={s.icon}>
                <SearchIcon/>
            </div>
            <input
                className={s.search}
                placeholder="What test are you looking for?"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
            <p className={s.total}>{total} tests</p>
        </div>
    )
}

export default SearchComponent;