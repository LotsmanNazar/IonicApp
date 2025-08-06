<template>
	<div class="app-chat-main-wrapper">
		<div class="app-chat-wrapper">
			<div class="app-chat">
				<div class="app-chat-messages-wrapper">
					<div class="app-chat-messages">
						<ChatMessage
							name="BotHelper"
							time="15:00"
							message="Please be polite and respectful to other chat users"
						></ChatMessage>
					</div>
				</div>

				<div class="app-chat-controls-wrapper">
					<div class="app-chat-controls">
						<div class="app-chat-new-message-wrapper">
							<form class="app-chat-new-message">
								<div class="app-form-input-wrapper app-chat-message-input">
									<ion-textarea placeholder="Your Message" required></ion-textarea>
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
	import ChatMessage from '@/components/ChatMessage.vue';
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
		padding: 10px 30px 30px 30px;
		border: 2px solid var(--ion-color-light-shade);
		border-radius: 25px;
	}

	.app-chat-messages-wrapper {
		height: calc(100% - 200px);
		padding: 20px 0;
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