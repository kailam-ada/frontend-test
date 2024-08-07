function Filter({ categories, selectedCategories, onCategoryChange }) {
  const handleChange = (e) => {
    const { value, checked } = e.target;
    let updatedCategories = [...selectedCategories];
    if (checked) {
      updatedCategories.push(value);
    } else {
      updatedCategories = updatedCategories.filter(
        (category) => category !== value
      );
    }
    onCategoryChange(updatedCategories);
  };

  return (
    <div>
      <h3>Video filter</h3>
      {categories.length === 0 ? (
        <p>No categories available</p>
      ) : (
        <div className="filter">
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                name={category}
                checked={selectedCategories.includes(category)}
                onChange={handleChange}
              />
              {category}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
