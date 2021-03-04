import { h } from 'preact';
import Navbar from "./Navbar";
import {useSelector, useDispatch} from "react-redux";
import {
    decrement,
    increment,
    selectCount
} from "../storage/counter";

const Main = () => {
    const dispatch = useDispatch();
    const count=useSelector(selectCount);
    return (
            <div>
            <Navbar/>
            <h1 className="text-center m-3">Title</h1>
            <h2>{count}</h2>
            <div class="flex space-x-3 mb-4 text-sm font-medium">
            <div class="flex-auto flex space-x-3">
                <button onClick={()=> dispatch(decrement())}
                className="w-1/5 flex items-center justify-center rounded-md m-2 bg-black text-white"
                >decrement
                </button>
                <button onClick={()=> dispatch(increment())}
                className="w-1/5 flex items-center justify-center rounded-md m-2 bg-black text-white"
                >
                    increment
                </button>
            </div>
            </div>
        </div>
    );
}
export default Main;