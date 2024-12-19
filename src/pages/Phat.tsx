import SensorItem, { ISensor } from "../components/SensorItem";
import FlameSensor from "../components/FlameSensor";
import RoomCard from "../components/RoomCard";
import RoomInfor from "../components/RoomInfor";
import SortDropdown from "../components/SortDropdown";
function Phat() {
  return (
    <>
      <FlameSensor />
      <RoomCard name={"Room 1"} status={"Bình thường"} price={0} />
      <RoomInfor
        imageSrc="https://via.placeholder.com/400"
        roomName="Room 1"
        name="Nguyen Van A"
        birth="20/01/2003"
        rentTime="20/01/2022"
        mq2Sensor="normal"
        flameSensor="normal"
        doorStatus="locked"
        price="3m5"
      />
      <SortDropdown />
    </>
  );
}

export default Phat;
