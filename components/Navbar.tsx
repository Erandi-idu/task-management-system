import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">TaskMaster</Link>
      </div>
      <div className="space-x-6 font-medium text-gray-600">
        <Link href="/" className="hover:text-blue-500 transition">Home</Link>
        <Link href="/tasks" className="hover:text-blue-500 transition">My Tasks</Link>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;