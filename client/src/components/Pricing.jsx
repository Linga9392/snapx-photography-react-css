import "./Pricing.css";

// 3 FIXED LOCAL IMAGES FROM public/images FOLDER
const basic = "/images/pricing-01.jpg";
const standard = "/images/pricing-02.jpg"; 
const advanced = "/images/pricing-03.jpg";

const plans = [
  { 
    image: basic, 
    title: "Basic Plan", 
    price: "$25 USD",
    features: ["Lorem Ipsum Dolor Sit", "Single Lorem Ipsum Dol", "Matriso Venga Hepetus", "Denim Sriracha Kogi", "Digital Photography Awards"]
  },
  { 
    image: standard, 
    title: "Standard Plan", 
    price: "$45 USD",
    features: ["Lorem Ipsum Dolor Sit", "Single Lorem Ipsum Dol", "Matriso Venga Hepetus", "Denim Sriracha Kogi", "Digital Photography Awards"]
  },
  { 
    image: advanced, 
    title: "Advanced Plan", 
    price: "$85 USD",
    features: ["Lorem Ipsum Dolor Sit", "Single Lorem Ipsum Dol", "Matriso Venga Hepetus", "Denim Sriracha Kogi", "Digital Photography Awards"]
  },
];

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <p className="pricing-small">OUR PRICING</p>
        <h2 className="pricing-heading">
          Photography Contest Plans <span>And Price Awards</span>
        </h2>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className="pricing-card" key={index}>
              <div className="pricing-img-box">
                <img src={plan.image} alt={plan.title} loading="lazy" />
              </div>
              <h3>{plan.title}</h3>
              <div className="divider"></div>
              <ul>
                {plan.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <h1>{plan.price}</h1>
              <button className="pricing-btn">Choose This Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;