import { Meta, StoryObj } from '@storybook/vue3';
import announcements_ from './announcements.vue';
const meta = {
	title: 'pages/announcements',
	component: announcements_,
} satisfies Meta<typeof announcements_>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				announcements_,
			},
			props: Object.keys(argTypes),
			template: '<announcements_ v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof announcements_>;
export default meta;
