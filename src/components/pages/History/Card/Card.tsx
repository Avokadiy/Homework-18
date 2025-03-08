import { FC } from "react";
import { THistory } from "../../../Types/allTypes";
import style from './card.module.css'
import redArrow from '../../../../assets/images/redArrow.png'

type Props = {
    data: THistory;
}

export const Card:FC<Props> = ({data}) => {
    return(
        <div className={style.container}>
            <div>
                <h1>{data.year}</h1>
                <p>{data.description}</p>
            </div>
            <img src={redArrow} alt="" />
        </div>
    )
}