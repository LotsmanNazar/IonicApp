<template>
	<div class="app-notice-main-wrapper">
		<div class="app-notice-wrapper">
			<div class="app-notice" :class="'app-notice-' + props.type">
				<div class="app-notice-controls">
					<button type="button" :data-id="props.id" @click="deleteNotice">
						<ion-icon :icon="close"></ion-icon>
					</button>
				</div>

				<div class="app-notice-header">
					<div class="app-notice-title-wrapper">
						<h3 class="app-notice-title">{{ props.title }}</h3>
					</div>
				</div>

				<div class="app-notice-body">
					<div class="app-notice-content">
						<p>{{ props.message }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>						
</template>

<script setup lang="ts">
	import { IonIcon } from '@ionic/vue';
	import { close } from 'ionicons/icons';
	import { useNoticesStore } from '@/stores/notices.store';

	const props = defineProps({
		id: {
			type: Number,
			required: true
		},

		title: {
			type: String,
			required: true
		},

		message: {
			type: String,
			required: true
		},

		type: {
			type: String,
			required: true
		}
	});

	const noticesStore = useNoticesStore();

	const deleteNotice = () => {
		noticesStore.delete(props.id);
	};
</script>

<style scoped>
	.app-notice {
		background-color: var(--ion-color-light-tint);
		padding: 20px;
		margin: 20px 0;
    	border-radius: 15px;
	}

	.app-notice-error {
		background-color: var(--app-light-red);
	}

	.app-notice-warning {
		background-color: var(--app-light-orange);
	}

	.app-notice-controls {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
	}

	.app-notice-controls button {
		background-color: transparent;
		width: 25px;
		height: 25px;
	}

	.app-notice-controls button ion-icon {
		display: block;
		width: 25px;
		height: 25px;
	}

	.app-notice-header {
		margin-bottom: 15px;
	}
</style>