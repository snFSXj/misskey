import { Meta, StoryObj } from '@storybook/vue3';
import tag_ from './tag.vue';
const meta = {
	title: 'pages/tag',
	component: tag_,
} satisfies Meta<typeof tag_>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				tag_,
			},
			props: Object.keys(argTypes),
			template: '<tag_ v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'fullscreen',
	},
} satisfies StoryObj<typeof tag_>;
export default meta;
