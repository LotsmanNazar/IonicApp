import { defineStore } from 'pinia';

export const useSignalrStore = defineStore('signalrStore', {
	state: (): SignalrStoreType => ({
		connection: null
	})
});