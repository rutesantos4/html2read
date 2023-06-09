import { writable, type Writable } from 'svelte/store';
import { from, State, type TypedState } from './state';

export type Store<T> = Writable<TypedState<T>> & StoreExtensions;

type StoreExtensions = {
	state: State;
};

export function createStore<T>(): Store<T> {
	const store = writable(<TypedState<T>>{});

	return {
		set: store.set,
		subscribe: store.subscribe,
		update: store.update,
		state: State.initial
	};
}
export function onLoading<T>(store: Store<T>, action: () => void): void {
	return updateState(store, State.loading, action);
}

export function onURLError<T>(store: Store<T>): void {
	return updateState(store, State.showingURLError);
}

export function updateState<T>(store: Store<T>, state: State, action?: () => void): void {
	store.update((s) => from(s.value, state));
	store.state = state;

	return action?.();
}

export function setInitial<T>(store: Store<T>, value: T): void {
	return setState(store, value, State.initial);
}

export function setForm<T>(store: Store<T>, value: T): void {
	return setState(store, value, State.showingForm);
}

export function setTemplate<T>(store: Store<T>, value: T): void {
	return setState(store, value, State.showingTemplate);
}

export function setState<T>(store: Store<T>, value: T, state: State): void {
	const typedState = from(value, state);
	store.state = state;

	return store.set(typedState);
}
