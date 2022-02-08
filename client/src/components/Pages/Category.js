import React, { useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState(["Kanye", "90's Rock Anthems", "Israli Hits"]);
    // setCategories(categories);
    return <div className="btns-container cat">
        {/* {categories} */}
        {categories.map((category, i) => {
            return (
                <button className="btn" key={i}
                    category={category}
                >
                    {categories && category}
                </button>
            )
        })}
    </div>;
};

export default Category;
