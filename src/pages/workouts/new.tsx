import WorkoutLayout from '~/components/WorkoutLayout'
import { useState } from 'react'
import { Exercise, defaultExercise } from '~/types/types'


export default function NewWorkout() {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [exerciseName, setExerciseName] = useState("")
  const [reps, setReps] = useState(0)
  const [sets, setSets] = useState(0)
  const [weight, setWeight] = useState(0)

  return (
    <WorkoutLayout>
      {
        exercises.map((exercise, idx) => {
          const {exercise: exerciseName, sets, reps, weight } = exercise

          return (<div
            className="mx-3 my-5 rounded text-white"
            key={idx}
            >
            <label>Exercise: 
              <input type="text"
                className="rounded text-black"
                value={exerciseName}
                disabled
                />
            </label>
            <label>Reps: 
              <input type="number"
                className="rounded text-black"
                value={reps}
                disabled
                />
            </label>
            
            <label>Sets: 
              <input type="number"
                className="rounded text-black"
                value={sets}
                disabled
                />
            </label>

            <label>Weight: 
              <input type="number"
                className="rounded text-black"
                value={weight}
                disabled
                />
            </label>
          <button 
              className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={() => {
                  setExercises(exercises.toSpliced(idx, 1))
                }}
              >
              Delete Exercise
            </button>
          </div>)
        })
      }

      <div className="mx-3 rounded bg-grey text-white">
        <label>Exercise: 
          <input type="text"
            className="rounded text-black"
            value={exerciseName}
            onChange={(e) => {  
                setExerciseName(e.target.value)
              }}
            />
        </label>
        <label>Reps: 
          <input type="number"
            className="rounded text-black"
            value={reps}
            onChange={(e) => {  
                setReps(e.target.value)
              }}
            />
        </label>
        
        <label>Sets: 
          <input type="number"
            className="rounded text-black"
            value={sets}
            onChange={(e) => {  
                setSets(e.target.value)
              }}
            />
        </label>

        <label>Weight: 
          <input type="number"
            className="rounded text-black"
            value={weight}
            onChange={(e) => {  
                setWeight(e.target.value)
              }}
            />
        </label>

        <button 
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={() => {
              const newExercise = { exercise: exerciseName, reps, sets, weight }
              setExercises([...exercises, newExercise])
            }}
          >
          Add Exercise
        </button>

      </div>
        <button 
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={() => {
              console.log(exercises)
            }}
          >
          Save Workout
        </button>
    </WorkoutLayout>
  )
}
