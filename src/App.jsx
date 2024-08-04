import './App.css';

const App = () => {
  const routine = [
    { type: 'Push-ups', completed: true },
    { type: 'Burpees', completed: true },
    { type: 'Mountain Climbers', completed: true },
  ];

  return (
    <>
      <h1>Workout Routine</h1>
      <ul>
        {routine.map((exercise, index) => (
          <li key={index} className={exercise.completed ? 'completed' : 'not-completed'}>
            {exercise.type}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;