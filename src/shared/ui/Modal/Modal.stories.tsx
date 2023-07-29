import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate, iste? Accusamus adipisci deleniti fugiat harum in quod voluptate? Accusantium aperiam at atque cupiditate deleniti, dignissimos est fugiat maxime nam nulla quas quasi repudiandae voluptatem. Accusamus aliquid at atque, commodi dicta distinctio dolore dolorum ea est et facere fugiat iste molestiae nemo nihil obcaecati officia placeat quas qui quis repellendus sit, sunt tempore totam voluptate. Accusantium amet cumque expedita illo impedit laborum molestiae, pariatur repellat sed! Consequatur doloremque est et fuga incidunt laboriosam quisquam voluptatem, voluptates. Culpa cumque ea excepturi fugiat fugit labore nam, non placeat reiciendis tempora, veniam voluptatibus.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate, iste? Accusamus adipisci deleniti fugiat harum in quod voluptate? Accusantium aperiam at atque cupiditate deleniti, dignissimos est fugiat maxime nam nulla quas quasi repudiandae voluptatem. Accusamus aliquid at atque, commodi dicta distinctio dolore dolorum ea est et facere fugiat iste molestiae nemo nihil obcaecati officia placeat quas qui quis repellendus sit, sunt tempore totam voluptate. Accusantium amet cumque expedita illo impedit laborum molestiae, pariatur repellat sed! Consequatur doloremque est et fuga incidunt laboriosam quisquam voluptatem, voluptates. Culpa cumque ea excepturi fugiat fugit labore nam, non placeat reiciendis tempora, veniam voluptatibus.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
