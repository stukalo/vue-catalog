export const getSearchParam = (key) => {
  return new URL(window.location.href).searchParams.get(key);
}
