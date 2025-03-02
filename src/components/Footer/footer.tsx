import style from "./footer.module.css"

export default function Footer() {

    return (
        <div className={style.container}>
            <p>All data in this application and its API are sourced from the official Jelly Belly website. None of the content here is claimed as original; it's all credited to and derived from Jelly Belly's official resources.</p>
            <p>Nikita Demidov {String.fromCharCode(169)} {new Date().getFullYear()}</p>
        </div>
    )
}