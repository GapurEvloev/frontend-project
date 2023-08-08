import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title Lorem Ipsum',
  text: 'Text description Lorem Ipsum',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title Lorem Ipsum',
  text: 'Text description Lorem Ipsum',
  theme: TextTheme.ERROR,
};

export const OnlyWithTitle = Template.bind({});
OnlyWithTitle.args = {
  title: 'Title Lorem Ipsum',
};

export const OnlyWithText = Template.bind({});
OnlyWithText.args = {
  text: 'Text description Lorem Ipsum',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title Lorem Ipsum',
  text: 'Text description Lorem Ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyWithTitleDark = Template.bind({});
OnlyWithTitleDark.args = {
  title: 'Title Lorem Ipsum',
};
OnlyWithTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyWithTextDark = Template.bind({});
OnlyWithTextDark.args = {
  text: 'Text description Lorem Ipsum',
};
OnlyWithTextDark.decorators = [ThemeDecorator(Theme.DARK)];
