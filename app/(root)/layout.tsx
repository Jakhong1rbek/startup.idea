import ChildProps from '@/types'
import React from 'react'
import Navbar from '../_components/navbar'

function layout({ children }: ChildProps) {
	return (
		<main className='font-mark-sans'>
			<Navbar />
			{children}
		</main>
	)
}

export default layout
