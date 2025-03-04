import { useSelector } from 'react-redux'
import style from './facts.module.css'
import { FactsSelector } from '../../../redux/facts/factsSelector'
import { useAppDispatch } from '../../../redux/store';
import { facts } from '../../../api/facts';
import { useEffect, useState } from 'react';
import Loader from '../../Loader/loader';
import { Error } from '../../Error/error';
import { Card } from './card/card'
import { resetFacts } from '../../../redux/facts/factsSlice';

export default function Facts() {
    const {data, isError, isLoading} = useSelector(FactsSelector);
    const dispatch = useAppDispatch();
    const [page] = useState(1);
    
    useEffect(() => {
        dispatch(facts(page))
    }, [page])

    useEffect(() => {
        dispatch(resetFacts())
    }, [dispatch])

    return (
        <div className={style.container}>
            <h1>Explore All Facts</h1>
            {isLoading && data.length === 0 ? (
                <Loader />
            ) : (
            <div className={style.scroll}>
                {data.map((item) => (
                    <Card key={item.factId} data={item} />
                ))}
            </div>
            )};

            {isError && <Error />}
        </div>
    );
}