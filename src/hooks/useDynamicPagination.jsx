import React, {useCallback, useEffect, useState} from "react";


// Временный вариант реализации, пока не разберусь с ошибкой основного
const useDynamicPagination = (requestFunction, totalCount, startPage = 1, limit = 10) => {
    const [isFetching, setIsFetching] = useState(true);
    const [currentPage, setCurrentPage] = useState(startPage);
    const [pagesCount, setPagesCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            if (isFetching) {
                await requestFunction(currentPage, limit);
                setCurrentPage(p => p + 1);
                setPagesCount(Math.ceil(totalCount / limit) || 3);
            }
            setIsFetching(false);
        }
        fetchData();

        // Знаю, что зависимости неправильные
    }, [isFetching])

    const scrollHandler = useCallback((e) => {
        const scrollPosition = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
        if (scrollPosition < 100 && currentPage < pagesCount) {
            setIsFetching(true);
        }
    }, [pagesCount])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, [scrollHandler]);

    return {isFetching};
}

// Почему-то функция scrollHandler запускается 3 раза при достижении низа страницы
// Т.е. данный хук загружает не 1, а 3 страницы сразу. Разбираюсь...
// const useDynamicPagination = (requestFunction, totalCount, startPage = 1, limit = 10) => {
//     const [isFetching, setIsFetching] = useState(true);
//     const [currentPage, setCurrentPage] = useState(startPage);
//     const [pagesCount, setPagesCount] = useState(1000);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             setIsFetching(true);
//             await requestFunction(currentPage, limit);
//             setIsFetching(false);
//             // setPagesCount(Math.ceil(totalCount / limit));
//         }
//         fetchData();
//     }, [currentPage, limit, setIsFetching, setPagesCount])
//
//     useEffect(() => {
//         document.addEventListener('scroll', scrollHandler);
//
//         return () => {
//             document.removeEventListener('scroll', scrollHandler)
//         };
//     }, []);
//
//     const scrollHandler = (e) => {
//         const scrollPosition = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
//         if (scrollPosition < 100 && currentPage < pagesCount) {
//             setCurrentPage(p => p + 1);
//         }
//     }
//
//     return {isFetching};
// }

export default useDynamicPagination;