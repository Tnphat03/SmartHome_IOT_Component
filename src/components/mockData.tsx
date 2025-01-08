// // mockData.ts
// export interface Announcement {
//   id: number;
//   name: string;
//   dateTime: string;
//   place: string;
//   description: string;
// }

// export const mockAnnouncements: Announcement[] = [
//   {
//     id: 1,
//     name: "MQ-2",
//     dateTime: "Dec 4, 2019 21:42",
//     place: "Room 1",
//     description: "500 ppm",
//   },
//   {
//     id: 2,
//     name: "MQ-2",
//     dateTime: "Dec 4, 2019 21:42",
//     place: "Room 1",
//     description: "500 ppm",
//   },
//   {
//     id: 3,
//     name: "MQ-2",
//     dateTime: "Dec 4, 2019 21:42",
//     place: "Room 1",
//     description: "500 ppm",
//   },
//   {
//     id: 4,
//     name: "MQ-2",
//     dateTime: "Dec 4, 2019 21:42",
//     place: "Room 1",
//     description: "500 ppm",
//   },
//   {
//     id: 5,
//     name: "MQ-2",
//     dateTime: "Dec 4, 2019 21:42",
//     place: "Room 1",
//     description: "500 ppm",
//   },
// ];
// mockData.ts
export interface WeatherData {
  labels: string[];
  temperature: number[];
  humidity: number[];
}

export interface MonthlyDetails {
  [month: string]: WeatherData;
}

export const mockData = {
  daily: {
    labels: Array.from({ length: 24 }, (_, i) => `${i}`),
    temperature: Array.from({ length: 24 }, () =>
      parseFloat((20 + Math.random() * 10).toFixed(1))
    ),
    humidity: Array.from({ length: 24 }, () =>
      parseFloat((50 + Math.random() * 20).toFixed(1))
    ),
  },
  weekly: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    temperature: Array.from({ length: 7 }, () =>
      parseFloat((20 + Math.random() * 10).toFixed(1))
    ),
    humidity: Array.from({ length: 7 }, () =>
      parseFloat((50 + Math.random() * 20).toFixed(1))
    ),
  },
  monthly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    temperature: Array.from({ length: 4 }, () =>
      parseFloat((20 + Math.random() * 10).toFixed(1))
    ),
    humidity: Array.from({ length: 4 }, () =>
      parseFloat((50 + Math.random() * 20).toFixed(1))
    ),
    details: {
      Jan: {
        labels: Array.from({ length: 31 }, (_, i) => `${i + 1}`),
        temperature: Array.from({ length: 31 }, () =>
          parseFloat((20 + Math.random() * 10).toFixed(1))
        ),
        humidity: Array.from({ length: 31 }, () =>
          parseFloat((50 + Math.random() * 20).toFixed(1))
        ),
      },
      Feb: {
        labels: Array.from({ length: 28 }, (_, i) => `${i + 1}`),
        temperature: Array.from({ length: 28 }, () =>
          parseFloat((20 + Math.random() * 10).toFixed(1))
        ),
        humidity: Array.from({ length: 28 }, () =>
          parseFloat((50 + Math.random() * 20).toFixed(1))
        ),
      },
      Mar: {
        labels: Array.from({ length: 31 }, (_, i) => `${i + 1}`),
        temperature: Array.from({ length: 31 }, () =>
          parseFloat((20 + Math.random() * 10).toFixed(1))
        ),
        humidity: Array.from({ length: 31 }, () =>
          parseFloat((50 + Math.random() * 20).toFixed(1))
        ),
      },
      Apr: {
        labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
        temperature: Array.from({ length: 30 }, () =>
          parseFloat((20 + Math.random() * 10).toFixed(1))
        ),
        humidity: Array.from({ length: 30 }, () =>
          parseFloat((50 + Math.random() * 20).toFixed(1))
        ),
      },
      May: {
        labels: Array.from({ length: 31 }, (_, i) => `${i + 1}`),
        temperature: Array.from({ length: 31 }, () =>
          parseFloat((20 + Math.random() * 10).toFixed(1))
        ),
        humidity: Array.from({ length: 31 }, () =>
          parseFloat((50 + Math.random() * 20).toFixed(1))
        ),
      },
      Jun: {
        labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
        temperature: Array.from({ length: 30 }, () =>
          parseFloat((20 + Math.random() * 10).toFixed(1))
        ),
        humidity: Array.from({ length: 30 }, () =>
          parseFloat((50 + Math.random() * 20).toFixed(1))
        ),
      },
      July: {
        labels: Array.from({ length: 31 }, (_, i) => `${i + 1}`),
        temperature: Array.from({ length: 31 }, () =>
          parseFloat((20 + Math.random() * 10).toFixed(1))
        ),
        humidity: Array.from({ length: 31 }, () =>
          parseFloat((50 + Math.random() * 20).toFixed(1))
        ),
      },
    } as MonthlyDetails,
  },
  yearly: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    temperature: Array.from({ length: 12 }, () =>
      parseFloat((20 + Math.random() * 10).toFixed(1))
    ),
    humidity: Array.from({ length: 12 }, () =>
      parseFloat((50 + Math.random() * 20).toFixed(1))
    ),
  },
};
