import jellyBeanLogo from "../../assets/images/jellyBeanLogo.png"
import { useIsMobile } from "../../hooks/useMobile"
import DesktopMenu from "./desktopMenu/desktopMenu"
import style from "./header.module.css"
import { MobileMenu } from "./mobileMenu/mobileMenu"

export default function Header() {
    const isMobile = useIsMobile();

    return (
        <div className={style.container}>
            <div>
                <img src={jellyBeanLogo} alt="Jelly Bean Logo" />
                <p>Jelly Belly</p>
            </div>
            {isMobile ? <MobileMenu /> : <DesktopMenu />}
        </div>
    )
}