import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";

interface Props {
  onChange: (value: string) => void;
}

const CategorySelect = (props: Props) => {
  const [value, setValue] = useState("");

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const val = event.target.value;
          setValue(val);
          props.onChange(val);
        }}
      >
        <FormControlLabel value={""} control={<Radio />} label="Show all" />
        <FormControlLabel
          value="9daef0d7-bf3c-4f50-921d-8e818c60fe61"
          control={<Radio />}
          label="Greyhound racing"
        />
        <FormControlLabel
          value="161d9be2-e909-4326-8c2c-35ed71fb460b"
          control={<Radio />}
          label="Harness racing"
        />
        <FormControlLabel
          value="4a2788f8-e825-4d36-9894-efd4baf1cfae"
          control={<Radio />}
          label="Horse racing"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CategorySelect;
