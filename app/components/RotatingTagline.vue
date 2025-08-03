<template>
	<div class="rotating-tags">
		<transition name="fade" mode="out-in">
			<span
				class="hero-subtitle text-xl md:text-3xl leading-relaxed tags-item"
				:key="currentIndex">
				{{ tags[currentIndex] }}
			</span>
		</transition>
	</div>
</template>

<script setup>
const currentIndex = ref(0);
let timer = null;

onMounted(() => {
	startRotation();
});

onUnmounted(() => {
	if (timer) {
		clearInterval(timer);
	}
});

const props = defineProps({
	tags: {
		type: Array,
		default: () => ['a Software Engineer', 'a Web Developer', 'a Full Stack Developer'],
	},
	interval: {
		type: Number,
		default: 3000,
	},
	animation: {
		type: String,
		default: 'slide-up', // slide-up, slide-down, scale, flip, bounce
		validator: (value) =>
			['slide-up', 'slide-down', 'scale', 'flip', 'bounce', 'fade'].includes(value),
	},
});

const textList = computed(() => {
	return props.tags || ['a Software Engineer', 'a Web Developer', 'a Full Stack Developer'];
});

const startRotation = () => {
	timer = setInterval(() => {
		currentIndex.value = (currentIndex.value + 1) % textList.value.length;
	}, props.interval);
};
</script>

<style scoped>
.rotating-tags {
	display: inline-block;
	min-height: 1.2em;
	overflow: hidden;
}

.tags-item {
	display: inline-block;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
