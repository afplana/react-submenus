import React, { useState, useContext, createContext, FC } from 'react'
import sublinks, { Sublink } from './data'

export interface Coordinates {
    center: number,
    bottom: number
}

export type ContextState = {
    isSidebarOpen?: boolean
    isSubmenuOpen?: boolean
    location?: Coordinates
    site?: Sublink
    openSidebar?: () => void
    closeSidebar?: () => void
    openSubmenu?: (text: string, coodinates: Coordinates) => void
    closeSubmenu?: () => void
}

const AppContext = createContext<ContextState>({});

export const AppProvider: FC = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState<Coordinates>({ center: 500, bottom: 200 })

    const [site, setSite] = useState<Sublink>()

    const openSidebar = () => setIsSidebarOpen(true)
    const closeSidebar = () => setIsSidebarOpen(false)

    const openSubmenu: (text: string, coodinates: Coordinates) => void = (text, coordinates) => {
        const current = sublinks.find((link) => link.page === text)
        setSite(current)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => setIsSubmenuOpen(false)

    const state: ContextState = {
        isSidebarOpen,
        isSubmenuOpen,
        location,
        site,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu
    }

    return <AppContext.Provider value={state}>
        {children}
    </AppContext.Provider>
}

export function useGlobalContext(): ContextState {
    return useContext(AppContext)
}
