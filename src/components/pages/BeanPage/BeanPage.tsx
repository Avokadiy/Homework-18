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
                    <img src={data.imageUrl} alt="Bean image" />
                    <div className={style.beanInfo}>
                        <h1>{data.flavorName}</h1>
                        <h2>{data.description}</h2>
                        <p>Ingredients: {data.ingredients.map((item) => item + ', ')}</p>
                        <p>{data.glutenFree ? 'No Gluten' : 'With Gluten'}</p>
                        <p>{data.sugarFree ? 'No Sugar' : 'With Sugar'}</p>
                    </div>
                </div>
            )}

            {isError && <Error/>}
        </>
    )
}