import SearchForm from '@/components/shared/search-form'
import React from 'react'

async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>
}) {
	const query = (await searchParams).query
	return (
		<section className='pattern flex min-h-[530px] w-full flex-col items-center justify-center bg-primary px-6 py-10'>
			<h1 className='my-5 max-w-5xl bg-black px-6 py-3 text-center font-space-grotesk text-[36px] font-extrabold uppercase leading-[46px] text-white sm:text-[54px] sm:leading-[64px] '>
				Pitch your StartUp, <br /> Connect with Enterpreneurs
			</h1>
			<p className=' max-w-2xl break-words text-center text-[20px] font-medium text-white'>
				Submit ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
			</p>
			<SearchForm query={query} />
		</section>
	)
}

export default Home
