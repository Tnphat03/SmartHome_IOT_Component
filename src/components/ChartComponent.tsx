import React, { useState, useEffect, useCallback } from "react"; // quản lý trạng thái và xử lý logic.
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { RxCaretRight } from "react-icons/rx";
import { mockData } from "./mockData";
import zoomPlugin from "chartjs-plugin-zoom";

// Đăng ký ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const MAX_POINTS = 24; // Tối đa 24 điểm dữ liệu cho daily

const ChartComponent: React.FC = () => {
  const [currentData, setCurrentData] = useState(mockData.daily);
  const [menuOpen, setMenuOpen] = useState(false);
  const [realTime, setRealTime] = useState(false);
  const [zoomRange, setZoomRange] = useState<number[]>([0, 12]);
  const [paused, setPaused] = useState(false);
  const [, setSelectedMonth] = useState<string | null>(null); // Thêm state để lưu tháng được chọn

  // Fetch real-time data
  // trong trường hợp một trong các giá trị trong dependency array ([realTime, paused, currentData.labels.length]) thay đổi thì hàm sẽ hoạt khởi động
  useEffect(() => {
    if (!realTime || paused) return;
    //thực hiện việc cập nhật mỗi 5 giây
    const interval = setInterval(() => {
      const now = new Date();
      const newTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const newTemperature = parseFloat((20 + Math.random() * 10).toFixed(1));
      const newHumidity = parseFloat((50 + Math.random() * 20).toFixed(1));

      setCurrentData((prevData) => ({
        labels: [...prevData.labels, newTime],
        temperature: [...prevData.temperature, newTemperature],
        humidity: [...prevData.humidity, newHumidity],
      }));
      //Tăng phạm vi zoom lên 1 (hiển thị dữ liệu mới)
      setZoomRange((prevRange) => [
        Math.max(0, prevRange[0] + 1),
        Math.min(currentData.labels.length + 1, prevRange[1] + 1),
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, [realTime, paused, currentData.labels.length]); // Thêm currentData.labels.length vào dependency array

  // Change data type
  const handleDataChange = useCallback(
    (type: "daily" | "weekly" | "monthly" | "yearly" | "realTime") => {
      setMenuOpen(false);
      setPaused(false);

      if (type === "realTime") {
        setRealTime(true);
        const now = new Date();
        const initialData = Array.from({ length: MAX_POINTS }, (_, i) => {
          const time = new Date(now.getTime() - (MAX_POINTS - 1 - i) * 5000);
          return {
            time: time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
            temperature: parseFloat((20 + Math.random() * 10).toFixed(1)),
            humidity: parseFloat((50 + Math.random() * 20).toFixed(1)),
          };
        });

        setCurrentData({
          labels: initialData.map((d) => d.time),
          temperature: initialData.map((d) => d.temperature),
          humidity: initialData.map((d) => d.humidity),
        });
        setZoomRange([0, 12]);
      } else {
        setRealTime(false);
        setSelectedMonth(null); // Reset tháng khi thay đổi loại dữ liệu
        setCurrentData(mockData[type]);
        setZoomRange([0, Math.min(mockData[type].labels.length, 12)]);
      }
    },
    []
  );

  // Handle month change for monthly data
  const handleMonthChange = (month: keyof typeof mockData.monthly.details) => {
    // Ensure the month is of type string
    const monthString = month.toString();

    setSelectedMonth(monthString); // Correctly set as string
    setCurrentData(mockData.monthly.details[month]);
    setZoomRange([
      0,
      Math.min(mockData.monthly.details[month].labels.length, 12),
    ]);
  };

  // Handle zoom
  const handleZoomChange = useCallback(
    (direction: "next" | "prev") => {
      setPaused(true);
      setZoomRange((prevRange) => {
        const offset = direction === "next" ? 12 : -12;
        const newStart = Math.max(0, prevRange[0] + offset);
        const newEnd = Math.min(currentData.labels.length, newStart + 12);

        if (direction === "next" && newEnd >= currentData.labels.length) {
          setPaused(false);
        }

        return [newStart, newEnd];
      });
    },
    [currentData.labels.length]
  );

  // Chart data and configuration
  const combinedChartData = {
    labels: currentData.labels.slice(zoomRange[0], zoomRange[1]),
    datasets: [
      {
        type: "line" as const,
        label: "Temperature (°C)",
        data: currentData.temperature.slice(zoomRange[0], zoomRange[1]),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        yAxisID: "y1",
      },
      {
        type: "line" as const,
        label: "Humidity (%)",
        data: currentData.humidity.slice(zoomRange[0], zoomRange[1]),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        yAxisID: "y2",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: { size: 15 },
          boxWidth: 20,
          boxHeight: 0.5,
        },
      },
      title: { display: true, text: "Temperature and Humidity Chart" },
      zoom: {
        pan: { enabled: true, mode: "x" as const },
        zoom: { enabled: true, mode: "x" as const, speed: 0.1 },
      },
    },
    scales: {
      x: {
        title: { display: true, text: "Time" },
        ticks: { autoSkip: true, maxTicksLimit: 15 },
      },
      y1: {
        type: "linear" as const,
        position: "left" as const,
        title: { display: true, text: "Temperature (°C)" },
        ticks: { stepSize: 2, min: 15, max: 35 },
      },
      y2: {
        position: "right" as const,
        title: { display: true, text: "Humidity (%)" },
        grid: { drawOnChartArea: false },
        ticks: { stepSize: 5, min: 40, max: 80 },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="p-3 bg-white rounded-lg shadow-lg text-black">
      {/* button  */}
      <div className="relative text-right mb-4">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`p-2 rounded-full transition-transform ${
            menuOpen ? "rotate-90" : ""
          }`}
        >
          <RxCaretRight className="text-lg" />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
            {["daily", "weekly", "monthly", "yearly", "realTime"].map(
              (type) => (
                <button
                  key={type}
                  onClick={() =>
                    handleDataChange(
                      type as
                        | "daily"
                        | "weekly"
                        | "monthly"
                        | "yearly"
                        | "realTime"
                    )
                  }
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              )
            )}
          </div>
        )}
      </div>

      {/* Dropdown for selecting month when in monthly view */}
      {currentData === mockData.monthly && (
        <div className="absolute top-0 left-full ml-2 w-48 bg-white border rounded-lg shadow-lg max-h-[90px] overflow-y-auto">
          <div className="grid grid-cols-3 gap-2 p-2">
            {Object.keys(mockData.monthly.details).map((month) => (
              <button
                key={month}
                onClick={() =>
                  handleMonthChange(
                    month as keyof typeof mockData.monthly.details
                  )
                }
                className="flex justify-center items-center px-3 py-2 text-sm border rounded-lg hover:bg-gray-100 transition-colors"
              >
                {month.charAt(0).toUpperCase() + month.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* chart */}
      <div className="border rounded-lg p-2">
        <div className="w-full h-96">
          <Chart type="line" data={combinedChartData} options={chartOptions} />
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {zoomRange[0] > 0 && (
            <button
              onClick={() => handleZoomChange("prev")}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-sm text-white rounded-[20px]"
            >
              Previous
            </button>
          )}
          {zoomRange[1] < currentData.labels.length && (
            <button
              onClick={() => handleZoomChange("next")}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-sm  text-white rounded-[20px]"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
