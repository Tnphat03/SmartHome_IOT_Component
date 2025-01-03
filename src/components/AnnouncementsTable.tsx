// import React from "react";
// import { mockAnnouncements } from "./mockData";

// const filters = ["All Devices", "MQ-2 Sensor", "Flame Sensor", "Door"];

// const AnnouncementsTable: React.FC = () => {
//   const columns = ["Name", "Date Time", "Place", "Description"];

//   return (
//     <div className="rounded-[15px] flex justify-center items-center p-4">
//       <div className="w-full max-w-6xl bg-[#294646] rounded-lg shadow-md px-5 py-4">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-white font-bold text-lg">Announcements</h3>
//           <div className="flex gap-1">
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 className="px-3 py-1 border border-gray-400 rounded-full text-sm text-gray-800 bg-white hover:bg-gray-300 hover:border-gray-500 transition"
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse border  text-sm text-left text-black bg-white">
//             <thead>
//               <tr className="bg-gray-200">
//                 {columns.map((column, index) => (
//                   <th
//                     key={index}
//                     className="border border-gray-300 px-4 py-2 font-semibold"
//                   >
//                     {column}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {mockAnnouncements.map((announcement) => (
//                 <tr
//                   key={announcement.id}
//                   className="border-t border-gray-300 hover:bg-gray-200"
//                 >
//                   <td className="border border-gray-300 px-4 py-2">
//                     {announcement.name}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {announcement.dateTime}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {announcement.place}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {announcement.description}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnnouncementsTable;

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

export default function AnnouncementsTable() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
