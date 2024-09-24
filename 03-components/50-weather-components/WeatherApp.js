import { defineComponent } from 'vue';
import { getWeatherData } from './weather.service.ts';
import './WeatherApp.css'

import WeatherList from './components/WeatherList.js';

export default defineComponent({
	name: 'WeatherApp',
	components: {
		WeatherList,
	},
	setup(props) {
		const weatherList = getWeatherData();
		return { weatherList };
	},
	template: `
	<div>
		<h1 class="title">Погода в Средиземье</h1>
		<WeatherList :list="weatherList" />
	</div>
	`,
})
