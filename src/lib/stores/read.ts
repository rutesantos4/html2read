import { URLQueryImpl, FetchClient, type Read, type Query } from '@http';
import { State } from './state';
import {
	createStore,
	onLoading,
	onURLError,
	setForm,
	setTemplate,
	setInitial,
	type Store
} from './store';

export const ReadStore = createReadStore();

function createReadStore() {
	const store = createStore<Read>();
	const subscribe = store.subscribe;

	const query = new URLQueryImpl(new FetchClient());

	return {
		subscribe,
		submittedURL: (url: string) => onSubmittedEvent(store, query, url),
		submittedForm: (read: Read) => onSubmittedFormEvent(store, read),
		reset: () => onResetEvent(store)
	};
}

function onSubmittedEvent(store: Store<Read>, query: Query, url: string): void {
	if (store.state != State.loading) {
		return onLoading(store, () =>
			query.getHTML(url).then((result) => processClientResult(store, result))
		);
	}
}

function onSubmittedFormEvent(store: Store<Read>, read: Read): void {
	if (store.state != State.loading) {
		return onLoading(store, () => setTemplate(store, read));
	}
}

function processClientResult(store: Store<Read>, res: Read | number): void {
	if (typeof res === 'number') {
		onURLError(store);
	} else {
		setForm(store, res);
	}
}

function onResetEvent(store: Store<Read>): void {
	return setInitial(store, <Read>{});
}
