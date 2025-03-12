import s from './style.module.css'

const Loader = () =>{
    return (
        <div className={s.loadingContainer}>
            <div className={s.loading}/>
        </div>
    )
}

export default Loader;