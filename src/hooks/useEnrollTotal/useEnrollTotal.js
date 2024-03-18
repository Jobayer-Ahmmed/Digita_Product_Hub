import { useEffect, useState } from "react";
import useAxios from "../useAxios/useAxios";

const useEnrollTotal = () => {
  const [datas, setDatas] = useState([]);
  const rootAxios = useAxios();

  useEffect(() => {
    rootAxios
      .get("/admin/dashboard/enrollment-total")
      .then((res) => setDatas(res.data));
  }, [rootAxios]);

  return datas.length
};

export default useEnrollTotal;
