const NUMBER_OF_DECIMALS = 1 ;
export const roundTemp = (temp) =>{
    const numberToMultiply  = Math.pow(10,NUMBER_OF_DECIMALS);
    return Math.round(temp * numberToMultiply) / numberToMultiply;
}

export const executeFetch = async (request) => {
    try {
        const response = await fetch(request);
        const jDONResponse = await response.json();
        return jDONResponse;
    } catch (ex) {
        console.error(ex.message);
        return ex.message;
    }
}