import { useMessengerStore } from '@/stores/messenger.store';
import { useSignalrStore } from '@/stores/signalr.store';

export const sendMessage = (message: string) => {
	const messengerStore = useMessengerStore();
	const signalrStore = useSignalrStore();

	if ( !messengerStore.isAuthorized() ) {
		throw new Error('Not authorized');
	}

	// Add user id to check and not add sender's message to chat
	const data = {
		userID: messengerStore.currentUserID,
		message: message
	}

	signalrStore.connection.invoke('SendMessage', messengerStore.currentUsername, JSON.stringify(data));
}