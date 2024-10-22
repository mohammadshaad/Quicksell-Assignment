import React, { useMemo, useContext } from 'react';
import Card from './Card';
import '../styles/column.css';
import { GrAdd } from 'react-icons/gr';
import { LuMoreHorizontal } from 'react-icons/lu';
import { getPriorityIcon, getStatusIcon } from '../utils/helper';
import UserIcon from './UserIcon';
import TicketContext from '../context/TicketContext'; 

function Column({ tickets, grouping, groupBy }) {

    const { userIdToData } = useContext(TicketContext);

    const title = useMemo(() => {
        if (grouping === 'status') return groupBy;
        if (grouping === 'priority') return groupBy;
        if (grouping === 'user') return userIdToData[groupBy]?.name;
    }, [grouping, groupBy, userIdToData]);

    const icon = useMemo(() => {
        if (grouping === 'status') return getStatusIcon(groupBy);
        if (grouping === 'priority') return getPriorityIcon(groupBy);
        if (grouping === 'user') {
            const user = userIdToData[groupBy];
            return user ? <UserIcon name={user.name} available={user.available} /> : null;
        }
    }, [grouping, groupBy, userIdToData]);

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
                    <GrAdd color="#797d84" size={12} />
                    <LuMoreHorizontal color="#797d84" size={14} />
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
