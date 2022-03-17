import { AppCtx } from 'context';
import React, { useContext } from 'react';

const Timeframe = () => {
  const { setTimeframe, timeframe } = useContext(AppCtx);

  return (
    <div className="flex justify-center w-full mt-8 text-sm sm:text-md">
      <div
        className={`py-2 px-3 w-24 h-12 border-x border-zinc-800 text-center cursor-pointer ${
          timeframe === 0
            ? 'bg-sky-700 hover:bg-sky-600'
            : 'bg-zinc-700 hover:bg-zinc-600'
        }`}
        onClick={() => setTimeframe(0)}
      >
        All
      </div>
      <div
        className={`py-2 px-3 w-24 h-12 border-x border-zinc-800 text-center cursor-pointer ${
          timeframe === 365
            ? 'bg-sky-700 hover:bg-sky-600'
            : 'bg-zinc-700 hover:bg-zinc-600'
        }`}
        onClick={() => setTimeframe(365)}
      >
        1 Y
      </div>
      <div
        className={`py-2 px-3 w-24 h-12 border-x border-zinc-800 text-center cursor-pointer ${
          timeframe === 180
            ? 'bg-sky-700 hover:bg-sky-600'
            : 'bg-zinc-700 hover:bg-zinc-600'
        }`}
        onClick={() => setTimeframe(180)}
      >
        6 M
      </div>
      <div
        className={`py-2 px-3 w-24 h-12 border-x border-zinc-800 text-center cursor-pointer ${
          timeframe === 90
            ? 'bg-sky-700 hover:bg-sky-600'
            : 'bg-zinc-700 hover:bg-zinc-600'
        }`}
        onClick={() => setTimeframe(90)}
      >
        3 M
      </div>
      <div
        className={`py-2 px-3 w-24 h-12 border-x border-zinc-800 text-center cursor-pointer ${
          timeframe === 30
            ? 'bg-sky-700 hover:bg-sky-600'
            : 'bg-zinc-700 hover:bg-zinc-600'
        }`}
        onClick={() => setTimeframe(30)}
      >
        1 M
      </div>
      <div
        className={`py-2 px-3 w-24 h-12 border-x border-zinc-800 text-center cursor-pointer ${
          timeframe === 7
            ? 'bg-sky-700 hover:bg-sky-600'
            : 'bg-zinc-700 hover:bg-zinc-600'
        }`}
        onClick={() => setTimeframe(7)}
      >
        7 D
      </div>
    </div>
  );
};

export default Timeframe;
