import { expect, test } from '@jest/globals';
import { removeDoubleQuotes } from './read';

test('String with single quote should continue with it', () => {
	expect(removeDoubleQuotes("Today I'm going to...")).toBe("Today I'm going to...");
});

test('String with double quotes should escape them', () => {
	expect(removeDoubleQuotes('Today I\'m going to "illustrate" something...')).toBe(
		'Today I\'m going to \\"illustrate\\" something...'
	);
});
