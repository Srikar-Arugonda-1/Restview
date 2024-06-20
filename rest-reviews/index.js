const express = require("express");
const cors = require("cors");
const reviewController = require("./controller/reviewCont");
const authController = require("./controller/authCont");
const bodyParser = require("body-parser");
const authTokenVerify = require("./middleware/authToken");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
// register and login
app.post("/api/register", authController.register);
app.post("/api/login", authController.login);

// all restaurants
app.get("/api/all_rests", reviewController.getAllRests);

// reviews
app.get("/api/reviews", reviewController.getAllReviews);

// get all reviews of one restaurant
app.get("/api/rest/:id", reviewController.getRestReview);

// add a review
app.post("/api/add_review/:id", reviewController.addReview);

// delete a review
app.delete("/api/delete_review/:id", reviewController.deleteReview);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
