export function calculateRemainingLeaves(totalLeaves, usedLeaves) {
    return totalLeaves - usedLeaves;
}

export function canTakeLeave(remainingLeaves, requestedLeaves) {
    return requestedLeaves <= remainingLeaves;
}