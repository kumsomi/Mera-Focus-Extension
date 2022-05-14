import { useEffect, useState } from "react";

function Quote(){
    const [quote, setQuote]=useState("");
    const [author, setAuthor]=useState("");

    // this number will shuffle between the first n quotes and display any one among those n
    const randomQuoteNumber = Math.floor(Math.random()*10);

    const quotesApi="https://type.fit/api/quotes";
    useEffect(()=>{
        (async () => {
            try {
              const res = await fetch(quotesApi);
              const { status, ...data } = await res.json();
              if (!res.ok) throw new Error({status});
              setQuote(data[randomQuoteNumber].text);
              setAuthor(data[randomQuoteNumber].author);
            } catch (error) {
              console.log("Error while getting quotes: ", error);
              setQuote({ text: "Not able to fetch the quotes." });
            } 
          }
        )();
    },[randomQuoteNumber]);

    return (
        <div className="quote-fix">
            <div>Quote:-{quote}</div>
            <div>-{author}</div>
        </div>
    )
}
export {Quote};