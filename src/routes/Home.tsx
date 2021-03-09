import { h } from "preact";
import { useState } from "preact/hooks";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "../storage/counterSlice";

const Home = () => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  interface Input {
    target: {
      value:number
    }
  }
  const changeVal = (e: Input) => {
    setAmount(e.target.value);
  };

  return (
    <div className="dark:bg-black bg-gray-50">
      <div className="bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
            <span className="block">Count: {count}</span>
            <span className="block text-red-600">
              Amount modifying by: {amount}
            </span>
            <input
              type="number"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-gray-900 dark:text-gray-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              placeholder="A Random Number"
              value={amount}
              onChange={changeVal}
            />
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={() => dispatch(increment(amount))}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
              >
                Increment
              </button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <button
                onClick={() => dispatch(decrement(amount))}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md dark:text-red-700 text-red-600 bg-white dark:bg-gray-300 dark:hover:bg-red-300  hover:bg-red-50"
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
