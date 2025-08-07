import { useMessengerStore } from '@/stores/messenger.store';

export const receiveMessage = (username: string, message: string) => {
	const data = JSON.parse(message);
	const messengerStore = useMessengerStore();

	if ( data.userID === messengerStore.currentUserID ) {
		return;
	}

	messengerStore.add({
		userID: data.userID,
		username: username,
		message: data.message,
		timestamp: Date.now(),
		owner: false
	});
}