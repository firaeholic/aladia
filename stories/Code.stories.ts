import type { Meta, StoryObj } from '@storybook/vue3'

import Codefield from '~/components/Codefield.vue'



const meta = {
  title: 'Organisms/Codefield',
  component: Codefield,

} satisfies Meta<typeof Codefield>


export default meta
type Story = StoryObj<typeof meta>


export const CodeFilled: Story = {
  args: {
    pinValues: ['1', '2', '3', '4', '5', '6']
  },
}

export const CodeUnfilled: Story = {
    args: {
      pinValues: ['', '', '', '', '', '']
    },
  }









