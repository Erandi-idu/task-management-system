import prisma from "@/lib/db";
import { addTask, deleteTask } from "./actions";
import { Trash2, CheckCircle2 } from "lucide-react";

export default async function Home() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h1 className="text-3xl font-extrabold mb-8 text-gray-800 flex items-center gap-3">
            <CheckCircle2 className="text-blue-600 w-8 h-8" />
            My Task Manager
          </h1>

          {/* Task එකක් add කරන Form එක */}
          <form action={addTask} className="flex gap-3 mb-10">
            <input
              name="title"
              type="text"
              placeholder="What needs to be done?"
              className="flex-1 border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 text-gray-800 focus:border-transparent transition-all"
              required
            />
            <button className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
              Add
            </button>
          </form>

          
          <div className="space-y-4">
            {tasks.length === 0 && (
              <p className="text-center text-gray-400 py-10">No tasks yet. Add one above! ✨</p>
            )}

            {tasks.map((task) => (
              <div
                key={task.id}
                className="group flex items-center justify-between p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all"
              >
                <div className="flex flex-col">
                  <span className="text-gray-800 font-medium text-lg capitalize">{task.title}</span>
                  <span className="text-xs text-gray-400 mt-1">
                    {new Date(task.createdAt).toLocaleDateString()} at {new Date(task.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <form action={deleteTask.bind(null, task.id)}>
                  <button className="text-gray-300 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors">
                    <Trash2 size={20} />
                  </button>
                </form>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between text-sm text-gray-500 font-medium">
            <span>Total Tasks: {tasks.length}</span>
            <span>Created by Me 🚀</span>
          </div>
        </div>
      </div>
    </main>
  );
}