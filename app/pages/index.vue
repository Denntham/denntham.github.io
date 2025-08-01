<!-- pages/index.vue -->
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
						<img :src="brandLogo" alt="brand" class="brand-image" />
					</NuxtLink>

					<div class="hidden md:flex space-x-8 items-center">
						<a href="#home" class="nav-link">Home</a>
						<a href="#about" class="nav-link">About</a>
						<a href="#skills" class="nav-link">Skills</a>
						<a href="#experience" class="nav-link">Experience</a>
						<a href="#contact" class="nav-link">Contact</a>
						<DarkModeToggle />
					</div>

					<!-- Mobile menu -->
					<div class="md:hidden flex items-center space-x-2">
						<DarkModeToggle />
						<button
							@click="mobileMenuOpen = !mobileMenuOpen"
							style="color: var(--color-text)">
							<Icon name="heroicons:bars-3" class="w-6 h-6" />
						</button>
					</div>
				</div>

				<!-- Mobile menu dropdown -->
				<div
					v-show="mobileMenuOpen"
					class="md:hidden mt-4 pb-4"
					style="border-top: 1px solid var(--color-border)">
					<div class="flex flex-col space-y-4 mt-4">
						<a href="#home" class="nav-link" @click="mobileMenuOpen = false">Home</a>
						<a href="#about" class="nav-link" @click="mobileMenuOpen = false">About</a>
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
			</div>
		</nav>

		<!-- Hero Section -->
		<section
			id="home"
			class="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
			<div class="absolute inset-0 hero-gradient"></div>

			<div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
				<div class="space-y-8">
					<div class="space-y-6">
						<h1 class="hero-title text-5xl md:text-7xl font-bold leading-tight pb-8">
							Hey there! I'm Dennis,
						</h1>
						<p
							class="hero-subtitle text-xl md:text-3xl leading-relaxed max-w-4xl mx-auto">
							a software engineer who enjoys building things that actually work.
						</p>
						<p class="hero-description text-lg md:text-xl max-w-3xl mx-auto opacity-90">
							Currently focused on full-stack development and figuring out how to make
							systems scale without breaking.
						</p>
					</div>

					<div class="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
						<!-- Buttons removed as requested -->
					</div>
				</div>
			</div>

			<!-- Animated Scroll Indicator -->
			<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
				<div class="scroll-indicator" @click="scrollToAbout">
					<div class="scroll-arrow">
						<Icon
							name="heroicons:chevron-down"
							class="w-6 h-6"
							style="color: var(--color-text-hero)" />
					</div>
					<div class="scroll-text">scroll down</div>
				</div>
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
						I've been writing code professionally for about 3 years now, mostly building
						web applications and APIs. Started with smaller projects and gradually
						worked my way up to systems handling thousands of users.
					</p>
					<p>
						These days I spend most of my time with JavaScript/TypeScript, Node.js, and
						React, plus whatever database makes sense for the project. I've done a fair
						bit of system migrations and API development, which taught me that legacy
						code is both a nightmare and a great teacher.
					</p>
					<p>
						Currently learning Java and Spring Boot because, well, enterprise
						development is a thing and I figure I should probably understand it. Also
						getting into system design patterns - turns out there's more to scaling than
						just "throw it on AWS and hope for the best."
					</p>
					<p>
						I like working on stuff that people actually use. There's something
						satisfying about building a feature and knowing real humans are clicking on
						it somewhere.
					</p>
				</div>
			</div>
		</section>

		<!-- Skills Section -->
		<section
			id="skills"
			class="section-seamless py-36"
			style="background-color: var(--color-surface)">
			<div class="max-w-6xl mx-auto px-6">
				<h2
					class="section-title text-4xl font-bold text-center mb-16"
					style="color: var(--color-text)">
					My Skills
				</h2>

				<div class="grid lg:grid-cols-2 gap-12">
					<!-- Left Column -->
					<div class="space-y-8">
						<!-- Languages -->
						<div class="skill-category">
							<h3 class="skill-category-title">Languages</h3>
							<div class="tech-grid">
								<TechBadge
									v-for="tech in languages"
									:key="tech.name"
									:tech="tech" />
							</div>
						</div>

						<!-- Backend and APIs -->
						<div class="skill-category">
							<h3 class="skill-category-title">Backend & APIs</h3>
							<div class="tech-grid">
								<TechBadge v-for="tech in backend" :key="tech.name" :tech="tech" />
							</div>
						</div>

						<!-- Frontend and Mobile -->
						<div class="skill-category">
							<h3 class="skill-category-title">Frontend & Mobile</h3>
							<div class="tech-grid">
								<TechBadge v-for="tech in frontend" :key="tech.name" :tech="tech" />
							</div>
						</div>
					</div>

					<!-- Right Column -->
					<div class="space-y-8">
						<!-- Databases -->
						<div class="skill-category">
							<h3 class="skill-category-title">Databases</h3>
							<div class="tech-grid">
								<TechBadge
									v-for="tech in databases"
									:key="tech.name"
									:tech="tech" />
							</div>
						</div>

						<!-- Cloud and Infrastructure -->
						<div class="skill-category">
							<h3 class="skill-category-title">Cloud & Infrastructure</h3>
							<div class="tech-grid">
								<TechBadge v-for="tech in cloud" :key="tech.name" :tech="tech" />
							</div>
						</div>

						<!-- Data and Analytics -->
						<div class="skill-category">
							<h3 class="skill-category-title">Data & Analytics</h3>
							<div class="tech-grid">
								<TechBadge
									v-for="tech in dataAnalytics"
									:key="tech.name"
									:tech="tech" />
							</div>
						</div>

						<!-- Tools and Others -->
						<div class="skill-category">
							<h3 class="skill-category-title">Tools & Others</h3>
							<div class="tech-grid">
								<TechBadge v-for="tech in tools" :key="tech.name" :tech="tech" />
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
		<section
			id="contact"
			class="section-seamless py-36"
			style="background-color: var(--color-surface)">
			<div class="max-w-4xl mx-auto px-6 text-center">
				<h2 class="section-title text-4xl font-bold mb-8" style="color: var(--color-text)">
					Let's Connect
				</h2>
				<p
					class="text-xl mb-12 max-w-2xl mx-auto"
					style="color: var(--color-text-secondary)">
					I'm always excited to chat about code, systems, and whatever interesting
					challenges you're tackling. Got a cool project you're working on? Want to talk
					shop about the latest tech? Or maybe just looking to connect? Drop me a line -
					I'd love to hear from you!
				</p>

				<div class="flex justify-center mb-8">
					<a href="mailto:dennthamm@proton.me" class="btn-primary-large">
						<span>drop me a line</span>
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
							<!-- <Icon name="mdi:github" class="w-6 h-6" /> -->
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

				<p class="text-sm" style="color: var(--color-text-secondary)">
					Response time: As soon as possible
				</p>
			</div>
		</section>

		<!-- Footer -->
		<footer class="footer">
			<div class="max-w-6xl mx-auto px-6 py-12">
				<div class="footer-bottom">
					<p class="footer-copyright">
						© {{ currentYear }} Denntham. Built with Nuxt.js and deployed on GitHub
						Pages.
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
import brandLogo from '~/assets/images/logo_dark.svg';

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
			content: 'Software engineer who enjoys building things that actually work.',
		},
		{ property: 'og:type', content: 'website' },
	],
});

