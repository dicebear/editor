import type { ConfigStyleOptions, SelectedStyleOptions } from "@/types";

export default function getRandomOptions(
  configStyleOptions: ConfigStyleOptions
): SelectedStyleOptions {
  const result: SelectedStyleOptions = {};

  for (const key in configStyleOptions) {
    if (false === configStyleOptions.hasOwnProperty(key)) {
      continue;
    }

    const styleOption = configStyleOptions[key];
    const values = styleOption.values;

    result[key] = values[Math.floor(Math.random() * values.length)];
  }

  return result;
}
