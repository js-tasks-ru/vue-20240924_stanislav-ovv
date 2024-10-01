// WeatherCard
import { defineComponent } from 'vue';

import WeatherAlert from './WeatherAlert';
import WeatherConditions from './WeatherConditions';
import WeatherDetails from './WeatherDetails';

export default defineComponent({
	name: 'WeatherCard',
	components: {
		WeatherAlert, WeatherConditions, WeatherDetails,
	},
	props: {
		data: {
			type: Object,
			default: {},
		}
	},
	setup(props) {

	},
	template: `
	<li class="weather-card" :class="{ 'weather-card--night': data?.isNight }" >
		<WeatherAlert v-if="data?.alert"
			:senderName="data.alert.sender_name"
			:description="data.alert.description" />

		<div>
			<h2 class="weather-card__name">{{ data.geographic_name }}</h2>
			<div class="weather-card__time">{{ data.time }}</div>
		</div>

		<WeatherConditions :desc="data.desc" :icon="data.icon" :temp="data.temp" />
		<WeatherDetails
			:pres="data?.pres"
			:humidity="data?.humidity"
			:clouds="data?.clouds"
			:windSpeed="data?.windSpeed" />

	</li>
	`,
});