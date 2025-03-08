import style from './history.module.css'
import Loader from '../../Loader/loader'
import { useSelector } from 'react-redux'
import { historySelector } from '../../../redux/history/historySelector';
import { useAppDispatch } from '../../../redux/store';
import { useEffect } from 'react';
import { history } from '../../../api/history';
import { resetHistory } from '../../../redux/history/historySlice';
import { Error } from '../../Error/error';
import { Card } from './Card/Card'

export default function History() {
    const {data, isError, isLoading} = useSelector(historySelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(history())
    }, [dispatch])

    useEffect(() => {
        dispatch(resetHistory())
    }, [dispatch])

    return (
        <div className={style.container}>
            <h1>History</h1>
            {isLoading && data.length === 0 ? (
                <Loader />
            ) : (
                <div className={style.scroll}>
                    {data.map((item) => (
                        <Card key={item.mileStoneId} data={item} />
                    ))}
                    <p className={style.lastCard}>To Be Continued</p>
                </div>
            )};

            {isError && <Error />}
        </div>
    )
}