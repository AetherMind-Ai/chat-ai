import React from 'react'
import Image from "next/image";
import Link from "next/link";

const PortfolioProjects = () => {
  const projects = [
    {
      name: 'Image Generator',
      desr: 'Nothing',
      link: 'https://imggenerator-mindbot.vercel.app/',
    },
    {
      name: 'TextOcr',
      desr: 'Nothing',
      link: 'https://textocr-mindbot.vercel.app/',
    },

    {
      name: 'Object Detector',
      desr: 'Nothing',
      link: 'https://vision-mindbot.vercel.app/',
    }
  ]
  return (
    <div className="w-52 h-fit p-2">
      <h3>Other Features</h3>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {
          projects.map((item, i) => (
            <Link target="_blank" href={item.link} key={i} className="p-1 border rounded-md border-accentGray/30 hover:border-accentBlue/50 relative group">
              <span className="absolute bottom-10 bg-slate-800 text-white p-[2px] border border-accentGray/30 px-3 -translate-x-1/2 left-1/2 text-sm rounded-md hidden group-hover:block text-nowrap">{item.name}</span>
              <Image src={`/assets/projects-img/${i + 1}.png`} alt="img" width={50} height={50} className="cursor-pointer rounded-md" />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default PortfolioProjects