// Reactive data
const mobileMenuOpen = ref(false);
const currentYear = computed(() => new Date().getFullYear());

// Categorized Skills - Unified Gold Accent Color
const languages = [
	{ name: 'JavaScript', color: 'accent' },
	{ name: 'TypeScript', color: 'accent' },
	{ name: 'Python', color: 'accent' },
	{ name: 'HTML/CSS', color: 'accent' },
	{ name: 'Solidity', color: 'accent' },
];

const backend = [
	{ name: 'Node.js', color: 'accent' },
	{ name: 'Django', color: 'accent' },
	{ name: 'Flask', color: 'accent' },
];

const frontend = [
	{ name: 'React', color: 'accent' },
	{ name: 'React Native', color: 'accent' },
	{ name: 'Flutter', color: 'accent' },
	{ name: 'Tailwind CSS', color: 'accent' },
	{ name: 'MUI', color: 'accent' },
	{ name: 'Ant Design', color: 'accent' },
];

const databases = [
	{ name: 'MongoDB', color: 'accent' },
	{ name: 'PostgreSQL', color: 'accent' },
	{ name: 'MySQL', color: 'accent' },
];

const cloud = [
	{ name: 'AWS', color: 'accent' },
	{ name: 'Alibaba Cloud', color: 'accent' },
	{ name: 'Docker', color: 'accent' },
	{ name: 'Firebase', color: 'accent' },
	{ name: 'NGINX', color: 'accent' },
];

const dataAnalytics = [
	{ name: 'Pandas', color: 'accent' },
	{ name: 'NumPy', color: 'accent' },
	{ name: 'Matplotlib', color: 'accent' },
];

const tools = [
	{ name: 'Git', color: 'accent' },
	{ name: 'Postman', color: 'accent' },
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
/* Mobile responsiveness - component specific only */
@media (max-width: 768px) {
	.tech-grid {
		justify-content: center;
	}

	.skill-category {
		margin-bottom: 1.5rem;
	}

	.social-icons {
		gap: 0.75rem;
	}

	.contact-or::before {
		left: -80px;
		right: -80px;
	}

	.footer-bottom {
		text-align: center;
	}
}
</style>
