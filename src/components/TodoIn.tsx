import { h } from "preact";
import { useState } from "preact/hooks";
import { useDispatch } from "react-redux";
import { addTodo } from "../storage/todosSlice";

const TodoIn = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <div class="mt-5 md:col-span-2 m-3">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white dark:bg-gray-900 space-y-6 sm:p-6">
            <h2 class="dark:text-gray-100 text-gray-900 font-medium">
              Add new Todos
            </h2>
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="title"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Title
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-gray-900 dark:text-gray-100 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Lorem"
                  />
                </div>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="subtitle"
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subtitle
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => setSubtitle(e.target.value)}
                    value={subtitle}
                    class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-gray-900 dark:text-gray-100 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Ipsum"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                for="content"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Content
              </label>
              <div class="mt-1">
                <textarea
                  id="content"
                  name="content"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-gray-900 dark:text-gray-100 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Lorem Ipsum dolor sit amet"
                ></textarea>
              </div>
              <div class="px-4 py-3 text-right sm:px-6">
                <button
                  onClick={() =>
                    dispatch(
                      addTodo({
                        Title: title,
                        Subtitle: subtitle,
                        Content: content,
                      })
                    )
                  }
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoIn;
