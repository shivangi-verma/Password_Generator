import * as React from "react";
import "./styles.css";

import * as ToggleGroup from "@radix-ui/react-toggle-group";

function ToggleGroupDemo({ value, onValueChange }) {
  return (
    <ToggleGroup.Root
      type="single"
      value={String(value)}
      onValueChange={(val) => {
        if (val === null) {
          onValueChange(value);
          return;
        }
        onValueChange(Number(val));
      }}
      rovingFocus={false}
      disableDeactivation
      className="ToggleGroup"
    >
      <ToggleGroup.Item value="6" className="ToggleGroupItem">
        6
      </ToggleGroup.Item>
      <ToggleGroup.Item value="8" className="ToggleGroupItem">
        8
      </ToggleGroup.Item>
      <ToggleGroup.Item value="10" className="ToggleGroupItem">
        10
      </ToggleGroup.Item>
      <ToggleGroup.Item value="12" className="ToggleGroupItem">
        12
      </ToggleGroup.Item>
      <ToggleGroup.Item value="16" className="ToggleGroupItem">
        16
      </ToggleGroup.Item>
      <ToggleGroup.Item value="24" className="ToggleGroupItem">
        24
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}

export default ToggleGroupDemo;
