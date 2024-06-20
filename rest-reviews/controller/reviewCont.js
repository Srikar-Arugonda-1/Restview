const pool = require('../model/db');

const getAllRests = async (req, res) => {
    try {
        const allRests = await pool.query('SELECT * FROM restaurant');
        res.json(allRests.rows);
    } catch (err) {
        console.error(err.message);
    }
}

const getRestReview = async (req, res) => {
    try {
        const { id } = req.params;
        const rest = await pool.query('SELECT * FROM reviews WHERE rest_id = $1', [id]);
        res.json(rest.rows);
        
    } catch (err) {
        console.error(err.message);
    }
}

const addReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, review, rating } = req.body;
        const newReview = await pool.query('INSERT INTO reviews (rest_id, user_name,  user_rating, review) VALUES ($1, $2, $3, $4) RETURNING *', [id, name, rating, review]);
        res.json(newReview.rows);

    } catch (err) {
        console.error(err.message);
    }
}

const getAllReviews = async (req, res) => {
    try {
        const allReviews = await pool.query('SELECT * FROM reviews');
        res.json(allReviews.rows);
    } catch (err) {
        console.error(err.message);
    }
}

const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const dltReview = await pool.query('DELETE FROM reviews WHERE id = $1', [id]);
        res.json('Review deleted');
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = {
    getAllRests,
    getRestReview,
    addReview,
    deleteReview,
    getAllReviews
}