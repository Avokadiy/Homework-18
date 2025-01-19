import { FC } from 'react';
import style from './card.module.css'
import { TBean } from '../../../Types/allTypes';
import { Link } from 'react-router-dom';

type Props = {
    data: TBean
}

export const Card: FC<Props> = ({data}) => {

    return (
        <Link 
            to = {``}//FIX THIS SHIT
            className={style.container}
            style={{background: data.backgroundColor
            }} 
        >
            <img src={data.imageUrl} alt="Bean image" />
            <h3>{data.flavorName}</h3>
            <p>{data.description}</p>
        </Link>
    )
};