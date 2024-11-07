import type { Metadata } from 'next'
import { Roboto, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ChildProps from '@/types'
import { ThemeProvider } from '@/components/providers/theme-provider'

// const workSans = localFont({
// 	src: [
// 		{
// 			path: './fonts/WorkSans-Black.ttf',
// 			weight: '900',
// 			style: 'normal',
// 		},
// 		{
// 			path: './fonts/WorkSans-ExtraBold.ttf',
// 			weight: '800',
// 			style: 'normal',
// 		},
// 		{
// 			path: './fonts/WorkSans-Bold.ttf',
// 			weight: '700',
// 			style: 'normal',
// 		},
// 		{
// 			path: './fonts/WorkSans-SemiBold.ttf',
// 			weight: '600',
// 			style: 'normal',
// 		},
// 		{
// 			path: './fonts/WorkSans-Medium.ttf',
// 			weight: '500',
// 			style: 'normal',
// 		},
// 		{
// 			path: './fonts/WorkSans-Regular.ttf',
// 			weight: '400',
// 			style: 'normal',
// 		},
// 		{
// 			path: './fonts/WorkSans-Light.ttf',
// 			weight: '300',
// 			style: 'normal',
// 		},
// 		{
// 			path: './fonts/WorkSans-Thin.ttf',
// 			weight: '200',
// 			style: 'normal',
// 		},
// 		{
// 			path: './fonts/WorkSans-ExtraLight.ttf',
// 			weight: '100',
// 			style: 'normal',
// 		},
// 	],
// 	variable: '--font-work-sans',
// })
const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
})

const spaceGrotesk = SpaceGrotesk({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-space-grotesk',
})
export const metadata: Metadata = {
	title: 'UpStart',
	description: 'Ignite. Connect and Innovate.',
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body
					className={`${roboto.variable} ${spaceGrotesk.variable} overflow-x-hidden`}
				>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
