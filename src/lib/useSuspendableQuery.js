import { useQuery } from "@apollo/client"

import { suspend } from "./suspend"

export const useSuspendableQuery = (...args) => {
  const result = useQuery(...args)
  if (result.loading) {
    suspend(new Promise((resolve) => !result.loading && resolve())).read()
  }
  return result
}

export default useSuspendableQuery
