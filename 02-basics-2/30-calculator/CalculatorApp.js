import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
	name: 'CalculatorApp',
	setup() {
		const firstNum = ref(0);
		const secondNum = ref(0);
		const calcType = ref('sum');

		const outNum = computed(()=>{
			if(calcType.value=='sum'){
				return firstNum.value + secondNum.value;
			}
			else if(calcType.value=='subtract'){
				return firstNum.value - secondNum.value;
			}
			else if(calcType.value=='multiply'){
				return firstNum.value * secondNum.value;
			}
			else if(calcType.value=='divide'){
				return firstNum.value / secondNum.value;
			}

			return 0;
		});

		return {
			firstNum, secondNum, calcType,
			outNum,
		};
	},
	template: `
	<div class="calculator">
		<input type="number" aria-label="First operand"
			v-model="firstNum" />

		<div class="calculator__operators">
			<label><input type="radio" name="operator" value="sum"
				v-model="calcType" />➕</label>
			<label><input type="radio" name="operator" value="subtract"
				v-model="calcType" />➖</label>
			<label><input type="radio" name="operator" value="multiply"
				v-model="calcType" />✖</label>
			<label><input type="radio" name="operator" value="divide"
				v-model="calcType" />➗</label>
		</div>

		<input type="number" aria-label="Second operand"
			v-model="secondNum" @input="calculation" />

		<div>=</div>

		<output> {{ outNum }} </output>
	</div>
	`,
})
