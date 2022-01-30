import React from "react";
import { useSelector } from "react-redux";

const Bookmark = () => {
    const {bookmark} = useSelector(state=>state.bookmark);

    return ( 
        <>{console.log(bookmark)}
        <h2>Bookmarks</h2>
        {bookmark ? (
            <>{bookmark.map(item => {
                return(<>
                    <img src={item.imgUrl} />
                    <h2>{item.price}</h2>
                    <p>{item.name}</p>
                    </>
                )
            })}
            </>
        ) :
        (<h3>No Bookmarks present</h3>)}
        </>
    )
}



export default Bookmark;