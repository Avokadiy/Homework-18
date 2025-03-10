import { useState } from "react"
import { BurgerMenu } from '../burgerMenu/burgerMenu'
import { Link } from "react-router-dom";
import style from './mobileMenu.module.css'

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className={style.container}>
            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && (
                <div className={style.wrapper}>
                    <nav>
                        <Link to='/' className={style.link} onClick={handleLinkClick}>Home</Link>
                        <Link to='/beans' className={style.link} onClick={handleLinkClick}>Beans</Link>
                        <Link to='/facts' className={style.link} onClick={handleLinkClick}>Facts</Link>
                        <Link to='/combinations' className={style.link} onClick={handleLinkClick}>Combinations</Link>
                        <Link to='/history' className={style.link} onClick={handleLinkClick}>History</Link>
                    </nav>
                </div>
            )}
        </div>
    )
}