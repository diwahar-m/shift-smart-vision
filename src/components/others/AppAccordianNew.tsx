/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleCheckBig } from "lucide-react";
import AppHStack from "../mui/AppHStack";
import AppText from "../mui/AppText";
import AppVStack from "../mui/AppVStack";
import { TextArea } from "@radix-ui/themes";
import { useContext } from "react";
import { LoginContext } from "@/context";

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
  // @ts-expect-error ""
  const { additionalSpec, setAdditionalSpec } = useContext(LoginContext);
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
          <AccordionItem className="AccordionItem" value={_?.id?.toString()}>
            <AccordionTrigger
              onClick={(e) => {
                setAdditionalSpec();
                // @ts-expect-error "id"
                onClick(e?.target?.id);
              }}
              id={_?.id}
              style={{
                backgroundColor:
                  selectedId == _?.id?.toString() ? "#eedbdb" : "",
              }}
            >
              {selectedId == _?.id?.toString() ? (
                <AppHStack sx={{ gap: "10px" }}>
                  <AppText text={_?.criteria_name} />
                  <CircleCheckBig size="18" color="#1d582c" />
                </AppHStack>
              ) : (
                _?.criteria_name
              )}
            </AccordionTrigger>
            <AccordionContent
              style={{
                padding: "20px 0",
                border: "0 solid #737373",
                borderBottomWidth: "1px",
                textAlign: "left",
              }}
            >
              <AppVStack sx={{ gap: "5px" }}>
                {_?.client_criteria}{" "}
                <AppVStack sx={{ gap: "3px" }}>
                  <AppText
                    variant="subtitle2"
                    text="(Optional)"
                    sx={{
                      alignSelf: "flex-start",
                      marginBottom: "4px",
                      textAlign: "left",
                      color: "#656569",
                    }}
                  />
                  <TextArea
                    // onMouseDown={(e) => e.stopPropagation()}
                    style={{
                      border: "1px solid #a1a1a1",
                      borderRadius: "10px",
                      padding: "6px",
                      minHeight: "80px",
                      maxHeight: "120px",
                      userSelect: "text",
                      WebkitUserSelect: "text",
                      MozUserSelect: "text",
                      msUserSelect: "text",
                    }}
                    resize={"vertical"}
                    variant="classic"
                    value={additionalSpec}
                    onChange={(e) => setAdditionalSpec(e.target.value)}
                    placeholder="Additional Criteria…"
                  />
                </AppVStack>
              </AppVStack>
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}
