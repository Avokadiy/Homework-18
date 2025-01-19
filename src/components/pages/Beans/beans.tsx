import { useSelector } from "react-redux";
import { Card } from "./card/card";
import { beansSelector } from "../../../redux/beans/beansSelector";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { allBeans } from "../../../api/beans";
import style from './beans.module.css'
import Loader from "../../Loader/loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { Error } from "../../Error/Error";

export default function Beans() {
    const {data, totalPages, isError, isLoading } = useSelector(beansSelector);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(allBeans());
    }, [page])

    const load = () => {
        setPage(page + 1);
    }

    return (
        <div className={style.container}>
            <h1>Beans list</h1>
            {isLoading && data.length === 0 ? (<Loader/>) : (
                <InfiniteScroll
                next = {load}
                dataLength = {data.length}
                loader = {<Loader/>}
                hasMore = {page < totalPages}
                >
                
                {data.map((item) => (
                    <Card key = {`beans_item_${item.beanId}`} data={item} />
                ))}
                </InfiniteScroll>
            )}

            {isError && <Error/>}
            
        </div>
    )
}