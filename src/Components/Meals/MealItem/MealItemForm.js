import React ,{useRef,useState}from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"


const MealItemForm = (props)=>{
    const amountInputRef = useRef();
    const [amountIsValid ,setAmountIsvalid]= useState(true);

    const submitHandler =async (event)=>{
        event.preventDefault();
        
        const enterdAmount = amountInputRef.current.value;
        const enterdAmountNumber = + enterdAmount
        if(enterdAmount.length === 0 || enterdAmountNumber < 1 || enterdAmountNumber > 5){
            setAmountIsvalid(false)
            return
        }
        props.onAddToCart(enterdAmountNumber)
        
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
         label = "Amount" 
         ref = {amountInputRef}
         input = {{
            id : "amount",
            type : "number",
            min : "1",
            max : "5",
            defaultValue : "1",
            step : "1"
        }}/>
        <button>+ Add</button>
        { !amountIsValid &&  <p>please enter a valid amount (1-5)</p>}
    </form>
}

export default MealItemForm