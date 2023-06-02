import React from "react";
import "./WidgetLg.css";
import { transActions } from "../../data";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest TransActions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Mount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        {transActions.map((transAction) => (
          <tbody key={transAction.id}>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src={transAction.img} className="widgetLgImg" alt="" />
                <span className="widgetLgName">{transAction.userName}</span>
              </td>
              <td className="widgetLgDate">{transAction.date}</td>
              <td className="widgetLgMount">${transAction.Mount}</td>
              <td className="widgetLgStatus">
                <Button type={transAction.status} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
