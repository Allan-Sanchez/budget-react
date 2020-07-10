import React,{Fragment} from 'react';

const ControlBudget = ({budget,remaining}) => {
    // console.log(budget)
    return (  
        <Fragment>
            <div className="flex justify-around items-center bg-green-100 rounded rounded-full p-2 ">
                <div className="text-purple-800 text-md w-1/3">
                    Budget 
                </div>
                <div className="w-1/3">
                    <span className="text-purple-800 text-md font-bold">Q {budget}</span>
                </div>
               
            </div>

            <div className="flex justify-around items-center bg-red-100  rounded rounded-full p-2 ">
                <div className="text-purple-800 text-md w-1/3">
                    Remaining 
                </div>
                <div className="w-1/3">
                <span className="font-bold text-purple-800 text-md">Q {remaining}</span>
                </div>
            </div>
        </Fragment>
    );
}
 
export default ControlBudget;