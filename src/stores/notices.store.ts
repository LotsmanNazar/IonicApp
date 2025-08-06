import { defineStore } from 'pinia';

export const useNoticesStore = defineStore('noticesStore', {
	state: (): NoticesStoreType => ({
		id: 0,
		notices: new Map()
	}),

	actions: {
		add(notice: NoticeType) {
			this.notices.set(this.id, notice);
			this.id++;
		},

		delete(id: number) {
			this.notices.delete(id);
		}
	}
});