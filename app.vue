<template>
	<div>
		<NuxtErrorBoundary>
			<NuxtPage />
			<template #error="{ error, clearError }">
				<div
					class="min-h-screen flex items-center justify-center px-6"
					style="background-color: var(--color-background)">
					<div class="text-center">
						<div class="mb-8">
							<h1 class="text-6xl font-bold mb-4" style="color: var(--color-primary)">
								{{ getErrorCode(error) }}
							</h1>
							<h2
								class="text-2xl font-semibold mb-2"
								style="color: var(--color-text)">
								{{ getErrorTitle(error) }}
							</h2>
							<p class="mb-8" style="color: var(--color-text-secondary)">
								{{ getErrorMessage(error) }}
							</p>
						</div>

						<div class="space-y-4">
							<button
								@click="clearError"
								class="btn-primary inline-flex items-center px-6 py-3 rounded-lg font-medium mr-4">
								<svg
									class="w-5 h-5 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
								</svg>
								Try Again
							</button>

							<NuxtLink
								to="/"
								class="btn-secondary inline-flex items-center px-6 py-3 rounded-lg font-medium">
								<svg
									class="w-5 h-5 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
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
									onmouseover="this.style.color = 'var(--color-secondary)'"
									onmouseleave="this.style.color = 'var(--color-primary)'"
									>contact me</a
								>
								if you think this is a mistake.
							</p>
						</div>
					</div>
				</div>
			</template>
		</NuxtErrorBoundary>
	</div>
</template>

<script setup>
// Global app configuration
useHead({
	htmlAttrs: { lang: 'en' },
	link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
}); // Error handling utility functions
const getErrorCode = (error) => {
	if (!error) return '500';
	return error.statusCode || error.status || '500';
};

const getErrorTitle = (error) => {
	if (!error) return 'Something went wrong';

	const code = getErrorCode(error);
	switch (code) {
		case 404:
		case '404':
			return 'Page Not Found';
		case 500:
		case '500':
			return 'Server Error';
		default:
			return 'Something went wrong';
	}
};

const getErrorMessage = (error) => {
	if (!error) return 'An unexpected error occurred. Please try again.';

	const code = getErrorCode(error);

	// Custom messages based on error code
	switch (code) {
		case 404:
		case '404':
			return "Looks like this page doesn't exist. Maybe it's been moved or deleted?";
		case 500:
		case '500':
			return 'Our server encountered an error. Please try again in a moment.';
		default:
			return (
				error.statusMessage ||
				error.message ||
				'An unexpected error occurred. Please try again.'
			);
	}
};

// Handle unhandled errors
const handleError = (error, instance) => {
	console.error('Global error:', error);
};

// Set up global error handler
onErrorCaptured(handleError);
</script>
