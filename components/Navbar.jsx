"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="w-full py-4 px-6 md:px-12 flex items-center justify-between">
			<div className="flex flex-col">
				<Link href="/" className="text-center">
					<h1 className="text-xl md:text-2xl font-serif tracking-wide">
						METRO NAILS
					</h1>
					<span className="text-sm text-muted-foreground">
						London
					</span>
				</Link>
			</div>

			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center gap-8">
				<nav className="flex space-x-8">
					<Link
						href="/service"
						className="text-sm uppercase tracking-wide hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
					>
						Pricing
					</Link>
					{/* <Link
						href="/contact"
						className="text-sm uppercase tracking-wide hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
					>
						Contact
					</Link> */}
				</nav>

				<div className="flex items-center gap-4">
					<a
						href="https://www.instagram.com/metronails_forya25/"
						target="_blank"
						aria-label="Instagram"
						className="p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
					>
						<Instagram className="h-5 w-5 text-gray-700 hover:text-primary transition-colors" />
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=61573829711693"
						target="_blank"
						aria-label="Facebook"
						className="p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
					>
						<Facebook className="h-5 w-5 text-gray-700 hover:text-primary transition-colors" />
					</a>
				</div>
				<Link
					href={
						"https://www.fresha.com/book-now/metro-nails-rsnmd0qp/all-offer?id=2565982&share&pId=2485996"
					}
				>
					<Button className="border border-black bg-transparent text-black hover:bg-black hover:text-white rounded-none px-6 transition-colors">
						Book Appointment
					</Button>
				</Link>
			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden">
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							aria-label="Menu"
							className="h-10 w-10"
						>
							<Menu className="h-6 w-6" />
						</Button>
					</SheetTrigger>
					<SheetContent
						side="right"
						className="w-[80%] sm:w-[350px] pt-12"
					>
						<Button
							variant="ghost"
							size="icon"
							className="absolute top-4 right-4"
							onClick={() => setIsOpen(false)}
							aria-label="Close menu"
						>
							{/* <X className="h-5 w-5" /> */}
						</Button>

						<nav className="flex flex-col space-y-6 mt-8 p-[20px]">
							<Link
								href="/service"
								className="text-lg uppercase tracking-wide hover:text-primary transition-colors"
								onClick={() => setIsOpen(false)}
							>
								Service
							</Link>
							<Link
								href="/contact"
								className="text-lg uppercase tracking-wide hover:text-primary transition-colors"
								onClick={() => setIsOpen(false)}
							>
								Contact
							</Link>

							<div className="flex items-center gap-6 mt-4 pt-6 border-t">
								<Link
									href="#"
									aria-label="Instagram"
									onClick={() => setIsOpen(false)}
								>
									<Instagram className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
								</Link>
								<Link
									href="#"
									aria-label="Facebook"
									onClick={() => setIsOpen(false)}
								>
									<Facebook className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
								</Link>
							</div>
							<Link
								href={
									"https://www.fresha.com/book-now/metro-nails-rsnmd0qp/all-offer?id=2565982&share&pId=2485996"
								}
							>
								<Button
									className="mt-4 w-full border border-black bg-transparent text-black hover:bg-black hover:text-white rounded-none px-6 transition-colors"
									onClick={() => setIsOpen(false)}
								>
									Book Appointment
								</Button>
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
