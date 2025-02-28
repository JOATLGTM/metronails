"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Description() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section ref={ref} className="w-full bg-white">
			<div className="container mx-auto">
				<div className="grid lg:grid-cols-2 items-stretch">
					{/* Image Container */}
					<motion.div
						className="relative h-[600px] lg:h-[800px]"
						initial={{ opacity: 0, x: -50 }}
						animate={
							isInView
								? { opacity: 1, x: 0 }
								: { opacity: 0, x: -50 }
						}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<Image
							src={"/placeholder.svg"}
							alt="Nail salon environment showing nail technicians and polish display"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
							priority
						/>
					</motion.div>

					{/* Content Container */}
					<motion.div
						className="flex flex-col justify-center items-center text-center p-8 lg:p-16"
						initial={{ opacity: 0, y: 50 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 50 }
						}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.2,
						}}
					>
						<div className="max-w-xl">
							<motion.h2
								className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8"
								initial={{ opacity: 0 }}
								animate={
									isInView ? { opacity: 1 } : { opacity: 0 }
								}
								transition={{ duration: 0.8, delay: 0.4 }}
							>
								NAIL CARE FOR PEOPLE WHO CARE
							</motion.h2>
							<motion.p
								className="text-muted-foreground text-lg mb-10 leading-relaxed"
								initial={{ opacity: 0 }}
								animate={
									isInView ? { opacity: 1 } : { opacity: 0 }
								}
								transition={{ duration: 0.8, delay: 0.6 }}
							>
								We couldn't find a fun, elevated nail salon that
								also cared about safety and an ethical work
								environment, so we created one. From the
								beginning, we wanted to create a safe space for
								nail techs to not only work, but feel valued and
								cared for. And, we're just getting started.
							</motion.p>
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={
									isInView
										? { opacity: 1, scale: 1 }
										: { opacity: 0, scale: 0.9 }
								}
								transition={{ duration: 0.8, delay: 0.8 }}
							>
								<Button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white rounded-full px-10 py-6 text-sm uppercase tracking-wider transition-all duration-200 transform hover:scale-105">
									Our Story
								</Button>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
