import React from 'react';
import NoPriorityImg from '../assets/No-priority.svg';
import LowPriorityImg from '../assets/Img - Low Priority.svg';
import MediumPriorityImg from '../assets/Img - Medium Priority.svg';
import HighPriorityImg from '../assets/Img - High Priority.svg';
import UrgentColorPriorityImg from '../assets/SVG - Urgent Priority colour.svg';
import UrgentGreyPriorityImg from '../assets/SVG - Urgent Priority grey.svg';
import BacklogStatusImg from '../assets/Backlog.svg';
import TodoStatusImg from '../assets/To-do.svg';
import InProgressStatusImg from '../assets/in-progress.svg';
import DoneStatusImg from '../assets/Done.svg';
import CanceledStatusImg from '../assets/Cancelled.svg';


const IconComponent = ({ type, priority }) => {
    if (type === 'priority') {
        switch (priority) {
            case "No priority":
                return <img src={NoPriorityImg} alt='No priority' className="w-4 h-4" />;
            case "Low":
                return <img src={LowPriorityImg} alt='Low priority' className="w-4 h-4" />;
            case "Medium":
                return <img src={MediumPriorityImg} alt='Medium priority' className="w-4 h-4" />;
            case "High":
                return <img src={HighPriorityImg} alt='High priority' className="w-4 h-4" />;
            case "Urgent":
                return <img src={UrgentColorPriorityImg} alt='Urgent priority' className="w-4 h-4" />;
            default:
                return <img src={UrgentColorPriorityImg} alt='Urgent priority' className="w-4 h-4" />;
        }
    }

    if (type === 'status') {
        switch (priority) {
            case "Backlog":
                return <img src={BacklogStatusImg} alt='Backlog Status' className="w-4 h-4" />;
            case "Todo":
                return <img src={TodoStatusImg} alt='Todo Status' className="w-4 h-4" />;
            case "In progress":
                return <img src={InProgressStatusImg} alt='In Progress Status' className="w-4 h-4" />;
            case "Done":
                return <img src={DoneStatusImg} alt='Done Status' className="w-4 h-4" />;
            case "Canceled":
                return <img src={CanceledStatusImg} alt='Canceled Status' className="w-4 h-4" />;
            default:
                return <img src={CanceledStatusImg} alt='Canceled Status' className="w-4 h-4" />;
        }
    }

    return null;
};

export default IconComponent;