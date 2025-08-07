<template>
	<div class="app-chat-message-wrapper" :class="props.owner ? 'app-chat-owner-message-wrapper' : ''">
		<div class="app-chat-message-avatar">
			<span></span>
		</div>

		<div class="app-chat-message-content">
			<div class="app-chat-message-info">
				<span class="app-chat-message-user app-chat-message-info-item">{{ props.name }}</span>
				<span class="app-chat-message-time app-chat-message-info-item">{{ new Date(props.time).toLocaleString() }}</span>
			</div>

			<div class="app-chat-message">
				<p>{{ props.message }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { defineProps } from 'vue';

	const props = defineProps({
		name: {
			type: String,
			required: true,
		},

		time: {
			type: Number,
			required: true
		},

		message: {
			type: String,
			required: true
		},

		owner: {
			type: Boolean,
			required: true
		}
	});
</script>

<style scoped>
	.app-chat-message-wrapper {
		background-color: var(--ion-color-light-tint);
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		margin-bottom: 20px;
    	border-radius: 15px;
		container-type: inline-size;
		container-name: messageWrapper;
	}

	.app-chat-owner-message-wrapper {
		background-color: var(--app-light-blue);
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

	@container messageWrapper (width < 500px) {
		.app-chat-message-avatar {
			margin-bottom: 15px;
		}

		.app-chat-message-content {
			width: 100%;
			padding: 0;
		}
	}
</style>