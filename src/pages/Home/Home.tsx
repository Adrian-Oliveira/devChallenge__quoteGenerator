import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './homePage.scss';

import Quote from '../../components/Quote';

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
            <Quote {... singleQuote}/>
    
            <h1><Link to="/author">{author}</Link></h1>
        </div>
    );
}


export {Home}