export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Task Management System</h1>
        <p className="text-gray-600 mb-6">අපේ අලුත් Full-stack Project එකේ ආරම්භය!</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Get Started
        </button>
      </div>
    </main>
  );
}