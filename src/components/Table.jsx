export default function Table({ data, onRemove }) {
  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Category</th>
          <th className="border px-4 py-2">Location</th>
          <th className="border px-4 py-2">Fee</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((artist) => (
          <tr key={artist.id}>
            <td className="border px-4 py-2">{artist.name}</td>
            <td className="border px-4 py-2">{artist.category?.join(", ")}</td>
            <td className="border px-4 py-2">{artist.location}</td>
            <td className="border px-4 py-2">{artist.fee}</td>
            <td className="border px-4 py-2 text-center">
              <button
                onClick={() => onRemove(artist.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
