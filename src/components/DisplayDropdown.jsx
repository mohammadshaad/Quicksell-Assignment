import React, { useCallback, useEffect, useRef, useState, useContext } from 'react';
import '../styles/displayDropdown.css';
import { LuSettings2 } from 'react-icons/lu';
import { BiChevronDown } from 'react-icons/bi';
import TicketContext from '../context/TicketContext'; 
import Filter from '../assets/filter.png';

function DisplayDropdown() {
  const [visible, setVisible] = useState(false);
  const componentRef = useRef(null);


  const { grouping, onSetGrouping, ordering, onSetOrdering } = useContext(TicketContext);

  const openDropdown = useCallback(() => {
    setVisible(true);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setVisible(false);
    }
  }, []);

  const onGroupingChange = useCallback((e) => onSetGrouping(e.target.value), [onSetGrouping]);
  const onOrderingChange = useCallback((e) => onSetOrdering(e.target.value), [onSetOrdering]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='display-dropdown' ref={componentRef}>
      <div className='dropdown-label-container' onClick={openDropdown}>
        <img src={Filter} alt='filter' className='' width={30} height={30}/>
        <div className='dropdown-label'>Display</div>
        <BiChevronDown color='#6b6f76' />
      </div>
      <div className={`dropdown-content-container ${visible ? 'visible' : ''}`}>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Grouping</div>
          <select name='grouping' id='grouping' value={grouping} onChange={onGroupingChange}>
            <option value='status'>Status</option>
            <option value='user'>User</option>
            <option value='priority'>Priority</option>
          </select>
        </div>
        <div className='dropdown-content-row'>
          <div className='dropdown-content-label'>Ordering</div>
          <select name='ordering' id='ordering' value={ordering} onChange={onOrderingChange}>
            <option value='priority'>Priority</option>
            <option value='title'>Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DisplayDropdown;
