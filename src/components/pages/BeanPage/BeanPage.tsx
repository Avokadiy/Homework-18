import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { beanSelector } from "../../../redux/bean/beanSelector";
import { useEffect } from "react";
import { bean } from "../../../api/bean";
import Loader from "../../Loader/loader";
import style from './BeanPage.module.css'
import { Error } from "../../Error/error";

export const BeanPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {data, isLoading, isError} = useSelector(beanSelector);

    useEffect(() => {
        if (!id) return;

        dispatch(bean(id));
    }, [id]);

    return (
        <>
            {isLoading && <Loader/>}

            {data && (
                <div className={style.container} style={{background: data.backgroundColor}}>
                    <h1 style={{color: data.backgroundColor}}>{data.flavorName}</h1>
                    <h2 style={{color: data.backgroundColor}}>{data.description}</h2>
                    <img src={data.imageUrl} alt="Bean image" />
                    <p className={style.ingredients} style={{color: data.backgroundColor}}>Ingredients: {data.ingredients.map((item) => item + ', ')}</p>
                    <div className={style.extra}>
                        <p style={{color: data.backgroundColor}}>{data.glutenFree ? 'No Gluten' : 'With Gluten'}</p>
                        <p style={{color: data.backgroundColor}}>{data.sugarFree ? 'No Sugar' : 'With Sugar'}</p>
                        <p style={{color: data.backgroundColor}}>{data.kosher ? 'Kosher' : 'Not Kosher'}</p>
                        <p style={{color: data.backgroundColor}}>{data.seasonal ? 'Seasonal' : 'Not Seasonal'}</p>
                    </div>
                </div>
            )}

            {isError && <Error/>}
        </>
    )
}