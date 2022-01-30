import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Item =() => {
    const params = useParams();
    const [item, setItem] = useState("");
    //const match = useMatch();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=>{console.log(json)
                setItem(json);
              })
    },[])

    //console.log(match);
    console.log(params);
    return(<>
        <h1>Item</h1>
        <img src={item.image} />
        <h2>{item.title}</h2>
        </>

    )
    
}

export default  Item;