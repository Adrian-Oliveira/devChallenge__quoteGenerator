import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './homePage.scss';

import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { fetchSingleQuote } from '../../redux/quotes/quotesSlice';
import { useNavigate } from 'react-router-dom';

const Home = ()=> {

    const dispatch = useAppDispatch();
    const author = useAppSelector((store)=>store.quotes.author)
    const singleQuote = useAppSelector((store)=>store.quotes.singleQuote)

    const navegate = useNavigate();
    
    useEffect(()=>{
        dispatch(fetchSingleQuote());
    },[])
   
    return(
        <div className='homePage'>

            <button onClick={()=>{dispatch(fetchSingleQuote())}}>Random</button>
            <h1><Link to="/author">{author}</Link></h1>
            <div>
                {JSON.stringify(singleQuote)}
            </div>
    
            </div>
    );
}


export {Home}