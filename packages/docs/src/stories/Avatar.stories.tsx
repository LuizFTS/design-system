import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@luizfts-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/luizfts.png',
    alt: 'Luiz Filipe',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
