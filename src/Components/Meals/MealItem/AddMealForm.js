import React from "react";
import Modal from "../../UI/Modal";
import classes from "./AddMealForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const AddMealForm = (props) => {
//   const [isCompleted, setIsCompleted] = useState(false);
  const descriptionRef = useRef();
  const imglinkRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const addMealSubmitHander = (event) => {
    event.preventDefault();

    const enteredDescription = descriptionRef.current.value;
    const enterdImaglink = imglinkRef.current.value;
    const enteredName = nameRef.current.value;
    const enterdPrice = priceRef.current.value;

    const url = "https://food-app-f122c-default-rtdb.firebaseio.com/meals.json";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: enteredDescription,
        imglink: enterdImaglink,
        name: enteredName,
        price: parseInt(enterdPrice),
      }),
    };

    fetch(url, requestOptions)
      .then((response) => {
        console.log("Submitted successfully", response);
      })
      .catch((error) => console.log("Form submit error", error));
      window.location.reload()

    
  };
  const addmealform = (
    <form className={classes.form} onSubmit={addMealSubmitHander}>
      <div className={classes.addmealforminput}>
        <Input
          label="Description:-"
          ref={descriptionRef}
          input={{
            id: "description",
            type: "text",
            size: 38,
          }}
        />
      </div>
      <div className={classes.addmealforminput}>
        <Input
          label="Imglink:-"
          ref={imglinkRef}
          input={{
            id: "imglink",
            type: "text",
            size: 38,
          }}
        />
      </div>
      <div className={classes.addmealforminput}>
        <Input
          label="Name:-"
          ref={nameRef}
          input={{
            id: "name",
            type: "text",
            size: 38,
          }}
        />
      </div>
      <div className={classes.addmealforminput}>
        <Input
          label="Price:-"
          ref={priceRef}
          input={{
            id: "price",
            type: "number",
            size: 38,
          }}
        />
      </div>
      <button type="submit">Submit</button>
      {/* { !amountIsValid &&  <p>please enter a valid amount (1-5)</p>} */}
    </form>
  );
  return (
    <React.Fragment>
      <Modal onClose={props.onClose}>
        <button className={classes.button} onClick={props.onClose}>
          X
        </button>
        {true ? (
          addmealform
        ) : (
          <h3 style={{ textAlign: "center" }}>One Item Add Into Menu</h3>
        )}
      </Modal>
    </React.Fragment>
  );
};
export default AddMealForm;
