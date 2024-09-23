import { defineComponent, ref, watch, computed } from 'vue';
import { getMeetup } from './meetupsService.ts';

export default defineComponent({
	name: 'SelectedMeetupApp',
	setup() {
		const numPaginator = ref(1);
		const meetupData = ref({
			title: '',
			image: '',
		});
		const styleMeetupCover = computed(()=>{
			const { image } = meetupData.value;
			if(image) return { '--bg-url': `url(${image})` };

			return '';
		});

		function getPrev(){
			numPaginator.value--;
		}
		function getNext(){
			numPaginator.value++;
		}
		async function getMeetupData(id){
			if(!id) return;
			try {
				const res = await getMeetup(id);
				// console.log(res);
				const { title, image } = res ?? {};

				if(title) meetupData.value.title = title;
				if(image) meetupData.value.image = image;
			} catch (error) {
				console.error(error);
			}
		}

		getMeetupData(numPaginator.value);
		watch(numPaginator, (value)=>{
			const id = Number(value);
			getMeetupData(id)
		});

		return {
			numPaginator, styleMeetupCover, meetupData,
			getPrev, getNext,
		};
	},
	template: `
	<div class="meetup-selector">
		<div class="meetup-selector__control">
			<button class="button button--secondary" type="button"
				:disabled="numPaginator<=1"
				@click="getPrev" >Предыдущий</button>

			<div class="radio-group" role="radiogroup">
				<div class="radio-group__button">
					<input
						v-model="numPaginator"
						id="meetup-id-1"
						class="radio-group__input"
						type="radio"
						name="meetupId"
						value="1"
					/>
					<label for="meetup-id-1" class="radio-group__label">1</label>
				</div>
				<div class="radio-group__button">
					<input
						v-model="numPaginator"
						id="meetup-id-2"
						class="radio-group__input"
						type="radio"
						name="meetupId"
						value="2"
					/>
					<label for="meetup-id-2" class="radio-group__label">2</label>
				</div>
				<div class="radio-group__button">
					<input
						v-model="numPaginator"
						id="meetup-id-3"
						class="radio-group__input"
						type="radio"
						name="meetupId"
						value="3"
					/>
					<label for="meetup-id-3" class="radio-group__label">3</label>
				</div>
				<div class="radio-group__button">
					<input
						v-model="numPaginator"
						id="meetup-id-4"
						class="radio-group__input"
						type="radio"
						name="meetupId"
						value="4"
					/>
					<label for="meetup-id-4" class="radio-group__label">4</label>
				</div>
				<div class="radio-group__button">
					<input
						v-model="numPaginator"
						id="meetup-id-5"
						class="radio-group__input"
						type="radio"
						name="meetupId"
						value="5"
					/>
					<label for="meetup-id-5" class="radio-group__label">5</label>
				</div>
			</div>

			<button class="button button--secondary" type="button"
				:disabled="numPaginator>=5"
				@click="getNext" >Следующий</button>
		</div>

		<div class="meetup-selector__cover" >
			<div class="meetup-cover" :style="styleMeetupCover" >
				<h1 class="meetup-cover__title">{{ meetupData.title }}</h1>
			</div>
		</div>

	</div>
	`,
})
