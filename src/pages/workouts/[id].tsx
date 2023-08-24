import WorkoutLayout from "~/components/WorkoutLayout"
import { api } from "~/utils/api";
import { useRouter } from "next/router"

export default function ViewWorkout() {
  const router = useRouter()
  const { data: workout, refetch: refetchWorkout } = api.workout.read.useQuery(router.query.id)

  return (
    <WorkoutLayout>
      <div className="mx-5 my-3 text-2xl text-white text-semibold">Here's the workout you did on {workout?.created_at.toDateString()}</div>

      <table className="mx-5 table-auto text-white text-semibold outline">
        <thead>
          <tr className="outline">
            <th className="px-3 py-3">Exercise</th>
            <th className="px-3 py-3">Sets</th>
            <th className="px-3 py-3" >Reps</th>
            <th className="px-3 py-3">Weight</th>
          </tr>
        </thead>

        <tbody>
        {
          workout?.exercises.map((e, idx) => {
            return (
              <tr
                key={e.idx + e.exercise}
                className="text-center"
                >
                <td className="px-3 py-3">{e.exercise}</td>
                <td className="px-3 py-3">{e.sets}</td>
                <td className="px-3 py-3">{e.reps}</td>
                <td className="px-3 py-3">{e.weight}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </WorkoutLayout>
  )
}
