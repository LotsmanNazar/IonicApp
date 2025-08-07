import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import RoomPage from '@/views/RoomPage.vue';
import { useMessengerStore } from '@/stores/messenger.store';
import { useNoticesStore } from '@/stores/notices.store';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/home'
	},

	{
		path: '/home',
		name: 'Home',
		component: HomePage
	},

	{
		path: '/room',
		name: 'Room',
		component: RoomPage
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

router.beforeEach((to, from, next) => {
	// Clear notifications after navigating to pages
	const noticesStore = useNoticesStore();
	noticesStore.clear();

	if ( to.name === 'Room' ) {
		const messengerStore = useMessengerStore();

		// Redirect if not authorized
		if ( !messengerStore.isAuthorized() ) {
			next({ name: 'Home' });
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router