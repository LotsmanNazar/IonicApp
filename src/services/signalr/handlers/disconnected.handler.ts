import { connect } from '@/services/signalr/signalr.service';
import { useNoticesStore } from '@/stores/notices.store';

export const disconnected = async (error?: Error) => {
	// Do not reconnect unless there is a network error
	if ( !error ) {
		return;
	}

	const noticesStore = useNoticesStore();
	const noticeID = noticesStore.add({
		title: 'Disconnected',
		text: 'Lost connection with server. Connection...',
		type: 'error'
	});

	// Reconnection
	const intervalID = setInterval(async () => {
		try {
			await connect();

			noticesStore.delete(noticeID);
			clearInterval(intervalID);
		} catch {
			// Reconnection notification already exists
		}
	}, 3000);
}