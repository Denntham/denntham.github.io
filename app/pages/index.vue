<template>
	<div class="min-h-screen" style="background-color: var(--color-background)">
		<!-- Mouse Effects -->
		<MouseSpotlight />

		<!-- Fixed Navigation -->
		<nav
			class="fixed top-0 w-full z-50 backdrop-blur-lg"
			style="
				background-color: rgba(var(--color-surface-rgb), 0.95);
				border-bottom: 1px solid var(--color-border);
			">
			<div class="max-w-6xl mx-auto px-6 py-4">
				<div class="flex justify-between items-center">
					<NuxtLink to="/" class="text-xl font-semibold" style="color: var(--color-text)">
						<img
							:src="currentLogo"
							alt="Denntham"
							:class="{ 'logo-fade': isLogoChanging }" />
					</NuxtLink>

					<!-- Desktop Navigation -->
					<div class="hidden md:flex space-x-8 items-center">
						<a href="#home" class="nav-link">Home</a>
						<a href="#about" class="nav-link">About</a>
						<a href="#skills" class="nav-link">Skills</a>
						<a href="#experience" class="nav-link">Experience</a>
						<a href="#contact" class="nav-link">Contact</a>
						<DarkModeToggle ref="darkModeToggle" />
					</div>

					<!-- Mobile menu -->
					<div class="md:hidden flex items-center space-x-2">
						<DarkModeToggle ref="darkModeToggle" />
						<button
							@click="mobileMenuOpen = !mobileMenuOpen"
							:class="{ 'mobile-menu-open': mobileMenuOpen }"
							style="color: var(--color-text)"
							aria-label="Toggle mobile menu">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
						</button>
					</div>
				</div>

				<!-- Mobile menu dropdown -->
				<Transition name="mobile-menu">
					<div
						v-show="mobileMenuOpen"
						class="md:hidden mt-4 pb-4"
						style="border-top: 1px solid var(--color-border)">
						<div class="flex flex-col space-y-4 mt-4">
							<a href="#home" class="nav-link" @click="mobileMenuOpen = false"
								>Home</a
							>
							<a href="#about" class="nav-link" @click="mobileMenuOpen = false"
								>About</a
							>
							<a href="#skills" class="nav-link" @click="mobileMenuOpen = false"
								>Skills</a
							>
							<a href="#experience" class="nav-link" @click="mobileMenuOpen = false"
								>Experience</a
							>
							<a href="#contact" class="nav-link" @click="mobileMenuOpen = false"
								>Contact</a
							>
						</div>
					</div>
				</Transition>
			</div>
		</nav>

		<!-- Hero Section -->
		<section
			id="home"
			class="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
			:class="{ 'hero-dark': isDarkMode }">
			<div
				class="absolute inset-0 hero-gradient"
				:class="{ 'hero-gradient-dark': isDarkMode }"></div>

			<!-- Background Pattern Overlay -->
			<div
				class="absolute inset-0 hero-pattern"
				:class="{ 'hero-pattern-dark': isDarkMode }"></div>

			<div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
				<div class="grid lg:grid-cols-10 gap-8 items-center">
					<!-- Content Column -->
					<div class="text-left lg:col-span-7 space-y-8">
						<div class="space-y-8">
							<p class="hero-greeting text-xl md:text-2xl font-medium">Hey there!</p>
							<h1 class="hero-name text-5xl md:text-7xl font-bold leading-tight">
								I'm Dennis
							</h1>
							<RotatingTagline :tags="tagline" />
							<p class="hero-description text-lg md:text-xl opacity-90 max-w-2xl">
								Currently focused on development and architecting web applications
								and enterprise systems.
							</p>
						</div>
						<div
							class="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
							<a href="mailto:dennthamm@proton.me" class="btn-primary-hero">
								<span>Let's connect</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-6">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
								</svg>
							</a>
						</div>
					</div>

					<!-- Image Column -->
					<div class="lg:col-span-3 flex justify-center lg:justify-end">
						<div class="hero-image-placeholder">
							<div class="image-placeholder-content">
								<img :src="avatar" class="rounded-full" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
				</svg>
			</div>
		</section>

		<!-- About Section -->
		<section id="about" class="section-seamless py-36">
			<div class="max-w-4xl mx-auto px-6 text-center">
				<h2 class="section-title text-4xl font-bold mb-16" style="color: var(--color-text)">
					About
				</h2>

				<div class="prose-custom space-y-6 text-left max-w-3xl mx-auto">
					<p>
						I've been buiding software professionally for about 3 years, specializing in
						web applications and API development.My journey started with smaller
						projects and evolved into architecting systems that handle complex,
						high-traffic scenarios.
					</p>
					<p>
						These days I spend most of my time with JavaScript/TypeScript, Node.js, and
						React, plus whatever database that match project requirements. Through
						extensive work on system migrations and API development, which taught me
						that legacy code is both a nightmare and a great teacher.
					</p>
					<p>
						I like working on software systems that creates real impact. There's genuine
						satisfaction in developing features that enhance user experiences and drive
						business outcomes across diverse industries.
					</p>
				</div>
			</div>
		</section>

		<!-- Skills Section -->
		<section id="skills" class="section-seamless py-36">
			<div class="max-w-6xl mx-auto px-6">
				<h2
					class="section-title text-4xl font-bold text-center mb-16"
					style="color: var(--color-text)">
					My Skills
				</h2>

				<div class="grid lg:grid-cols-2 gap-16">
					<!-- Left Column -->
					<div class="space-y-12">
						<!-- Frontend & Mobile -->
						<div class="skill-category">
							<h3 class="skill-category-title">Languages</h3>
							<div class="tech-logo-grid">
								<TechLogo
									v-for="tech in languageTech"
									:key="tech.name"
									:tech="tech" />
							</div>
						</div>

						<!-- Data & Tools -->
						<div class="skill-category">
							<h3 class="skill-category-title">Frontend</h3>
							<div class="tech-logo-grid">
								<TechLogo
									v-for="tech in frontendTech"
									:key="tech.name"
									:tech="tech" />
							</div>
						</div>
					</div>

					<!-- Right Column -->
					<div class="space-y-12">
						<!-- Backend & APIs -->
						<div class="skill-category">
							<h3 class="skill-category-title">Backend & Databases</h3>
							<div class="tech-logo-grid">
								<TechLogo
									v-for="tech in backendTech"
									:key="tech.name"
									:tech="tech" />
							</div>
						</div>

						<!-- Cloud & Infrastructure -->
						<div class="skill-category">
							<h3 class="skill-category-title">Infrastructure & Tools</h3>
							<div class="tech-logo-grid">
								<TechLogo v-for="tech in infraTech" :key="tech.name" :tech="tech" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Experience Section -->
		<section id="experience" class="section-seamless py-36">
			<div class="max-w-4xl mx-auto px-6">
				<h2
					class="section-title text-4xl font-bold text-center mb-16"
					style="color: var(--color-text)">
					Experience
				</h2>

				<div class="space-y-8">
					<ExperienceItem
						v-for="(exp, index) in experience"
						:key="exp.title"
						:title="exp.title"
						:period="exp.period"
						:description="exp.description"
						:current="exp.current"
						:is-last="index === experience.length - 1" />
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section id="contact" class="section-seamless py-36">
			<div class="max-w-4xl mx-auto px-6 text-center">
				<h2 class="section-title text-4xl font-bold mb-8" style="color: var(--color-text)">
					Let's Connect
				</h2>
				<p
					class="text-xl mb-12 max-w-2xl mx-auto"
					style="color: var(--color-text-secondary)">
					I'm always excited to chat about code, systems, and whatever interesting
					challenges you're tackling. Drop me a line if you want to talk shop, explore
					collaboration possibilities, or just say hi.
				</p>

				<div class="flex justify-center mb-8">
					<a href="mailto:dennthamm@proton.me" class="btn-primary-large">
						<span>Send me an email</span>
					</a>
				</div>

				<div class="contact-divider mb-8">
					<span class="contact-or">or</span>
				</div>

				<!-- Social Links -->
				<div class="social-links mb-8">
					<div class="social-icons">
						<a
							href="https://github.com/denntham"
							target="_blank"
							class="social-icon"
							aria-label="GitHub">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2rem"
								height="2rem"
								viewBox="0 0 24 24">
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.5 10.5 0 0 1 12 6.32a10.5 10.5 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11" />
							</svg>
						</a>
						<a
							href="https://linkedin.com/in/dennis-tham"
							target="_blank"
							class="social-icon"
							aria-label="LinkedIn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.75rem"
								height="1.75srem"
								viewBox="0 0 24 24">
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M22.037 22h-4.152v-6.496c0-1.55-.026-3.542-2.157-3.542c-2.16 0-2.49 1.688-2.49 3.43V22H9.09V8.64h3.98v1.827h.058c.553-1.05 1.908-2.158 3.928-2.158c4.204 0 4.98 2.766 4.98 6.364zM4.409 6.816A2.407 2.407 0 0 1 2 4.407a2.408 2.408 0 1 1 2.41 2.408M6.486 22H2.33V8.64h4.156z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer class="footer">
			<div class="max-w-6xl mx-auto px-6 py-12">
				<div class="footer-bottom">
					<p class="footer-copyright">
						© {{ currentYear }} Denntham. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
