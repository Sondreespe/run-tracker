import axios from "axios";

const API_URL = "http://localhost:8000/workouts";

// Hent alle løpeøkter
export const getWorkouts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Legg til en ny løpeøkt
export const addWorkout = async (distance, duration) => {
  await axios.post(API_URL, { distance, duration });
};
