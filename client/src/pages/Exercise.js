import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ExerciseDetails from "../components/ExerciseDetails";
import Loader from '../components/Loader';
import Section from "../components/Section";

const Exercise = () => {
    const [exercise, setExercise] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchExercises = async () => {
            const response = await fetch(`/api/exercises/${id}`);
            const data = await response.json();
            if (response.ok) {
                setExercise(data);
            }
        }
        fetchExercises();
    }, [id]);

    return (
        <>
            {exercise ? (
                <main>
                    <h1>{exercise.name}</h1>
                    <Section>
                        <ExerciseDetails exercise={exercise} />
                    </Section>
                </main>
            ) : (
                <Loader />
            )}
        </>
    );
}

export default Exercise;