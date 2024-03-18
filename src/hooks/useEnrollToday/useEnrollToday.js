import { useEffect, useState } from "react";
import useAxios from "../useAxios/useAxios";

const useEnrollToday = () => {
  const [datas, setDatas] = useState([]);
  const rootAxios = useAxios();

  useEffect(() => {
    rootAxios
      .get("/admin/dashboard/enrollment/Today")
      .then((res) => setDatas(res.data));
  }, [rootAxios]);

  return datas.length
};

export default useEnrollToday;
