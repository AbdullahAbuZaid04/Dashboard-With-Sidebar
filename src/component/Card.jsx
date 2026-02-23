function Card({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 w-full rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-2 break-all">{title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 break-all">{description}</p>
    </div>
  );
}

export default Card;
