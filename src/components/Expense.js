import React from "react";
const Expense = ({item}) => {
  return (
    <div className="flex justify-around items-center mb-3">
      <div className="w-6/12">
        <span className="text-lg text-blue-800 w-full">{item.nameExpense}</span>
      </div>
      <div className="bg-blue-200 rounded rounded-full p-2 text-indigo-800 w-20 ">
        <p className="text-center">Q {item.quantityExpense}</p>
      </div>
    </div>
  );
};

export default Expense;
