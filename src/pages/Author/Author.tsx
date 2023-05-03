import { useEffect } from 'react';
import { fetchAuthorQuotes } from '../../redux/quotes/quotesSlice';
import './authorPage.scss';
import { useAppSelector, useAppDispatch } from '../../core/hooks';


const Author = ()=> {

    const author = useAppSelector((state)=>state.quotes.author);
    const quotesList = useAppSelector((state)=>state.quotes.quoteList);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchAuthorQuotes())
    },[])

    return(
        <div className='authorPage'>
            <section>
                <h1>Author:{author}</h1>
                <ul>
                  {quotesList.map((quote)=>{

                    return(<li>{JSON.stringify(quote)}</li>);
                  })}
                </ul>
            </section>
        </div>
    );
}


export {Author}