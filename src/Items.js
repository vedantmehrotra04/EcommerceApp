import { React, useEffect, useState } from 'react';
import "./Items.css";
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate, useLocation} from 'react-router-dom';
import icon from "./icons8-add-bookmark-50.png";
const Items = () => {
    const [items, setItems] = useState([]);
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(counter);
    const navigate = useNavigate();
    const location = useLocation();
    // const fetchItem =() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>{console.log(json)
    //          setItems(json); })
    // }

    useEffect(() =>{
        //fetchItem();
        fetch("https://magic-aliexpress1.p.rapidapi.com/api/store/2227187/seller/%7BsellerID%7D/products?page=1", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
                "x-rapidapi-key": "8b072a35f9mshb913ed289d104e9p13ce58jsnee2dd85a131e"
            }
        }).then(res => res.json())
        .then(response => {
            console.log(response);
            setItems(response.docs)
        })
        .catch(err => {
            console.error(err);
        });

//         fetch("https://magic-aliexpress1.p.rapidapi.com/api/products/searchByImage?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Faplus-media%2Fsota%2Fa990ef66-2d9f-4c64-8ce0-e5ed0e628f43._SR300%2C300_.jpg", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
// 		"x-rapidapi-key": "8b072a35f9mshb913ed289d104e9p13ce58jsnee2dd85a131e"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
        
    },[]);
    
    const handleAdd =(item) => {
        item.quantity = 1;
        dispatch({type: "add", payload: item});
    }
    console.log(location);
    return (<>{console.log(items)}
       <h2>All Results</h2>

       <button>Fliter</button>
        <div className='card'>
        {items && items.map(i => {
            return ( <div className='product'>
                <img src={icon} className='icon' onClick={()=>dispatch({type :"addbookmark",payload:i})}/>
                <img src={i.imgUrl}/>
                <h4>{i.price}</h4>
                
                <h3 onClick={() => navigate(`/${i.product_id}`)}>{i.name}</h3>
                <h3 onClick={() => dispatch({type: "delete", payload : i})}>Delete</h3>
                <button onClick={() => handleAdd(i)} className='addcart'>Add To Cart</button>
                
            </div>

            )
        })}
        </div>
        </>
    )
}

export default Items;