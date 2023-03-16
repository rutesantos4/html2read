import type { Read } from '../model';

export interface Query {
	getHTML(url: string): Promise<number | Read>;
}
