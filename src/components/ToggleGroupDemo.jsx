import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import "./styles.css";

const ToggleGroupDemo = ({ value, onValueChange }) => {
  // ToggleGroup deals with string values, so we convert to/from strings here.
  return (
    <ToggleGroup.Root
      className="ToggleGroup"
      type="single"
      value={String(value)}
      onValueChange={(val) => {
        // val can be null if nothing selected; guard it.
        if (val === null) return;
        // Convert string value to a number before sending to parent.
        const num = Number(val);
        if (!Number.isNaN(num)) onValueChange(num);
      }}
    >
      <ToggleGroup.Item className="ToggleGroupItem" value="8">
        <p>8</p>
      </ToggleGroup.Item>

      <ToggleGroup.Item className="ToggleGroupItem" value="10">
        <p>10</p>
      </ToggleGroup.Item>

      <ToggleGroup.Item className="ToggleGroupItem" value="12">
        <p>12</p>
      </ToggleGroup.Item>

      <ToggleGroup.Item className="ToggleGroupItem" value="16">
        <p>16</p>
      </ToggleGroup.Item>

      <ToggleGroup.Item className="ToggleGroupItem" value="24">
        <p>24</p>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default ToggleGroupDemo;
