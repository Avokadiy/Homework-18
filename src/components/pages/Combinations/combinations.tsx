import { useEffect } from "react"
import { combinationsSelector } from "../../../redux/combinations/combinationsSelector"
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../redux/store";
import { resetCombinations } from "../../../redux/combinations/combinationsSlice";
import Loader from "../../Loader/loader";
import { Error } from '../../Error/error'
import { Card } from './Card/card'
import { сombinations } from '../../../api/combinations'
import style from './combinations.module.css'


export default function Combinations() {
    const {data, isError, isLoading} = useSelector(combinationsSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(сombinations())
    }, [dispatch]);

    useEffect(() => {
        dispatch(resetCombinations())
    }, [dispatch])

    return (
        <div className={style.container}>
            <h1 className={style.title}>Combinations</h1>
            {isLoading && data.length === 0 ? (
                <Loader />
            ) : (
                <div className={style.scroll}>
                    {data.map((item) => (
                        <Card key={item.combinationId} data={item} />
                    ))}
                </div>
            )}

            {isError && <Error />}
        </div>
    )
}