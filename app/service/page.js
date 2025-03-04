"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import maniServices from "@/data/manicure";
import pediServices from "@/data/pedicure";
import waxServices from "@/data/wax";
import Link from "next/link";

export default function Services() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section ref={ref} className="w-full bg-[#FDF8F7]">
			<div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row">
				{/* Left Content Section */}
				<div className="w-full md:w-1/2 px-4 md:px-6 py-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<div className="text-center">
							<span className="text-rose-400 italic text-lg font-light">
								Pricing
							</span>

							<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-6">
								PRICING FOR MANICURE
							</h2>

							<p className="text-gray-600 mb-12 text-lg">
								We believe that your perfect nails are the
								result of the continuous search for excellence
								and attention to details.
							</p>
						</div>

						<div className="space-y-8">
							{maniServices.map((service, index) => (
								<motion.div
									key={service.name}
									initial={{ opacity: 0, y: 20 }}
									animate={
										isInView
											? { opacity: 1, y: 0 }
											: { opacity: 0, y: 20 }
									}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className="group"
								>
									<div className="flex items-baseline gap-4">
										<h3 className="text-xl font-serif text-gray-900 group-hover:text-rose-500 transition-colors">
											{service.name}
										</h3>
										<div className="flex-grow border-b border-dotted border-gray-300 group-hover:border-rose-200 transition-colors" />
										<span className="text-xl text-rose-500 font-serif">
											{service.price}
										</span>
									</div>
									<p className="text-gray-500 mt-1 text-sm">
										{service.description}
									</p>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="pt-8"
						></motion.div>
					</motion.div>
				</div>

				{/* Right Content Section */}
				<div className="w-full md:w-1/2 px-4 md:px-6 pt-0 md:pt-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 20 }
						}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<div className="text-center">
							<span className="text-rose-400 italic text-lg font-light">
								Pricing
							</span>

							<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-6">
								PRICING FOR PEDICURE
							</h2>

							<p className="text-gray-600 mb-12 text-lg">
								We believe that your perfect feet are the
								culmination of skill, relaxation, and an
								unwavering dedication to detail, leaving you
								feeling refreshed and confident.
							</p>
						</div>

						<div className="space-y-8">
							{pediServices.map((service, index) => (
								<motion.div
									key={service.name}
									initial={{ opacity: 0, y: 20 }}
									animate={
										isInView
											? { opacity: 1, y: 0 }
											: { opacity: 0, y: 20 }
									}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className="group"
								>
									<div className="flex items-baseline gap-4">
										<h3 className="text-xl font-serif text-gray-900 group-hover:text-rose-500 transition-colors">
											{service.name}
										</h3>
										<div className="flex-grow border-b border-dotted border-gray-300 group-hover:border-rose-200 transition-colors" />
										<span className="text-xl text-rose-500 font-serif">
											{service.price}
										</span>
									</div>
									<p className="text-gray-500 mt-1 text-sm">
										{service.description}
									</p>
								</motion.div>
							))}

							<div className="text-center">
								<span className="text-rose-400 italic text-lg font-light">
									Pricing
								</span>

								<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-6">
									PRICING FOR WAX
								</h2>

								<p className="text-gray-600 mb-12 text-lg">
									We believe that smooth, flawless skin is the
									result of precision, care, and a commitment
									to achieving perfection with every touch.
								</p>
							</div>
							{waxServices.map((service, index) => (
								<motion.div
									key={service.name}
									initial={{ opacity: 0, y: 20 }}
									animate={
										isInView
											? { opacity: 1, y: 0 }
											: { opacity: 0, y: 20 }
									}
									transition={{
										duration: 0.5,
										delay: index * 0.1,
									}}
									className="group"
								>
									<div className="flex items-baseline gap-4">
										<h3 className="text-xl font-serif text-gray-900 group-hover:text-rose-500 transition-colors">
											{service.name}
										</h3>
										<div className="flex-grow border-b border-dotted border-gray-300 group-hover:border-rose-200 transition-colors" />
										<span className="text-xl text-rose-500 font-serif">
											{service.price}
										</span>
									</div>
									<p className="text-gray-500 mt-1 text-sm">
										{service.description}
									</p>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 20 }
							}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="pt-8"
						></motion.div>
					</motion.div>
				</div>
			</div>
			<div className="flex justify-center">
				<Link
					href={
						"https://www.fresha.com/book-now/metro-nails-rsnmd0qp/all-offer?id=2565982&share&pId=2485996"
					}
				>
					<Button className="bg-[#8B1F41] hover:bg-[#6B1832] text-white rounded-none px-8 py-3 text-sm transition-colors">
						Book Now
					</Button>
				</Link>
			</div>
		</section>
	);
}
