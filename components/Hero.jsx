import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<section
			className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-white"
			aria-labelledby="hero-heading"
			role="region"
		>
			{/* Skip link for keyboard users */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
			>
				Skip to main content
			</a>

			{/* Background Image */}
			<Image
				src="/hero.jpg"
				alt="Elegant manicured nails with abstract designs"
				fill
				className="hero-img"
				priority
				sizes="100vw"
				quality={90}
			/>

			{/* Overlay to ensure text readability */}
			<div className="absolute inset-0" aria-hidden="true" />

			{/* Content */}
			<div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto text-center">
				<span className="text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-4 text-white/90">
					Self-Love Club
				</span>

				<h1
					id="hero-heading"
					className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight"
				>
					Bringing fashion to{" "}
					<span className="block mt-1 sm:mt-2">your fingertips.</span>
				</h1>

				<Button className="mt-6 sm:mt-8 border-2 border-white bg-transparent text-white hover:bg-white hover:text-black rounded-none px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
					Book an Appointment
				</Button>
			</div>
		</section>
	);
}
