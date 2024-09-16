

import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PopularCategories.css";

function PopularCategories({ setCategory }) {
  const navigate = useNavigate();

  const categories = [
    { name: 'Men', image: 'https://www.news18.com/web-stories/celebrities/nine-of-vicky-kaushals-swoon-worthy-photos/assets/4.jpeg', path: '/category/men' },
    { name: 'Women', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuh4_Ges_mGxjKaTc7XZCMPKeoEzcc3dhUg&s', path: '/category/women' },
    { name: 'Furniture', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtFTOq3wwkujjTQnGzcXfqQWknfJ4xQi3cQ&s', path: '/category/furniture' },
    { name: 'Footwear', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLMgTiTTrl35qYVeLMPL2wMYaglRpzfXlgQ&s', path: '/category/footwear' },
    { name: 'Watches', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGvhrvNk-bROcywArAcoqrtyjOmLF0of6dw&s', path: '/category/watches' },
    { name: 'Pet-Supplies', image: 'https://images.unsplash.com/photo-1668959865262-9666da92ba62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0JTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D', path: "/category/pet-supplies" },
    { name: 'Stationery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5_9XjfKIMHfetrKV3NJY0c_Pmzl_yNYZ9ko8Xl5AO4o_hVqQpiGkpULYqSLRfnLuyFQ&usqp=CAU', path: "/category/stationery" }
  ];

  const handleCategoryClick = (categoryName) => {
    console.log('Category clicked:', categoryName); // Debugging log
    setCategory(categoryName);
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <div className="popular-categories">
      <h1>Popular Categories</h1>
      <div className="categories-row">
        {categories.map((category, index) => (
          <div key={index} className="category-item" onClick={() => handleCategoryClick(category.name)}>
            <img className="coin-image" src={category.image} alt={category.name} />
            <h2 className='popular-catname'>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;



