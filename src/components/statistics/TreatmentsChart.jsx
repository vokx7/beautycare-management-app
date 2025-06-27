import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ArrowIcon, StyledSelectInput } from "../styles/StyledSelectInput";
import { SlArrowDown } from "react-icons/sl";
import { StyledRecentAppointmentBox } from "./RecentAppointmentBox";

const getLast12Months = () => {
  const now = new Date();
  const months = [];
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({
      key: `${d.getFullYear()}-${d.getMonth()}`,
      label: d.toLocaleString("default", { month: "short", year: "numeric" }),
      count: 0,
    });
  }
  return months;
};

const groupByLast12Months = (treatments) => {
  const months = getLast12Months();

  treatments.forEach((t) => {
    const d = new Date(t.date);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    const found = months.find((m) => m.key === key);
    if (found) found.count++;
  });

  return months;
};

const groupByYear = (treatments) => {
  const grouped = {};

  treatments.forEach((t) => {
    const year = new Date(t.date).getFullYear();
    if (year >= 2023) {
      grouped[year] = (grouped[year] || 0) + 1;
    }
  });

  return Object.entries(grouped)
    .sort(([a], [b]) => a - b)
    .map(([year, count]) => ({ label: year, count }));
};

export const TreatmentsChart = ({ treatments }) => {
  const [mode, setMode] = useState("monthly");

  const data =
    mode === "monthly"
      ? groupByLast12Months(treatments)
      : groupByYear(treatments);

  return (
    <StyledRecentAppointmentBox style={{ width: "100%", maxWidth: 800 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "10px",
        }}
      >
        <h3 style={{ margin: 0, paddingBottom: "10px", color: "#914141" }}>
          Treatment Statistics
        </h3>
        <div style={{ position: "relative" }}>
          <StyledSelectInput
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="monthly">Last 12 months</option>
            <option value="yearly">Yearly (from 2023)</option>
          </StyledSelectInput>
          <ArrowIcon>
            <SlArrowDown />
          </ArrowIcon>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#914141" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </StyledRecentAppointmentBox>
  );
};
