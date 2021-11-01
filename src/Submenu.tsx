import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
    const { isSubmenuOpen, location, site } = useGlobalContext()
    const container = useRef<HTMLElement>(null)

    useEffect(() => {
        if (container.current) {
            const submenu = container.current
            const { center, bottom } = location!!
            submenu.style.left = `${center}px`
            submenu.style.top = `${bottom}px`
        }
    }, [location, site])

    return <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
        <h4>{site?.page}</h4>
        <div className={`submenu-center col-2`}>
            {site?.links.map((link, index) => {
                const { label, icon, url } = link

                return <a key={index} href={url}>{icon}{label}</a>
            })}
        </div>
    </aside>
}

export default Submenu