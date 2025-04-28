/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AppAccordianProps {
  name?: string;
  desc?: string;
  itemKey?: string;
  options: Array<any>;
  onClick: (e: string) => void;
  selectedId?: string | number;
  defaultValue?: number;
  assetId?: number;
}

export default function AppAccordianNew({
  onClick,
  selectedId,
  defaultValue,
  assetId,
  options,
}: AppAccordianProps) {
  return (
    <Accordion
      defaultValue={defaultValue?.toString()}
      type="single"
      style={{ width: "100%" }}
      className="AccordionRoot"
    >
      {options
        ?.filter((asset) => asset?.id === assetId)?.[0]
        ?.criterias?.map((_: any) => (
          <AccordionItem
            // @ts-expect-error "id"
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
