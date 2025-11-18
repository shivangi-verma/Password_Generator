import * as RadioGroup from "@radix-ui/react-radio-group";
import "./LengthSelector.css";

const LengthSelector = ({ value, onValueChange }) => {
  return (
    <RadioGroup.Root
      className="RadioGroup"
      value={String(value)}
      onValueChange={(val) => onValueChange(Number(val))}
    >
      {[6, 8, 10, 12, 16].map((num) => (
        <RadioGroup.Item key={num} value={String(num)} className="RadioButton">
          {num}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};

export default LengthSelector;
