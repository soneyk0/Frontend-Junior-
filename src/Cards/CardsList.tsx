import React, {useState} from 'react';
import {useGetPostsQuery} from "../api/api";
import Card from "./Card";
import s from './CardsList.module.css'
import Paginator from "../Paginator/Paginator";


const CardsList = () => {
    const {data: cards} = useGetPostsQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const paginatedCards = cards
        ? cards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        : [];

    const totalPages = cards ? Math.ceil(cards.length / itemsPerPage) : 1;

    return (
        <div>
            <div className={s.containerOfCards}>
                <div className={s.listOfCards}>
                {paginatedCards.map(card => (<Card key={card.id} id={card.id} title={card.title} body={card.body}/>))}
            </div>
            </div>

            <div className={s.paginator}>
                {cards &&
                    <Paginator currentPage={currentPage}
                               totalPages={totalPages}
                               onPageChange={handlePageChange}/>}
            </div>
        </div>
    );
};

export default CardsList;