<template>
	<div class="app-enter-form-main-wrapper">
		<div class="app-enter-form-wrapper">
			<div class="app-enter-form-description">
				<h3 class="app-enter-form-title">Welcome to the chat app</h3>
				<p>Enter your name and click "Enter" to continue.</p>
			</div>
			<form class="app-enter-form" @submit="enterFormSubmit($event)">
				<div class="app-form-input-wrapper">
					<ion-input type="text" placeholder="Your Name" required v-model="username"></ion-input>
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
	import { ref, defineEmits } from 'vue';
	import { useNoticesStore } from '@/stores/notices.store';
	import { generateUserID } from '@/utils/userid-generator.util';

	const noticesStore = useNoticesStore();
	const username = ref<string>('');
	const emit = defineEmits(['enterFormSubmitted']);

	const enterFormSubmit = async (e: Event) => {
		e.preventDefault();

		if ( !username.value ) {
			return;
		}

		if ( username.value.length > 10 ) {
			noticesStore.add({
				title: 'Error in the field',
				text: 'The name length must be no more than 10 characters',
				type: 'warning'
			});

			return;
		}

		emit('enterFormSubmitted', {
			username: username.value,
			userID: generateUserID(username.value)
		});

		username.value = '';
	}
</script>

<style scoped>
	.app-enter-form-main-wrapper {
		container-type: inline-size;
		container-name: formWrapper;
	}

	.app-enter-form-wrapper {
		background-color: var(--ion-background-color);
		text-align: center;
		padding: 50px;
		border: 7px solid var(--app-dark-blue);
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
