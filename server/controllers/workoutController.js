const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find().populate('exercises').sort({createdAt: -1});
    res.status(200).json(workouts);
}

const getWorkout = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Document not found'});
    }

    const workout = await Workout.findById(id).populate('exercises');

    if (!workout) {
        return res.status(404).json({error: 'Document not found'});
    }

    res.status(200).json(workout);
}

const createWorkout = async (req, res) => {
    const { title, exercises, weights, reps, sets, notes } = req.body;

    try {
        const workout = await Workout.create({title, exercises, weights, reps, sets, notes});
        res.status(200).json(workout);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updateWorkout = async (req, res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Document not found'});
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    }, {new: true});

    if (!workout) {
        return res.status(404).json({error: 'Document not found'});
    }

    res.status(200).json(workout);
}


const deleteWorkout = async (req, res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Document not found'});
    }

    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout) {
        return res.status(404).json({error: 'Document not found'});
    }

    res.status(200).json(workout);
}

module.exports = { getWorkouts, getWorkout, createWorkout, updateWorkout, deleteWorkout };