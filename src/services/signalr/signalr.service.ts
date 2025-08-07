import * as signalR from '@microsoft/signalr';
import { config } from '@/config';
import { useSignalrStore } from '@/stores/signalr.store';
import { receiveMessage } from '@/services/signalr/handlers/receive-message.handler';
import { disconnected } from '@/services/signalr/handlers/disconnected.handler';

let connection: null | signalR.HubConnection = null;

export const connect = async () => {
	if ( connection?.state === signalR.HubConnectionState.Connected ) {
		return;
	}

	const signalrStore = useSignalrStore();
	const connectionBuilder = new signalR.HubConnectionBuilder();
	connectionBuilder.withUrl(config.signalrURL);

	connection = connectionBuilder.build();

	// If there are errors, they will be caught by global error handlers
	await connection.start();

	signalrStore.connection = connection;

	initHandlers();
}

export const disconnect = async () => {
	if ( connection ) {
		await connection.stop();
		connection = null;
	}
}

const initHandlers = () => {
	if ( !connection ) {
		return;
	}

	// Handlers
	connection.on('ReceiveMessage', receiveMessage);
	connection.onclose(disconnected);
}