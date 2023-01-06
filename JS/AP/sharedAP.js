const getTaxData = (reqObj) => {
    const tempObj = (typeof reqObj !== 'object') ? JSON.parse(reqObj) : reqObj
    const val = parseInt(tempObj.num1) + parseInt(tempObj.num2) + 50;    
    return {tax: val};
}

function getTotalData(reqObj) {
    const tempObj = (typeof reqObj !== 'object') ? JSON.parse(reqObj) : reqObj
    const val = parseInt(tempObj.num1) + parseInt(tempObj.num2) + 10;    
    return {total: val};
}

function getTaxOffers(rObj) {
    sendToMobile(getTaxData(rObj));
}

function getTotal(rObj) {
    sendToMobile(getTotalData(rObj));
}

// function getOffers(reqObj) {
//     let tempObj = reqObj;
//     if (typeof tempObj !== 'object') {
//         tempObj = JSON.parse(reqObj)
//     }
//     let val = parseInt(tempObj.num1) + parseInt(tempObj.num2) + 50;
//     val = val ? val : 'error in external JS';
//     let data = {type: 'Response from External JS:', val};
//     sendToMobile(data);
// }

function sendToMobile(data) {
  window.ReactNativeWebView.postMessage(JSON.stringify(data));
}

 // For Web

window.calculateTax = (val1, val2) => {
    return  val1 + val2 + 20;
}

window.calculateVals = (val1, val2) => {
    return val1 + val2;
}

module.exports = getTotalData;
