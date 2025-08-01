<template>
	<div class="experience-item">
		<!-- Timeline dot -->
		<div class="flex items-start space-x-4">
			<div
				class="experience-dot"
				:style="{
					backgroundColor: current ? 'var(--color-secondary)' : 'var(--color-border)',
				}"></div>

			<div class="flex-1 min-w-0">
				<div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
					<h4 class="experience-title">{{ title }}</h4>
					<span
						class="experience-period"
						:style="{
							color: current
								? 'var(--color-secondary)'
								: 'var(--color-text-secondary)',
						}">
						{{ period }}
					</span>
				</div>
				<p class="experience-description">
					{{ description }}
				</p>
			</div>
		</div>

		<!-- Connecting line for non-last items -->
		<div v-if="!isLast" class="experience-line"></div>
	</div>
</template>

<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	period: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	current: {
		type: Boolean,
		default: false,
	},
	isLast: {
		type: Boolean,
		default: false,
	},
});
</script>
