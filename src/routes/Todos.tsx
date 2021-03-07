import { h } from "preact";

const Todos = () => {
  return (
    <div class="bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg m-2">
      <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
            Title
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">
            Subtitle
          </p>
      </div>
      <div class="border-t border-gray-200 dark:border-gray-800">
      <dl>
      <div class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Another title
        </dt>
        <dd class="mt-1 text-sm text-gray-900 dark:text-gray-300 sm:mt-0 sm:col-span-2">
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
        </dd>
      </div>
    </dl>
      </div>
    </div>
  );
};
export default Todos;
