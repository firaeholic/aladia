import type { Meta, StoryObj } from '@storybook/vue3'

import Header from '~/components/Header.vue'



const meta = {
  title: 'Organisms/Header',
  component: Header,

} satisfies Meta<typeof Header>


export default meta
type Story = StoryObj<typeof meta>


export const onEnterCode: Story = {
  args: {
    namae: 'Frank',
    surnamae: 'Fira',
    title: 'Thanks for joining Aladia.',
    details: 'Please enter below the 6-digit code we sent you through your registration e-mail:'
  },
}

export const onWelcome: Story = {
    args: {
      namae: 'Frank',
      surnamae: 'Fira',
      title: 'Thanks for joining Aladia.',
    },
  }







