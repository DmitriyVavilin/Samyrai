import React from 'react';
import style from "components/Users/Users.module.css";
import s from './Paginator.module.css'

type PaginatorPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({totalCount, pageSize, onPageChanged, currentPage}) => {
    let pageCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {
                pages.map((el, index) => <span key={index}
                                               className={currentPage === el ? s.selected : '' + style.cursor}
                                               onClick={(e) => onPageChanged(el)}> {el}</span>)
            }
        </div>
    );
};

