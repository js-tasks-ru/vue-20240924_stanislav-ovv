// WeatherAlert
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'WeatherAlert',
	props: {
		senderName: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
	},
	template: `
		<div class="weather-alert">
			<span class="weather-alert__icon">⚠️</span>
			<span class="weather-alert__description">{{ senderName }}: {{ description }}</span>
		</div>
	`,
});