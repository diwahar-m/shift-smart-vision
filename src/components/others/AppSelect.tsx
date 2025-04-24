/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { SxProps } from "@mui/material";
import Select from "react-select";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

interface AppSelectProps {
  options: any;
  onChange: any;
}

export default function AppSelect({ options, onChange }: AppSelectProps) {
  // const [isClearable, setIsClearable] = useState(true);
  // const [isSearchable, setIsSearchable] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRtl, setIsRtl] = useState(false);

  return (
    <Select
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          borderColor: "grey",
          width: "200px",
        }),
      }}
      className="basic-single"
      classNamePrefix="select"
      // defaultValue={options}
      isDisabled={false}
      isLoading={false}
      isClearable={true}
      isRtl={false}
      isSearchable={true}
      name="color"
      options={options}
      onChange={(e) => onChange(e)}
    />
  );
}
