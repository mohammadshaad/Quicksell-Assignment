import React, { useMemo, useContext } from 'react';
import Card from './Card';
import '../styles/column.css';
import { getPriorityIcon, getStatusIcon } from '../utils/helper';
import UserIcon from './UserIcon';
import TicketContext from '../context/TicketContext'; 
import ThreeDotMenu from '../assets/3 dot menu.svg';
import AddIcon from '../assets/add.svg';    

function Column({ tickets, grouping, groupBy }) {

    const { userData } = useContext(TicketContext);

    const title = useMemo(() => {
        if (grouping === 'status') return groupBy;
        if (grouping === 'priority') return groupBy;
        if (grouping === 'user') return userData[groupBy]?.name;
    }, [grouping, groupBy, userData]);

    const icon = useMemo(() => {
        if (grouping === 'status') return getStatusIcon(groupBy);
        if (grouping === 'priority') return getPriorityIcon(groupBy);
        if (grouping === 'user') {
            const user = userData[groupBy];
            return user ? <UserIcon name={user.name} available={user.available} /> : null;
        }
    }, [grouping, groupBy, userData]);
    
    return (
        <div className='column'>
            <div className='column-header'>
                <div className='column-header-left-container'>
                    {icon}
                    <div className='column-title'>
                        {title}
                        <span className='count'>{tickets.length}</span>
                    </div>
                </div>
                <div className='column-header-right-container'>
                    <img src={AddIcon} alt='add' />
                    <img src={ThreeDotMenu} alt='more' />
                </div>
            </div>
            <div className='cards-container'>
                {tickets.map((ticket) => (
                    <Card
                        key={ticket.id}
                        ticket={ticket}
                        hideStatusIcon={grouping === 'status'}
                        hideProfileIcon={grouping === 'user'}
                    />
                ))}
            </div>
        </div>
    );
}

export default Column;
