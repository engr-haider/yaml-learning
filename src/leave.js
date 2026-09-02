export function calculateRemainingLeaves(totalLeaves, usedLeaves) {
    return totalLeaves - usedLeaves;
}

export function canTakeLeave(remainingLeaves, requestedDays) {
    return requestedDays <= remainingLeaves;
}