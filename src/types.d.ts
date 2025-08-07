/* Notices Types */
	type NoticeType = {
		title: string,
		text: string,
		type: 'info' | 'warning' | 'error'
	}

	type NoticesStoreType = {
		id: number,
		notices: Map<number, NoticeType>
	}

/* Messenger Types */
	type MessageType = {
		userID: string,
		username: string,
		message: string,
		timestamp: number,
		owner: boolean
	}

	type MessengerStoreType = {
		currentUsername: string,
		currentUserID: string,
		messageID: number,
		messages: Map<number, MessageType>
	}

/* Signalr Types */
	type SignalrStoreType = {
		connection: HubConnection | null
	}