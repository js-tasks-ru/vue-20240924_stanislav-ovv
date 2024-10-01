// WeatherDetails
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'WeatherDetails',
	props: {
		pres: {
			type: [String, Number],
			default: '',
		},
		humidity: {
			type: [String, Number],
			default: '',
		},
		clouds: {
			type: [String, Number],
			default: '',
		},
		windSpeed: {
			type: [String, Number],
			default: '',
		},
	},
	template: `
		<div class="weather-details">
			<div class="weather-details__item" v-if="pres" >
				<div class="weather-details__item-label">Давление, мм рт. ст.</div>
				<div class="weather-details__item-value">{{ pres }}</div>
			</div>
			<div class="weather-details__item" v-if="humidity" >
				<div class="weather-details__item-label">Влажность, %</div>
				<div class="weather-details__item-value">{{ humidity }}</div>
			</div>
			<div class="weather-details__item" v-if="clouds" >
				<div class="weather-details__item-label">Облачность, %</div>
				<div class="weather-details__item-value">{{ clouds }}</div>
			</div>
			<div class="weather-details__item" v-if="windSpeed" >
				<div class="weather-details__item-label">Ветер, м/с</div>
				<div class="weather-details__item-value">{{ windSpeed }}</div>
			</div>
		</div>
	`,
});