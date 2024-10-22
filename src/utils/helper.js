import { BiRadioCircle } from "react-icons/bi";
import { LuMoreHorizontal } from "react-icons/lu";
import { TbProgress } from "react-icons/tb";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { AiFillCloseCircle, AiFillWarning } from "react-icons/ai";
import { BiSignal2, BiSignal3, BiSignal4 } from "react-icons/bi";
import IconComponent from "../components/IconComponent";

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "No priority":
      return <IconComponent type="priority" priority="No priority" />;
    case "Low":
      return <IconComponent type="priority" priority="Low" />;
    case "Medium":
      return <IconComponent type="priority" priority="Medium" />;
    case "High":
      return <IconComponent type="priority" priority="High" />;
    case "Urgent":
      return <IconComponent type="priority" priority="Urgent" />;
    default:
      return <IconComponent type="priority" priority="Default" />;
  }
};

export const getStatusIcon = (priority) => {
  switch (priority) {
    case "Backlog":
      return <IconComponent type="status" priority="Backlog" />;
    case "Todo":
      return <IconComponent type="status" priority="Todo" />;
    case "In progress":
      return <IconComponent type="status" priority="In progress" />;
    case "Done":
      return <IconComponent type="status" priority="Done" />;
    case "Canceled":
      return <IconComponent type="status" priority="Canceled" />;
    default:
      return <IconComponent type="status" priority="Canceled" />;
  }
};
