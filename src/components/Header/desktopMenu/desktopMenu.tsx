import { Link } from "react-router-dom"
import style from './desktopMenu.module.css'

export default function DesktopMenu () {
    return (
        <nav>
            <Link to='/' className={style.link}>Home</Link>
            <Link to='/beans' className={style.link}>Beans</Link>
            <Link to='/facts' className={style.link}>Facts</Link>
            <Link to='/combinations' className={style.link}>Combinations</Link>
            <Link to='/history' className={style.link}>History</Link>
        </nav>
    )
}
