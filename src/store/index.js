import {createStore, compose, combineReducers} from "redux";
const initialstate ={
    total : 0,
    list : [],
    
};
const book ={
    bookmark: [],
}

const productReducer = (state = initialstate, action) => {
    switch(action.type){
    case "add" : 

    let arr = state.list;
    if(arr.find(item => item.product_id == action.payload.product_id)){
        let item = arr.find(item => item.product_id == action.payload.product_id)
        item.quantity++;
        let index = arr.indexOf(item => item.product_id == action.payload.product_id);
        if(index!=-1){
            arr[index] = item;
        }
    }
    else {
    arr.push(action.payload);
    }
      return Object.assign({}, state, {
          total : state.total + 1,
          list : arr,

      } );
      
    
      case "delete" :
         let arr1 = state.list;
          if(arr1.find(item => item.product_id == action.payload.product_id)){
              let item1 = arr1.find(item => item.product_id == action.payload.product_id);
              if(item1.quantity >1){
                  let newArr = arr1;
                  newArr.quantity--;
                  return Object.assign({},state,{
                      total: state.total -1,
                      list : newArr
                  });
              }
              else {
                  let newArr = arr1.filter(item => item.product_id != action.payload.product_id);
                  return Object.assign({},state,{
                      total: state.total -1,
                      list: newArr
                  });
              }
          }

    default :
    return state;
}
}
const bookmarkReducer = (state=book,action) =>{
    switch(action.type){
        case 'addbookmark' :
            let arr = state.bookmark;
            if(arr.find(item => item.product_id == action.payload.product_id)){
               
            }
            else {
            arr.push(action.payload);
            }
              return Object.assign({}, state, {
                  bookmark : arr,
        
              } );

              default :
              return state;


    }
}
// const enhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
const root = combineReducers({
    product: productReducer,
    bookmark: bookmarkReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(root,initialstate,composeEnhancers());