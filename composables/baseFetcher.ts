export const useBaseFetcher = (resource: string) => {
  const api = useRuntimeConfig().public.API_BASEURL;
  return $fetch(api + resource, {
    headers: { "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16" },
  });
};
