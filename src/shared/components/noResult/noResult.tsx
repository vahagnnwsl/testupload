import Button from "../button/Button.tsx";
import s from './style.module.css'

const NoResult = () => {
    return(
        <div className={s.resultContainer}>
            <div className={s.noData}>
                <h3>Your search did not match any results.</h3>
                <Button variant={'success'} title={'Reset'}/>
            </div>
        </div>
    )
}

export default NoResult;