import SearchForm from '@/components/shared/search-form'
import StartupCard from '@/components/shared/startup-card'
import React from 'react'

async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>
}) {
	const query = (await searchParams).query
	const data = [
		{
			_createdAt: new Date(),
			views: 55,
			author: { _id: 1, name: 'Jakhongirbek' },
			_id: 1,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat sunt deleniti molestias quidem! Repudiandae placeat, laborum mollitia dolores iure nihil!',
			image:
				'https://img.freepik.com/free-vector/creative-solutions-landing-page_52683-58961.jpg?uid=R170375515&ga=GA1.1.968922452.1729828372&semt=ais_hybrid',

			category: 'Robots',
			title: 'We Robots',
		},
	]
	return (
		<>
			<section className='pattern flex min-h-[530px] w-full flex-col items-center justify-center bg-primary px-6 py-10'>
				<h1 className='my-5 max-w-5xl bg-black px-6 py-3 text-center font-space-grotesk text-[36px] font-extrabold uppercase leading-[46px] text-white sm:text-[54px] sm:leading-[64px] '>
					Pitch your StartUp, <br /> Connect with Enterpreneurs
				</h1>
				<p className=' max-w-2xl break-words text-center text-[20px] font-medium text-white'>
					Submit ideas, Vote on Pitches, and Get Noticed in Virtual
					Competitions.
				</p>
				<SearchForm query={query} />
			</section>
			<section className='mx-auto max-w-7xl px-6 py-10'>
				<p className='text-[30px] font-semibold'>
					{query ? `Search results for ${query}` : 'All StartUps'}
				</p>

				<ul className='mt-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 '>
					{data?.length > 0 ? (
						data.map((data: StartupCardType) => (
							<StartupCard key={data?._id} data={data} />
						))
					) : (
						<p className='text-sm font-normal text-black'>No startups Found</p>
					)}
				</ul>
			</section>
		</>
	)
}

export default Home
