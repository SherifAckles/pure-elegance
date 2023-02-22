
function App() {
  // Define an array of category objects with an id and title property
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Mens",
    },
    {
      id: 5,
      title: "Womens",
    },
  ];

  // Render the list of categories using the map function
  return (
    <div className="categories-container">
      {categories.map(({ title }) => {
        // Render a category container for each category object
        return (
          <div className="category-container">
            {/* <img/> */}
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
