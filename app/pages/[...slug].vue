<!-- pages/[...slug].vue -->
<template>
	<div
		class="min-h-screen flex items-center justify-center px-6"
		style="background-color: var(--color-background)">
		<div class="text-center">
			<div class="mb-8">
				<h1 class="text-6xl font-bold mb-4" style="color: var(--color-primary)">404</h1>
				<h2 class="text-2xl font-semibold mb-2" style="color: var(--color-text)">
					Page Not Found
				</h2>
				<p class="mb-8" style="color: var(--color-text-secondary)">
					Looks like this page doesn't exist. Maybe it's been moved or deleted?
				</p>
			</div>

			<div class="space-y-4">
				<NuxtLink
					to="/"
					class="btn-primary inline-flex items-center px-6 py-3 rounded-lg font-medium">
					<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
					</svg>
					Back to Home
				</NuxtLink>

				<p class="text-sm" style="color: var(--color-text-secondary)">
					Or you can
					<a
						href="mailto:your.email@example.com"
						class="transition-colors"
						style="color: var(--color-primary)"
						@mouseover="$event.target.style.color = 'var(--color-secondary)'"
						@mouseleave="$event.target.style.color = 'var(--color-primary)'"
						>contact me</a
					>
					if you think this is a mistake.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
// Set 404 status for this page (safe error handling)
try {
	setResponseStatus(404);
} catch (error) {
	// In case setResponseStatus is not available in all contexts
	console.warn('Could not set response status:', error);
}

// SEO for 404 page
useHead({
	title: 'Page Not Found - Pable',
	meta: [{ name: 'robots', content: 'noindex,nofollow' }],
});

// Log 404 for debugging (only in development)
if (process.dev) {
	console.log('404 page accessed:', useRoute().fullPath);
}
</script>
