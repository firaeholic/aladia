import type { Meta, StoryObj } from '@storybook/vue3'

import Textfield from '~/components/Textfield.vue'



const meta = {
  title: 'Molecules/Textfield',
  component: Textfield,

} satisfies Meta<typeof Textfield>


export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
    args: {
      placeholder: "Password",
      
    },
  }

export const ValidEmail: Story = {
  args: {
    value: "someone2@example.com",
    showIcon: true
  },
}

export const InvalidEmail: Story = {
    args: {
      value: "someone2",
      fieldMessage: "Invalid Email",
      showIcon: true
    },
}

export const InvalidPassword: Story = {
    args: {
      value: "Abcde1321!",
      fieldMessage: "Invalid Password",
    },
}

export const PasswordMismatch: Story = {
    args: {
      value: "Abcde1!!",
      fieldMessage: "Passwords don't match",
    },
}

export const PasswordWeakLength: Story = {
    args: {
      value: "Abc1!",
      fieldMessage: "8 character minimum",
    },
}

export const PasswordWeakUppercase: Story = {
    args: {
      value: "aabsdsdc1!",
      fieldMessage: "Upper case letter required",
      messageColor: 'orange'
    },
}

export const PasswordWeakNumber: Story = {
    args: {
      value: "Aasdbcas!",
      fieldMessage: "Number required",
      messageColor: '#f5cb42'
    },
}

export const PasswordWeakSpecial: Story = {
    args: {
      value: "Aasdbcas1",
      fieldMessage: "Symbol required(@$!%*?&)",
      messageColor: 'yellow'
    },
}








