import React, { useMemo, useContext } from 'react';
import '../styles/grid.css';
import Column from './Column';
import TicketContext from '../context/TicketContext'; 

function Grid({ gridData }) {
  const { grouping } = useContext(TicketContext);
  const keys = useMemo(() => Object.keys(gridData), [gridData]);

  return (
      <div className='grid'>
          {keys.map((k) => (
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
