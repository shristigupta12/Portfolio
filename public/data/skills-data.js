
export const SkillsData = [
    "<React />",
    "<NextJs />",
    "<JavaScript />",
    "<TypeScript />",
    "<Shadcn />",
    "<Zustand />",
    "<Tanstack />",
    "<HTML />",
    "<TailwindCSS />",
    "<CSS />",
    "<C++ />",
    "<Git />",
    "<GitHub />",
    "<FramerMotion />",
    "<Zod />",
  ]
  
  // Color mapping for different skill categories
  export const getSkillColor = (skill) => {
    const colorMap= {
      "<React />": "text-blue-600 bg-blue-50 border-blue-200",
      "<NextJs />": "text-gray-800 bg-gray-50 border-gray-200",
      "<JavaScript />": "text-yellow-600 bg-yellow-50 border-yellow-200",
      "<TypeScript />": "text-blue-700 bg-blue-50 border-blue-200",
      "<Shadcn />": "text-purple-600 bg-purple-50 border-purple-200",
      "<Zustand />": "text-orange-600 bg-orange-50 border-orange-200",
      "<Tanstack />": "text-red-600 bg-red-50 border-red-200",
      "<HTML />": "text-orange-700 bg-orange-50 border-orange-200",
      "<TailwindCSS />": "text-cyan-600 bg-cyan-50 border-cyan-200",
      "<CSS />": "text-blue-500 bg-blue-50 border-blue-200",
      "<C++ />": "text-indigo-600 bg-indigo-50 border-indigo-200",
      "<Git />": "text-red-700 bg-red-50 border-red-200",
      "<GitHub />": "text-gray-700 bg-gray-50 border-gray-200",
      "<FramerMotion />": "text-purple-600 bg-purple-50 border-purple-200",
    }
    return colorMap[skill] || "text-gray-600 bg-gray-50 border-gray-200"
  }