import { Fragment, h } from "preact";
import { useSelector } from "react-redux";
import { selectTodos } from "../storage/todosSlice";
import TodoIn from "../components/TodoIn";
const Listing = () => {
  const Todos = useSelector(selectTodos);

  return Todos.map((todo) => (
    <div class="bg-white dark:bg-gray-900 shadow overflow-hidden sm:rounded-lg m-2">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
          {todo.Title}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">
          {todo.Subtitle}
        </p>
      </div>
      <div class="border-t border-gray-200 dark:border-gray-800">
        <dl>
          <div class="bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd class="mt-1 text-sm text-gray-900 dark:text-gray-300 sm:mt-0 sm:col-span-2">
              {todo.Content}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  ));
};

const Todos = () => {
  return (
    <Fragment>
      <TodoIn />
      <div class="grid grid-cols-1 md:grid-cols-3 dark:bg-black bg-gray-50">
        <Listing />
      </div>
    </Fragment>
  );
};
export default Todos;
