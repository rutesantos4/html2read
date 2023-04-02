import { env } from '$env/dynamic/public';

export interface Client {
	get(url: string): Promise<Response>;
}

export class FetchClient implements Client {
	get(url: string): Promise<Response> {
		const request = <Request>{
			url: url,
			method: Method.get
		};

		const response = this.request(request);
		return response;
	}

	protected request(request: Request): Promise<Response> {
		const url = request.url;

		const fetchRequest = <RequestInit>{
			method: request.method
		};

		return fetch(url, fetchRequest);
	}
}

export class RelayClient extends FetchClient {
	protected request(request: Request): Promise<Response> {
		const url = <string>env.PUBLIC_RELAY_URL;

		const headers = <HeadersInit>{
			'x-relay-url': request.url
		};

		const fetchRequest = <RequestInit>{
			method: request.method,
			headers: headers
		};

		console.log(url);
		console.log(fetchRequest);
		return fetch(url, fetchRequest);
	}
}

type Request = {
	url: string;
	method: Method;
};

enum Method {
	get = 'GET'
}
