import { useLoaderData } from "react-router-dom"

const EditEvent = () => {
  const a =  useLoaderData()
  console.log(a)
  return (
    <div>
      <h1>event</h1>
    </div>
  )
}

export default EditEvent
