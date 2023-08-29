import React, { useState } from "react";
import styles from "./Calculate.module.css";
import Modal from "./Modal";

const Calculate = (props) => {
  const dataDummie = {
    savings: "",
    yearly_contribution: "",
    expected_return: "",
    duration: "",
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [dataInput, setDataInput] = useState(dataDummie);
  const [numero, setNumero] = useState(0);



  const calculateHandler = (event) => {
    event.preventDefault();

    const anyEmpty = Object.entries(dataInput).some(
      ([key, value]) => value === ""
    );

    if (!anyEmpty) {
      const yearlyData = []; // per-year results

      let currentSavings = dataInput.savings; // feel free to change the shape of this input object!
      const yearlyContribution = dataInput.yearly_contribution; // as mentioned: feel free to change the shape...
      const expectedReturn = dataInput.expected_return / 100;
      const duration = dataInput.duration;

      // The below code calculates yearly results (total savings, interest etc)
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }

      props.onSubmitCalculate(yearlyData, dataInput.savings);

      setDataInput(dataDummie);
    } else {
      setIsOpenModal(true);
    }
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    //
  };

  const sumarHandler = () =>{
    setNumero((prevNumero) => prevNumero + 1);
  }

  const restarHandler = () =>{
    setNumero((prevNumero) => prevNumero - 1);
  }

  const resetHandler = () =>{
    setDataInput(dataDummie);
  }

  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  const inputHandler = (cases, value) => {
    let newData = {};
    switch (cases) {
      case "current-savings":
        newData = Object.assign({}, dataInput, {
          savings: parseInt(value),
        });
        setDataInput(newData);
        break;

      case "yearly-contribution":
        newData = Object.assign({}, dataInput, {
          yearly_contribution: parseInt(value),
        });
        setDataInput(newData);
        break;
      case "expected-return":
        newData = Object.assign({}, dataInput, {
          expected_return: parseInt(value),
        });
        setDataInput(newData);
        break;
      case "duration":
        newData = Object.assign({}, dataInput, {
          duration: parseInt(value),
        });
        setDataInput(newData);
        break;
      default:
        break;
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        calculateHandler(event);
      }}
    >
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={dataInput.savings}
            onChange={(event) => {
              inputHandler(event.target.id, event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            value={dataInput.yearly_contribution}
            id="yearly-contribution"
            onChange={(event) => {
              inputHandler(event.target.id, event.target.value);
            }}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={dataInput.expected_return}
            type="number"
            id="expected-return"
            onChange={(event) => {
              inputHandler(event.target.id, event.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            value={dataInput.duration}
            id="duration"
            onChange={(event) => {
              inputHandler(event.target.id, event.target.value);
            }}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className="buttonAlt" onClick={resetHandler}> 
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
      {/* <Modal
        activeModal={isOpenModal}
        onModalClicked={closeModalHandler}
      ></Modal> */}
      <button onClick={sumarHandler}>sumar</button>
      <button onClick={restarHandler}>restar</button>
      <h2>{numero}</h2>
    </form>
  );
};

export default Calculate;
