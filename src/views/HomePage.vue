<template>
  	<ion-page>
		<ion-content :fullscreen="true">
			<div class="app-home-page-content-main-wrapper">
				<ion-grid>
					<ion-row>
						<ion-col size="12">
							<div class="app-home-page-content-wrapper">
								<div class="app-home-page-content">
									<EnterForm @enter-form-submitted="enterFormSubmitted"></EnterForm>
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
	import { useRouter } from 'vue-router';
	import { connect } from '@/services/signalr/signalr.service';
	import { useMessengerStore } from '@/stores/messenger.store';
	import { useNoticesStore } from '@/stores/notices.store';
	import EnterForm from '@/components/EnterForm.vue';

	const router = useRouter();
	const messengerStore = useMessengerStore();
	const noticesStore = useNoticesStore();

	const enterFormSubmitted = async (data: {username: string, userID: string}) => {
		const noticeID = noticesStore.add({
			title: 'Connection',
			text: 'Connecting to the server...',
			type: 'info'
		});

		try {
			await connect();
			messengerStore.currentUsername = data.username;
			messengerStore.currentUserID = data.userID;

			router.push('/room');
		} finally {
			noticesStore.delete(noticeID);
		}
	}
</script>

<style scoped>
	.app-home-page-content-main-wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.app-home-page-content {
		width: 100%;
		max-width: 450px;
	}

	.app-home-page-content-wrapper {
		display: flex;
		justify-content: center;
	}
</style>