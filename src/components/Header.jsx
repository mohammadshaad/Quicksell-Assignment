import React, { useContext } from 'react';
import '../styles/header.css';
import DisplayDropdown from './DisplayDropdown';
import TicketContext from '../context/TicketContext'; 

function Header() {

    const { grouping, onSetGrouping, ordering, onSetOrdering } = useContext(TicketContext);

    return (
        <header>
            <DisplayDropdown
                grouping={grouping}
                onSetGrouping={onSetGrouping}
                ordering={ordering}
                onSetOrdering={onSetOrdering}
            />
        </header>
    );
}

export default Header;
