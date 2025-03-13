"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<footer ref={ref} className="bg-[#FDF8F7] py-16">
			<div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
				{/* Logo and Description Section */}
				<div className="text-center md:text-left mb-6 md:mb-0">
					<motion.h2
						className="text-3xl md:text-4xl font-serif text-gray-900 mb-4"
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.8 }}
					>
						Join Our Self-Love Journey
					</motion.h2>
					<motion.p
						className="text-muted-foreground text-lg mb-4"
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						We believe in elevating the art of nail care and
						creating a safe, ethical space for all.
					</motion.p>
				</div>

				{/* Contact Info Section */}
				<div className="text-center md:text-left mb-6 md:mb-0">
					<motion.h3
						className="text-xl font-serif text-gray-900 mb-4"
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						Contact Us
					</motion.h3>
					<ul className="space-y-2">
						<li className="text-lg text-gray-600">
							289 Lafayette St, London, OH 43140
						</li>
						<li className="text-lg text-gray-600">
							Email: metronails25@gmail.com
						</li>
						<li className="text-lg text-gray-600">
							Phone: +1 (740) 852-9140
						</li>
					</ul>
				</div>

				{/* Social Media Links Section */}
				<div className="text-center md:text-right">
					<motion.h3
						className="text-xl font-serif text-gray-900 mb-4"
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : { opacity: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						Follow Us
					</motion.h3>
					<div className="flex justify-center md:justify-end gap-6">
						<a
							href="https://www.instagram.com/metronails_forya25/"
							className="text-gray-600 hover:text-rose-500 transition-colors"
						>
							Instagram
						</a>
					</div>
					<div className="flex justify-center md:justify-end gap-6">
						<a
							href="https://www.facebook.com/profile.php?id=61573829711693"
							className="text-gray-600 hover:text-rose-500 transition-colors"
						>
							Facebook
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
