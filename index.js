// code your solution here
function saturdayFun (event = "roller-skate") {
    return `This Saturday, I want to ${event}!`;
}

function mondayWork (task = "go to the office") {
    return `This Monday, I will ${task}.`;
}

function wrapAdjective (asterisk) {
    return function innerfunction (compliment = "special") {
        return `You are ${asterisk}${compliment}${asterisk}!`;
    }
}