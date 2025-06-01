"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code } from "lucide-react"
import { ViewContainer } from "@/components/layouts/view-container"

export default function LayoutAnimation() {
  const [step, setStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const maxSteps = 5

  // Auto-advance animation steps
  useEffect(() => {
    if (!isPlaying) return

    const timer = setTimeout(() => {
      setStep((prev) => (prev < maxSteps ? prev + 1 : 0))
    }, 1200)

    return () => clearTimeout(timer)
  }, [step, isPlaying])

  // CSS code snippets that appear with each step
  const codeSnippets = [
    `.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
}`,
    `.header {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
}`,
    `.sidebar {
  grid-row: 2 / 4;
}`,
    `.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}`,
    `.card {
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    `.footer {
  grid-column: 1 / -1;
  text-align: center;
}`,
  ]

  return (
    <div 
      className="bg-white py-10 border max-sm:h-[35vh] " 
      style={{
        backgroundImage: `
          radial-gradient(circle, #e5e5e5 1px, transparent 1px)
        `,
        backgroundSize: '18px 18px',
        backgroundPosition: '0 0'
      }}
    >
      <ViewContainer className=" w-full flex gap-3 rounded-lg overflow-hidden relative ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className=" z-10 border bg-white border-gray-200 rounded-md p-3 shadow-sm w-[30%]"
      >
        {/* <div className="flex items-center gap-2 mb-2">
          <Code size={16} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700">CSS</span>
        </div> */}
        <pre className="text-xs max-sm:text-[10px] text-neutral-500 font-mono overflow-x-auto whitespace-pre-wrap">
          {codeSnippets[Math.min(step, maxSteps)]}
        </pre>
      </motion.div>

      {/* Layout animation container */}
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm">
          {/* Grid container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full p-4 grid grid-cols-3 gap-3"
            style={{
              gridTemplateColumns: "1fr 2fr",
              gridTemplateRows: "auto 1fr 1fr auto",
            }}
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="col-span-2 bg-blue-50 border border-blue-100 rounded-md p-2 flex justify-between items-center"
            >
              <motion.div className="h-3 w-16 bg-blue-200 rounded-full" />
              <motion.div className="flex gap-2">
                <motion.div className="h-3 w-8 bg-blue-200 rounded-full" />
                <motion.div className="h-3 w-8 bg-blue-200 rounded-full" />
                <motion.div className="h-3 w-8 bg-blue-200 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: step >= 2 ? 1 : 0, x: step >= 2 ? 0 : -20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="row-span-2 bg-purple-50 border border-purple-100 rounded-md p-2 flex flex-col gap-2"
            >
              <motion.div className="h-3 w-full bg-purple-200 rounded-full" />
              <motion.div className="h-3 w-3/4 bg-purple-200 rounded-full" />
              <motion.div className="h-3 w-full bg-purple-200 rounded-full" />
              <motion.div className="h-3 w-2/3 bg-purple-200 rounded-full" />
            </motion.div>

            {/* Content area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="col-start-2 row-span-2 bg-gray-50 rounded-md p-2 flex flex-col gap-3"
            >
              {/* Content cards */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 10 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex gap-2 h-1/2"
              >
                <motion.div className="flex-1 bg-green-50 border border-green-100 rounded-md flex items-center justify-center">
                  <motion.div className="h-4 w-4 bg-green-200 rounded-full" />
                </motion.div>
                <motion.div className="flex-1 bg-green-50 border border-green-100 rounded-md flex items-center justify-center">
                  <motion.div className="h-4 w-4 bg-green-200 rounded-full" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 10 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex-1 bg-green-50 border border-green-100 rounded-md flex items-center justify-center"
              >
                <motion.div className="h-4 w-16 bg-green-200 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: step >= 5 ? 1 : 0, y: step >= 5 ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="col-span-2 bg-amber-50 border border-amber-100 rounded-md p-2 flex justify-center items-center"
            >
              <motion.div className="h-3 w-24 bg-amber-200 rounded-full" />
            </motion.div>
          </motion.div>
        </div>

      {/* <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-md text-sm transition-colors"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={() => setStep((prev) => (prev < maxSteps ? prev + 1 : 0))}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-md text-sm transition-colors"
        >
          Next Step
        </button>
      </div> */}

      {/* Code snippet display */}
      

      

      {/* Step indicator */}
      {/* <div className=" bottom-4 right-4 flex gap-1 w-full items-center justify-center">
        {Array.from({ length: maxSteps + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`w-[6px] h-[6px] rounded-full transition-colors ${step >= i ? "bg-blue-500" : "bg-gray-300"}`}
            aria-label={`Step ${i + 1}`}
          />
        ))}
      </div> */}
      </ViewContainer>
    </div>
  )
}
