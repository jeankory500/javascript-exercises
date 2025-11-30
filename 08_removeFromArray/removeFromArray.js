const removeFromArray = function(array, ...args){
    const newResult = [];

    array.forEach((item)=> {
        if(!args.includes(item)){
            newResult.push(item)
        }
    })
    return newResult;
};

// Do not edit below this line
module.exports = removeFromArray;
