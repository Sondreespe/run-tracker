"use client";
import { useEffect, useState } from "react";
import { getWorkouts } from "../services/workoutService";

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getWorkouts()
      .then(setWorkouts)
      .catch(error => console.error("Feil ved henting av økter:", error));
  }, []);

  return (
    <div>
      <h2>Mine Løpeøkter</h2>
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>
            {workout.date} - {workout.distance} km - {workout.duration} min - 🚀 {workout.pace.toFixed(2)} min/km
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
