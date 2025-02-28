"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Journey() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="journey"
			ref={ref}
			className="relative w-full bg-[#F5F5F5] py-24 md:py-32 overflow-hidden"
		>
			{/* Background overlay effect */}
			<div
				className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"
				style={{
					backgroundImage: `url("/marble_bg.jpg")`, // Update the path to your image
					opacity: 0.1,
					backgroundSize: "cover", // Ensure the image covers the container
					backgroundPosition: "center", // Center the image
					backgroundRepeat: "no-repeat", // Prevent the image from repeating
				}}
			/>

			<div className="container mx-auto px-4 md:px-6 relative">
				<div className="max-w-4xl mx-auto text-center space-y-8">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.8 }}
						className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-gray-900"
					>
						START YOUR JOURNEY TODAY
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
					>
						It's time to take your salon or spa business to new
						heights. Allow us to be your reliable partner and help
						you achieve your goals. Schedule a consultation with us
						today, and together, let's build a successful and
						thriving business with an unparalleled experience that
						keeps your clients coming back for more.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="pt-4"
					>
						<Link href="/service">
							<Button className="border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white rounded-none px-8 py-6 text-sm uppercase tracking-wider transition-colors">
								See our Services
							</Button>
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