import avatar from '/avatar.jpg';
import brandLogo from '~/assets/images/logo_light.svg?url';
import brandLogoDark from '~/assets/images/logo_dark.svg?url';
import DarkModeToggle from '~/components/DarkModeToggle.vue';
import RotatingTagline from '~/components/RotatingTagline.vue';

// SEO Meta
useHead({
	title: 'Dennis - Software Engineer',
	meta: [
		{
			name: 'description',
			content:
				'Software engineer focused on full-stack development and scalable systems. Currently working with JavaScript, TypeScript, Node.js, and React.',
		},
		{
			name: 'keywords',
			content:
				'software engineer, full-stack developer, JavaScript, TypeScript, Node.js, React, Vue.js',
		},
		{ property: 'og:title', content: 'Dennis - Software Engineer' },
		{
			property: 'og:description',
			content:
				'Full-stack software engineer who enjoys building web applications and backend systems.',
		},
		{ property: 'og:type', content: 'website' },
	],
});

// Reactive data
const mobileMenuOpen = ref(false);
const currentYear = computed(() => new Date().getFullYear());

// Theme state management
const isDarkMode = computed(() => themeState.value.isDark);
const themeState = useState('theme', () => ({
	isDark: true,
	isInitialized: false,
}));

// Logo switching logic
const isLogoChanging = ref(false);
const currentLogo = ref(brandLogoDark);

