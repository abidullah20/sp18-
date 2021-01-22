import Item1 from '../../images/1_cric.jpeg'
import Item2 from '../../images/bluemax2.jpg'
import Item3 from '../../images/3_cric.jpeg'
import Item4 from '../../images/4_cric.jpeg'
import Item5 from '../../images/5_cric.jpeg'
//Foot ball
import Item6 from '../../images/6_FB.jpeg'
import Item7 from '../../images/7_FB.jpeg'
import Item8 from '../../images/8_FB.jpeg'
import Item9 from '../../images/adizero1.jpg'
import Item10 from '../../images/10_FB.jpeg'
//Basket Ball
import Item11 from '../../images/11_BB.jpeg'
import Item12 from '../../images/12_BB.jpeg'
import Item13 from '../../images/13_BB.jpeg'
import Item14 from '../../images/14_BB.jpeg'
import Item15 from '../../images/nba2.jpg'
//BaseBall
import Item16 from '../../images/16_BSB.jpeg'
import Item17 from '../../images/17_BSB.jpeg'
import Item18 from '../../images/18_BSB.jpeg'
import Item19 from '../../images/19_BSB.jpeg'
import Item20 from '../../images/20_BSB.jpeg'
//Badminton
import Item21 from '../../images/21_BD.jpeg'
import Item22 from '../../images/22_BD.jpeg'
import Item23 from '../../images/23_BD.jpeg'
import Item24 from '../../images/24_BD.jpeg'
import Item25 from '../../images/25_BD.jpeg'
//Tennis
import Item26 from '../../images/26_TN.jpeg'
import Item27 from '../../images/27_TN.jpeg'
import Item28 from '../../images/28_TN.jpeg'
import Item29 from '../../images/29_TN.jpeg'
import Item30 from '../../images/30_TN.jpeg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        //cricket
        {id:1,title:'Sports kit', desc: "CA sports kit with fine fibres for your comfort.", price:6000,img:Item1},
        {id:2,title:'Gary Nicholls', desc: "Blue Max 2 is here at an exciting price.", price:9500,img: Item2},
        {id:3,title:'CA Bat', desc: "CA bat cover drive version export quality.",price:12000,img: Item3},
        {id:4,title:'CA Cricket Bag', desc: "Can hold 3 bats and all other cricket accessories.", price:2600,img:Item4},
        { id: 5, title: 'CA Gloves', desc: "Softest and most preium glovs used by Azhar Ali.", price: 7200, img: Item5 },
        
        //Foot Ball
        {id:6,title:'Nike Football', desc: "Nike football 2012 world cup edition.",price:9000,img: Item6},
        {id:7,title:'Keeping gloves', desc: "Keeping gloves from sialkot as soft as the thick fibres inside.",price:6000,img: Item7},
        {id:8,title:'Real Madrid', desc: "Official Real Madrid shirt for you fans.",price:5000,img: Item8},
        {id:9,title:'Adidas Adizos', desc: "Adizos from the latest and most premiumm shoe collection.",price:8000,img: Item9},
        {id:10,title:'Adidas Shoes', desc: "Adidas brings their shoes with a touch of perfection.",price:4000,img: Item10},
        
        //Basket Ball
        {id:11,title:'USA cap', desc: "Official merchandise for the fans",price:3000,img: Item11},
        {id:12,title:'USA Shorts', desc: "Official basketball attire",price:3000,img: Item12},
        {id:13,title:'Coaching Jacket ', desc: "Soft and comfortable jacket for the coach.",price:4000,img: Item13},
        {id:14,title:'USA shirt', desc: "From the official merchandise store.",price:6000,img: Item14},
        {id:15,title:'Spalding Ball', desc: "Official match ball.",price:9000,img: Item15},
        
        //BaseBall
        {id:16,title:'Gloves', desc: "Smooth and soft gloves for keeping.",price:3000,img: Item16},
        {id:17,title:'Official ball', desc: "Official match ball signed by players.",price:6000,img: Item17},
        {id:18,title:'Shoes', desc: "These shoes come with exceptionally firm grip.",price:9000,img: Item18},
        {id:19,title:'Bag', desc: "Big enough bag to carry all your baseball belongings.",price:7000,img: Item19},
        {id:20,title:'Official bat', desc: "Easton brings official bats used by pro players.",price:12000,img: Item20},
        
        //Badminton
        {id:21,title:'YIANHONG Racket', desc: "Official Racket with premiumm quality.",price:5000,img: Item21},
        {id:22,title:'Badminton Bag', desc: "Badminton bag to carry all badminton accessories and your rackets.",price:4000,img: Item22},
        {id:23,title:'Badinton kit', desc: "Shirt made with soft fabric and spoecially sweat absorbing ability.",price:3000,img: Item23},
        {id:24,title:'Adidas racket', desc: "Rackets from official adidas store.",price:6000,img: Item24},
        {id:25,title:'Quous Racket', desc: "Quous Racket used by many professional players.",price:7000,img: Item25},
        
        //Tennis
        {id:26,title:'Tennis Shirt', desc: "Shirt made with soft fabric and spoecially sweat absorbing ability.",price:4000,img: Item26},
        {id:27,title:'Shoes', desc: "Official shoes for firm grip.",price:6000,img: Item27},
        {id:28,title:'Shoes', desc: "Tennis shoes from the premium collection.",price:7000,img: Item28},
        {id:29,title:'Racket', desc: "Players signed racket at an affordable price.",price:8000,img: Item29},
        {id:30,title:'Racket', desc: "The most premium racket from the ost premium brand.",price:9000,img: Item30}
        
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
