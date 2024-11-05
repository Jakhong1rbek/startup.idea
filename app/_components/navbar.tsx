'use client'
import ModeToggle from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
	const { resolvedTheme } = useTheme()
	return (
		<header className='font-work-sans fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl'>
			<nav className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b'>
				<Link href={'/'}>
					<Image src={'/logo.png'} alt='logo' width={144} height={30} />
				</Link>
				<div className='flex items-center gap-5'>
					<SignedOut>
						<SignUpButton mode='modal'>
							<Button variant={'ghost'} className='rounded-full'>
								Sign Up
							</Button>
						</SignUpButton>
						<SignInButton>
							<Button className='rounded-full'>Log In</Button>
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<Button variant={'ghost'} className='transition-all'>
							<Link href={'/'}>Create</Link>
						</Button>
						<ModeToggle />
						<UserButton
							appearance={{
								baseTheme: resolvedTheme === 'dark' ? dark : undefined,
							}}
						/>
					</SignedIn>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