// Watch for theme changes and update logo
watch(
	isDarkMode,
	async (dark) => {
		// Skip if not initialized or no actual change
		if (!themeState.value.isInitialized) return;

		// Add fade effect
		isLogoChanging.value = true;

		// Wait for fade out
		await new Promise((resolve) => setTimeout(resolve, 150));

		// Switch logo
		currentLogo.value = dark ? brandLogoDark : brandLogo;

		// Remove fade effect
		await new Promise((resolve) => setTimeout(resolve, 50));
		isLogoChanging.value = false;
	},
	{ immediate: false }
);

// Listen for theme changes from DarkModeToggle
onMounted(() => {
	if (import.meta.client) {
		// Watch for theme state initialization
		watch(
			() => themeState.value.isInitialized,
			(isInitialized) => {
				if (isInitialized) {
					// Set initial logo when theme is initialized
					const isDark = themeState.value.isDark;
					currentLogo.value = isDark ? brandLogoDark : brandLogo;
				}
			},
			{ immediate: true }
		);

		window.addEventListener('themeChanged', (event) => {
			// The theme state should already be updated by the watcher
		});
	}
});

const tagline = [
	'a Full Stack Developer',
	'a Software Engineer',
	'a Web Developer',
	'a Caffeinated Coder',
	'an Algo Trader Enthusiast',
];

