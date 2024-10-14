import type { Meta, StoryObj } from '@storybook/vue3'

import Text from '~/components/Text.vue'



const meta = {
  title: 'Atoms/Text',
  component: Text,

} satisfies Meta<typeof Text>


export default meta
type Story = StoryObj<typeof meta>


export const BackToLogin: Story = {
  args: {
    title: "Back To Login"
  },
}

export const InvalidEmail: Story = {
    args: {
      errTitle: "Invalid Email"
    },
}
export const InvalidPassword: Story = {
    args: {
      errTitle: "Invalid Password"
    },
}










