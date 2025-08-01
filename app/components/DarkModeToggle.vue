<template>
	<button
		@click="toggleDarkMode"
		class="dark-mode-toggle"
		:title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
		<Icon
			:name="isDark ? 'heroicons:sun' : 'heroicons:moon'"
			class="dark-mode-icon"
			:class="{ rotate: isDark }" />
	</button>
</template>

<script setup>
const isDark = ref(false);

// Check for saved theme preference or default to light mode
onMounted(() => {
	if (process.client) {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark);
		applyTheme();

		// Watch for system theme changes
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', (e) => {
			if (!localStorage.getItem('theme')) {
				isDark.value = e.matches;
				applyTheme();
			}
		});
	}
});

const toggleDarkMode = () => {
	isDark.value = !isDark.value;
	applyTheme();
	if (process.client) {
		localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
	}
};

const applyTheme = () => {
	if (process.client) {
		if (isDark.value) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
};
</script>
