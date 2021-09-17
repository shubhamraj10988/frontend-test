import React, { useState } from 'react';
import data from '../component/data'
import Menu from '../component/Main'
import Categories from '../component/Categories'
const allCategories = ['all', ...new Set(items.map((item) => item.tags))];


function App1() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (tags) => {
    if (tags === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.tags === tags);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our Calance App</h2>
        
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App1;