import { defineComponent, createApp } from 'vue';

const FormatDate = defineComponent({
	name: 'format-date',
	setup(props) {
		const formatDate = new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' });

		return { formatDate };
	},
	template: `<div class="format-date">Сегодня {{ formatDate }}</div>`,
});

const app = createApp(FormatDate);
app.mount('#app');
