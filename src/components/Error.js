const Error = () => {
  return (
    <div className="flex flex-col justify-center">
      <img 
        src="/images/not-found.png"
        alt="ErrorNotFound"
        width={480}
        height={240}
      />
      <div className="text-gray-400 text-xl mt-2 flex justify-center">Something went wrong.</div>
    </div>
  );
};

export default Error;