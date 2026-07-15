import "./PreviousContests.css";

// YOUR LOCAL IMAGES FROM public/images FOLDER
const contest1 = "/images/closed-01.jpg"; // Beach Sunset
const contest2 = "/images/closed-02.jpg"; // Lake + Boat + Mountains
const contest3 = "/images/closed-03.jpg"; // Lake House + Mountains
const contest4 = "/images/featured-image-01.jpg"; // Forest Bridge

const contests = [
  {
    image: contest1,
    participants: "56 Participants",
    pictures: "410 Pictures",
  },
  {
    image: contest2,
    participants: "74 Participants", 
    pictures: "284 Pictures",
  },
  {
    image: contest3,
    participants: "86 Participants",
    pictures: "320 Pictures",
  },
  {
    image: contest4,
    participants: "92 Participants",
    pictures: "450 Pictures",
  },
];

function PreviousContests() {
  return (
    <section className="previous-section">
      <div className="container">
        <p className="previous-small">CLOSED PHOTOGRAPHY CONTESTS</p>
        <h2 className="previous-heading">
          Previous Contests With Handpicked <span>Winners</span>
        </h2>

        <div className="previous-grid">
          {contests.map((contest, index) => (
            <div className="previous-card" key={index}>
              <div className="previous-img-box">
                <img src={contest.image} alt="Contest" />
              </div>
              <div className="previous-stats">
                <div>
                  <h4>{contest.participants}</h4>
                  <p>Number Of Artists</p>
                </div>
                <div>
                  <h4>{contest.pictures}</h4>
                  <p>Submitted Pics</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="previous-btn">Browse Open Contests</button>
      </div>
    </section>
  );
}

export default PreviousContests;