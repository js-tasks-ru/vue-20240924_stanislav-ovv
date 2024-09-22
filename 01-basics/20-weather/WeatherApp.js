import { defineComponent } from 'vue';
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts';

export default defineComponent({
	name: 'WeatherApp',
	setup(){
		const weatherList = getWeatherData();
		const getTimeInSeconds = (time)=>{
			const [min, sec] = time.split(':');
			return Number(min) * 60 + Number(sec);
		};
		const getInfo = (item)=>{
			const { weather, dt, temp, humidity, wind_speed, pressure, clouds,
				sunrise, sunset,
			} = item.current;
			const icon = WeatherConditionIcons[weather.id];
			const curTime = getTimeInSeconds(dt);
			const sunriseTime = getTimeInSeconds(sunrise);
			const sunsetTime = getTimeInSeconds(sunset);

			return {
				icon,
				desc: weather.description,
				time: dt,
				temp: (temp - 273.15).toFixed(1),
				humidity, clouds,
				windSpeed: wind_speed.toFixed(2),
				pres: (pressure * 0.75).toFixed(0),
				isNight: curTime < sunriseTime || curTime > sunsetTime,
			}
		};
		// console.log({weatherList});

		return { weatherList, getInfo };
	},

	template: `
	<div>
		<h1 class="title">Погода в Средиземье</h1>

		<ul class="weather-list unstyled-list">
			<li class="weather-card" v-for="item in weatherList" :key="item.geographic_name"
				:class="{ 'weather-card--night': getInfo(item).isNight }" >
				<div class="weather-alert" v-if="item?.alert" >
					<span class="weather-alert__icon">⚠️</span>
					<span class="weather-alert__description">{{ item.alert.sender_name }}: {{ item.alert.description }}</span>
				</div>
				<div>
					<h2 class="weather-card__name">{{ item.geographic_name }}</h2>
					<div class="weather-card__time">{{ getInfo(item).time }}</div>
				</div>
				<div class="weather-conditions">
					<div class="weather-conditions__icon" :title="getInfo(item).desc">{{ getInfo(item).icon }}</div>
					<div class="weather-conditions__temp">{{ getInfo(item).temp }} °C</div>
				</div>
				<div class="weather-details">
					<div class="weather-details__item">
						<div class="weather-details__item-label">Давление, мм рт. ст.</div>
						<div class="weather-details__item-value">{{ getInfo(item).pres }}</div>
					</div>
					<div class="weather-details__item">
						<div class="weather-details__item-label">Влажность, %</div>
						<div class="weather-details__item-value">{{ getInfo(item).humidity }}</div>
					</div>
					<div class="weather-details__item">
						<div class="weather-details__item-label">Облачность, %</div>
						<div class="weather-details__item-value">{{ getInfo(item).clouds }}</div>
					</div>
					<div class="weather-details__item">
						<div class="weather-details__item-label">Ветер, м/с</div>
						<div class="weather-details__item-value">{{ getInfo(item).windSpeed }}</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
	`,
})
