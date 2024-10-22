import React, { useMemo, useContext } from 'react';
import '../styles/grid.css';
import Column from './Column';
import TicketContext from '../context/TicketContext';

function Grid({ gridData }) {
  const { grouping } = useContext(TicketContext);

  const priorityOrder = {
    'No priority': 0,
    'Urgent': 1,
    'High': 2,
    'Medium': 3,
    'Low': 4
  };

  const sortedKeys = useMemo(() => {
    const keys = Object.keys(gridData);
    
    if (grouping === 'priority') {
      return keys.sort((a, b) => {
        const orderA = priorityOrder[a] !== undefined ? priorityOrder[a] : 999;
        const orderB = priorityOrder[b] !== undefined ? priorityOrder[b] : 999;
        return orderA - orderB;
      });
    }
    
    return keys;
  }, [gridData, grouping]);

  return (
    <div className='grid'>
      {sortedKeys.map((k) => (
        <Column 
          key={k} 
          tickets={gridData[k]} 
          grouping={grouping} 
          groupBy={k} 
        />
      ))}
    </div>
  );
}

export default Grid;