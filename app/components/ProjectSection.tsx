import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../../utils/data";
import { IoMdClose } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { projectType } from "../../types/projectType";

function getScreenshotSrc(project: projectType): string {
  if (project.useDynamicScreenshot) {
    return `https://api.microlink.io/?url=${encodeURIComponent(project.siteLink)}&screenshot=true&meta=false&embed=screenshot.url`;
  }
  return project.image;
}

const ProjectCard = ({
  project,
  onClick,
}: {
  project: projectType;
  onClick: () => void;
}) => {
  const [imgError, setImgError] = useState(false);
  const src = imgError ? project.image : getScreenshotSrc(project);

  return (
    <motion.div
      layoutId={project.name}
      className="cursor-pointer group rounded-xl border border-white/5 hover:border-white/15 transition-all duration-300 overflow-hidden bg-zinc-900/50 hover:bg-zinc-900/80"
      style={{ boxShadow: "none" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 40px rgba(191,64,191,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
      onClick={onClick}
    >
      {/* Image with hover overlay */}
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={src}
          alt={`${project.name} preview`}
          fill
          unoptimized={project.useDynamicScreenshot && !imgError}
          onError={() => setImgError(true)}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
          <span className="text-xs font-medium text-white/80 flex items-center gap-1.5">
            View Details <FiExternalLink size={12} />
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="py-4 px-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h4 className="font-semibold text-white text-[0.95rem]">{project.name}</h4>
          <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-white/8 border border-white/10 text-white/50 shrink-0 mt-0.5">
            {project.category.split("/")[0].trim()}
          </span>
        </div>
        <p className="text-xs opacity-60 leading-relaxed">{project.shortDesc}</p>
      </div>
    </motion.div>
  );
};

const ProjectSection = () => {
  const [showCard, setShowCard] = useState<undefined | projectType>(undefined);
  const [modalImgError, setModalImgError] = useState(false);

  const handleOpen = (project: projectType) => {
    setModalImgError(false);
    setShowCard(project);
  };

  return (
    <section className="mt-12 px-6 md:px-10 mb-14">
      <p className="text-xs uppercase tracking-widest text-[#BF40BF] text-center mb-2 font-medium">
        Work
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Featured Projects</h2>
      <p className="opacity-60 text-center text-sm mb-10">
        A selection of things I&apos;ve built:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} onClick={() => handleOpen(project)} />
        ))}
      </div>

      <AnimatePresence>
        {showCard && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full z-50 h-screen fixed bg-black/80 backdrop-blur-xs flex-center top-0 left-0 px-4"
            onClick={() => setShowCard(undefined)}
          >
            <motion.div
              layoutId={showCard.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full max-w-3xl bg-zinc-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:flex">
                {/* Image column */}
                <div className="relative md:w-1/2 aspect-4/3 md:aspect-auto">
                  <Image
                    src={
                      modalImgError
                        ? showCard.image
                        : getScreenshotSrc(showCard)
                    }
                    alt={`${showCard.name} preview`}
                    fill
                    unoptimized={showCard.useDynamicScreenshot && !modalImgError}
                    onError={() => setModalImgError(true)}
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-900/40 to-transparent md:bg-linear-to-r" />
                </div>

                {/* Details column */}
                <div className="md:w-1/2 flex flex-col px-6 py-5 gap-3 text-sm overflow-y-auto max-h-[70vh] md:max-h-none">
                  <button
                    onClick={() => setShowCard(undefined)}
                    className="self-end bg-white/10 hover:bg-white/20 transition-colors rounded-full p-1.5 text-white"
                  >
                    <IoMdClose size={18} />
                  </button>

                  <div className="-mt-1">
                    <h2 className="text-xl font-bold text-white mb-0.5">{showCard.name}</h2>
                    <p className="text-xs italic text-[#BF40BF]/80">{showCard.category}</p>
                  </div>

                  <div>
                    <h5 className="text-xs uppercase tracking-widest text-white/40 mb-2">
                      Description
                    </h5>
                    <p className="text-xs opacity-75 font-light leading-relaxed">
                      {showCard.longDesc}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs uppercase tracking-widest text-white/40 mb-2">
                      Built With
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {showCard.built.split(",").map((tech) => (
                        <span
                          key={tech.trim()}
                          className="text-[0.65rem] px-2.5 py-1 rounded-full bg-white/8 border border-white/10 text-white/70"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto pt-2">
                    <a
                      href={showCard.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-linear-to-r from-[#3e2a98] to-[#BF40BF] text-white py-2 px-4 text-xs rounded-xl font-medium hover:opacity-90 transition-opacity"
                    >
                      Visit Site
                      <FiExternalLink size={11} />
                    </a>
                    {showCard.codeLink && (
                      <a
                        href={showCard.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/15 border border-white/10 text-white py-2 px-4 text-xs rounded-xl font-medium transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectSection;
