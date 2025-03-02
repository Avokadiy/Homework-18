import { Outlet } from 'react-router-dom'
import Header from '../Header/header'
import style from './layout.module.css'
import Footer from '../Footer/footer'

export default function Layout() {
    return (
        <div className={style.container}>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}