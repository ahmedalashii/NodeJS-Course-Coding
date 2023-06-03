// Sync process:

const computeTax = (amount, taxPercent) => {
    const tax = (taxPercent / 100) * amount;
    return tax;
}

console.log("Sync Tax: ", computeTax(400, 10));

// ~ The process above is sync and the console.log is executed after the computeTax function is finished

// Async process:

const callbackFunction = () => {
    console.log("Async Tax: ", computeTax(400, 40));
};

setTimeout(callbackFunction, 500);
