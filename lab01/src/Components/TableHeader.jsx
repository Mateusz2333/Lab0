import React from 'react';

function TableHeader({ title, onSort }) {
    return (
        <th>
            {title}
            <select onChange={(e) => onSort(e.target.value)}>
                <option value="natural">Natural order</option>
                <option value="asc">Ascending order</option>
                <option value="desc">Descending order</option>
            </select>
        </th>
    );
}

export default TableHeader;
