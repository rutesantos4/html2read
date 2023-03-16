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

	private request(request: Request): Promise<Response> {
		const url = request.url;

		const fetchRequest = <RequestInit>{
			method: request.method
		};

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
