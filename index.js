//1. katzDeliLine



var katzDeliLine = []


function takeANumber(katzDeliLine, name) {
    var lineNumber = katzDeliLine.length
    katzDeliLine.push(name)
    lineNumber++


    return `Welcome, ${name}. You are number ${lineNumber} in line.`

};


//2.nowServing

function nowServing() {
  if (katzDeliLine.length = 0) {
    return `There is noboby waiting to be served!`
  } else {
    return `Currently serving ${katzDeliLine[0]}`
  }

  
};
