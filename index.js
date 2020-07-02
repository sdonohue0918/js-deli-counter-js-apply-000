//1. katzDeliLine



var katzDeliLine = []


function takeANumber(katzDeliLine, name) {
    var lineNumber = katzDeliLine.length
    for (var i = 0; i<= katzDeliLine.length; i++) {
        katzDeliLine.push(name)
        
    }
        
    
    return `Welcome, ${name}. You are number ${lineNumber} in line.`

};