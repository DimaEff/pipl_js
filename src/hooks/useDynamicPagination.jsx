import React, {useEffect, useState} from "react";


const useDynamicPagination = (requestFunction, totalCount, startPage = 1, limit = 10) => {
    const [isFetching, setIsFetching] = useState(true);
    const [currentPage, setCurrentPage] = useState(startPage);
    const [pagesCount, setPagesCount] = useState(totalCount / limit || 2);

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            await requestFunction(currentPage, limit);
            setIsFetching(false);
        }
        fetchData();
    }, [currentPage, limit, setIsFetching, requestFunction])

    useEffect(() => {
        const scrollHandler = (e) => {
            const scrollPosition = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
            if (scrollPosition < 100 && currentPage < pagesCount) {
                if (!isFetching) {
                    setCurrentPage(p => p + 1);
                    setPagesCount(Math.ceil(totalCount / limit));
                }
            }
        }
        document.addEventListener('scroll', scrollHandler);

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, [currentPage, limit, pagesCount, totalCount, isFetching]);

    return {isFetching};
}

export default useDynamicPagination;