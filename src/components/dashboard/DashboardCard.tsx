import React from "react";
import { Card, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";

export type DashboardCardProps = {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
};

export default function DashboardCard({
  title,
  count,
  icon,
}: DashboardCardProps) {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0 hover:bg-slate-200 w-full">
      <CardContent>
        <h3 className="text-3xl text-center font-bold text-slate-500 dark:text-slate-200 mb-3">
          {title}
        </h3>
        <div className="flex gap-5 justify-center items-center">
          {icon}
          <h2 className="text-xl text-center text-md text-slate-500 font-semibold dark:text-slate-100">
            {count}
          </h2>
        </div>
      </CardContent>
    </Card>
  );
}
