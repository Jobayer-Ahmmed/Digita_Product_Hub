import Banner from "../Banner/Banner";
import useAxios from "../../../hooks/useAxios/useAxios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/AuthProvider";
import OurHeros from "../../ourHeros/OurHeros";
import Counter from "../counter/Counter";

const Home = () => {
  const { newUser } = useContext(Context);
  const [event, setEvent] = useState([]);
  const [msg, setMsg] = useState('');
  const rootAxios = useAxios();
  const email = newUser?.email;

  const handleEvent = (event_name) => {
    rootAxios.get(`/event/registration/${email}`).then((res) => {
      const isRegistered = res.data.some((event) => event.event_name === event_name);
      if (isRegistered) {
        setMsg('You have already registered this event');
      } else {
        rootAxios
          .post(`/event/registration`, { email, event_name })
          .then((res) => console.log(res));
      }
    });
  };

  useEffect(() => {
    rootAxios.get('/admin/dashboard/event').then((res) => setEvent(res.data));
  }, [rootAxios]);

  return (
    <div className="-z-20">
      <Banner />
      <Counter/>
      <div className="w-[300px] md:w-[700px] mx-auto my-myMargin">
        {event ? (
          <>
            <h1 className="text-4xl mb-titleMargin text-center font-semibold">
              Join Our Event
            </h1>
            <div className="flex flex-col gap-y-10">
              {event?.map((data) => (
                <div key={data._id}>
                  <img className="w-full h-96" src={data.event_image} alt="" />
                  <p className="text-2xl mt-6 mb-1 font-semibold ml-4">
                    {data.event_name}
                  </p>
                  <p className="text-lg ml-4 mb-6">{data.event_description}</p>
                  <button
                    onClick={() => handleEvent(data.event_name)}
                    className="btn btn-outline ml-4"
                  >
                    Registration
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          ''
        )}
        {msg && <p className="text-red-600 mt-5">{msg}</p>}
      </div>
      <OurHeros/>
    </div>
  );
};

export default Home;
