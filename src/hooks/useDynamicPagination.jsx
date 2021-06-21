import React, {useCallback, useEffect, useState} from "react";


const useDynamicPagination = (getFunction, totalCount, startPage = 1, limit = 10) => {
    const [isFetching, setIsFetching] = useState(false);
    const [currentPage, setCurrentPage] = useState(startPage);
    const [pagesCount, setPagesCount] = useState(1000);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            await getFunction(currentPage, limit);
            setIsFetching(false);
            setPagesCount(Math.ceil(totalCount / limit));
        }
        fetchData();
    }, [currentPage, limit, setIsFetching, setPagesCount])

    useEffect(() => {
        const scrollHandler = (e) => {
            const scrollPosition = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
            if (scrollPosition < 100 && currentPage < pagesCount) {
                setCurrentPage(p => p + 1);
            }
        }

        document.addEventListener('scroll', scrollHandler);

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, []);

    return {isFetching};
}

export default useDynamicPagination;