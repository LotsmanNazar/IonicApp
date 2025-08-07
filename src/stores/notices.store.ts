import { defineStore } from 'pinia';

export const useNoticesStore = defineStore('noticesStore', {
	state: (): NoticesStoreType => ({
		id: 0,
		notices: new Map()
	}),

	actions: {
		add(notice: NoticeType): number {
			const id = this.id;
			this.notices.set(id, notice);
			this.id++;

			return id;
		},

		delete(id: number) {
			this.notices.delete(id);
		},

		clear() {
			this.notices.clear();
		}
	}
});