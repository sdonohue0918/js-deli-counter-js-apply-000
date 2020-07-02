//1. katzDeliLine



var katzDeliLine = []


function takeANumber(katzDeliLine, name) {
    var lineNumber = katzDeliLine.length
    katzDeliLine.push(name)
    lineNumber++


    return `Welcome, ${name}. You are number ${lineNumber} in line.`

};


//2.nowServing

function nowServing(){
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.unshift()}.`
  } else {
    return `The line is currently empty.`
  }


};
