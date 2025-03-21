"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import maniServices from "@/data/manicure";
import pediServices from "@/data/pedicure";
import acrylicServices from "@/data/acrylic";
import addonServices from "@/data/addon";
import gelxServices from "@/data/gelx";
import polishchangeServices from "@/data/polishchange";
import removalServices from "@/data/removal";
import dipServices from "@/data/dip";
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
								FOR MANICURE
							</h2>
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

						<div className="text-center">
							<span className="text-rose-400 italic text-lg font-light">
								Pricing
							</span>

							<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-6">
								FOR ACRYLIC
							</h2>
						</div>

						<div className="space-y-8">
							{acrylicServices.map((service, index) => (
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

						<div className="text-center">
							<span className="text-rose-400 italic text-lg font-light">
								Pricing
							</span>

							<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-6">
								FOR GELX
							</h2>
						</div>

						<div className="space-y-8">
							{gelxServices.map((service, index) => (
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

						<div className="text-center">
							<span className="text-rose-400 italic text-lg font-light">
								Pricing
							</span>

							<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-6">
								FOR POLISH CHANGE
							</h2>
						</div>

						<div className="space-y-8">
							{polishchangeServices.map((service, index) => (
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

						<div className="text-center">
							<span className="text-rose-400 italic text-lg font-light">
								Pricing
							</span>

							<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-6">
								FOR DIP SERVICES
							</h2>
						</div>

						<div className="space-y-8">
							{dipServices.map((service, index) => (
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
								FOR PEDICURE
							</h2>
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
									FOR ADDON
								</h2>
							</div>

							<div className="space-y-8">
								{addonServices.map((service, index) => (
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

							<div className="text-center">
								<span className="text-rose-400 italic text-lg font-light">
									Pricing
								</span>

								<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-gray-900 mb-6">
									FOR REMOVAL
								</h2>
							</div>

							<div className="space-y-8">
								{removalServices.map((service, index) => (
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
