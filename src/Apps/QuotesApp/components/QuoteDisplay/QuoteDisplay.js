import React from 'react';


function QuoteDisplay({ quoteObj: { quote: content, author } }) {
    return (
        <figure className="quote-box">
            <blockquote>
                <p>"{content}"</p>
            </blockquote>
            <figcaption>—{author}</figcaption>

        </figure>
    )
}

export default QuoteDisplay