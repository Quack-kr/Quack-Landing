type FetcherOptions = Omit<RequestInit, "body"> & {
  baseUrl?: string;
  method?: string;
  body?: BodyInit | null;
};

export async function fetcher<T>(
  url: string,
  options?: FetcherOptions
): Promise<T> {
  const baseUrl = options?.baseUrl ?? process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(baseUrl + url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    credentials: "include",
  });

  if (res.status === 204) return {} as T;

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw data;
  }
  return data;
}
