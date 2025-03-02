import Loading from "../../assets/images/Loading.png"
import style from "./loader.module.css"

export default function Loader() {
    return(
        <div className={style.container}>
            <p>...loading</p>
            <img src={Loading} alt="Loading" />
        </div>
    )
}