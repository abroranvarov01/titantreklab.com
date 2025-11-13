import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const orbitron = Orbitron({
	subsets: ["latin"],
	variable: "--font-orbitron",
})

const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
})

export const metadata: Metadata = {
	title: "TitanTrekLab - Precision Gear for Explorers",
	description: "Forged by Adventure. Refined by Fire. Titanium stoves, breath optimization, and trail innovation.",
	referrer: "unsafe-url",
	icons: {
		icon: [
			{
				url: "/icon-light-32x32.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/icon-dark-32x32.png",
				media: "(prefers-color-scheme: dark)",
			},
			{
				url: "/icon.svg",
				type: "image/svg+xml",
			},
		],
		apple: "/apple-icon.png",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.variable} ${orbitron.variable} font-sans antialiased`}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
