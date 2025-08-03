<template>
	<div class="mouse-effects-container">
		<!-- Spotlight effect -->
		<div class="mouse-spotlight" :style="spotlightStyle"></div>

		<!-- Interactive particles -->
		<div
			v-for="particle in particles"
			:key="particle.id"
			class="particle"
			:style="particle.style"></div>
	</div>
</template>

<script setup>
const mouseX = ref(0);
const mouseY = ref(0);
const particles = ref([]);
let particleId = 0;

// Update mouse position
const updateMousePosition = (e) => {
	mouseX.value = e.clientX;
	mouseY.value = e.clientY;

	// Create new particle occasionally
	if (Math.random() < 0.3) {
		createParticle(e.clientX, e.clientY);
	}
};

// Create a new particle
const createParticle = (x, y) => {
	const id = particleId++;
	const angle = Math.random() * Math.PI * 2;
	const velocity = Math.random() * 2 + 1;
	const size = Math.random() * 4 + 2;
	const life = Math.random() * 2000 + 1000; // 1-3 seconds

	const particle = {
		id,
		x,
		y,
		vx: Math.cos(angle) * velocity,
		vy: Math.sin(angle) * velocity,
		size,
		life,
		maxLife: life,
		style: {
			left: `${x}px`,
			top: `${y}px`,
			width: `${size}px`,
			height: `${size}px`,
			opacity: 0.6,
		},
	};

	particles.value.push(particle);

	// Remove particle after life expires
	setTimeout(() => {
		particles.value = particles.value.filter((p) => p.id !== id);
	}, life);
};

// Animate particles
const animateParticles = () => {
	particles.value.forEach((particle) => {
		particle.x += particle.vx;
		particle.y += particle.vy;
		particle.life -= 16; // Assuming 60fps

		const opacity = (particle.life / particle.maxLife) * 0.6;

		particle.style = {
			left: `${particle.x}px`,
			top: `${particle.y}px`,
			width: `${particle.size}px`,
			height: `${particle.size}px`,
			opacity: Math.max(0, opacity),
		};
	});

	if (process.client) {
		requestAnimationFrame(animateParticles);
	}
};

// Spotlight style
const spotlightStyle = computed(() => ({
	left: `${mouseX.value - 400}px`,
	top: `${mouseY.value - 400}px`,
	background: `radial-gradient(circle, 
      rgba(245, 158, 11, 0.08) 0%, 
      rgba(245, 158, 11, 0.04) 30%, 
      rgba(251, 191, 36, 0.02) 50%,
      transparent 70%
    )`,
}));

onMounted(() => {
	if (process.client) {
		document.addEventListener('mousemove', updateMousePosition, { passive: true });
		animateParticles();
	}
});

onUnmounted(() => {
	if (process.client) {
		document.removeEventListener('mousemove', updateMousePosition);
	}
});
</script>

<style scoped>
.mouse-effects-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	pointer-events: none;
	z-index: 1;
	overflow: hidden;
}

.mouse-spotlight {
	position: absolute;
	width: 800px;
	height: 800px;
	border-radius: 50%;
	pointer-events: none;
	transition: all 0.1s ease-out;
	z-index: 1;
}

.particle {
	position: absolute;
	border-radius: 50%;
	background: linear-gradient(45deg, var(--color-secondary), var(--color-accent));
	pointer-events: none;
	z-index: 2;
	box-shadow: 0 0 6px rgba(245, 158, 11, 0.3);
}

/* Hide on mobile and tablets */
@media (max-width: 1024px) {
	.mouse-effects-container {
		display: none;
	}
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
	.mouse-spotlight,
	.particle {
		display: none !important;
	}
}
</style>
