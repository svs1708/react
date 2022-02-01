import React, { useEffect, useState } from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import { useContext } from 'react';
import CartContext from "../../store/cart-context";



const HeaderCartButton = (props)=>{
 const ctx = useContext(CartContext)
 const numberOfItems = ctx.items.reduce((curNumber,item)=>{ return curNumber + item.amount},0)
 const [buttonIsHighlighted , setButtonIsHightlighted] = useState(false)

 const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ""}`
 useEffect(()=>{
     if(ctx.items.length === 0){
         return
     }
     setButtonIsHightlighted(true)
     const timer = setTimeout(()=>{
         setButtonIsHightlighted(false)
     },300)
     return ()=>{
         clearTimeout(timer)
     }
 },[ctx.items])
    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton 