import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { SiPython, SiReact } from "react-icons/si";
import styles from "./importd.css"
export const revalidate = 60;
export default async function ProjectsPage() {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.container}>
        <h2 className={styles.title}>SkillSets</h2>
        <div className={styles.divider} />
        <p className={styles.card-content}>Languages.</p>
        <div className={styles.card-grid}>
          <Card className={styles.card}>
            <p className={styles.card-content}>English = B2+ = Toic / Tofel / Opp</p>
            <p className={styles.card-content}>Spanish = Native</p>
          </Card>
        </div>
        <div className={styles.divider} />
        <p className={styles.card-content}>Programming.</p>
        <div className={styles.card-grid}>
          <Card className={styles.card}>
            <p className={styles.card-content}>Python = Intermediate</p>
            <p className={styles.card-content}>Nextjs = Intermediate</p>
            <p className={styles.card-content}>React = Intermediate</p>
            <p className={styles.card-content}>Bootstrap = Intermediate</p>
          </Card>
        </div>
        <div className={styles.hidden-divider} />
        <p className={styles.card-content}>Design and Modeling</p>
        <div className={styles.card-grid}>
          <Card className={styles.card}>
            <p className={styles.card-content}>Blender = Intermediate</p>
            <p className={styles.card-content}>Krita = Intermediate</p>
            <p className={styles.card-content}>Substance = Intermediate</p>
            <p className={styles.card-content}>Photoshop = Basic / Intermediate</p>
          </Card>
        </div>
        <div className={styles.hidden-divider} />
        <p className={styles.card-content}>Database.</p>
        <div className={styles.card-grid}>
          <Card className={styles.card}>
            <p className={styles.card-content}>Mysql = Intermediate</p>
            <p className={styles.card-content}>Postgrest = Intermediate</p>
          </Card>
        </div>
        <div className={styles.hidden-divider} />
        <p className={styles.card-content}>General knowledge</p>
        <div className={styles.card-grid}>
          <Card className={styles.card}>
            <p className={styles.card-content}>Virtual machines = Intermediate</p>
            <p className={styles.card-content}>Cybersecurity Introduction = Intermediate</p>
            <p className={styles.card-content}>Linux Distributions = Basic / Intermediate</p>
            <p className={styles.card-content}>Cybersecurity with OSINT = Basic / Intermediate</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

