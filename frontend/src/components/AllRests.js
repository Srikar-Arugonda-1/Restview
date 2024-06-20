import React, { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const AllRests = () => {
  const [rests, setRests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sortByRating, setSortByRating] = useState(false);

  useEffect(() => {
    // Check if the URL has the 'sort=top-picks' query parameter
    const params = new URLSearchParams(window.location.search);
    const sort = params.get("sort");
    if (sort === "top-picks") {
      setSortByRating(true);
      params.delete("sort");
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params}`
      );
    }
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/all_rests/")
      .then((res) => {
        setRests(res.data);
      })
      .catch((err) => {
        console.log("Error while fetching all rests", err);
      });
  }, []);

  // const handleAddReview = async (restId) => {
  //   // window.location.href = `/restaurants/add-review/${restId}`;
  //   <Link to></Link>;
  // };

  const handleDeleteReview = async (restId, reviewId) => {
    try {
      const response = await axios.delete(
        `/api/restaurants/${restId}/reviews/${reviewId}`
      );
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const filteredRests = rests.filter((rest) => {
    return (
      rest.rest_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "" || rest.rating === parseInt(filter))
    );
  });

  const sortedRests = sortByRating
    ? [...filteredRests].sort((a, b) => b.rating - a.rating)
    : filteredRests;

  return (
    <div className="snap-start container mx-auto ">
      <h1 className="text-3xl font-bold mb-4">
        <br></br>
      </h1>
      <h1 className="text-3xl font-bold mb-4">Browse Restaurants:</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 p-2 rounded mr-2 flex-1"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-400 p-2 rounded"
        >
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>

        <button
          onClick={() => setSortByRating(!sortByRating)}
          className="ml-2 border border-gray-400 p-2 rounded"
        >
          {sortByRating ? "Unsort by Rating" : "Sort by Rating"}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {sortedRests.map((rest) => (
          <div key={rest.id} className="border p-4">
            <h2 className="font-bold text-xl">{rest.rest_name}</h2>
            <p>{rest.location}</p>

            <p>Rating: </p>
            <Rating
              initialValue={rest.rating}
              size={25}
              readonly={true}
              SVGstyle={{ display: "inline" }}
            />

            <div className="mt-4">
              <Link to={`/restaurants/add-review/${rest.id}`}>
                <button
                  className="border border-black bg-gray text-black px-4 py-2 rounded hover:bg-gray-400 mr-2"
                >
                  Add Review
                </button>
              </Link>
                <Link to={`/reviews?rest=${rest.id}&name=${rest.rest_name}`} className="bg-gray text-black px-4 py-2 rounded hover:underline mr-2">
                  See Reviews
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRests;
