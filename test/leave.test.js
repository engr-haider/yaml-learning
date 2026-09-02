import test from 'node:test';
import assert from 'node:assert/strict';

import {
    calculateRemainingLeaves,
    canTakeLeave
} from '../src/leave.js';

test('should calculate remaining leaves', () => {
    const result = calculateRemainingLeaves(20, 5);

    assert.equal(result, 20);
});

test('should allow leave when enough balance exists', () => {
    const result = canTakeLeave(10, 3);

    assert.equal(result, true);
});

test('should reject leave when balance is insufficient', () => {
    const result = canTakeLeave(2, 5);

    assert.equal(result, false);
});