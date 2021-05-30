import React, { useState, useEffect } from 'react'
import './QuotesApp.css'
import QuoteDisplay from './components/QuoteDisplay/QuoteDisplay';
import api from './api/quotesApi';
import { FaRandom } from 'react-icons/fa';
// import { CSSTransition, SwitchTransition } from 'react-transition-group';
function QuotesApp() {
    const [currentQuote, setCurrentQuote] = useState({})

    const fetchAnotherQuote = () => {
        setCurrentQuote(api.getQuote())
    }

    useEffect(() => {
        fetchAnotherQuote()
    }, [])
    return (
        <div className="app-container quote-app">
            <div className="quote-scene">
                {
                    currentQuote ?
                        <QuoteDisplay quoteObj={currentQuote} />
                        :
                        null
                }
                <div className="icon-bar">
                    <FaRandom onClick={() => fetchAnotherQuote()} />
                </div>
            </div>
        </div>
    )
}

export default QuotesApp;