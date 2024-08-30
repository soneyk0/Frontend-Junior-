import React, {useEffect, useState} from 'react';
import Card from "../Card/Card";
import s from './CardsList.module.css'
import Paginator from "../../Paginator/Paginator";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../services/redux/store";
import {fetchCardsData} from "../../../services/redux/reducers/cardsSlice";
import {CardType} from "../../../types/Cards";


const CardsList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {data} = useSelector((state: RootState) => state.cards)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const [paginatedCards, setPaginatedCards] = useState<CardType[]>([])
    const [totalPages, setTotalPages] = useState(0)


    useEffect(() => {
        dispatch(fetchCardsData());
    }, []);

    useEffect(() => {
        setPaginatedCards(data
            ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            : [])
        setTotalPages(data ? Math.ceil(data.length / itemsPerPage) : 1)
    }, [data, currentPage]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <div className={s.containerOfCards}>
                <div className={s.listOfCards}>
                    {paginatedCards.map(card => (
                        <Card key={card.id} card={card}/>))}
                </div>
            </div>

            <div className={s.paginator}>
                {data &&
                    <Paginator currentPage={currentPage}
                               totalPages={totalPages}
                               onPageChange={handlePageChange}/>}
            </div>
        </div>
    );
};

export default CardsList;