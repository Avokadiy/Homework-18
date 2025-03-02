import { Link } from "react-router-dom";
import jellyBeanLogo from "../../assets/images/jellyBeanLogo.png"
import style from "./header.module.css"

export default function Header() {
    return (
        <div className={style.container}>
            <div>
                <img src={jellyBeanLogo} alt="Jelly Bean Logo" />
                <p>Jelly Belly</p>
            </div>
            <nav>
                <Link to='/' className={style.link}>Home</Link>
                <Link to='/beans' className={style.link}>Beans</Link>
                <Link to='/facts' className={style.link}>Facts</Link>
                <Link to='/combinations' className={style.link}>Combinations</Link>
                <Link to='/history' className={style.link}>History</Link>
                <Link to='/about' className={style.link}>About</Link>
                <Link to='/review' className={style.link}>Review</Link>
            </nav>
        </div>
    )
}