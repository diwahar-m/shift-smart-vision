/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AppVStack from "../mui/AppVStack";
import AppText from "../mui/AppText";

interface AppSelectProps {
  options: any;
  onChange: any;
  value: any;
  label?: string;
}

export default function AppSelectNew({
  options,
  onChange,
  label,
  value,
}: AppSelectProps) {
  console.log(options);
  return (
    <AppVStack sx={{ gap: "10px" }}>
      {label && (
        <AppText sx={{ color: "#a1a1a1", textAlign: "left" }} text={label} />
      )}

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Choose Asset" />
        </SelectTrigger>
        <SelectContent>
          {options?.map((_: any) => (
            <SelectItem key={_?.id} value={_?.id}>
              {_?.asset_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </AppVStack>
  );
}
