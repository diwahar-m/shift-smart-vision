import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AppAccordianProps {
  name: string;
  desc: string;
}

export default function AppAccordianNew({ name, desc }: AppAccordianProps) {
  return (
    <Accordion type="single" collapsible style={{ width: "100%" }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>{name}</AccordionTrigger>
        <AccordionContent
          style={{
            padding: "20px 0",
            border: "0 solid #737373",
            borderBottomWidth: "1px",
            textAlign: "left",
          }}
        >
          {desc}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
