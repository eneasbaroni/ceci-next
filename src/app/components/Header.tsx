'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'


const Header = () => {
    const [viewWidth, setViewWidth] = useState<number>()
    const [noHeight, setNoHeight] = useState(true)    
    const [menuHide, setMenuHide] = useState(true)

    const pathname = usePathname()

    useEffect(() => {
        setViewWidth(window.innerWidth)
    }, [])

    const handleViewWidth = () => {
        setViewWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleViewWidth)

    const handleMenu = () => {
        if (menuHide) {
            setNoHeight(false)
            setTimeout(() => {
                setMenuHide(false)
            }, 500)
        } else {
            setNoHeight(true)
            setMenuHide(true)
        }
    }



  return (
    <>
        {viewWidth! > 992 ?
            <header id="headerWeb" className='header'>
                <Link href="/" className="navLogoContainer">
                    <img src="/images/header/logo.svg" alt="logo" />
                </Link> 
                <Link href='/' className={pathname === '/' ? 'navLink active' : 'navLink'}>Inicio</Link> 
                <Link href='/books' className={pathname === '/books' ? 'navLink active' : 'navLink'}>Mis Libros</Link>
                {/* <!-- <a href="/blog" className="navLink">Blog</a> --> */}
                <Link href="/about" className={pathname === '/about' ? 'navLink active' : 'navLink'}>Sobre mi</Link>
                <Link href="/contact" className={pathname === '/contact' ? 'navLink active' : 'navLink'}>Contacto</Link>
            </header>:
            <header id="headerMobile">    
                <Link href="/" className="navLogoContainer">
                    <img src="/images/header/logo.svg" alt="logo" />
                </Link>    
                <img id="menuToggle" src='/images/header/menu.svg' alt='menu' className='menu' onClick={handleMenu}/>
                <div id='MobileNav' className={(menuHide && 'menuHide') + ' ' + (noHeight && 'noHeight')}>
                    <Link href='/' className='navLink' onClick={handleMenu}>Inicio</Link>
                    <Link href='/books' className='navLink' onClick={handleMenu}>Mis Libros</Link>
                    {/* <!-- <a href='/blog' className='navLink'>Blog</a> --> */}
                    <Link href='/about' className='navLink' onClick={handleMenu}>Sobre mi</Link>
                    <Link href='/contact' className='navLink' onClick={handleMenu}>Contacto</Link>
                </div>
            </header>
        }

    </>
  )
}

export default Header