/* eslint-disable @next/next/no-img-element */
import formatData from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function StartupCard({ data }: { data: StartupTypeCard }) {
	const {
		_createdAt,
		author: { _id: authorId, name },
		views,
		_id,
		title,
		description,
		category,
	} = data
	return (
		<li
			className='  group rounded-[22px] border-[5px] border-blue-500 bg-white px-5 py-6 shadow-md transition-all duration-500 hover:border-primary hover:bg-blue-100'
			style={{
				boxShadow: '8px 8px 0px 0px rgba(59, 130, 246, 0.2)',
			}}
		>
			<div className='flex items-center justify-between'>
				<p className='rounded-full bg-blue-200 px-4 py-2 font-roboto text-[16px] font-medium text-black '>
					{formatData(_createdAt)}
				</p>
				<div className='flex gap-1.5'>
					<EyeIcon className='size-6 text-primary' />
					<span className='font-roboto text-black'>{views}</span>
				</div>
			</div>
			<div className='mt-5 flex items-center justify-between gap-5 px-4'>
				<div className='flex-1'>
					<Link href={`/user/${authorId}`}>
						<p className='line-clamp-1  font-roboto text-[16px]  font-semibold  text-black'>
							{name}
						</p>
					</Link>
					<Link href={`/startup/${_id}`}>
						<h3 className='text-[26px] font-semibold text-black  '>{title}</h3>
					</Link>
				</div>
				<Link href={`/user/${authorId}`}>
					<Image
						src='https://placehold.co/48x48'
						alt='placehold'
						width={48}
						height={48}
						className='rounded-full'
					/>
				</Link>
			</div>
			<Link href={`/startup/${_id}`}>
				<p className='my-3 line-clamp-2 break-all px-4 text-[16px] font-normal text-black'>
					{description}
				</p>
				<img
					src='/image.jpg'
					className='h-[164px] w-full rounded-[10px] object-cover'
					alt='image'
				/>
			</Link>

			<div className='mt-5 flex items-center justify-between gap-3'>
				<Link href={`/?query=${category.toLowerCase()}`}>
					<p className='rounded-full bg-blue-200 px-4 py-2 font-roboto text-[16px] font-medium text-black'>
						{category}
					</p>
				</Link>
				<Button
					className=' rounded-full bg-black px-5 py-3 text-[16px] font-medium text-white'
					asChild
				>
					<Link href={`/startup/${_id}`}>Details</Link>
				</Button>
			</div>
		</li>
	)
}

export default StartupCard
