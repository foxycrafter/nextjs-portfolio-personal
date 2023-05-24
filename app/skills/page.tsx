import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { SiPython, SiReact } from "react-icons/si";


export const revalidate = 60;
export default async function ProjectsPage() {
	return (
		<div className="relative pb-16 flex flex-col items-center justify-center">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0 items-center justify-center">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						SkillSets
					</h2>
					
				</div>
				<div className="w-full h-px bg-zinc-800" />
					<p className="mt-4 text-zinc-400 items-center justify-center">
						Lenguages.
					</p>
					<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 items-center justify-center">
						<Card className="items-center justify-center">
							<p className="mt-4 text-zinc-400 items-center justify-center">English  =  B2+  = Toic / Tofel / Opp</p>
							<p className="mt-4 text-zinc-400 items-center justify-center">Spanish  =  Native</p>
						</Card>
					
					</div>
				<div className="w-full h-px bg-zinc-800" />
					<p className="mt-4 text-zinc-400 items-center justify-center">
						Programing.
						
						
					</p>
					
					
					<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 items-center justify-center">
						<Card className="items-center justify-center">
							<p className="mt-4 text-zinc-400">Python  =  Inermediate </p>
							<p className="mt-4 text-zinc-400">Nextjs  =  Intermediate</p>
							<p className="mt-4 text-zinc-400">React  =  Intermediate</p>
							<p className="mt-4 text-zinc-400">Bootstrap  =  Intermediate</p>
						</Card>
					</div>

				<div className="hidden w-full h-px md:block bg-zinc-800" />
					<p className="mt-4 text-zinc-400 items-center justify-center">
						Designe and Modeling
					</p>
					<div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2 items-center justify-center">
						<Card className="items-center justify-center">
							<p className="mt-4 text-zinc-400">Blender  =  Intermediate</p>
							<p className="mt-4 text-zinc-400">Kirita  =  Intermediate</p>
							<p className="mt-4 text-zinc-400">Substance  =  Intermediate</p>
							<p className="mt-4 text-zinc-400">Pothoshop  =  Basic / Intermediate</p>	
						</Card>
					</div>

				<div className="hidden w-full h-px md:block bg-zinc-800 items-center justify-center" />
				<p className="mt-4 text-zinc-400">
						Database.
					</p>
					
				<div className="grid  grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
					
					<Card className="items-center justify-center">
						<p className="mt-4 text-zinc-400 items-center justify-center">Mysql  =  Intermediate</p>
						<p className="mt-4 text-zinc-400 items-center justify-center">Postgrest  =  Intermediate</p>	
					</Card>
					
					
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />
				<p className="mt-4 text-zinc-400 items-center justify-center">
					General knowlage
				</p>
				<div className="grid  grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2 items-center justify-center">
					<Card className="items-center justify-center">
						<p className="mt-4 text-zinc-400 items-center justify-center">Virtual machines  =  Intermediate</p>
						<p className="mt-4 text-zinc-400 items-center justify-center">Cybersecurity Introduction  =  Intermediate</p>
						<p className="mt-4 text-zinc-400 items-center justify-center">Linux Distributios  =  Basic / Intermediate</p>	
						<p className="mt-4 text-zinc-400 items-center justify-center">Linux Distributios  =  Basic / Intermediate</p>	
						<p className="mt-4 text-zinc-400 items-center justify-center">Cybersecurity with OSINT  =  Basic / Intermediate</p>
					</Card>
				</div>
			</div>
		</div>
	);
}
