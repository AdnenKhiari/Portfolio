"use client";
import "../style.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ProjectInstance from "./ProjectInstance";
import useWindowDimensions from "@/app/(sharedComponents)/TechStackIcons/useWindow";

const container = {
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const reveal_left = {
  hidden: {
    x: "-40%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
  },
};
const reveal_right = {
  hidden: {
    x: "40%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
  },
};
export default function ProjectGrid({ projects }: { projects: any[] }) {
  const win = useWindowDimensions();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <React.Fragment>
      <motion.h1
        viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { delay: 1.3, duration: 0.6 },
        }}
        className="display-big"
      >
        Projects
      </motion.h1>
      <motion.div variants={container} whileInView="show" initial="hidden">
        {win.width && isClient && projects.length > 0 &&
          projects.map((pair, index: number) => {
            const arr: ["big", "small"] | ["big", "big"] =
            win.width && win.width > 1100
                ? ["big", "small"]
                : ["big", "big"];
            return (
              <React.Fragment key={index}>
                <div></div>
                <div className="projects-list-row">
                  {pair && pair.length > 0 && (
                    <div>
                      <motion.div
                        variants={reveal_left}
                        onClick={() =>
                          router.push(`/projects/${pair[0].id}`, {
                            scroll: true,
                          })
                        }
                      >
                        <ProjectInstance
                          id={pair[0].id}
                          image={pair[0].url}
                          title={pair[0].titre}
                          categorie={pair[0].categorie}
                          type={arr[index % 2]}
                        />
                      </motion.div>
                    </div>
                  )}
                  {pair && pair.length > 1 && (
                    <div className="small">
                      <hr className="hr90" />
                      <motion.div
                        variants={reveal_right}
                        onClick={() =>
                          router.push(`/projects/${pair[1].id}`, {
                            scroll: true,
                          })
                        }
                      >
                        <ProjectInstance
                          id={pair[1].id}
                          image={pair[1].url}
                          title={pair[1].titre}
                          categorie={pair[1].categorie}
                          type={arr[1-(index % 2)]}
                        />
                      </motion.div>
                    </div>
                  )}
                </div>
                <hr />
              </React.Fragment>
            );
          })}
      </motion.div>
    </React.Fragment>
  );
}

