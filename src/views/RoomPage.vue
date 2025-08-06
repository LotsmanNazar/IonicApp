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
	import ChatMessenger from '@/components/ChatMessenger.vue';
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