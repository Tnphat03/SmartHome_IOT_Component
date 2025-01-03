// import SensorItem, { ISensor } from "../components/SensorItem";
import FlameSensor from "../components/FlameSensor";
//import RoomCard from "../components/RoomCard";
// import RoomInfor from "../components/RoomInfor";
// import SortDropdown from "../components/SortDropdown";
//import Room from "../components/Room";
import ListingPeople from "../components/ListingPeople";
import AnnouncementsTable from "../components/AnnouncementsTable";
import ListingScheduleCards from "../components/ListingScheduleCards";
function Phat() {
  return (
    // <div className="p-5">
    //   <div className="flex gap-[40px]">
    //     <div className="flex gap-[30px]">
    //       <FlameSensor />
    //       <FlameSensor />
    //       <FlameSensor />
    //       <FlameSensor />
    //     </div>
    //     <div>
    //       <ListingPeople />
    //     </div>
    //   </div>
    //   <div className="relative mt-[30px] flex">
    //     <div className="flex-1">
    //       <ListingScheduleCards />
    //     </div>
    //     <div className="bg-gray-400 absolute top-0 right- h-60" />
    //   </div>

    //   {/* Announcements Table */}
    //   <div className="mt-[100px]">
    //     <AnnouncementsTable />
    //   </div>
    // </div>
    <div className="p-5">
      <div className="flex gap-[40px]">
        {/* 4 FlameSensors */}
        <div className="flex gap-[30px]">
          <FlameSensor />
          <FlameSensor />
          <FlameSensor />
          <FlameSensor />
        </div>
        <div className="flex-1">
          <ListingPeople />
        </div>
      </div>

      <div className="flex gap-[40px] mt-[20px]">
        {/* Khoảng trống để giữ đúng layout */}
        <div className="flex-1" />
        <ListingScheduleCards />
      </div>
      <div className="bg-gray-100 h-64 mt-[30px] mx-[30px]" />
      {/* Announcements Table */}
      <div className="mt-[20px]">
        <AnnouncementsTable />
      </div>
    </div>
  );
}

export default Phat;
