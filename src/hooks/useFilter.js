export default function useFilter(data, filters) {
  return data.filter((artist) => {
    const matchesCategory = filters.category
      ? artist.category.includes(filters.category)
      : true;

    const matchesLocation = filters.location
      ? artist.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    const matchesPrice = filters.price
      ? artist.fee === filters.price
      : true;

    return matchesCategory && matchesLocation && matchesPrice;
  });
}
