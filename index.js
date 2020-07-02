//1. katzDeliLine



var katzDeliLine = []


function takeANumber(katzDeliLine, name) {
    var lineNumber = katzDeliLine.length
    katzDeliLine.push(name)
    lineNumber++


    return `Welcome, ${name}. You are number ${lineNumber} in line.`

};
