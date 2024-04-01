import type { Meta, StoryObj } from "@storybook/react";

import { ClientCard } from "./Client_card";

const meta: Meta<typeof ClientCard> = {
  title: "Components/Project Card",
  component: ClientCard,
  tags: ["project", "card", "autodocs"],
  argTypes: {
    logo: {
      control: {
        type: "text",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
    backgroundImgUrl: {
      control: { type: "select" },
      options: [
        "https://picsum.photos/500",
        "https://picsum.photos/500",
        "https://picsum.photos/500",
      ],
    },
    category: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

// stories

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "Google",
    backgroundImgUrl: "https://picsum.photos/500",
    category: "Search Engine",
  },
};

/** Grouped stories align the cards in a grid*/

export const Grouped: Story = {
  args: {
    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    title: "Google",
    backgroundImgUrl: "https://picsum.photos/500",
    category: "Search Engine",
  },
  render: (args) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <ClientCard {...args} />
      <ClientCard {...args} />
      <ClientCard {...args} />
      <ClientCard {...args} />
    </div>
  ),
};
