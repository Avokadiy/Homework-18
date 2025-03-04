import { FC } from "react"
import { TFact } from "../../../Types/allTypes"
import style from './card.module.css'

 type Props = {
    data: TFact,
 }
 
 export const Card:FC<Props> = ({data}) => {
    return (
        <div className={style.container}>
            <h1>{data.factId}. {data.title}</h1>
            <p>{data.description}</p>
        </div>

    )
 }