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

            <button
                className='homePage__getRandomQuoteButton' 
                onClick={()=>{dispatch(fetchSingleQuote())}}>
                    random
                    <i className="material-symbols-outlined">
                        autorenew
                    </i>
            </button>
            <Quote {... singleQuote}/>
    
            <Link to="/author" className='homePage__goToAuthor'>
                <div>
                    <h1>{author}</h1>
                    <h2>{singleQuote.quoteGenre}</h2>
                </div>
                
                <i className="material-symbols-outlined">
                    arrow_forward
                </i>
            </Link>
        </div>
    );
}


export {Home}