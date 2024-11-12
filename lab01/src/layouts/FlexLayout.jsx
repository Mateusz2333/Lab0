import React from 'react';
import useData from '../data/useData';

function FlexLayout({ element: Element }) {
  const items = useData();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {items.map(item => (
        <Element key={item.id} id={item.id} />
      ))}
    </div>
  );
}

export default FlexLayout;
