export type Read = {
	title: string;
	description: string;
	introduction: string;
	summary: string;
	keywords: string;
	content: string;
	url: string;
	draft: boolean;
	date: Date;
	categories: string;
	tags: string;
	document: Document;
	template: string;
};

export function createReadFromDocument(url: string, document: Document): Read {
	const result: Read = {
		title: document.head.getElementsByTagName('title')[0].innerText,
		description: getAttributeOfPossibleElements(
			[
				getAttributeOfElementFromName(document, 'description'),
				getAttributeOfElementFromProperty(document, 'og:description')
			],
			'content'
		),
		introduction: '',
		summary: '',
		keywords: getAttributeOfPossibleElements(
			[
				getAttributeOfElementFromName(document, 'keywords'),
				getAttributeOfElementFromProperty(document, 'og:keywords')
			],
			'content'
		),
		content: document.body.innerHTML,
		url: url,
		draft: false,
		date: new Date(),
		categories: 'reads',
		tags: '',
		document: document,
		template: ''
	};
	return result;
}

export function setReadTemplate(read: Read, contentMarkdown: string): Read {
	read.tags = read.categories + ', ' + read.keywords;
	read.date = new Date();

	contentMarkdown = addPrefix(contentMarkdown, '>');

	read.template = `---
title: "${removeDoubleQuotes(read.title)}"
description: "${removeDoubleQuotes(read.description)}"
summary: "${removeDoubleQuotes(read.summary)}"
keywords: [${getKeywordsFormatted(read)}]
date: ${getDateFormatted(read)}
draft: ${read.draft}
categories: ['${read.categories}']
tags: [${getTagsFormatted(read)}]
---

${read.introduction}

${read.url}

---

${contentMarkdown}`;

	return read;
}

export function removeDoubleQuotes(str: string): string {
	return str.replaceAll('"', '\\"');
}

export function getFileName(read: Read): string {
	return (
		read.title
			.toLowerCase()
			.replace(/[^a-z0-9- ]/g, '')
			.replace(/\s+/g, ' ')
			.trim()
			.replaceAll(' ', '-') + '.md'
	);
}

function addPrefix(str: string, prefix: string): string {
	return str
		.split('\n')
		.map((s) => `${prefix} ${s}`)
		.join('\n');
}

function getTagsFormatted(read: Read): string {
	return formatArray(read.tags.split(','));
}

function getKeywordsFormatted(read: Read): string {
	return formatArray(read.keywords.split(','));
}

function getDateFormatted(read: Read): string {
	return read.date.toISOString();
}

function formatArray(array: string[]): string {
	array = array.map((element) => element.trim());
	let result = array.join("', '");
	result = "'" + result + "'";
	return result;
}

function getAttributeOfPossibleElements(
	callbacks: Array<(attributeName: string) => string>,
	attributeName: string
): string {
	for (let index = 0; index < callbacks.length; index++) {
		const callback = callbacks[index];

		const attribute = callback(attributeName);
		if (attribute && attribute.trim()) {
			return attribute;
		}
	}
	return '';
}

function getAttributeOfElementFromName(
	document: Document,
	elementName: string
): (attributeName: string) => string {
	const elements = document.getElementsByName(elementName);
	return getAttributeOfElement(elements);
}

function getAttributeOfElementFromProperty(
	document: Document,
	propertyName: string
): (attributeName: string) => string {
	const elements = document.querySelectorAll(`[property="${propertyName}"]`);
	return getAttributeOfElement(elements);
}

const getAttributeOfElement = (elements: NodeListOf<Element>) => (attributeName: string) => {
	if (elements.length <= 0) {
		return '';
	}
	const element = elements[0];
	if (element === undefined) {
		return '';
	}
	const attribute = element.getAttribute(attributeName);
	return attribute == null ? '' : attribute;
};
