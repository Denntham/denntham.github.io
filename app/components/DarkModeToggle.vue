<template>
	<button
		@click="toggleDarkMode"
		class="h-[24px] w-[24px]"
		:title="isDark ? 'Light mode' : 'Dark mode'">
		<!-- Sun Icon (Light Mode) -->
		<svg
			v-if="isDark"
			class="dark-mode-icon"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
		</svg>

		<!-- Moon Icon (Dark Mode) -->
		<svg v-else class="dark-mode-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
		</svg>
	</button>
</template>

<script setup>
const isDark = ref(true);

// Create global theme state that other components can access
const themeState = useState('theme', () => ({
	isDark: true,
	isInitialized: false,
}));

// Sync local state with global state (both directions)
watch(
	isDark,
	(newValue) => {
		themeState.value.isDark = newValue;
	},
	{ immediate: true }
);

// Watch global state changes
watch(
	() => themeState.value.isDark,
	(newValue) => {
		if (isDark.value !== newValue) {
			isDark.value = newValue;
		}
	}
);

// Check for saved theme preference or default to light mode
onMounted(async () => {
	await nextTick();
	if (import.meta.client || typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme');

		let initialDark = true;
		if (savedTheme) isDark.value = savedTheme === 'dark';
		else {
			// Check system preference, but still default to dark if no preference
			const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

			if (prefersLight) initialDark = false;
			else initialDark = true; // Default to dark

			// Check if light class is already present (user might have manually set it)
			const htmlElement = document.documentElement;
			if (htmlElement.classList.contains('light')) initialDark = false;
		}

		// Set both local and global state
		isDark.value = initialDark;
		themeState.value.isDark = initialDark;
		applyTheme();
		themeState.value.isInitialized = true;

		// Watch for system theme changes
		const mediaQueryDark = window.matchMedia('(prefers-color-scheme: dark)');
		const mediaQueryLight = window.matchMedia('(prefers-color-scheme: light)');

		const handleSystemThemeChange = (e) => {
			// Only auto-switch if user hasn't manually set a preference
			if (!localStorage.getItem('theme')) {
				const prefersLight = mediaQueryLight.matches;

				let newValue = true; // Default to dark
				if (prefersLight) newValue = false;

				isDark.value = newValue;
				themeState.value.isDark = newValue;
				applyTheme();
			}
		};

		mediaQueryDark.addEventListener('change', handleSystemThemeChange);
		mediaQueryLight.addEventListener('change', handleSystemThemeChange);

		// Cleanup listeners on unmount
		onUnmounted(() => {
			mediaQueryDark.removeEventListener('change', handleSystemThemeChange);
			mediaQueryLight.removeEventListener('change', handleSystemThemeChange);
		});
	}
});

const toggleDarkMode = () => {
	const newValue = !isDark.value;
	console.log('DarkModeToggle: Toggling to', newValue ? 'dark' : 'light');

	// Update local state
	isDark.value = newValue;

	// Update global state explicitly
	themeState.value.isDark = newValue;
	applyTheme();

	// Save preference to localStorage
	if (import.meta.client || typeof window !== 'undefined')
		localStorage.setItem('theme', isDark.value ? 'dark' : 'light');

	// Emit custom event for other components to listen to
	window.dispatchEvent(
		new CustomEvent('themeChanged', {
			detail: { isDark: newValue },
		})
	);

	// Force trigger watchers by changing a dummy property
	nextTick(() => {
		themeState.value.isInitialized = !themeState.value.isInitialized;
	});
};

const applyTheme = () => {
	if (import.meta.client) {
		if (isDark.value) document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');
	}
};
defineExpose({
	isDark,
	themeState,
});
</script>
