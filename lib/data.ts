import JavaScriptIcon from '@/assets/icons/javascript.svg'
import NextjsIcon from '@/assets/icons/nextjs.svg'
import NodejsIcon from '@/assets/icons/nodejs.svg'
import ReactIcon from '@/assets/icons/react.svg'
import TailwindCSS from '@/assets/icons/tailwind-css.svg'
import TypescriptIcon from '@/assets/icons/typescript.svg'
import SolidityIcon from '@/assets/icons/solidity.svg'
import FoundryIcon from '@/assets/icons/foundry.png'
import InfraIcon from '@/assets/icons/web3.png'
import UniswapIcon from '@/assets/icons/uniswap.svg'
import EtherIcon from '@/assets/icons/ethereum.svg'
import ChainlinkIcon from '@/assets/icons/chainlink.svg'
// ----------
import DagSwapImage from '@/assets/images/dagswap.jpg'
import StakImage from '@/assets/images/stak.jpg'
import VibestationImage from '@/assets/images/vibestation.jpg'
import TaiserImage from '@/assets/images/taiser.jpg'
import SweepImage from '@/assets/images/sweep.jpg'
import CienradiosImage from '@/assets/images/cienradios.jpg'

export const serviceData = [
  {
    icons: [ReactIcon, NextjsIcon, NodejsIcon],
    title: "Frontend Applications (React / Next.js)",
    shortDescription:
      "I build fast, production-ready web applications with modern React and Next.js — including dashboards, Web3 interfaces, and complex UI flows optimized for performance and scalability.",
  },
  {
    icons: [JavaScriptIcon, TypescriptIcon],
    title: "Core Engineering (JavaScript / TypeScript)",
    shortDescription:
      "Clean and maintainable application logic written in JavaScript and TypeScript, designed for scalability, long-term reliability, and real-world production use.",
  },
  {
    icons: [TailwindCSS],
    title: "UI Systems & Styling",
    shortDescription:
      "Responsive, polished interfaces built with Tailwind CSS — focusing on usability, consistency, and modern product aesthetics.",
  },
  {
    icons: [SolidityIcon],
    title: "Smart Contract Development & Review",
    shortDescription:
      "I design, implement, and review Solidity smart contracts — fixing critical issues and preparing codebases for audit with safer architecture, testing, and production-ready standards.",
  },
  {
    icons: [FoundryIcon],
    title: "Foundry Project Setup",
    shortDescription:
      "I transform messy smart contract repositories into clean, testable Foundry projects with structured testing, deployment scripts, and reproducible workflows.",
  },
  {
    icons: [InfraIcon],
    title: "Backend & Web3 Infrastructure",
    shortDescription:
      "Development of indexers, automation bots, event listeners, and execution scripts that bridge on-chain activity with backend systems for robust infrastructure.",
  },
  {
    icons: [EtherIcon, UniswapIcon, ChainlinkIcon],
    title: "Protocol Integration",
    shortDescription:
      "Integration of on-chain protocols like Chainlink, Uniswap, Morpho, and vault systems — translating smart contract mechanics into reliable application workflows.",
  },
];

export const technicalSkills = [
  {
    category: "Languages",
    items: ["Solidity", "TypeScript", "JavaScript", "Ruby", "Java"],
  },
  {
    category: "Frameworks & Tools",
    items: [
      "Foundry",
      "Hardhat",
      "OpenZeppelin",
      "Remix",
      "Node.js",
      "React",
      "Next.js",
      "GraphQL",
    ],
  },
  {
    category: "AI / Agents",
    items: ["ChatGPT", "Cursor", "Claude", "LangChain", "Eliza"],
  },
  {
    category: "Security & Analysis",
    items: ["Tenderly", "Etherscan", "MetaMask"],
  },
];

export const projectData = [
  {
    image: StakImage,
    title: 'Stak',
    subtitle: 'Launchpad for DATs, SPACs, and ICOs',
    ref: 'https://app.stak.fund/',
    shortDescription: 'Designed a launchpad for DATs, SPACs, and ICOs with a focus on security and compliance.',
  },
  {
    image: VibestationImage,
    title: 'Vibestation',
    subtitle: 'AI-Powered DeFi UI',
    ref: 'https://aiscan.build/',
    shortDescription: 'Built AI-powered DeFi UI enabling natural-language "vibe trading" across Uniswap/LiFi with EVM-MCP integration.',
  },
  {
    image: DagSwapImage,
    title: 'DagSwap',
    subtitle: 'Uniswap v3 Fork',
    ref: 'https://dag-swap.vercel.app/',
    shortDescription: 'Developed Uniswap v3 fork for BlockDAG chain with custom liquidity hooks and advanced trading features.',
  },
  {
    image: TaiserImage,
    title: 'Taiser',
    subtitle: 'Funding Protocol',
    ref: 'https://www.taiser.ai/',
    shortDescription: 'Created funding protocol for VC deals from tweets, leveraging custom bonding curves and closing strategies.',
  },
  {
    image: SweepImage,
    title: 'Sweep',
    subtitle: 'Lending Protocol',
    ref: 'https://www.sweepr.finance/',
    shortDescription: 'Built lending protocol with junior/senior tranches and cross-chain OFT integration (LayerZero). Collaborated in 2 external audits.',
  },
  {
    image: CienradiosImage,
    title: 'Cienradios',
    subtitle: 'Radio streaming application',
    ref: 'https://ar.cienradios.com/',
    shortDescription: 'Spotify-like radio streaming application developed in React JS and Deezer'
  }
]