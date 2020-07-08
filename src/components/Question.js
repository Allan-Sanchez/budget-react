import React, { Fragment,useState } from "react";
import PictureBudget from '../revenue_.svg';
import Error from "./Error";

const Question = ({setBudget,setRemaining,setShowQuestion}) => {

const [quantity,setQuantity] = useState(0);
const [error,setError] = useState(false);

const setDebt = (e) => {
    setQuantity(parseInt(e.target.value),10);
};

const addDebt = (e) => {
    e.preventDefault();

    //validate
    if (quantity < 1 ||isNaN(quantity)) {
        setError(true);
        return;
    }

    setError(false);
    setBudget(quantity);
    setRemaining(quantity);
    setShowQuestion(false);
    //
};


  return (
      <Fragment> 
          {error ? <Error message="The budget is wrong"/> : null}
      

        <div className="w-full flex justify-center">
            <img className="w-48 p-5" src={PictureBudget} alt="image_budget"/>
        </div>
        

      <div>
        <form onSubmit={addDebt} className="pb-10">
          <div className="md:flex justify-center">
            <div className="md:w-2/3 mx-8 md:mx-0 md:pl-10">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4    text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 placeholder-blue-600"
                id="inline-full-name"
                type="number"
                autoFocus
                onChange={setDebt}
                placeholder="Type your budget"
              />
            </div>
            <div className="md:pl-2 mx-8 pt-2 md:pt-0 md:mx-0">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-32">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Question;
