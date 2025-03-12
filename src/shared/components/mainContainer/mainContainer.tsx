import {FC} from "react";
import {ReactChildren} from "../../types.ts";
import s from './style.module.css'

const MainContainer: FC<ReactChildren> = ({children, title}) => {
    return (
        <div className={s.mainContainer}>
            <h1 className={s.title}>{title}</h1>
            {children}
        </div>
    )
}

export default MainContainer;