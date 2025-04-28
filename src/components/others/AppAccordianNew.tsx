import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

interface AppAccordianProps {
  name?: string;
  desc?: string;
  itemKey?: string;
  options: Array<object>;
  onClick: (e: string) => void;
  selectedId?: string | number;
  defaultValue?: number;
  assetId?: number;
}

export default function AppAccordianNew({
  name,
  desc,
  itemKey,
  onClick,
  selectedId,
  defaultValue,
  assetId,
  options,
}: AppAccordianProps) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(desc);
  useEffect(() => {
    console.log(name);
  }, [name]);
  console.log(name);
  return (
    // <Accordion
    //   defaultValue={defaultValue?.toString()}
    //   // value={itemKey}
    //   type="single"
    //   collapsible
    //   onValueChange={(val) => {
    //     console.log(val);
    //     if (val) onClick(val);
    //   }}
    //   style={{ width: "100%" }}
    //   className="AccordionRoot"
    // >
    //   <AccordionItem className="AccordionItem" value={itemKey}>
    //     <AccordionTrigger
    //       style={{ backgroundColor: selectedId === itemKey ? "#ccbcbc" : "" }}
    //     >
    //       {name}
    //     </AccordionTrigger>
    //     <AccordionContent
    //       style={{
    //         padding: "20px 0",
    //         border: "0 solid #737373",
    //         borderBottomWidth: "1px",
    //         textAlign: "left",
    //       }}
    //     >
    //       {desc}
    //     </AccordionContent>
    //   </AccordionItem>
    // </Accordion>
    <Accordion
      defaultValue={defaultValue?.toString()}
      type="single"
      collapsible
      // onValueChange={(val) => {
      //   console.log(val);
      //   if (val) onClick(val);
      // }}
      style={{ width: "100%" }}
      className="AccordionRoot"
    >
      {options
        ?.filter((asset) => asset?.id === assetId)?.[0]
        ?.criterias?.map((_) => (
          <AccordionItem
            onClick={(e) => onClick(e?.target?.id)}
            className="AccordionItem"
            value={_?.id?.toString()}
          >
            <AccordionTrigger
              id={_?.id}
              style={{
                backgroundColor:
                  selectedId == _?.id?.toString() ? "#ccbcbc" : "",
              }}
            >
              {_?.criteria_name}
            </AccordionTrigger>
            <AccordionContent
              style={{
                padding: "20px 0",
                border: "0 solid #737373",
                borderBottomWidth: "1px",
                textAlign: "left",
              }}
            >
              {_?.client_criteria}
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}
