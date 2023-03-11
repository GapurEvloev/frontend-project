import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import React from "react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLink, AppLInkTheme } from "./AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
  theme: AppLInkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Text",
  theme: AppLInkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Text",
  theme: AppLInkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: "Text",
  theme: AppLInkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Inverted = Template.bind({});
Inverted.args = {
  children: "Text",
  theme: AppLInkTheme.INVERTED,
};

export const InvertedDark = Template.bind({});
InvertedDark.args = {
  children: "Text",
  theme: AppLInkTheme.INVERTED,
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
