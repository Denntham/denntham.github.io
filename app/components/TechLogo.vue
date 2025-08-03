<template>
	<div class="tech-logo-item">
		<div class="tech-logo-container">
			<div class="tech-logo-placeholder">
				<div class="tech-logo-icon">
					<component class="h-[50px] w-[50px]" :is="getIcon(tech.icon)" />
				</div>
			</div>
		</div>
		<span class="tech-logo-label">{{ tech.name }}</span>
	</div>
</template>

<script setup>
const getIcon = (id) => defineAsyncComponent(() => import(`@/assets/images/tech-icons/${id}.svg`));

const props = defineProps({
	tech: {
		type: Object,
		required: true,
		validator: (tech) => {
			return tech && typeof tech.name === 'string' && typeof tech.icon === 'string';
		},
	},
});
</script>
