export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>START ADDING SOME ITEMS TO YOUR PACKING LIST 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "YOU GOT EVERYTHING READY TO GO"
          : ` 👜 You have ${numItems} intems on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
