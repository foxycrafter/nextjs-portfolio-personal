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
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 text-align:center justify-center items-center h-screen">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            SkillSets
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <p className="mt-4 text-zinc-400">Languages.</p>
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <p className="mt-4 text-zinc-400">English = B2+ = Toic / Tofel / Opp</p>
            <p className="mt-4 text-zinc-400">Spanish = Native</p>
          </Card>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <p className="mt-4 text-zinc-400">Programming.</p>
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <p className="mt-4 text-zinc-400">Python = Intermediate</p>
            <p className="mt-4 text-zinc-400">Nextjs = Intermediate</p>
            <p className="mt-4 text-zinc-400">React = Intermediate</p>
            <p className="mt-4 text-zinc-400">Bootstrap = Intermediate</p>
          </Card>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
        <p className="mt-4 text-zinc-400">Design and Modeling</p>
        <div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
          <Card>
            <p className="mt-4 text-zinc-400">Blender = Intermediate</p>
            <p className="mt-4 text-zinc-400">Krita = Intermediate</p>
            <p className="mt-4 text-zinc-400">Substance = Intermediate</p>
            <p className="mt-4 text-zinc-400">Photoshop = Basic / Intermediate</p>
          </Card>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
        <p className="mt-4 text-zinc-400">Database.</p>
        <div className="grid  grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
          <Card>
            <p className="mt-4 text-zinc-400">Mysql = Intermediate</p>
            <p className="mt-4 text-zinc-400">Postgrest = Intermediate</p>
          </Card>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
        <p className="mt-4 text-zinc-400">General knowledge</p>
        <div className="grid  grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2 ">
          <Card>
            <p className="mt-4 text-zinc-400">Virtual machines = Intermediate</p>
            <p className="mt-4 text-zinc-400">Cybersecurity Introduction = Intermediate</p>
            <p className="mt-4 text-zinc-400">Linux Distributions = Basic / Intermediate</p>
            <p className="mt-4 text-zinc-400">Cybersecurity with OSINT = Basic / Intermediate</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
