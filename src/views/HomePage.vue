<template>
  	<ion-page>
		<ion-content :fullscreen="true">
			<div class="app-home-page-content-main-wrapper">
				<ion-grid>
					<ion-row>
						<ion-col size="12">
							<div class="app-home-page-content-wrapper">
								<div class="app-home-page-content">
									<EnterForm></EnterForm>
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
	import { IonContent, IonPage } from '@ionic/vue';
	import EnterForm from '@/components/EnterForm.vue';
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