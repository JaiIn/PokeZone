import { useEffect, useState } from 'react';

const useInfiniteScroll = (fetchMore:()=>void) => {

    const [isFetch, setIsFetch] = useState<boolean>(false);

    useEffect(()=>{
        const handleScroll = () => {
            if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1 && !isFetch){
                setIsFetch(true);
                // console.log('스크롤이 닿았습니다');
            };
        };
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll);
    }, [isFetch]);

    useEffect(()=>{
        if(!isFetch) return;

        const fetchData = async() => {
            await fetchMore();
            setIsFetch(false);
        }
        fetchData();
    },[isFetch, fetchMore]);
};

export default useInfiniteScroll;