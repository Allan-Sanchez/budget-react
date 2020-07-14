import React,{useState} from 'react';
import Error from './Error.js';
import Shortid from 'shortid';
import PropTypes from 'prop-types';

const Form = ({setExpense,setCreateExpense}) => {

  const[nameExpense,setNameExpense] = useState('');
  const[quantityExpense,setQuantityExpense] = useState(0);
  const [error,setError] = useState(false);



  const addExpense = (e) => {
    e.preventDefault();

    if (nameExpense.trim() === '' || quantityExpense < 1 || isNaN(quantityExpense)) {
      setError(true);
      return ;
    }
    setError(false);

    const expense ={
      nameExpense,
      quantityExpense,
      id: Shortid.generate()
    };
    setExpense(expense);
    setCreateExpense(true);
    setNameExpense('');
    setQuantityExpense(0);
  }
    return ( 
        <div className="">
          {error ? <Error message="please fill all input"/> : null}
            
            <h3 className="text-center text-indigo-800 font-semibold text-2xl">
              Add your expenses here.
            </h3>

            <form className="md:mt-10" onSubmit={addExpense}>
              <div className="mb-4 md:px-10">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name Expense
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="expense"
                  type="text"
                  autoFocus
                  placeholder="Type your expense"
                  value={nameExpense}
                  onChange={e => setNameExpense(e.target.value)}
                />
              </div>

              <div className="mb-4 md:px-10">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Quantity
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="quantity"
                  type="number"
                  value={quantityExpense}
                  onChange={e=>setQuantityExpense(parseInt(e.target.value))}
                  placeholder="Type quantity"
                />
              </div>

              <div className="md:flex justify-end md:px-10">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-20">
                  save
                </button>
              </div>
            </form>
          </div>
     );
}
 
Form.propTypes ={
  setExpense : PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired

}
export default Form;
