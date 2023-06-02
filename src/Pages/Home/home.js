import React from "react";
import Features from "../../Components/features/Features";
import Chart from "../../Components/chart/Chart";
import { xAxisData } from "../../data";
import WidgetSm from "../../Components/widgetSm/WidgetSm";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <Features />
        <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
        <div className="homeWidget">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </>
  );
}
