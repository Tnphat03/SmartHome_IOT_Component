// import SensorItem, { ISensor } from "../components/SensorItem";
import NewFlameSensor from "../components/NewFlameSensor";
//import RoomCard from "../components/RoomCard";
// import RoomInfor from "../components/RoomInfor";
// import SortDropdown from "../components/SortDropdown";
//import Room from "../components/Room";
import ListingPeople from "../components/ListingPeople";
import AnnouncementsTable from "../components/AnnouncementsTable";
import ListingScheduleCards from "../components/ListingScheduleCards";
import ChartComponent from "../components/ChartComponent";
import LoginForm from "../components/LoginForm";
import PZEM from "../components/PZEM";
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
    <div>
      {/* Dòng chứa FlameSensors và ListingPeople
      <div className="flex gap-x-5 md:gap-x-8 lg:gap-x-10 relative">
        <div className="flex gap-x-2 sm:gap-x-3 md:gap-x-5 flex-grow">
          <NewFlameSensor output={42} />
          <NewFlameSensor output={42} />
          <NewFlameSensor output={42} />
          <NewFlameSensor output={42} />
        </div>
        <div className="flex flex-grow">
          <ListingPeople />
        </div>
        <div className="absolute top-[150px] left-1/2  transform -translate-x-[72%] w-[813px] h-[456px] gap-x-20">
          <ChartComponent />
        </div>
      </div>

      <div className="flex gap-x-20 mt-[20px] items-start">
        <div className="flex-1 "></div>
        <ListingScheduleCards />
      </div>

      <div className="mt-[40px]">
        <AnnouncementsTable />
      </div> */}
      {/* <LoginForm /> */}
      <PZEM
        voltage={3}
        current={3}
        powerFactor={1}
        frequency={50}
        power={3}
        energy={3}
        totalPowerConsumption={23.85}
      />
    </div>
  );
}

export default Phat;
