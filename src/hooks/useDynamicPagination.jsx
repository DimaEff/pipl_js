import React, {useEffect, useState} from "react";


const useDynamicPagination = (requestFunction, totalCount, page = 1, limit = 10) => {
    const [isFetching, setIsFetching] = useState(true);
    const [currentPage, setCurrentPage] = useState(page);
    const [pagesCount, setPagesCount] = useState(totalCount / limit || 2);

    // useEffect(() => {
    //     if (page !== 1) setCurrentPage(page + 1)
    //     // Понимаю, что зависимости неправильные, но так и запланировано
    // }, [])

    // №1
    useEffect(() => {
        const fetchData = async () => {
            // setIsFetching(true);
            await requestFunction(currentPage, limit);
            setIsFetching(false);
        }
        fetchData();
    }, [currentPage, limit, requestFunction])

    // №2
    useEffect(() => {
        const scrollHandler = (e) => {
            const scrollPosition = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
            if (scrollPosition < 100 && currentPage < pagesCount && !isFetching) {
                // Мне не очень хотелось вставлять setIsFetching сюда, но, почему-то,
                // если оставить его перед выполнением запроса(await requestFunc...),
                // то при перезапуске данного эффекта(№2) из-за изменения isFetching перед запросом
                // в эффекте №1 значение isFetching в эффекте №2 и, следовательно,
                // в данной функции, все равно не меняется и остается false, хотя должно быть true(я ведь изменил?!),
                // из-за чего функция вызывает setCurrentPage 2 раза и запрос выполняется 2 раза
                // По порядку: +1, true, +1, true, false, false
                setIsFetching(true);
                setCurrentPage(p => p + 1);
                setPagesCount(Math.ceil(totalCount / limit));
            }
        }

        document.addEventListener('scroll', scrollHandler);

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, [currentPage, isFetching, limit, pagesCount, totalCount]);

    return {isFetching};
}

export default useDynamicPagination;