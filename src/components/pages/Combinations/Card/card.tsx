import { FC } from "react"
import { TCombinations } from "../../../Types/allTypes"
import style from './card.module.css'

type Props = {
    data: TCombinations,
}

export const Card:FC<Props> = ({data}) => {
    return (
        <div className={style.container}>
            <h1>{data.combinationId}. {data.name}</h1>
            <p>{data.tag}</p>
        </div>
    )
}