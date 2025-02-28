import Image from "next/image";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Journey from "@/components/Journey";

export default function Home() {
	return (
		<>
			<Hero />
			<Description />
			<Journey />
		</>
	);
}
