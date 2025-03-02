import style from "./notFound.module.css"

export default function NotFound() {
    return (
        <div className={style.container}>
            <h1>Oops... </h1>
            <h2>I think you're lost</h2>
            <p>Please come back to previous page</p>
        </div>
    )
}