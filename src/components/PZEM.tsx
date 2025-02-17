import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { IoReloadOutline } from "react-icons/io5"; /

interface PZEMDataProps {
  voltage: number;
  current: number;
  powerFactor: number;
  frequency: number;
  power: number;
  energy: number;
  totalPowerConsumption: number;
}

const PZEM: React.FC<PZEMDataProps> = (props) => {
  // Dữ liệu cho biểu đồ vòng cung
  const gaugeData = [{ value: props.totalPowerConsumption, fill: "#294646" }];

  // Gom gọn thông tin chỉ số vào 1 mảng
  const metrics = [
    { label: "VOLTAGE", value: `${props.voltage}A` },
    { label: "CURRENT", value: `${props.current}A` },
    { label: "POWER FACTOR", value: props.powerFactor },
    { label: "FREQUENCY", value: `${props.frequency}Hz` },
    { label: "POWER", value: `${props.power}W` },
    { label: "ENERGY", value: `${props.energy}Wh` },
  ];

  return (
    <div className="w-[531px] h-[476px] bg-white shadow-lg rounded-2xl p-6">
      {/* Tiêu đề với nút Reload */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">PZEM - 004T</h2>
        <button
          className="p-2 flex items-center justify-center rounded-lg transition bg-white  text-black"
          onClick={() => window.location.reload()}
        >
          <IoReloadOutline size={20} />
        </button>
      </div>

      
      <div className="grid grid-cols-3 gap-4 text-gray-600 mt-2 text-sm space-y-2">
        {metrics.map((item, index) => (
          <div key={index}>
            <p className="font-semibold">{item.label}</p>
            <p className="text-black font-bold">{item.value}</p>
          </div>
        ))}
      </div>



      <div className="flex flex-col items-center mt-4">
        <RadialBarChart
          width={200}
          height={200}
          cx="50%"
          cy="70%"
          innerRadius="100%"
          outerRadius="100%"
          barSize={10}
          data={gaugeData}
          startAngle={180}
          endAngle={0}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 50]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar dataKey="value" background cornerRadius={10} />

          {/* Hiển thị giá trị ở giữa biểu đồ */}
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            fontSize="18"
            fontWeight="bold"
            fill="#294646"
          >
            {props.totalPowerConsumption}
          </text>
        </RadialBarChart>

        {/* Hiển thị giá trị tiêu thụ điện  */}
        <p className="text-lg font-bold text-gray-900 mt-2">
          Total power consumption:{" "}
          <span className="text-green-600">
            {props.totalPowerConsumption} Kw/h
          </span>
        </p>
      </div>
    </div>
  );
};


export default PZEM;
