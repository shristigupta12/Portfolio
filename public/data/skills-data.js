
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
  export const getSkillColor = (index) => {
    const colorMap= [
      "text-blue-600 bg-blue-50 border-blue-200",
      "text-gray-800 bg-gray-50 border-gray-200",
      "text-yellow-600 bg-yellow-50 border-yellow-200",
      "text-blue-700 bg-blue-50 border-blue-200",
      "text-purple-600 bg-purple-50 border-purple-200",
      "text-orange-600 bg-orange-50 border-orange-200",
      "text-red-600 bg-red-50 border-red-200",
      "text-orange-700 bg-orange-50 border-orange-200",
      "text-cyan-600 bg-cyan-50 border-cyan-200",
      "text-blue-500 bg-blue-50 border-blue-200",
      "text-indigo-600 bg-indigo-50 border-indigo-200",
      "text-red-700 bg-red-50 border-red-200",
      "text-gray-700 bg-gray-50 border-gray-200",
      "text-purple-600 bg-purple-50 border-purple-200",
    ]
    return colorMap[index] || "text-gray-600 bg-gray-50 border-gray-200"
  }