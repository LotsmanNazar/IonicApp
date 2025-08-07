<template>
	<div class="app-chat-main-wrapper">
		<div class="app-chat-wrapper">
			<div class="app-chat">
				<div class="app-chat-messages-wrapper">
					<div class="app-chat-messages" ref="messagesList">
						<div class="app-chat-message-item" v-for="([key, message]) in messengerStore.messages" :key="key">
							<ChatMessage
								:name="message.username"
								:time="message.timestamp"
								:message="message.message"
								:owner="message.owner"
							></ChatMessage>
						</div>
					</div>
				</div>

				<div class="app-chat-controls-wrapper">
					<div class="app-chat-controls">
						<div class="app-chat-new-message-wrapper">
							<form class="app-chat-new-message" @submit="newMessageSubmit($event)">
								<div class="app-form-input-wrapper app-chat-message-input">
									<ion-textarea placeholder="Your Message" required v-model="message" @keydown="textareaKeydown($event)"></ion-textarea>
								</div>

								<div class="app-form-submit-wrapper">
									<ion-button expand="full" type="submit">Submit</ion-button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>						
</template>

<script setup lang="ts">
	import { IonTextarea, IonButton } from '@ionic/vue';
	import { ref, watch, nextTick, onUnmounted } from 'vue';
	import { useMessengerStore } from '@/stores/messenger.store';
	import { sendMessage } from '@/services/signalr/requests/send-message.request';
	import ChatMessage from '@/components/ChatMessage.vue';

	const messengerStore = useMessengerStore();
	const messagesList = ref<HTMLElement | null>(null);
	const message = ref<string>('');

	const textareaKeydown = (e: KeyboardEvent) => {
		if ( e.key == 'Enter' ) {
			e.preventDefault();
			submitMessage();
		}
	}

	const newMessageSubmit = (e: Event) => {
		e.preventDefault();
		submitMessage();
	}

	const submitMessage = () => {
		if ( !message.value ) {
			return;
		}

		// Add a message to the chat before sending it to the server
		messengerStore.add({
			userID: messengerStore.currentUserID,
			username: messengerStore.currentUsername,
			message: message.value,
			timestamp: Date.now(),
			owner: true
		});

		// Send message to the server
		// If there are errors, they will be caught by global error handlers
		sendMessage(message.value);
		
		message.value = '';
	}

	watch(
		() => {
			return messengerStore.messages.size
		},

		async () => {
			// Wait for the new message to be rendered
			await nextTick();

			// Scroll down the list of messages
			messagesList.value?.scrollTo({
				top: messagesList.value.scrollHeight,
				behavior: 'smooth'
			});
		}
	);

	onUnmounted(() => {
		messengerStore.messages.clear();
	});

	// Default chat message
	messengerStore.add({
		userID: 'BotHelper',
		username: 'BotHelper',
		message: 'Please be polite and respectful to other chat users',
		timestamp: Date.now(),
		owner: false
	});
</script>

<style scoped>
	.app-chat-main-wrapper,
	.app-chat-wrapper,
	.app-chat {
		height: 100%;
	}

	.app-chat-main-wrapper {
		padding: 30px 0;
	}

	.app-chat-wrapper {
		background-color: var(--ion-background-color);
		padding: 10px 30px 30px 30px;
		border: 7px solid var(--app-dark-blue);
		border-radius: 25px;
	}

	.app-chat-messages-wrapper {
		height: calc(100% - 200px);
		padding-top: 20px;
	}

	.app-chat-controls-wrapper {
		height: 200px;
	}

	.app-chat-controls,
	.app-chat-new-message-wrapper,
	.app-chat-new-message {
		height: 100%;
	}
	
	.app-form-submit-wrapper ion-button {
		height: 50px;
	}

	.app-chat-message-input {
		height: calc(100% - 50px - 15px);
	}

	.app-chat-message-input * {
		height: 100%;
	}

	.app-chat-messages {
		height: 100%;
		overflow: auto;
	}

	.app-chat-main-wrapper {
		container-type: inline-size;
		container-name: chatWrapper;
	}

	@container chatWrapper (width < 500px) {
		.app-chat-wrapper {
			padding: 10px 15px 30px 15px;
		}

		.app-chat-messages-wrapper {
			height: calc(100% - 150px);
		}

		.app-chat-controls-wrapper {
			height: 150px;
		}
	}
</style>