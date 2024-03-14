import { useLoaderData } from "react-router-dom"

const EditCourse = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <h1>edit</h1>
    </div>
  )
}

export default EditCourse
