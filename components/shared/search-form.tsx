import React from 'react'
import Form from 'next/form'
import SearchFormReset from './search-form-reset'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
function SearchForm({ query }: { query?: string }) {
	return (
		<Form
			action={'/'}
			scroll={false}
			// eslint-disable-next-line tailwindcss/no-custom-classname
			className='form mt-8 flex min-h-[80px] w-full max-w-3xl flex-row items-center gap-5 rounded-[80px] border-[5px] bg-white px-5 text-[24px]'
		>
			<input
				name='query'
				defaultValue=''
				className='h-auto w-full flex-1 bg-transparent font-bold text-black outline-none placeholder:font-semibold '
				placeholder='Search Startups'
			/>
			<div className='flex gap-2'>
				{query && <SearchFormReset />}
				<Button
					variant={'ghost'}
					type='submit'
					className='flex size-[50px] items-center justify-center rounded-full bg-black'
				>
					<Search className='size-5' />
				</Button>
			</div>
		</Form>
	)
}

export default SearchForm
