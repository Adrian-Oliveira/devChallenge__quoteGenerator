import { useEffect } from 'react';

import './homePage.scss';

import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { fetchSingleQuote } from '../../redux/quotes/quotesSlice';

const Home = ()=> {

    const dispatch = useAppDispatch();
    const author = useAppSelector((store)=>store.quotes.author)
    const singleQuote = useAppSelector((store)=>store.quotes.singleQuote)
    
    useEffect(()=>{
        dispatch(fetchSingleQuote());
    },[])
   
    return(
        <div className='homePage'>

            <button onClick={()=>{dispatch(fetchSingleQuote())}}>Random</button>
            <h1>{author}</h1>
            <div>
                {JSON.stringify(singleQuote)}
            </div>
        </div>
    );
}


export {Home}