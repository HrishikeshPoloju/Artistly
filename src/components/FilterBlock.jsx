"use client";

export default function FilterBlock({ filters, setFilters }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by location"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        className="border rounded px-3 py-2"
      />
      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        className="border rounded px-3 py-2"
      >
        <option value="">All Categories</option>
        <option value="Singers">Singers</option>
        <option value="Dancers">Dancers</option>
        <option value="Speakers">Speakers</option>
        <option value="DJs">DJs</option>
      </select>
      <select
        value={filters.price}
        onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        className="border rounded px-3 py-2"
      >
        <option value="">All Price Ranges</option>
        <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
        <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
        <option value="₹30,000 - ₹60,000">₹30,000 - ₹60,000</option>
      </select>
    </div>
  );
}
