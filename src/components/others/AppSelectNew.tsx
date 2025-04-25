/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AppSelectProps {
  options: any;
  onChange: any;
  value: any;
}

export default function AppSelectNew({
  options,
  onChange,
  value,
}: AppSelectProps) {
  console.log(options);
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {options?.map((_: any) => (
          <SelectItem key={_?.id} value={_?.id}>
            {_?.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
