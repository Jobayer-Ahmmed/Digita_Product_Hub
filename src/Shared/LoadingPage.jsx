const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="loading loading-dots loading-xs text-priColor"></span>
      <span className="loading loading-dots loading-sm text-priColor"></span>
      <span className="loading loading-dots loading-md text-priColor"></span>
      <span className="loading loading-dots loading-lg text-priColor"></span>
    </div>
  );
};

export default LoadingPage;
