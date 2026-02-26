import { useContext } from "react"
import { ContextSearch } from "./SearchContext"

export function useSearch() {
    return useContext(ContextSearch)
}