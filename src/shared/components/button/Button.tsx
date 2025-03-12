import s from './style.module.css'
import {FC} from "react";

const Button:FC<{title:string,variant?:'default'|'success'}> = ({title,variant}) => {
    return (
        <button className={`${s.action} ${variant === 'default' ? s.finalize : s.result}`}>{title}</button>
    )
}

export default Button