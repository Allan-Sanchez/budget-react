import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from './components/Form';
import ListExpense from './components/ListExpense';

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion,setShowQuestion] = useState(true);
  const [expenses,setExpenses] = useState([]);
  const [expense,setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  useEffect(() => {
    if (createExpense) {
      setExpenses([
        ...expenses,
        expense
      ]);


      const budgetRemaining = remaining - expense.quantityExpense;
      setRemaining(budgetRemaining);

      setCreateExpense(false);
    }
    
  }, [expense,createExpense,remaining,expenses])

  

  return (
    <div className="App w-full h-full bg-indigo-800">
      <h1 className="text-center text-gray-400 text-5xl py-10">Budget</h1>

      <div className="w-2/3 mx-auto h-auto bg-white rounded card-main">
        {showQuestion ? (
          <Question 
          setBudget={setBudget} 
          setRemaining={setRemaining}
          setShowQuestion={setShowQuestion}
          />
        ) : (
          <div className="grid md:grid-cols-2 gap-2 p-10">
          <Form setExpense={setExpense} setCreateExpense={setCreateExpense}/>
          <ListExpense expenses={expenses} budget={budget} remaining={remaining}/>
        </div>
        ) }
        
        
      </div>
    </div>
  );
}

export default App;
