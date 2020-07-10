import React from 'react';
import Expense from './Expense';
import ControlBudget from './ControlBudget';

const ListExpense = ({expenses,budget,remaining}) => {
    return ( 
        <div className="">
            <h3 className="font-semibold text-2xl text-indigo-800 text-center mb-10">List Expense</h3>
            {expenses.map((item) => 
                <Expense item={item} key={item.id}/>
            )}
            {/* budget={budget} remaining={remaining} */}
            <ControlBudget budget={budget} remaining={remaining}/>
        </div>
     );
}
 
export default ListExpense;