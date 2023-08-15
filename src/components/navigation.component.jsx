import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex gap-8 justify-center px-4 py-2 bg-slate-300">
      <Link
        to={'/'}
        className="font-medium hover:text-gray-500 transition-colors uppercase"
      >
        Home
      </Link>
      <Link
        to={'/editor'}
        className="font-medium hover:text-gray-500 transition-colors uppercase"
      >
        Editor
      </Link>
    </nav>
  );
};

export default Navigation;
