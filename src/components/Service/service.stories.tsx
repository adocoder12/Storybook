import { Meta, StoryObj } from "@storybook/react";

import Service from "./Service";

const meta: Meta<typeof Service> = {
  title: "Components/Service-Card",
  component: Service,
  tags: ["service", "card", "autodocs"],
  args: {
    title: "Service Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor mauris et ipsum varius, et ultrices ligula cursus. Mauris congue finibus libero sit amet consectetur. Donec pulvinar tortor a velit semper, at sollicitudin risus feugiat. Nunc dictum, lorem eget convallis luctus, odio tortor iaculis diam, in volutpat odio purus quis augue. Nam nibh odio, ultrices nec quam ut, viverra aliquam ligula. Sed velit ante, gravida eget condimentum et, malesuada sit amet nibh. Etiam et massa in felis finibus posuere. Nullam tempus iaculis turpis accumsan sagittis. Quisque id sapien quis ante efficitur tincidunt.",
    img: "https://picsum.photos/500",
  },
};

export default meta;

// stories

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Service Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor mauris et ipsum varius, et ultrices ligula cursus. Mauris congue finibus libero sit amet consectetur. Donec pulvinar tortor a velit semper, at sollicitudin risus feugiat. Nunc dictum, lorem eget convallis luctus, odio tortor iaculis diam, in volutpat odio purus quis augue. Nam nibh odio, ultrices nec quam ut, viverra aliquam ligula. Sed velit ante, gravida eget condimentum et, malesuada sit amet nibh. Etiam et massa in felis finibus posuere. Nullam tempus iaculis turpis accumsan sagittis. Quisque id sapien quis ante efficitur tincidunt.",
    img: "https://picsum.photos/500",
  },
};

/** Grouped stories align the cards in a grid*/

export const Grouped: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        padding: "1.2rem",
      }}
    >
      <Service {...args} />
      <Service {...args} />
      <Service {...args} />
      <Service {...args} />
    </div>
  ),
};
