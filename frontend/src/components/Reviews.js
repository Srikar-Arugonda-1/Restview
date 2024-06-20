import { useState, useEffect } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [restId, setRestId] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    const rest = new URLSearchParams(window.location.search).get("rest");
    setRestId(rest);
    console.log(rest);
    const name = new URLSearchParams(window.location.search).get("name");
    setName(name);
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/reviews/`);
        const reviewsData = res.data;
        if (restId != null) {
          const filteredReviews = reviewsData.filter(
            (review) => review.rest_id === parseInt(restId)
          );
          setReviews(filteredReviews);
        } else {
          setReviews(reviewsData);
        }
        console.log(reviews);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, [restId]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        Reviews for {restId != null ? name : "all Restaurants"}
      </h2>
      {reviews.length > 0 ? (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li key={review.id} className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{review.user_name}</h3>
              <p className="mt-2">{review.review}</p>
              <p className="mt-2 text-gray-600">
                Rating: {review.user_rating}/5
              </p>
              <p className="mt-2 text-gray-600">
                Date: {new Date(review.time_stamp).toLocaleDateString()} Time:{" "}
                {new Date(review.time_stamp).toLocaleTimeString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default Reviews;
