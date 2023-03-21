import { Meta, StoryObj } from '@storybook/vue3';
import flash_ from './flash.vue';
const meta = {
	title: 'pages/flash/flash',
	component: flash_,
} satisfies Meta<typeof flash_>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				flash_,
			},
			props: Object.keys(argTypes),
			template: '<flash_ v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof flash_>;
export default meta;
