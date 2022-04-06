import { AppCtx } from 'context';
import React, { useContext } from 'react';

const Timeframe: React.FC = (): JSX.Element => {
  const { setTimeframe, timeframe } = useContext(AppCtx);

  return (
    <div className="flex justify-center btn-group">
      <button
        className={`btn btn-sm sm:btn-md ${
          timeframe === 0 ? 'btn-active' : ''
        }`}
        onClick={() => setTimeframe(0)}
      >
        All
      </button>
      <button
        className={`btn btn-sm sm:btn-md ${
          timeframe === 365 ? 'btn-active' : ''
        }`}
        onClick={() => setTimeframe(365)}
      >
        1 Y
      </button>
      <button
        className={`btn btn-sm sm:btn-md ${
          timeframe === 180 ? 'btn-active' : ''
        }`}
        onClick={() => setTimeframe(180)}
      >
        6 M
      </button>
      <button
        className={`btn btn-sm sm:btn-md ${
          timeframe === 90 ? 'btn-active' : ''
        }`}
        onClick={() => setTimeframe(90)}
      >
        3 M
      </button>
      <button
        className={`btn btn-sm sm:btn-md ${
          timeframe === 30 ? 'btn-active' : ''
        }`}
        onClick={() => setTimeframe(30)}
      >
        1 M
      </button>
      <button
        className={`btn btn-sm sm:btn-md ${
          timeframe === 7 ? 'btn-active' : ''
        }`}
        onClick={() => setTimeframe(7)}
      >
        7 D
      </button>
    </div>
  );
};

export default Timeframe;
