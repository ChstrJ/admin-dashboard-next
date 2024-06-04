import DashboardCard from "../../components/dashboard/DashboardCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import PostTable from "../../components/posts/PostTable";
import React from 'react'

import { cardData } from "../../../data/cards";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        {cardData.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            icon={card.icon}
            count={card.count}
          />
        ))}
      </div>

      <AnalyticsChart />

      <PostTable limit={5} />
    </>
  );
}
