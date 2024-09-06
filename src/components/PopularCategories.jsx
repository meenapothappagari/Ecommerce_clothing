

import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PopularCategories.css";

function PopularCategories() {
  const navigate = useNavigate();

  const categories = [
    { name: 'Men', image: 'https://www.news18.com/web-stories/celebrities/nine-of-vicky-kaushals-swoon-worthy-photos/assets/4.jpeg', path: '/category/men' },
    { name: 'Women', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuh4_Ges_mGxjKaTc7XZCMPKeoEzcc3dhUg&s', path: '/category/women' },
    { name: 'Furniture', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtFTOq3wwkujjTQnGzcXfqQWknfJ4xQi3cQ&s', path: '/category/furniture' },
    { name: 'Footwear', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLMgTiTTrl35qYVeLMPL2wMYaglRpzfXlgQ&s', path: '/category/footwear' },
    { name: 'Watches', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGvhrvNk-bROcywArAcoqrtyjOmLF0of6dw&s', path: '/category/watches' },
    { name: 'Pet Supplies', image: 'https://images.unsplash.com/photo-1668959865262-9666da92ba62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0JTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D', path:"/category/pet-supplies" },
    { name: 'Stationery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5_9XjfKIMHfetrKV3NJY0c_Pmzl_yNYZ9ko8Xl5AO4o_hVqQpiGkpULYqSLRfnLuyFQ&usqp=CAU', path: "/category/stationery" }
  ];

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="popular-categories">
      <h1>Popular Categories</h1>
      <div className="categories-row">
        {categories.map((category, index) => (
          <div key={index} className="category-item" onClick={() => handleCategoryClick(category.path)}>
            <img className="coin-image" src={category.image} alt={category.name} />
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./PopularCategories.css";

// function PopularCategories() {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const navigate = useNavigate();

//   const categories = [
//     { name: 'Men', image: 'https://www.news18.com/web-stories/celebrities/nine-of-vicky-kaushals-swoon-worthy-photos/assets/4.jpeg', path: '/category/men', images: ['image1.jpg', 'image2.jpg'] },
//     { name: 'Women', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuh4_Ges_mGxjKaTc7XZCMPKeoEzcc3dhUg&s', path: '/category/women', images: ['image3.jpg', 'image4.jpg'] },
//     { name: 'Furniture', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtFTOq3wwkujjTQnGzcXfqQWknfJ4xQi3cQ&s', path: '/category/furniture', images: ['image5.jpg', 'image6.jpg'] },
//     { name: 'Footwear', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLMgTiTTrl35qYVeLMPL2wMYaglRpzfXlgQ&s', path: '/category/footwear', images: ['image7.jpg', 'image8.jpg'] },
//     { name: 'Watches', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGvhrvNk-bROcywArAcoqrtyjOmLF0of6dw&s', path: '/category/watches', images: ['image9.jpg', 'image10.jpg'] },
//     { name: 'Pet Supplies', image: 'https://images.unsplash.com/photo-1668959865262-9666da92ba62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0JTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D', path: "/category/pet-supplies", images: ['image11.jpg', 'image12.jpg'] },
//     { name: 'Stationery', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5_9XjfKIMHfetrKV3NJY0c_Pmzl_yNYZ9ko8Xl5AO4o_hVqQpiGkpULYqSLRfnLuyFQ&usqp=CAU', path: "/category/stationery", images: ['image13.jpg', 'image14.jpg'] }
//   ];

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="popular-categories">
//       <h1>Popular Categories</h1>
//       <div className="categories-row">
//         {categories.map((category, index) => (
//           <div key={index} className="category-item" onClick={() => handleCategoryClick(category)}>
//             <img className="coin-image" src={category.image} alt={category.name} />
//             <h2>{category.name}</h2>
//           </div>
//         ))}
//       </div>

//       {selectedCategory && (
//         <div className="selected-category">
//           <h2>{selectedCategory.name}</h2>
//           <div className="selected-category-images-row">
//             {selectedCategory.images.map((img, index) => (
//               <img key={index} src={img} alt={`Image ${index}`} className="selected-category-image" />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PopularCategories;
