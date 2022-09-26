import { useEffect, useState } from "react";

export function useDebounce(value: string, delay = 300): string{
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay)

    return () => {
      clearTimeout(handler)
    }
  }, [delay, value])

  return debounced

}