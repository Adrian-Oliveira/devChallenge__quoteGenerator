import { useEffect } from 'react';
import { fetchAuthorQuotes } from '../../redux/quotes/quotesSlice';
import './authorPage.scss';

import { useAppSelector, useAppDispatch } from '../../core/hooks';
import { useNavigate } from 'react-router-dom';

import Quote from '../../components/Quote';

const Author = ()=> {

    const author = useAppSelector((state)=>state.quotes.author);
    const quotesList = useAppSelector((state)=>state.quotes.quoteList);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(fetchAuthorQuotes())
    },[])

    return(
        <div className='authorPage'>
            <button
                className='authorPage__getRandomQuoteButton' 
                onClick={()=>{navigate('/')}}>
                    random
                    <i className="material-symbols-outlined">
                        autorenew
                    </i>
            </button>


            <section  className='authorPage__content'>
                <h1 className='authorPage__author'>{author}</h1>
                
                {quotesList.map((quote)=>{

                return(<Quote {... quote}/>);
                })}
                
            </section>
        </div>
    );
}


export {Author}