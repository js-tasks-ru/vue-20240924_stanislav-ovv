import { defineComponent, ref, onUnmounted } from 'vue'

export default defineComponent({
	name: 'UiClock',
	setup() {
		const formatTime = ref(new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' }));
		let timer;

		playTimer();
		function playTimer(){
			timer = setInterval(()=>{
				formatTime.value = new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' });
			}, 1000);
		}

		onUnmounted(()=>{
			clearInterval(timer);
		});
		return { formatTime };
	},
	template: `<div class="clock">{{ formatTime }}</div>`,
})
