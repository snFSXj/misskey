import { Meta, StoryObj } from '@storybook/vue3';
import cpu_ from './cpu.vue';
const meta = {
	title: 'widgets/server-metric/cpu',
	component: cpu_,
} satisfies Meta<typeof cpu_>;
export const Default = {
	render(args, { argTypes }) {
		return {
			components: {
				cpu_,
			},
			props: Object.keys(argTypes),
			template: '<cpu_ v-bind="$props" />',
		};
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof cpu_>;
export default meta;
