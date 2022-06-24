import React from "react";
import { useState } from "react";
import classes from "./AddMealItem.module.css";
import AddMealForm from "../Meals/MealItem/AddMealForm";

const AddMealItem = () => {
    const [showAddMealItem,setShowAddMealItem]= useState(false)

    const addMealHandler = ()=>{
        setShowAddMealItem((sta)=> !sta)
    }
    const  CloseHandler = ()=> {
        setShowAddMealItem(false)
    }       
  
  return (
    <React.Fragment>
        {showAddMealItem && <AddMealForm onClose = {CloseHandler}/>}
      <div className={classes.addmealitem}>
        <button className={classes.button} onClick = {addMealHandler}>
          <span>Add MealItem</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default AddMealItem