<template>
  	<ion-page>
		<ion-content :fullscreen="true">
			<div class="app-room-page-content-main-wrapper">
				<ion-grid>
					<ion-row>
						<ion-col size="12">
							<div class="app-room-page-content-wrapper">
								<div class="app-room-page-content">
									<div class="app-chat-main-wrapper">
										<div class="app-chat-wrapper">
											<div class="app-chat">
												<div class="app-chat-messages-wrapper">
													<div class="app-chat-messages">
														<div class="app-chat-message-wrapper">
															<div class="app-chat-message-avatar">
																<span></span>
															</div>

															<div class="app-chat-message-content">
																<div class="app-chat-message-info">
																	<span class="app-chat-message-user app-chat-message-info-item">Username</span>
																	<span class="app-chat-message-time app-chat-message-info-item">15:00 01.08.2025</span>
																</div>

																<div class="app-chat-message">
																	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
																	
																	<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
																</div>
															</div>
														</div>

														<div class="app-chat-message-wrapper">
															<div class="app-chat-message-avatar">
																<span></span>
															</div>

															<div class="app-chat-message-content">
																<div class="app-chat-message-info">
																	<span class="app-chat-message-user app-chat-message-info-item">Username</span>
																	<span class="app-chat-message-time app-chat-message-info-item">15:00 01.08.2025</span>
																</div>

																<div class="app-chat-message">
																	<p>Lorem Ipsum is simply dummy text of the printing.</p>
																</div>
															</div>
														</div>

														<div class="app-chat-message-wrapper app-chat-owner-message-wrapper">
															<div class="app-chat-message-avatar">
																<span></span>
															</div>

															<div class="app-chat-message-content">
																<div class="app-chat-message-info">
																	<span class="app-chat-message-user app-chat-message-info-item">Username</span>
																	<span class="app-chat-message-time app-chat-message-info-item">15:00 01.08.2025</span>
																</div>

																<div class="app-chat-message">
																	<p>Lorem Ipsum is simply dummy text of the printing.</p>
																</div>
															</div>
														</div>

														<div class="app-chat-message-wrapper app-chat-owner-message-wrapper">
															<div class="app-chat-message-avatar">
																<span></span>
															</div>

															<div class="app-chat-message-content">
																<div class="app-chat-message-info">
																	<span class="app-chat-message-user app-chat-message-info-item">Username</span>
																	<span class="app-chat-message-time app-chat-message-info-item">15:00 01.08.2025</span>
																</div>

																<div class="app-chat-message">
																	<p>Lorem Ipsum is simply dummy text of the printing.</p>
																</div>
															</div>
														</div>
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
	import { IonContent, IonPage, IonTextarea, IonButton } from '@ionic/vue';
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

	.app-chat-main-wrapper,
	.app-chat-wrapper,
	.app-chat {
		height: 100%;
	}

	.app-chat-main-wrapper {
		padding: 30px 10px;
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








	.app-chat-message-wrapper {
		background-color: var(--ion-color-light-tint);
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		margin-bottom: 20px;
    	border-radius: 15px;
	}

	.app-chat-owner-message-wrapper {
		background-color: var(--app-light-blue);
	}

	.app-chat-message-wrapper:last-child {
		margin: 0;
	}

	.app-chat-message-avatar span {
		background-color: var(--ion-color-light-shade);
		display: block;
		width: 50px;
		height: 50px;
		border-radius: 100%;
	}

	.app-chat-owner-message-wrapper .app-chat-message-avatar span {
		background-color: var(--app-light-blue2);
	}

	.app-chat-message-content {
		font-size: 0.9rem;
		width: calc(100% - 50px);
		padding-left: 20px;
	}

	.app-chat-message-content p {
		margin-bottom: 10px;
	}

	.app-chat-message-content p:last-child {
		margin-bottom: 0;
	}

	.app-chat-message-info {
		font-weight: bold;
		margin-bottom: 10px;
	}

	.app-chat-message-user,
	.app-chat-message-time {
		display: inline-block;
	}

	.app-chat-message-info-item:not(:first-child):before {
		content: '-';
		display: inline-block;
		margin: 0 5px;
	}

	@container chatWrapper (width < 500px) {
		.app-chat-wrapper {
			padding: 10px 15px 30px 15px;
		}

		.app-chat-message-avatar {
			margin-bottom: 15px;
		}

		.app-chat-message-content {
			width: 100%;
			padding: 0;
		}

		.app-chat-messages-wrapper {
			height: calc(100% - 150px);
		}

		.app-chat-controls-wrapper {
			height: 150px;
		}
	}
</style>