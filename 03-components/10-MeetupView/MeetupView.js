import { defineComponent } from 'vue';
import { UiAlert, UiContainer } from '@shgk/vue-course-ui';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupCover from './MeetupCover.js';
import MeetupInfo from './MeetupInfo.js';
import './MeetupView.css';

/*
- `MeetupCover` — обложка митапа
- `MeetupDescription` — описание митапа
- `MeetupInfo` — информация о митапе
- `MeetupAgenda` — программа митапа
- `UiContainer` — универсальный контейнер
- `UiAlert` — компонент сообщения
*/

export default defineComponent({
	name: 'MeetupView',
	components: {
		UiAlert, UiContainer,
		MeetupAgenda, MeetupDescription, MeetupCover, MeetupInfo,
	},
	props: {
		meetup: {
			type: Object,
			default: {
				// - `title` — заголовок митапа
				// - `image` — ссылка на изображение обложки митапа
				// - `description` — описание митапа
				// - `agenda` — массив с программой митапа
				// - `organizer` — организатор митапа
				// - `place` — место проведения митапа
				// - `date` — дата проведения митапа
			},
		},
	},
	template: `
		<div>
			<MeetupCover :title="meetup?.title" :image="meetup?.image"></MeetupCover>
			<UiContainer>
				<div class="meetup">
					<div class="meetup__content">
						<h2>Описание</h2>
						<MeetupDescription :description="meetup?.description"></MeetupDescription>
						<h2>Программа</h2>
						<MeetupAgenda v-if="meetup?.agenda?.length" :agenda="meetup?.agenda"></MeetupAgenda>
						<UiAlert v-else="v-else" text="Программа пока пуста..."></UiAlert>
					</div>
					<div class="meetup__aside">
						<MeetupInfo :organizer="meetup?.organizer" :place="meetup?.place" :date="meetup?.date"></MeetupInfo>
						<div class="meetup__aside-buttons"></div>
					</div>
				</div>
			</UiContainer>
		</div>
	`,
});
