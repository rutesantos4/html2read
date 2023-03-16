export type Read = {
	title: string;
	description: string;
	introduction: string;
	summary: string;
	keewords: string;
	content: string;
	document: Document;
};

export function createReadFromDocument(document: Document): Read {
	const result: Read = {
		title: document.head.getElementsByTagName('title')[0].innerText,
		description: getAttributeOfElement(document, 'description', 'content'),
		introduction: '',
		summary: '',
		keewords: getAttributeOfElement(document, 'keewords', 'content'),
		content: document.body.innerHTML,
		document: document
	};
	return result;
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
