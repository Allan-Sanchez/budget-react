export const reviewBudget = (budget,remaining) =>{
    let clase;

    if ((budget / 4) > remaining) {
        clase = 'flex justify-around items-center bg-red-200  rounded rounded-full p-2  ';
    }else if ((budget / 2) > remaining) {
        clase = 'flex justify-around items-center bg-yellow-200  rounded rounded-full p-2 ';
    }else{
        clase = 'flex justify-around items-center bg-blue-200  rounded rounded-full p-2 '
    }

    return clase;
}