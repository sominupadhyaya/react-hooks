import api from "../api/api"
import { useState , useEffect } from "react"

const useResources = (resource) => {
  const [resources, setResoucers] = useState([])

  const fetchResource = async (resource) => {
    const response = await api.get(`/${resource}`)
    setResoucers(response.data)
  }

  useEffect(() => {
    fetchResource(resource) // cannot return a promise can call async funcs but it shouldnt return promise
  }, [resource])

  return resources
}
export default useResources