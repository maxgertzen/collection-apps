import { default as data } from '../assets/quotes.json';


const api = ((obj) => {
    let { quotes: __quotes } = obj
    const getRandomQuote = () => {
        let randomIndex = Math.floor(Math.random() * __quotes.length);
        return __quotes[randomIndex]
    };

    const getAllQuotes = async () => {
        return __quotes
    }

    return {
        getQuote: getRandomQuote,
        allquotes: getAllQuotes
    }

})(data);

export default api