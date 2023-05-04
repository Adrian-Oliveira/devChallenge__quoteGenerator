import { } from 'react';

import './quoteComponent.scss';


interface QuoteInterface {
    quoteText:string
}

const Quote = ({quoteText}:QuoteInterface)=> {
   
    return(
        <p className='quoteComponent'>{`"${quoteText}"`}</p>
    );
}


export {Quote}