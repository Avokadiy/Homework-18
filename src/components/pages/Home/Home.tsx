import style from './home.module.css'
import JellyBellyMainPageLogo from '../../../assets/gif/JellyBellyMainPageLogo.gif'

export default function Home() {
    return (
        <div className={style.container}>
            <img src={JellyBellyMainPageLogo} alt="Jelly Belly Logo" />
            <div>
                <h1>Welcome to the World of Jelly Belly:</h1>
                <h2>A rainbow of Flavors Awaits</h2>
            </div>
        </div>
    )
}