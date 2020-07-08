import React from 'react';

const Form = () => {
    return ( 
        <div className="">
            <h3 className="text-center text-indigo-800 font-semibold text-2xl">
              Add your expenses here.
            </h3>

            <form className="md:mt-10">
              <div className="mb-4 md:px-10">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="expense"
                >
                  Name Expense
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="expense"
                  type="text"
                  autoFocus
                  placeholder="Type your expense"
                />
              </div>

              <div className="mb-4 md:px-10">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="quantity"
                >
                  Quantity
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="quantity"
                  type="number"
                  placeholder="Type quantity"
                />
              </div>

              <div className="md:flex justify-end md:px-10">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-20">
                  save
                </button>
              </div>
            </form>
          </div>
     );
}
 
export default Form;
