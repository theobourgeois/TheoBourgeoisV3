import {
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { SiTrpc } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { SiDrizzle } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { SiFfmpeg } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiMysql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const technologyLinks = {
    react: "https://reactjs.org/",
    js: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ts: "https://www.typescriptlang.org/",
    tailwind: "https://tailwindcss.com/",
    nextjs: "https://nextjs.org/",
    gql: "https://graphql.org/",
    trpc: "https://trpc.io/",
    storybook: "https://storybook.js.org/",
    kafka: "https://kafka.apache.org/",
    postgresql: "https://www.postgresql.org/",
    nodejs: "https://nodejs.org/",
    drizzle: "https://www.trufflesuite.com/drizzle",
    gcloud: "https://cloud.google.com/",
    ffmpeg: "https://ffmpeg.org/",
    figma: "https://www.figma.com/",
    mysql: "https://www.mysql.com/",
    prisma: "https://www.prisma.io/",
    zustand: "https://github.com/pmndrs/zustand",
    uploadthing: "https://uploadthing.com/",
    java: "https://www.java.com/",
    spring: "https://spring.io/",
    docker: "https://www.docker.com/",
    aws: "https://aws.amazon.com/",
    python: "https://www.python.org/",
};

export type Technology = keyof typeof technologyIcons;

export function TechnologyIcon({ technology }: { technology: Technology }) {
    return <div className="text-white">{technologyIcons[technology]}</div>;
}

export const technologyIcons = {
    react: <BiLogoReact className="h-full w-full text-blue-400" />,
    js: <BiLogoJavascript className="h-full w-full text-yellow-500" />,
    ts: <BiLogoTypescript className="h-full w-full text-blue-600" />,
    tailwind: <BiLogoTailwindCss className="h-full w-full text-cyan-600" />,
    nextjs: <TbBrandNextjs className="h-full w-full text-white" />,
    gql: <GrGraphQl className="h-full w-full text-pink-600" />,
    trpc: <SiTrpc className="h-full w-full text-blue-500" />,
    storybook: <SiStorybook className="h-full w-full text-pink-600" />,
    kafka: <SiApachekafka className="h-full w-full text-white" />,
    postgresql: <BiLogoPostgresql className="h-full w-full text-blue-600" />,
    nodejs: <FaNodeJs className="h-full w-full text-green-600" />,
    drizzle: <SiDrizzle className="h-full w-full text-blue-600" />,
    gcloud: <SiGooglecloud className="h-full w-full text-blue-600" />,
    ffmpeg: <SiFfmpeg className="h-full w-full text-green-600" />,
    figma: <FiFigma className="h-full w-full text-pink-600" />,
    mysql: <SiMysql className="h-full w-full text-blue-600" />,
    prisma: <SiPrisma className="h-full w-full text-white" />,
    java: <FaJava className="h-full w-full text-red-600" />,
    spring: <SiSpring className="h-full w-full text-green-600" />,
    docker: <FaDocker className="h-full w-full text-blue-600" />,
    aws: <FaAws className="h-full w-full text-yellow-600" />,
    python: <FaPython className="h-full w-full text-blue-600" />,
};
