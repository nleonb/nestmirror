const NUMBER_OF_DECIMALS = 1 ;
export const roundTemp = (temp) =>{
    const numberToMultiply  = Math.pow(10,NUMBER_OF_DECIMALS);
    return Math.round(temp * numberToMultiply) / numberToMultiply;
}