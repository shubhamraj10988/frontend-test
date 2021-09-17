import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, name, img, location, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>Rs {price}</h4>
              </header>
              <p className='item-text'>{location}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;