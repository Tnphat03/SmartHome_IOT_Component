import React, { useState, useEffect } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin // Register the zoom plugin
);

const ChartComponent: React.FC = () => {
  const [currentData, setCurrentData] = useState(mockData.daily);
  const [menuOpen, setMenuOpen] = useState(false);
  const [realTime, setRealTime] = useState(false);
  const [, setSelectedMonth] = useState<
    keyof typeof mockData.monthly.details | null
  >(null);

  const maxDataPoints = 12;

  // hiển thị và tính toán real time
  useEffect(() => {
    if (realTime) {
      const interval = setInterval(() => {
        const now = new Date();
        const newTime = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        const newTemperature = parseFloat((20 + Math.random() * 10).toFixed(1));
        const newHumidity = parseFloat((50 + Math.random() * 20).toFixed(1));

        setCurrentData((prevData) => {
          const newLabels = [...prevData.labels, newTime].slice(-maxDataPoints);
          const newTemperatures = [
            ...prevData.temperature,
            newTemperature,
          ].slice(-maxDataPoints);
          const newHumidities = [...prevData.humidity, newHumidity].slice(
            -maxDataPoints
          );

          return {
            labels: newLabels,
            temperature: newTemperatures,
            humidity: newHumidities,
          };
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [realTime]);

  //ref hiển thị data tương ứng với button selection
  const handleDataChange = (
    type: "daily" | "weekly" | "monthly" | "yearly" | "realTime"
  ) => {
    setMenuOpen(false);
    if (type === "realTime") {
      setRealTime(true);
      const now = new Date();
      const initialData = Array.from({ length: 12 }, (_, i) => {
        const time = new Date(now.getTime() - (11 - i) * 5 * 1000);
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
    } else {
      setRealTime(false);
      setSelectedMonth(null);
      setCurrentData(mockData[type]);
    }
  };

  const handleMonthChange = (month: keyof typeof mockData.monthly.details) => {
    const selectedMonthData = mockData.monthly.details[month];

    setCurrentData({
      labels: selectedMonthData.labels,
      temperature: selectedMonthData.temperature,
      humidity: selectedMonthData.humidity,
    });

    setSelectedMonth(month);
  };

  // chart style
  const combinedChartData = {
    labels: currentData.labels.slice(-maxDataPoints),
    datasets: [
      {
        type: "line" as const,
        label: "Temperature (°C)",
        data: currentData.temperature.slice(-maxDataPoints),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        yAxisID: "y1",
      },
      {
        type: "line" as const,
        label: "Humidity (%)",
        data: currentData.humidity.slice(-maxDataPoints),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        yAxisID: "y2",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 15,
          },
          boxWidth: 20,
          boxHeight: 0.5,
        },
      },
      title: {
        display: true,
        text: "Temperature and Humidity Chart",
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "xy" as const, // Explicitly type 'xy' as a valid mode
        },
        zoom: {
          enabled: true,
          mode: "x" as const, // Explicitly type 'xy' as a valid mode
          speed: 0.1,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
        // Enable horizontal scrolling by setting a specific `min` and `max`
        min: 0,
        max: maxDataPoints - 1,
        ticks: {
          autoSkip: true,
          maxTicksLimit: 15,
        },
      },
      y1: {
        type: "linear" as const,
        position: "left" as const,
        title: {
          display: true,
          text: "Temperature (°C)",
        },
        ticks: {
          stepSize: 2,
          min: 15,
          max: 35,
        },
      },
      y2: {
        type: "linear" as const,
        position: "right" as const,
        title: {
          display: true,
          text: "Humidity (%)",
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          stepSize: 5,
          min: 40,
          max: 80,
        },
      },
    },
    maintainAspectRatio: false,
    animation: {
      duration: 800,
      easing: "easeInOutCubic" as const,
    },
  };

  return (
    <div className="p-3 bg-white rounded-lg shadow-lg text-black">
      <div className="relative text-right mb-4">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`p-2 rounded-full transition-transform focus:outline-none ${
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
            {/* Monthly dropdown (hiển thị bên phải) */}
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
          </div>
        )}
      </div>

      <div className="border rounded-lg p-2">
        <div className="w-full h-96">
          <Chart type="line" data={combinedChartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
