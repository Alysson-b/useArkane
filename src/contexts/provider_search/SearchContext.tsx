import { createContext, ReactNode, useState } from "react"

interface SearchContextProps {
    search: string,
    setSearch: (value: string) => void
}


export const ContextSearch =  createContext<SearchContextProps>(
    {} as SearchContextProps
)


export function providerSearch({children}: {children: ReactNode}){
    const [search, setSearch] = useState("")

    return(
        <ContextSearch.Provider value={{search, setSearch}}>
            {children}
        </ContextSearch.Provider>
    )
}
