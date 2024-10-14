import type { Meta, StoryObj } from '@storybook/vue3';
import Form from '~/components/Form.vue';


const meta = {
  title: 'Organisms/Form',
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Register: Story = {
  args: {
  },
}

