import test from 'node:test';
import assert from 'node:assert/strict';

import {
    calculateRemainingLeaves,
    canTakeLeave
} from '../src/leave.js';

test('calculate remaining leaves', () => {
    const result = calculateRemainingLeaves(20, 5);

    assert.equal(result, 15);
});

test('allow leave when balance is enough', () => {
    const result = canTakeLeave(10, 3);

    assert.equal(result, true);
});

test('reject leave when balance is insufficient', () => {
    const result = canTakeLeave(2, 5);

    assert.equal(result, false);
});