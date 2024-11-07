import { clsx, type ClassValue } from 'clsx'
import { format } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export default function formatData(data: string) {
	const formatTime = data
	return format(formatTime, 'MMMM do, yyyy')
}
