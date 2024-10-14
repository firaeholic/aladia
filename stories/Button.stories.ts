import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '~/components/Button.vue'



const meta = {
  title: 'Molecules/Buttons',
  component: Button,

} satisfies Meta<typeof Button>


export default meta
type Story = StoryObj<typeof meta>


export const Enter: Story = {
  args: {
    title: "Enter"
  },
}

export const EnterMarketplace: Story = {
  args: {
    title: "Enter Markerplace"
  },
}

export const SendEmailAgain: Story = {
  args: {
    title: "Send Email Again"
  },
}









