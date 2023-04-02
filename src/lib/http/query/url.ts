import type { RelayClient } from '../client';
import type { Read } from '../model';
import { createReadFromDocument } from '../model';
import type { Query } from './interface';

export class URLQueryImpl implements Query {
	constructor(private readonly client: RelayClient) {}

	async getHTML(url: string): Promise<number | Read> {
		try {
			return this.client.get(url).then((response): Promise<number | Read> => {
				if (response.status != 200) {
					return Promise.resolve(response.status);
				}

				return Promise.resolve(
					response.text().then((html) => {
						return createReadFromDocument(url, new DOMParser().parseFromString(html, 'text/html'));
					})
				);
			});
		} catch (err) {
			console.error(err);
			return Promise.resolve(500);
		}
	}
}
