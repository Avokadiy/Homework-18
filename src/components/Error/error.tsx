import style from './error.module.css'

export const Error = () => {
    return (
        <div className={style.container}>
            <h3>There is an error</h3>
            <h4>Please refresh the page</h4>
        </div>
    )
}