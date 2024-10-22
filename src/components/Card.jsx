import React, { useContext } from 'react';
import '../styles/card.css';
import UserIcon from './UserIcon';
import { LuMoreHorizontal } from 'react-icons/lu';
import { getStatusIcon } from '../utils/helper';
import TicketContext from '../context/TicketContext';
import NoPriority from '../assets/No-priority.svg';
import LowPriority from '../assets/Img - Low Priority.svg';
import MediumPriority from '../assets/Img - Medium Priority.svg';
import HighPriority from '../assets/Img - High Priority.svg';
import UrgentPriority from '../assets/SVG - Urgent Priority colour.svg';

function Card({ ticket, hideStatusIcon, hideProfileIcon }) {
  const { grouping, userData } = useContext(TicketContext);

  const user = userData[ticket.userId];

  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {!hideProfileIcon && user ? (
          <UserIcon name={user.name} available={user.available} />
        ) : null}
      </div>
      <div className='middle-container'>
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className='title'>
          {ticket.title.length > 50 ? `${ticket.title.slice(0, 50)}...` : ticket.title}
        </div>
      </div>
      <div className='bottom-container'>
        {
          (grouping == 'status' || grouping == 'user') &&
          <div className='more-icon-container'>
            {ticket.priority === 0 && (
              <img src={NoPriority} alt='more-icon' />
            )}
            {ticket.priority === 1 && (
              <img src={LowPriority} alt='more-icon' />
            )}
            {ticket.priority === 2 && (
              <img src={MediumPriority} alt='more-icon' />
            )}
            {ticket.priority === 3 && (
              <img src={HighPriority} alt='more-icon' />
            )}
            {ticket.priority === 4 && (
              <img src={UrgentPriority} alt='more-icon' />
            )}
          </div>
        }

        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
