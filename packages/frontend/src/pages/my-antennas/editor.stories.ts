import { Meta, StoryObj } from '@storybook/vue3';
import editor_ from './editor.vue';
const meta = {
	title: 'pages/my-antennas/editor',
	component: editor_,
} satisfies Meta<typeof editor_>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				editor_,
			},
			props: Object.keys(argTypes),
			template: '<editor_ v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof editor_>;
export default meta;
