/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let timeToTarget = []
    for (let i = 0; i < position.length; i++) {
        let time = (target-position[i])/speed[i] 
        timeToTarget.push([time, position[i]])
    }
    timeToTarget.sort((a,b) => a[1]-b[1])

    let fleets = 0
    while (timeToTarget.length > 0) {
        let top = timeToTarget.pop()
        while (timeToTarget.length > 0 && top[0] >= timeToTarget[timeToTarget.length-1][0]) timeToTarget.pop()
        fleets++
    }
    return fleets
};