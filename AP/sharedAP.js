function getTax(val1, val2) {
    let val = val1 + val2 + 20;    
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function getToal(val1, val2) {
    let val = val1 + val2;
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

function getOffers(reqObj) {
    let tempObj = reqObj;
    if (typeof tempObj !== 'object') {
        tempObj = JSON.parse(reqObj)
    }
    let val = parseInt(tempObj.num1) + parseInt(tempObj.num2) + 50;
    val = val ? val : 'error in external JS';
    let data = {type: 'Response from External JS:', val};
    sendToMobile(data);
}

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
