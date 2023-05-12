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
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						SkillSets
					</h2>
					
				</div>
				<div className="w-full h-px bg-zinc-800" />
				<p className="mt-4 text-zinc-400">
					Lenguages.
				</p>
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card><p className="mt-4 text-zinc-400">English  =  B2+  = Toic / Tofel / Opp</p></Card>
					<Card><p className="mt-4 text-zinc-400">Spanish  =  Native</p></Card>
				</div>
				<div className="w-full h-px bg-zinc-800" />
				<p className="mt-4 text-zinc-400">
						Programing.
						
						
					</p>
					
					
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card><p className="mt-4 text-zinc-400">Python  =  Inermediate </p></Card>
					<Card><p className="mt-4 text-zinc-400">Nextjs  =  Intermediate</p></Card>
					<Card><p className="mt-4 text-zinc-400">React  =  Intermediate</p></Card>
					<Card><p className="mt-4 text-zinc-400">Bootstrap  =  Intermediate</p></Card>
				</div>

				<div className="hidden w-full h-px md:block bg-zinc-800" />
				<p className="mt-4 text-zinc-400">
					Designe and Modeling
				</p>
				<div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
				<Card><p className="mt-4 text-zinc-400">Blender  =  Intermediate</p></Card>
				<Card><p className="mt-4 text-zinc-400">Kirita  =  Intermediate</p></Card>
				<Card><p className="mt-4 text-zinc-400">Substance  =  Intermediate</p></Card>
				<Card><p className="mt-4 text-zinc-400">Pothoshop  =  Basic / Intermediate</p></Card>
				</div>

				<div className="hidden w-full h-px md:block bg-zinc-800" />
				<p className="mt-4 text-zinc-400">
						Database.
					</p>
					
				<div className="grid  grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
					
					<Card><p className="mt-4 text-zinc-400">Mysql  =  Intermediate</p></Card>
					<Card><p className="mt-4 text-zinc-400">Postgrest  =  Intermediate</p></Card>
					
					
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />
				<p className="mt-4 text-zinc-400">
					General knowlage
				</p>
				<div className="grid  grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
					<Card><p className="mt-4 text-zinc-400">Virtual machines  =  Intermediate</p></Card>
					<Card><p className="mt-4 text-zinc-400">Cybersecurity Introduction  =  Intermediate</p></Card>
					<Card><p className="mt-4 text-zinc-400">Linux Distributios  =  Basic / Intermediate</p></Card>
					<Card><p className="mt-4 text-zinc-400">Cybersecurity with OSINT  =  Basic / Intermediate</p></Card>
				</div>
			</div>
		</div>
	);
}
