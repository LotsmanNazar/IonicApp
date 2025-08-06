<template>
	<div class="app-enter-form-main-wrapper">
		<div class="app-enter-form-wrapper">
			<div class="app-enter-form-description">
				<h3 class="app-enter-form-title">Welcome to the chat app</h3>
				<p>Enter your name and click "Enter" to continue.</p>
			</div>
			<form class="app-enter-form">
				<div class="app-form-input-wrapper">
					<ion-input type="text" placeholder="Your Name" required></ion-input>
				</div>

				<div class="app-form-submit-wrapper">
					<ion-button expand="full" type="submit">Enter</ion-button>
				</div>
			</form>
		</div>
	</div>						
</template>

<script setup lang="ts">
	import { IonInput, IonButton } from '@ionic/vue';
</script>

<style scoped>
	.app-enter-form-main-wrapper {
		container-type: inline-size;
		container-name: formWrapper;
	}

	.app-enter-form-wrapper {
		text-align: center;
		padding: 50px;
		border: 2px solid var(--ion-color-light-shade);
		border-radius: 25px;
	}

	.app-enter-form-description {
		margin-bottom: 20px;
	}

	@container formWrapper (width < 450px) {
		.app-enter-form-wrapper {
			padding: 30px 20px;
		}

		.app-enter-form-title {
			font-size: 1.2rem;
		}

		.app-enter-form-description {
			font-size: 0.9rem;
		}
	}
</style>
