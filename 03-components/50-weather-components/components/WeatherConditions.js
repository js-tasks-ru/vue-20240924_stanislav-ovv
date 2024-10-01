// WeatherConditions
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'WeatherConditions',
	props: {
		icon: {
			type: String,
			default: '',
		},
		desc: {
			type: String,
			default: '',
		},
		temp: {
			type: [String, Number],
			default: '',
		},
	},
	template: `
		<div class="weather-conditions">
			<div class="weather-conditions__icon" :title="desc">{{ icon }}</div>
			<div class="weather-conditions__temp">{{ temp }} °C</div>
		</div>
	`,
});