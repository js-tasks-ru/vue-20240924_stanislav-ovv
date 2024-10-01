import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: 'CounterApp',
	setup() {
		const count = ref(0);
		const decrement = ()=>{
			if(count.value > 0) count.value--;
		}
		const increment = ()=>{
			if(count.value < 5) count.value++;
		}

		return { count, decrement, increment };
	},
	template: `
		<div class="counter">
			<button
				class="button button--secondary"
				type="button"
				aria-label="Decrement"
				:disabled="count==0"
				@click="decrement"
			>➖</button>

			<span class="count" data-testid="count"> {{ count }} </span>

			<button
				class="button button--secondary"
				type="button"
				aria-label="Increment"
				:disabled="count==5"
				@click="increment"
			>➕</button>
		</div>
	`,
})
