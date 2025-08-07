import { useNoticesStore } from '@/stores/notices.store';

export const errorHandler = (error: unknown) => {
	let message = '';

	if ( error && typeof error == 'object' ) {
		message = error.toString();
	} else if ( typeof error == 'string' ) {
		message = error;
	}

	const noticesStore = useNoticesStore();
	noticesStore.add({
		title: 'Error',
		text: 'An error occurred, to find out more, open the console',
		type: 'error'
	});

	console.error(message);
}