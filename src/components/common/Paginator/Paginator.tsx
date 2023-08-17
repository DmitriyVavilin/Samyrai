import React, {useState} from 'react';
import style from './Paginator.module.css'
import cn from "classnames";

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalItemsCount,
                                                            pageSize,
                                                            onPageChanged,
                                                            currentPage,
                                                            portionSize
                                                        }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
                <button className={style.btnLeft} onClick={() => setPortionNumber(portionNumber - 1)}>PREF</button>
            }
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((el, index) => <span key={index}
                                              className={cn({[style.selectedPage]: currentPage === el}, style.pageNumber)}
                                              onClick={(e) => onPageChanged(el)}> {el}</span>)
            }
            {portionCount > portionNumber &&
                <button className={style.btnRight} onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
            }
        </div>
    );
};

