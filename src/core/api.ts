
const baseUrl = 'https://quote-garden.onrender.com/api/v3/quotes';
/* Documentation: https://pprathameshmore.github.io/QuoteGarden/ */

export default {
    getQuote:async (quoteNumber = 1)=>{
        try{
            let options = {
                method: 'GET',
            };

            let response = await fetch(`${baseUrl}?limit=1&page=${quoteNumber}`, options);
            
            if (!response.ok) {
                throw new Error('Failed to get quote');
            }
            
            const text = await response.text();
            const objResponse = JSON.parse(text);

            return objResponse;
        }
        catch(error){
            console.error('Error:', error);
        }
    },
}