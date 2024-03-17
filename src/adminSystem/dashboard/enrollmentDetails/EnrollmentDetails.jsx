import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";

const EnrollmentDetails = () => {
  const [count, setCount] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [allData, setAllData] = useState([]);
  const rootAxios = useAxios();

  useEffect(() => {
    rootAxios
      .get(
        `/admin/dashboard/enrollment?page=${currentPage}&size=${itemsPerPage}`
      )
      .then((res) => setAllData(res.data));
  }, [currentPage, itemsPerPage]);
  useEffect(() => {
    rootAxios
      .get("/admin/dashboard/enrollment/count")
      .then((res) => setCount(res.data.count));
  }, []);

  const totalPage = Math.ceil(count / itemsPerPage);
  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }
  const handleItemPerPage = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <h1 className="text-2xl mb-5">EnrollmentDetails</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {allData?.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.course_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination start */}
      <div className="flex justify-center mt-20">
        <button className="btn" onClick={handlePrev}>
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? `btn btn-warning` : `btn`}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button className="btn" onClick={handleNext}>
          Next
        </button>
        <select
          className="ml-10  p-1 rounded"
          value={itemsPerPage}
          onChange={handleItemPerPage}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      {/* pagination end */}
    </div>
  );
};

export default EnrollmentDetails;
