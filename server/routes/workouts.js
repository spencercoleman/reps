const express = require('express');
const { 
    getWorkouts,
    getWorkout, 
    createWorkout 
} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getWorkouts);

router.get('/:id', getWorkout);

router.post('/', createWorkout);

router.delete('/:id', (req, res) => {
    res.json({ message: 'Workout deleted' });
});

router.patch('/:id', (req, res) => {
    res.json({ message: 'Workout updated' });
});

module.exports = router;