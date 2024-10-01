import { defineComponent, computed } from 'vue';
import { WeatherConditionIcons } from '../weather.service';

import WeatherCard from './WeatherCard';

export default defineComponent({
	name: 'WeatherList',
	components: {
		WeatherCard,
	},
	props: {
		list:{
			type: Array,
			default: [],
		}
	},
	setup(props) {
		const getTimeInSeconds = (time)=>{
			const [min, sec] = time.split(':');
			return Number(min) * 60 + Number(sec);
		};

		const weatherList = computed(()=>{
			return props.list.map(item=>{
				const { geographic_name, current, alert } = item ?? {};
				const { weather, dt, temp, humidity, wind_speed, pressure, clouds,
					sunrise, sunset,
				} = current ?? {};
				const icon = WeatherConditionIcons[weather.id];
				const curTime = getTimeInSeconds(dt);
				const sunriseTime = getTimeInSeconds(sunrise);
				const sunsetTime = getTimeInSeconds(sunset);

				return {
					alert, geographic_name,
					icon,
					desc: weather.description,
					time: dt,
					temp: (temp - 273.15).toFixed(1),
					humidity, clouds,
					windSpeed: wind_speed.toFixed(2),
					pres: (pressure * 0.75).toFixed(0),
					isNight: curTime < sunriseTime || curTime > sunsetTime,
				}
			});
		});

		return { weatherList };
	},
	template: `
	<ul class="weather-list unstyled-list">
		<WeatherCard v-for="item in weatherList" :key="item.geographic_name"
			:data="item" />
	</ul>
	`,
});