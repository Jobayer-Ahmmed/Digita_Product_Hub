import { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [onsite, setOnsite] = useState(0);
  const [remote, setRemote] = useState(0);
  const counterRef = useRef(null);

  const totalCount = 89271;
  const totalOnsite = 72192;
  const totalRemote = 16205;
  const duration = 2000;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const increment = Math.ceil(totalCount / (duration / 10));
        let currentCount = 0;
        const interval = setInterval(() => {
          currentCount += increment;
          if (currentCount >= totalCount) {
            clearInterval(interval);
            currentCount = totalCount;
          }
          setCount(currentCount);
        }, 10);

        return () => clearInterval(interval);
      }
    });

    observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [totalCount, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const increment = Math.ceil(totalOnsite / (duration / 10));
        let currentCount = 0;
        const interval = setInterval(() => {
          currentCount += increment;
          if (currentCount >= totalOnsite) {
            clearInterval(interval);
            currentCount = totalOnsite;
          }
          setOnsite(currentCount);
        }, 10);

        return () => clearInterval(interval);
      }
    });

    observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [totalOnsite, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const increment = Math.ceil(totalRemote / (duration / 10));
        let currentCount = 0;
        const interval = setInterval(() => {
          currentCount += increment;
          if (currentCount >= totalRemote) {
            clearInterval(interval);
            currentCount = totalRemote;
          }
          setRemote(currentCount);
        }, 10);

        return () => clearInterval(interval);
      }
    });

    observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [totalRemote, duration]);

  return (
    <div
      ref={counterRef}
      className="w-[310px] md:w-[550px] lg:w-[950px] lg:h-40 py-10  bg-gradient-to-r from-fuchsia-400 via-pink-500 to-red-500 rounded-lg my-myMargin mx-auto flex flex-col lg:flex-row justify-center items-center gap-10"
    >
      <div className="w-72   flex flex-col items-center">
        <h1 className="text-black text-2xl font-bold   pb-4">
          Got hired from us
        </h1>
        <div className="w-60 h-1 rounded-3xl bg-white "></div>
        <h1 className="text-black text-4xl font-bold text-center pt-2">
          <span id="count">{count}+</span>
        </h1>
      </div>
      <div className="w-72   flex flex-col items-center">
        <h1 className="text-black text-2xl font-bold   pb-4">
          Onsite
        </h1>
        <div className="w-60 h-1 rounded-3xl bg-white "></div>
        <h1 className="text-black text-4xl font-bold text-center pt-2">
          <span id="onsite">{onsite}+</span>
        </h1>
      </div>
      <div className="w-72   flex flex-col items-center">
        <h1 className="text-black text-2xl font-bold   pb-4">
          Remote
        </h1>
        <div className="w-60 h-1 rounded-3xl bg-white "></div>
        <h1 className="text-black text-4xl font-bold text-center pt-2">
          <span id="remote">{remote}+</span>
        </h1>
      </div>
    </div>
  );
}

export default Counter;
