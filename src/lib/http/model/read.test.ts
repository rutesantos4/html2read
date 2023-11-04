import { expect, test } from '@jest/globals';
import { removeDoubleQuotes, getFileName, type Read } from './read';

test('String with single quote should continue with it', () => {
	expect(removeDoubleQuotes("Today I'm going to...")).toBe("Today I'm going to...");
});

test('String with double quotes should escape them', () => {
	expect(removeDoubleQuotes('Today I\'m going to "illustrate" something...')).toBe(
		'Today I\'m going to \\"illustrate\\" something...'
	);
});

test('UpperCase Title should return downcase file name', () => {
	const read: Read = {
		title: 'TiTle',
		categories: '',
		content: '',
		description: '',
		date: new Date(),
		document: document,
		draft: false,
		introduction: '',
		keywords: '',
		summary: '',
		tags: '',
		template: '',
		url: ''
	};
	expect(getFileName(read)).toBe('title.md');
});

test('Title with space at the beggining should return file name without it', () => {
	const read: Read = {
		title: ' TiTle',
		categories: '',
		content: '',
		description: '',
		date: new Date(),
		document: document,
		draft: false,
		introduction: '',
		keywords: '',
		summary: '',
		tags: '',
		template: '',
		url: ''
	};
	expect(getFileName(read)).toBe('title.md');
});

test('Title with space at the end should return file name without it', () => {
	const read: Read = {
		title: 'TiTle  ',
		categories: '',
		content: '',
		description: '',
		date: new Date(),
		document: document,
		draft: false,
		introduction: '',
		keywords: '',
		summary: '',
		tags: '',
		template: '',
		url: ''
	};
	expect(getFileName(read)).toBe('title.md');
});

test('Title with more than one string should return file name with string separated with -', () => {
	const read: Read = {
		title: 'TiTle file NAME',
		categories: '',
		content: '',
		description: '',
		date: new Date(),
		document: document,
		draft: false,
		introduction: '',
		keywords: '',
		summary: '',
		tags: '',
		template: '',
		url: ''
	};
	expect(getFileName(read)).toBe('title-file-name.md');
});

test("Title with ' should return file name without it", () => {
	const read: Read = {
		title: "TiTle's file NAME",
		categories: '',
		content: '',
		description: '',
		date: new Date(),
		document: document,
		draft: false,
		introduction: '',
		keywords: '',
		summary: '',
		tags: '',
		template: '',
		url: ''
	};
	expect(getFileName(read)).toBe('titles-file-name.md');
});

test('Title with # should return file name without it', () => {
	const read: Read = {
		title: 'TiTle# file NAME',
		categories: '',
		content: '',
		description: '',
		date: new Date(),
		document: document,
		draft: false,
		introduction: '',
		keywords: '',
		summary: '',
		tags: '',
		template: '',
		url: ''
	};
	expect(getFileName(read)).toBe('title-file-name.md');
});

test('Title with - should return file name with it', () => {
	const read: Read = {
		title: 'TiT-le file NAME',
		categories: '',
		content: '',
		description: '',
		date: new Date(),
		document: document,
		draft: false,
		introduction: '',
		keywords: '',
		summary: '',
		tags: '',
		template: '',
		url: ''
	};
	expect(getFileName(read)).toBe('tit-le-file-name.md');
});

test('Title with numbers should return file name with it', () => {
	const read: Read = {
		title: '50 TiTle file NAME',
		categories: '',
		content: '',
		description: '',
		date: new Date(),
		document: document,
		draft: false,
		introduction: '',
		keywords: '',
		summary: '',
		tags: '',
		template: '',
		url: ''
	};
	expect(getFileName(read)).toBe('50-title-file-name.md');
});

test('Title with multiple spaces should return file name with only -', () => {
	const read: Read = {
		title: '50  TiTle file | NAME',
		categories: '',
		content: '',
		description: '',
		date: new Date(),
		document: document,
		draft: false,
		introduction: '',
		keywords: '',
		summary: '',
		tags: '',
		template: '',
		url: ''
	};
	expect(getFileName(read)).toBe('50-title-file-name.md');
});
