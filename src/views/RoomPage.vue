<template>
  	<ion-page>
		<ion-content :fullscreen="true">
			<div class="app-room-page-content-main-wrapper">
				<ion-grid>
					<ion-row>
						<ion-col size="12">
							<div class="app-room-page-content-wrapper">
								<div class="app-room-page-content">
									<ChatMessenger></ChatMessenger>
								</div>
							</div>
						</ion-col>
					</ion-row>
				</ion-grid>
			</div>
		</ion-content>
  	</ion-page>
</template>

<script setup lang="ts">
	import { IonGrid, IonRow, IonCol, IonContent, IonPage } from '@ionic/vue';
	import { onBeforeRouteLeave } from 'vue-router';
	import { useMessengerStore } from '@/stores/messenger.store';
	import { disconnect } from '@/services/signalr/signalr.service';
	import ChatMessenger from '@/components/ChatMessenger.vue';

	const messengerStore = useMessengerStore();

	onBeforeRouteLeave(async (to, from, next) => {
		await disconnect();

		messengerStore.currentUsername = '';
		messengerStore.currentUserID = '';
		messengerStore.clear();
		
		next();
	});
</script>

<style scoped>
	.app-room-page-content-main-wrapper,
	.app-room-page-content-main-wrapper ion-grid,
	.app-room-page-content-main-wrapper ion-row,
	.app-room-page-content-main-wrapper ion-col,
	.app-room-page-content-wrapper,
	.app-room-page-content {
		height: 100%;
	}

	.app-room-page-content {
		width: 100%;
		max-width: 1000px;
	}

	.app-room-page-content-wrapper {
		display: flex;
		justify-content: center;
	}
</style>