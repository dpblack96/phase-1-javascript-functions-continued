// code your solution here

function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(work = "go to the office") {
    return (`This Monday, I will ${work}.`)
}

function wrapAdjective(flair = '*'){
    function innerFunction (adjective = 'special'){
        return (`You are ${flair}${adjective}${flair}!`)
    }
    return innerFunction
}
wrapAdjective ('||')('a dedicated programmer')