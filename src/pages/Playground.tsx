import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { array } from "../utils";

export const Playground = () => {
  console.log("Render: Playground");
  const [count, setCount] = useState(9);

  //   const computedList = array.map((i) => i * i).filter((i) => !!(i % 2));
  //   const computedList_memoized = useMemo(
  //     () => array.map((i) => i * i).filter((i) => !!(i % 2)),
  //     []
  //   );

  const resetCount = () => setCount(0);
  const resetCount_memoized = useCallback(() => setCount(0), []);

  //   useEffect(() => {
  //     console.log("New resetCount function");
  //   }, [resetCount]);

  //   useEffect(() => {
  //     console.log("New resetCount_memoized function");
  //   }, [resetCount_memoized]);

  //   useEffect(() => {
  //     console.log("New computedList");
  //   }, [computedList]);

  //   useEffect(() => {
  //     console.log("New computedList_memoized");
  //   }, [computedList_memoized]);

  return (
    <div>
      <h1>Demos</h1>
      <State count={count} setCount={setCount} />
      {count >= 10 ? <Bingo count={count} message="Hello world" /> : null}
      <ResetCount reset={resetCount_memoized} />
      <Reference />
    </div>
  );
};

const State = (props: { count: number; setCount: (num: number) => void }) => {
  const { count, setCount } = props;
  return (
    <div className="d-flex mb-5">
      <button
        className="btn btn-secondary mr-3"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <div>{count}</div>
      <button
        className="btn btn-secondary ml-3"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

const Bingo = (props: { count: number; message: string }) => {
  //   console.log("Render: Bingo");
  //   useEffect(() => {
  //     console.log("Mount Bingo");
  //     return () => console.log("Unmount Bingo");
  //   }, []);

  //   useEffect(() => {
  //     console.log("props changed");
  //   }, [props]);

  //   useEffect(() => {
  //     console.log("count changed");
  //   }, [props.count]);

  //   useEffect(() => {
  //     console.log("message changed");
  //   }, [props.message]);

  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-body">
        <h4 className="card-title">Bingo</h4>
        <p>Count: {props.count}</p>
        <p> {props.message}</p>
      </div>
    </div>
  );
};

// const ResetCount = React.memo((props: { reset: () => void }) => {
const ResetCount = (props: { reset: () => void }) => {
  //   console.log("Render: ResetCount");
  //   useEffect(() => {
  //     console.log("Mount ResetCount");
  //     return () => console.log("Unmount ResetCount");
  //   }, []);

  return (
    <div>
      <button
        type="button"
        className="mb-5 btn btn-danger"
        onClick={props.reset}
      >
        Reset
      </button>
    </div>
  );
};

const Reference = () => {
  const ref = useRef(null);

  console.log(ref);
  useEffect(() => console.log("useEffect", ref), [ref.current]);

  return (
    <div
      className="card text-white bg-primary mb-3"
      style={{ maxWidth: "20rem" }}
      ref={ref}
    >
      <div className="card-body">
        <h4 className="card-title">Referece</h4>
      </div>
    </div>
  );
};
