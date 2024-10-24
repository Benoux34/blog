const LeftSideAuth = () => {
  return (
    <div className="h-full">
      <div className="absolute left-[24%] top-[25%] bg-blue-500 h-[400px] w-[200px]">
        <div className="relative h-full w-full">
          {/* Right Eye */}
          <div className="absolute top-10 left-36 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <div className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full" />
            </div>
          </div>

          {/* Left Eye */}
          <div className="absolute top-10 left-20 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <div className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full" />
            </div>
          </div>

          <div className="absolute top-20 left-24 h-[5px] w-[70px] bg-black" />
        </div>
      </div>
      <div className="absolute left-[20%] top-[37.5%] bg-orange-400 h-[300px] w-[150px]">
        <div className="relative h-full w-full">
          {/* Left Eye */}
          <div className="absolute top-10 left-28 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <div className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full" />
            </div>
          </div>

          {/* Right Eye */}
          <div className="absolute top-10 left-20 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <div className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full" />
            </div>
          </div>

          <div className="absolute top-20 left-20 h-[5px] w-[50px] bg-black" />
        </div>
      </div>
      <div className="absolute left-[33%] top-[50%] bg-yellow-300 h-[200px] w-[200px] rounded-t-full">
        <div className="relative h-full w-full">
          {/* Left Eye */}
          <div className="absolute top-10 left-28 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <div className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full" />
            </div>
          </div>

          {/* Right Eye */}
          <div className="absolute top-10 left-20 h-[20px] w-[20px] bg-white rounded-full">
            <div className="relative h-full w-full">
              <div className="absolute top-2 left-2 h-[10px] w-[10px] bg-black rounded-full" />
            </div>
          </div>

          <div className="absolute top-20 left-16 h-[5px] w-[80px] bg-black" />
        </div>
      </div>
    </div>
  );
};

export { LeftSideAuth };
