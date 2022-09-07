const usePagination = (dataArray, amount, page) => {
  const start = page === 1 ? 0 : (page - 1) * amount;
  const end = page === 1 ? amount : page * amount;

  return dataArray && dataArray.slice(start, end);
};

export default usePagination;
