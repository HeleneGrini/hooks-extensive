import React, { useState, useEffect, useMemo, useCallback } from "react";

export const Playground = () => {
  console.log("Render: Playground");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Demos</h1>
      <State count={count} setCount={setCount} />
      {count === 10 ? <Bingo /> : null}
    </div>
  );
};

const State = (props: { count: number; setCount: (num: number) => void }) => {
  const { count, setCount } = props;
  return (
    <div>
      <div className="d-flex">
        <button
          className="btn btn-secondary mx-3"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <div>{count}</div>
        <button
          className="btn btn-secondary mx-3"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

const Bingo = () => {
  console.log("Render: Bingo");
  useEffect(() => {
    console.log("Mount bingo");
    return () => console.log("Unmount bingo");
  }, []);
  return <div>Binge</div>;
};
