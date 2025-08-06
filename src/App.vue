<template>
	<ion-app>
		<ion-router-outlet />

		<div class="app-notices-main-wrapper">
			<ion-grid>
				<ion-row>
					<ion-col size="12">
						<div class="app-notices-wrapper">
							<div class="app-notices">
								<div class="app-notice-item" v-for="([key, notice]) in noticesStore.notices" :key="key">
									<InfoNotice
										:id="key"
										:title="notice.title"
										:message="notice.text"
										:type="notice.type"
									></InfoNotice>
								</div>
							</div>
						</div>
					</ion-col>
				</ion-row>
			</ion-grid>
		</div>
	</ion-app>
</template>

<script setup lang="ts">
	import { IonGrid, IonRow, IonCol, IonApp, IonRouterOutlet } from '@ionic/vue';
	import InfoNotice from '@/components/InfoNotice.vue';
	import { useNoticesStore } from '@/stores/notices.store';

	const noticesStore = useNoticesStore();
</script>

<style scoped>
	.app-notices-main-wrapper {
		position: fixed;
		bottom: 0;
		left: 0;
		overflow: auto;
		width: 100%;
		max-height: 100%;
		z-index: 1;
	}

	.app-notices-wrapper {
		display: flex;
		justify-content: center;
	}

	.app-notices {
		width: 100%;
		max-width: 750px;
	}
</style>