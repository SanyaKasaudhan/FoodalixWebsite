import { useState } from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../Header/utils/constants";
import {useDispatch} from 'react-redux';
import { clearItem, removeItem, addPrice , removeQty, addQty} from "../Header/utils/cartSlice";
import { useEffect } from "react";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const qtyItems=useSelector((store)=>store.cart.qty)
  const totalPrice=useSelector(store=> store.cart.price)
  console.log("qty",qtyItems)
  // const totalPriceOfCart 
  let totalPriceOfCart=(totalPrice.reduce((partialSum, a) => partialSum + a, 0))/100;
  console.log("t",  totalPriceOfCart)
  // console.log(totalPriceOfCart(),"t")
  console.log("totalprice",totalPrice)
  const dispatch=useDispatch();
  const removeItemFromCart = (cart)=>{
    dispatch(removeItem(cart))
  }

  // const removeQtyToCartStore = (item)=>{
  //   dispatch(removeQty(item))
  // }

  const clearCart = ()=>{
    dispatch(clearItem())
  }
  const total = () => {
    let price = 0;
    cartItems.forEach((element) => {
      price += element?.price;
    });
    return price / 100;
  }; 

  return (
    <>
    {console.log("qty",qtyItems)}
    <button onClick={()=>clearCart()} className="button-71 clear-cart">Clear cart</button>
    
      <h1 className="cart_tot">Cart Total</h1>
      {cartItems?.map((cart,index) => {key={index}
        const [qtyEachItem, setQtyEachItem]=useState(cart?.itemScore+1);



        const price =(cart)=>{
          let p =cart?.price / 100;
          let pp=  p*qtyEachItem;
          return pp;
        }
        useEffect(()=>{
          priceToStore(cart.price);
        },[qtyEachItem])
        // const priceCa=cart.price*qtyEachItem/100;
        {console.log("price",cart.price*qtyEachItem/100)}
        const priceToStore = (priceCa)=>{
          dispatch(addPrice(priceCa))
        }

        const addQtyToStore =(qtyEachItem) =>{
          dispatch(addQty(qtyEachItem))
        }

        const removeQtyToStore =(qtyEachItem)=>{
          dispatch(removeQty(qtyEachItem))
        }

        return (
          <>
            <div className="food-items" key={cart.id}>
              <div className="cart-body">
                <div className="cart-item-name">{cart?.name}</div>
                <img
                  className="food-add-img"
                  src={IMG_CDN_URL + cart?.cloudinaryImageId}
                />
              </div>
              <div className="qty">
                <button className="addRemove" onClick={()=>{setQtyEachItem(qtyEachItem+1); addQtyToStore(qtyEachItem)}}>+</button>
                <div className="qty_tab" >{qtyEachItem}</div>
                <button className="addRemove" onClick={()=>{setQtyEachItem(qtyEachItem-1); removeQtyToStore(qtyEachItem); 
                  // removeQtyToCartStore(cart)
                  }}>-</button>
              </div>
              <div className="removeCart">
                <button className="button-42" onClick={() => removeItemFromCart(cart?.qty)}>Remove item</button>
              </div>
              <div className="add-cart">
                <div className="addTocart" >Price {price(cart)} </div>
              </div>
            </div>
          </>
        );
      })}
      <div className="totalPrice">
        <div>Sub Price:</div>
        <div className="total">Rs. {totalPriceOfCart}</div>
      
        </div>
        <div className="totalPrice">
        <div>Tax:</div>
        <div className="total"> ${(total() * 0.1).toFixed(2)}</div>
      
        </div>
        
        <div className="totalPrice">
        <div>Total Price:</div>
        <div className="total">Rs. {total().toFixed(2)}</div>
      
        </div>
    </>
  );
};

export default Cart;
