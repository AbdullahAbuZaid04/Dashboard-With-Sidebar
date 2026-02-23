import { useState, useEffect, lazy, Suspense } from "react";
import { Menu, X, Moon, Sun } from 'lucide-react'

const Card = lazy(() => import("./component/Card"))

// export const Loader = () => <div className="w-10 h-10 rounded-full border-2 border-t-red-500 border-gray-300 animate-spin" />
export const Loader = () => (
  <div className="flex justify-center items-center py-20 w-full">
    <div className="w-10 h-10 rounded-full border-4 border-t-purple-600 border-gray-300 animate-spin" />
  </div>
)

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div className={`fixed inset-y-0 left-0 z-50 md:relative transform flex flex-col md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'} w-44 md:w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex-col transition-all duration-300`}>
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-3 px-6 py-5">
            <p className="bg-purple-600 w-10 h-10 flex items-center justify-center rounded-lg text-white font-bold text-xl shadow-lg">L</p>
            <h1 className="text-xl font-bold dark:text-white tracking-tight">Logo</h1>
            {open && <X onClick={() => setOpen(!open)} className="md:hidden dark:text-white" />}
          </div>

          <div className="flex flex-col px-4 gap-2 border-y border-gray-100 dark:border-gray-700 py-6 flex-1">
            {["Dashboard", "Projects", "Calendar", "Documents", "Reports"].map((item) => (
              <p key={item} className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-white cursor-pointer transition-all font-medium">{item}</p>
            ))}
          </div>
        </div>

        <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mode</span>
            <button onClick={() => setDarkMode(!darkMode)} className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none shadow-inner ${darkMode ? "bg-purple-600" : "bg-gray-300"}`}>
              <span className={`flex items-center justify-center h-5 w-5 transform rounded-full ${darkMode ? "bg-black" : "bg-white"} shadow-md transition-transform duration-300 ${darkMode ? "translate-x-8" : "translate-x-1"}`}>
                {darkMode ? (<Moon size={12} className="text-white" />) : (<Sun size={12} className="text-gray-600" />)}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 h-screen overflow-y-auto">
        <div className="sticky top-0 z-10 flex justify-between items-center px-10 py-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b dark:border-gray-700 transition-colors">
          {!open && <Menu className="md:hidden text-black dark:text-white" onClick={() => setOpen(!open)} />}
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 dark:bg-gray-700 w-10 h-10 rounded-full border-2 border-purple-500 shadow-sm cursor-pointer"></div>
          </div>
        </div>

        <Suspense fallback={<Loader />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (<Card key={i} title={`Project ${i}`} description={`Detailed summary of the project tasks and progress for item #${i}.`} />))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
