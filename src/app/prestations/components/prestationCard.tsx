import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import React from "react";

type PrestationCardProps = {
  prestation: Prestation;
};
export const PrestationCard = ({ prestation }: PrestationCardProps) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="h-10">{prestation.title}</CardTitle>
        <CardDescription className="prose-sm md:prose-sm text-justify py-8">
          {prestation.text}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-4">
          {prestation.subPart.map((part, idx) => {
            return (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold h-8">{part.title}</h3>

                <ul>
                  {part.items.map((item, idx) => (
                    <li className=" justify-center flex gap-2 " key={idx}>
                      {item.item}
                      {item.tooltip && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="size-3" />
                            </TooltipTrigger>
                            <TooltipContent align="start">
                              {item.tooltip}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
