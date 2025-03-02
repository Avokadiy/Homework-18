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
            to = {`/bean/${data.beanId}`}
            className={style.container}
            style={{background: data.backgroundColor}} 
        >
            <h3 style={{color: data.backgroundColor}}>{data.flavorName}</h3>
            <img src={data.imageUrl} alt="Bean image" />
            <p style={{color: data.backgroundColor}}>{data.description}</p>
        </Link>
    )
};