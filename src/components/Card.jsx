import React, { useContext } from 'react';
import '../styles/card.css';
import UserIcon from './UserIcon';
import { LuMoreHorizontal } from 'react-icons/lu';
import { getStatusIcon } from '../utils/helper';
import TicketContext from '../context/TicketContext'; 

function Card({ ticket, hideStatusIcon, hideProfileIcon }) {

  const { userData } = useContext(TicketContext);

  const user = userData[ticket.userId];

  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {!hideProfileIcon && user && <UserIcon name={user.name} available={user.available} />}
      </div>
      <div className='middle-container'>
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        <div className='more-icon-container'>
          <LuMoreHorizontal color="#797d84" />
        </div>
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
