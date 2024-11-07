'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '../ui/button'

const SearchFormReset = () => {
	const reset = () => {
		const form = document.querySelector('.form') as HTMLFormElement

		if (form) form.reset()
	}

	return (
		<>
			<Button
				type='reset'
				onClick={reset}
				size={'icon'}
				variant={'default'}
				className='flex size-[50px] items-center justify-center rounded-full text-black  '
			>
				<Link
					href='/'
					className='flex  items-center justify-center rounded-full '
				>
					<X className='size-5' />
				</Link>
			</Button>
		</>
	)
}
export default SearchFormReset
