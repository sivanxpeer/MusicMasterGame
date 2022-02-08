import React from 'react';

const Category = () => {
    // const [categories, setCategories] = useState(["Kanye", "90's Rock Anthems", "Israli Hits"]);
    // setCategories(categories);
    const categories =["Kanye", "90's Rock Anthems", "Israli Hits"];
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