// Categorized Skills
const languageTech = [
	{ name: 'JavaScript', icon: 'javascript' },
	{ name: 'TypeScript', icon: 'typescript' },
	{ name: 'Python', icon: 'python' },
	{ name: 'Java', icon: 'java' },
	{ name: 'HTML', icon: 'html5' },
	{ name: 'CSS', icon: 'css3' },
	{ name: 'Solidity', icon: 'solidity' },
];

const frontendTech = [
	{ name: 'Flutter', icon: 'flutter' },
	{ name: 'React', icon: 'react' },
	{ name: 'Material UI', icon: 'mui' },
	{ name: 'Tailwind CSS', icon: 'tailwindcss' },
	{ name: 'Ant Design', icon: 'antdesign' },
];

const backendTech = [
	{ name: 'Node.js', icon: 'nodejs' },
	{ name: 'Django', icon: 'django' },
	{ name: 'PostgreSQL', icon: 'postgresql' },
	{ name: 'MongoDB', icon: 'mongodb' },
	{ name: 'MySQL', icon: 'mysql' },
];

const infraTech = [
	{ name: 'AWS', icon: 'aws' },
	{ name: 'Alibaba Cloud', icon: 'alibaba' },
	{ name: 'Docker', icon: 'docker' },
	{ name: 'Firebase', icon: 'firebase' },
	{ name: 'NGINX', icon: 'nginx' },
	{ name: 'Pandas', icon: 'pandas' },
	{ name: 'NumPy', icon: 'numpy' },
	{ name: 'Git', icon: 'git' },
];

// Experience data
const experience = [
	{
		title: 'Full Stack System Engineer',
		period: '2024 - Present',
		description:
			'Building internal tools, managing infrastructure, and developing scalable web applications.',
		current: true,
	},
	{
		title: 'Backend Developer',
		period: '2022 - 2023',
		description: 'API development, database optimization, and large-scale system migrations.',
		current: false,
	},
	{
		title: 'Full Stack Developer',
		period: '2021 - 2022',
		description: 'End-to-end web application development from concept to deployment.',
		current: false,
	},
];
</script>

<style scoped>
/* Logo transition effects */
.logo-container {
	display: flex;
	align-items: center;
	height: 2rem;
}

.logo-image {
	height: 100%;
	width: auto;
	transition: opacity 0.3s ease, transform 0.3s ease;
}

.logo-fade {
	opacity: 0;
	transform: scale(0.95);
}

/* Mobile Menu Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
	transition: all 0.2s ease;
}

.mobile-menu-enter-from {
	opacity: 0;
	transform: translateY(-10px);
}

.mobile-menu-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}

/* Mobile responsiveness */
@media (max-width: 1024px) {
	.grid.lg\\:grid-cols-10 {
		grid-template-columns: 1fr;
		gap: 3rem;
	}

	.lg\\:col-span-7,
	.lg\\:col-span-3 {
		grid-column: span 1;
	}

	.lg\\:justify-end {
		justify-content: center;
	}
}

@media (max-width: 768px) {
	.skill-category {
		margin-bottom: 1.5rem;
	}

	.social-icons {
		gap: 0.75rem;
	}

	.footer-bottom {
		text-align: center;
	}

	.space-y-12 > :not([hidden]) ~ :not([hidden]) {
		margin-top: 2rem;
	}

	.gap-16 {
		gap: 2rem;
	}

	.contact-or::before {
		left: -80px;
		right: -80px;
	}

	.footer-bottom {
		text-align: center;
	}
}
@keyframes slideDown {
	from {
		opacity: 0;
		transform: translateY(-10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
