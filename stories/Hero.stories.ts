import type { Meta, StoryObj } from '@storybook/vue3'

import Navbar from '~/components/Navbar.vue'



const meta = {
  title: 'Organisms/Hero Banner',
  component: Navbar,

} satisfies Meta<typeof Navbar>


export default meta
type Story = StoryObj<typeof meta>


export const Welcome: Story = {
  args: {
    title: "Welcome to Aladia",
    details: "Create or access your account from here"
  },
}

export const PasswordRecovery: Story = {
  args: {
    title: "Password Recovery",
    details: "Retrieve your password through your registration mail"
  },
}









