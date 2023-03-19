export type Read = {
	title: string;
	description: string;
	introduction: string;
	summary: string;
	keewords: string;
	content: string;
	url: string;
	draft: boolean;
	date: Date;
	categories: string;
	tags: string;
	document: Document;
};

export function createReadFromDocument(url: string, document: Document): Read {
	const result: Read = {
		title: document.head.getElementsByTagName('title')[0].innerText,
		description: getAttributeOfElement(document, 'description', 'content'),
		introduction: '',
		summary: '',
		keewords: getAttributeOfElement(document, 'keewords', 'content'),
		content: document.body.innerHTML,
		url: url,
		draft: false,
		date: new Date(),
		categories: 'reads',
		tags: '',
		document: document
	};
	return result;
}

export function getTagsFormatted(read: Read): string {
	return formatArray(read.tags.split(','));
}

export function getKeewordsFormatted(read: Read): string {
	return formatArray(read.keewords.split(','));
}

export function getDateFormatted(read: Read): string {
	return read.date.toISOString();
}

function getAttributeOfElement(
	document: Document,
	elementName: string,
	attributeName: string
): string {
	const elements = document.getElementsByName(elementName);
	if (elements.length <= 0) {
		return '';
	}
	const element = elements[0];
	if (element === undefined) {
		return '';
	}
	const attribute = element.getAttribute(attributeName);
	return attribute == null ? '' : attribute;
}

function formatArray(array: string[]): string {
	array = array.map((element) => element.trim());
	let result = array.join("', '");
	result = "'" + result + "'";
	return result;
}
