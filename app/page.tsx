import prisma from "@/lib/db";
import { addTask, deleteTask, toggleTask } from "./actions";
import { Trash2, CheckCircle2, Circle } from "lucide-react";

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

          <form action={addTask} className="flex gap-3 mb-10">
            <input
              name="title"
              type="text"
              placeholder="What needs to be done?"
              className="flex-1 border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500 text-gray-800 transition-all"
              required
            />
            <button className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
              Add
            </button>
          </form>

          <div className="space-y-4">
            {tasks.length === 0 && (
              <p className="text-center text-gray-400 py-10">No tasks yet. Add one! ✨</p>
            )}

            {tasks.map((task) => (
              <div
                key={task.id}
                className={`group flex items-center justify-between p-5 rounded-xl border transition-all ${
                  task.completed ? "bg-gray-50 border-gray-100" : "bg-white border-gray-100 shadow-sm hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <form action={toggleTask.bind(null, task.id, task.completed)}>
                    <button className="flex items-center">
                      {task.completed ? (
                        <CheckCircle2 className="text-green-500 w-6 h-6" />
                      ) : (
                        <Circle className="text-gray-300 w-6 h-6 hover:text-blue-500" />
                      )}
                    </button>
                  </form>

                  <div className="flex flex-col">
                    <span className={`text-lg font-medium capitalize ${
                      task.completed ? "line-through text-gray-400" : "text-gray-800"
                    }`}>
                      {task.title}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {new Date(task.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <form action={deleteTask.bind(null, task.id)}>
                  <button className="text-gray-300 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </form>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between text-xs text-gray-500 font-medium italic">
             <span>Total Tasks: {tasks.length}</span>
             <span>Created by Erandi 🚀</span>
          </div>
        </div>
      </div>
    </main>
  );
}