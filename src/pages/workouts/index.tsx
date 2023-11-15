import WorkoutLayout from "~/components/WorkoutLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your Workouts - TCW",
  description: "Your workouts recently at Tristan's Charity Workouts"
}

export default function WorkoutsIndex() {
  return <>
    <WorkoutLayout>
    </WorkoutLayout>
  </>
}
