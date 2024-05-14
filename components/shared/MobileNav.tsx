"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'


const MobileNav = () => {
    const pathname = usePathname();
    return (
        <header className='header'>
            <Link href='/' className='flex items-center gap-2 md:py-2'>
                <Image src='https://res.cloudinary.com/dldblks5t/image/upload/v1715542298/Asset_3_yfysy3.png' alt='logo' width={180} height={28} />
            </Link>
            <nav className='flex gap-2'>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                    <Sheet>
                        <SheetTrigger>
                            <Image src='https://res.cloudinary.com/dldblks5t/image/upload/v1715591591/icons8-hamburger_y4cnrp.svg' alt='menu' height={32} width={32} className='cursor-pointer' />
                        </SheetTrigger>
                        <SheetContent className='sheet-content sm:w-64'>
                            <Image src='https://res.cloudinary.com/dldblks5t/image/upload/v1715542298/Asset_3_yfysy3.png' alt='' height={23} width={152} />
                            <ul className='header-nav_elements'>
                                {navLinks.map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li key={link.route} className={`whitespace-nowrap text-dark-700 ${isActive && 'text-purple-400'}`}>
                                            <Link className='sidebar-link cursor-pointer' href={link.route}>
                                                <Image
                                                    src={link.icon}
                                                    alt='logo'
                                                    width={24}
                                                    height={24}
                                                />
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </SignedIn>
                <SignedOut>
                    <Button asChild className='button bg-purple-500 bg-cover'>
                        <Link href='/sign-in'> Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav