import { h } from 'preact';
import {Link} from "preact-router/match";
const Navbar = () => {
    return (
        <div>
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4">
                                    <Link href="/" class="hover:bg-gray-700 text-gray-50 px-3 py-2 rounded-md text-sm font-medium">
                                        Home
                                    </Link>
                                    <Link href="/todos" class="hover:bg-gray-700 text-gray-50 px-3 py-2 rounded-md text-sm font-medium">
                                        Todos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;