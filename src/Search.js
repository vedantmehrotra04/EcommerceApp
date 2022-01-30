import React, {useState, useEffect, useCallback} from 'react';
import debounce from "lodash.debounce";
import  "./search.css";
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const mic = new SpeechRecognition();
    mic.continuous = true;
    mic.interimResults = true;
    mic.lang = "en-US";
const Search =() => {
    const [listening, setListening] = useState(false);
    const [term, setTerm] = useState("");
    const [data1,setData1] = useState([]);
    const fetchList =(value) => {
        fetch(`https://magic-aliexpress1.p.rapidapi.com/api/products/search?name=${value}&minSalePrice=5&shipToCountry=FR&sort=NEWEST_DESC&page=1&shipFromCountry=CN&fastDelivery=true&getShopInformation=false`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
                "x-rapidapi-key": "8b072a35f9mshb913ed289d104e9p13ce58jsnee2dd85a131e"
            }})
            .then(res=> res.json())
            .then(response => {
                console.log(response);
                setData1(response.docs);
            })
            .catch(err => {
                console.error(err);
            });
    }

    let debounceFetch = useCallback(debounce((value)=>fetchList(value),500),[])
    const handleSpeech =() => {
        if(listening){
           
            mic.stop();
        }
        else {
            mic.start();
           
        }
        mic.onresult = (event) => {
            console.log(event.results[0][0].transcript,"check");
            let transcript = event.results[0][0].transcript;
           setTerm(transcript);
           debounceFetch(transcript);
        }
       mic.onstart = () => {
           console.log("starting")
       }
        setListening(pre => !pre);
    }
   

    return (<>{console.log(data1,"data")}
    <input value={term} onChange={(e)=>{setTerm(e.target.value); debounceFetch(e.target.value);}}/>
    <button onClick={handleSpeech}>Start/stop</button>
    <div className='card'>
    {data1?.map(item => {
        return(
            <div className='item'>
            <img src={item.product_main_image_url} />
            <h2>{item.product_title}</h2>
            <h2>{item.app_sale_price}</h2>
            </div>
        )
    })}
    </div>
    </>)
}


export default Search;