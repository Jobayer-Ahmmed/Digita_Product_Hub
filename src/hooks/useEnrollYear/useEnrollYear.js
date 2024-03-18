import { useEffect, useState } from "react";
import useAxios from "../useAxios/useAxios";

const useEnrollYear = () => {
  const [datas, setDatas] = useState([]);
  const rootAxios = useAxios();

  useEffect(() => {
    rootAxios
      .get("/admin/dashboard/enrollment/year")
      .then((res) => setDatas(res.data));
  }, [rootAxios]);

  return datas.length
};

export default useEnrollYear;
