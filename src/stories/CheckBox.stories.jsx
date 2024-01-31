import React from "react";
import { CheckBox } from "components";

export default {
  title: "real_estate/CheckBox",
  component: CheckBox,
};

export const SampleCheckbox = (args) => <CheckBox {...args} />;

SampleCheckbox.args = { label: "Checkbox", inputClassName: "mr-1" };
