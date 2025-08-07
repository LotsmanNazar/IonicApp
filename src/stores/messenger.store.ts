import { defineStore } from 'pinia';

export const useMessengerStore = defineStore('messengerStore', {
	state: (): MessengerStoreType => ({
		currentUsername: '',
		currentUserID: '',
		messageID: 0,
		messages: new Map(),
	}),

	actions: {
		add(message: MessageType): number {
			const id = this.messageID;
			this.messages.set(id, message);
			this.messageID++;

			return id;
		},

		delete(id: number) {
			this.messages.delete(id);
		},

		clear() {
			this.messages.clear();
		},

		isAuthorized(): boolean {
			return this.currentUsername && this.currentUserID ? true : false;
		}
	}
});