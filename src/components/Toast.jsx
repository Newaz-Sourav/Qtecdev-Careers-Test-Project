export function Toast({ message, show }) {
  if (!show) return null;

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50">
      <span className="text-xl font-bold">✓</span>
      <span>{message}</span>
    </div>
  );
}
