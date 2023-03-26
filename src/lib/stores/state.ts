export type TypedState<T> = {
	state: State;
} & TypedStateValue<T> &
	StateExtensions;

type TypedStateValue<T> = {
	value: T;
};

type StateExtensions = {
	loading: boolean;
	showingForm: boolean;
	showingTemplate: boolean;
	showingURLError: boolean;
};

export enum State {
	initial,
	loading,
	showingForm,
	showingTemplate,
	showingURLError
}

export function from<T>(value: T, state: State): TypedState<T> {
	return {
		value: value,
		state: state,
		loading: state == State.loading,
		showingURLError: state == State.showingURLError,
		showingForm: state == State.showingForm,
		showingTemplate: state == State.showingTemplate
	};
}
