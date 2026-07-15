import "./Categories.css";

// 4 CORRECT IMAGES FROM public/images FOLDER
const categories = [
  {
    icon: "📷",
    title: "Nature Pic Contest",
    count: "128",
    image: "/images/portfolio-01.jpg", // Mountain + Lake = Nature
    btn: "Browse Nature Pic Contests"
  },
  {
    icon: "🦌",
    title: "Random Pic Contest", 
    count: "112",
    image: "/images/portfolio-02.jpg", // Forest = Random
    btn: "Browse Random Pic Contests"
  },
  {
    icon: "👤",
    title: "Portrait Pic Contest",
    count: "64",
    image: "/images/portfolio-03.jpg", // Person standing = Portrait
    btn: "Browse Portrait Pic Contests"
  },
  {
    icon: "🌌",
    title: "Space Pic Contest",
    count: "32",
    image: "/images/portfolio-04.jpg", // Night/Starry = Space
    btn: "Browse Space Pic Contests"
  },
];

function Categories() {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-header">
          <div>
            <p className="categories-small">OUR CATEGORIES</p>
            <h2 className="categories-heading">
              Check Out <span>Popular Contest</span> Categories
            </h2>
          </div>
          <button className="discover-btn">Discover All Categories</button>
        </div>

        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <div className="category-top">
                <span className="category-icon">{cat.icon}</span>
                <div>
                  <h4>{cat.title}</h4>
                  <p><b>{cat.count}</b> Available Contests</p>
                </div>
              </div>
              <div className="category-img-box">
                <img src={cat.image} alt={cat.title} />
              </div>
              <button className="category-btn">{cat.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;