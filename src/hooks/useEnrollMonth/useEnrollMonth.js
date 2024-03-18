import { useEffect, useState } from "react";
import useAxios from "../useAxios/useAxios";

const useEnrollMonth = () => {
  const [datas, setDatas] = useState([]);
  const rootAxios = useAxios();

  useEffect(() => {
    rootAxios
      .get("/admin/dashboard/enrollment/month")
      .then((res) => setDatas(res.data));
  }, [rootAxios]);

  return datas.length
};

export default useEnrollMonth;
