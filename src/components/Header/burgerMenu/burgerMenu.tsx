import { Dispatch, FC } from "react"
import style from './burgerMenu.module.css'

type Props = {
    isOpen: boolean;
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu:FC<Props> = ({isOpen, setIsOpen}) => {
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div onClick={handleClick} className={style.container}>
            <input type="checkbox" checked={isOpen} id="" />
            <div className={style.hamburger_lines}>
                <span className={`${style.line} ${style.line1}`}></span>
                <span className={`${style.line} ${style.line2}`}></span>
                <span className={`${style.line} ${style.line3}`}></span>
            </div>
        </div>
    )
}