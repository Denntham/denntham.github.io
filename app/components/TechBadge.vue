<template>
	<span class="tech-badge" :style="badgeStyle">
		{{ tech.name }}
	</span>
</template>

<script setup>
const props = defineProps({
	tech: {
		type: Object,
		required: true,
		validator: (tech) => {
			return tech && typeof tech.name === 'string' && typeof tech.color === 'string';
		},
	},
});

// Unified color system - all using accent (light gold)
const badgeStyle = computed(() => {
	return {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0.5rem 1rem',
		backgroundColor: 'var(--color-accent)',
		color: 'var(--color-background)',
		borderRadius: '0.75rem',
		fontSize: '0.875rem',
		fontWeight: '600',
		border: '2px solid var(--color-accent)',
		transition: 'all 0.3s ease',
		cursor: 'default',
		whiteSpace: 'nowrap',
		minHeight: '36px',
		textAlign: 'center',
	};
});
</script>
