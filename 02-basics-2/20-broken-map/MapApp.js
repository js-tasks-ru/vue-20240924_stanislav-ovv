import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
	name: 'MapApp',

	setup() {
		// Реактивные переменные для хранения координат метки
		const coords = ref({
			x: 0,
			y: 0
		});

		/**
		 * Обработчик клика по карте для установки координат метки
		 * @param {MouseEvent} event
		 */
		function handleClick(event) {
			const { offsetX, offsetY } = event;
			coords.value = {
				x: offsetX,
				y: offsetY
			}
		}

		return { handleClick, coords };
	},

	template: `
		<div class="map" @click="handleClick">
			<img class="map-image" src="./map.png" alt="Map" draggable="false" />
			<span class="pin" ref="refPin" :style="{ left:coords.x+'px', top:coords.y+'px' }" >📍</span>
		</div>
	`,
})
