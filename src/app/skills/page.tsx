import Link from 'next/link'
import { 
  Code, 
  Globe, 
  Palette, 
  Monitor, 
  Layers, 
  Server, 
  Database, 
  Brush 
} from 'lucide-react'

interface SkillCardProps {
  name: string
  percentage: number
  icon: React.ReactNode
}

const SkillCard = ({ name, percentage, icon }: SkillCardProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-[#2a1206]/20 to-[#3d1b09]/20 backdrop-blur-sm border border-[#6d3410]/30 rounded-2xl p-6 hover:scale-105 hover:border-[#cd853f]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#3d1b09]/30">
      <div className="absolute inset-0 bg-gradient-to-br from-[#dda15e]/5 to-[#cd853f]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8b4513] to-[#cd853f] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white text-2xl">
            {icon}
          </div>
        </div>
        
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#dda15e] transition-colors duration-300">
          {name}
        </h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[#dda15e] font-medium text-2xl">
              {percentage}%
            </span>
          </div>
          
          <div className="w-full bg-[#3d1b09]/30 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#dda15e] to-[#cd853f] h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-[#cd853f] group-hover:to-[#dda15e]"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SkillsPage() {
  const skills = [
    { name: "React/Next.js", percentage: 95, icon: <Code /> },
    { name: "JavaScript", percentage: 90, icon: <Globe /> },
    { name: "TypeScript", percentage: 85, icon: <Code /> },
    { name: "HTML/CSS", percentage: 92, icon: <Monitor /> },
    { name: "Tailwind CSS", percentage: 88, icon: <Palette /> },
    { name: "Node.js", percentage: 80, icon: <Server /> },
    { name: "UI/UX Design", percentage: 85, icon: <Brush /> },
    { name: "Frontend Dev", percentage: 93, icon: <Layers /> },
    { name: "API Integration", percentage: 87, icon: <Database /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b04] via-[#2a1206] to-[#3d1b09] flex items-center justify-center p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 lg:pr-8">
          <div className="space-y-6">
            <p className="text-[#dda15e] font-medium text-lg tracking-wide">
              My Skills
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Let's Explore my </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dda15e] to-[#cd853f]">
                Skills
              </span>
              <br />
              <span className="text-white">& </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dda15e] to-[#cd853f]">
                Experience
              </span>
            </h1>
            
            <p className="text-[#dda15e]/80 text-lg leading-relaxed max-w-xl">
              Welcome to my skills showcase! I specialize in crafting modern web applications 
              with expertise in frontend development, UI/UX design, and full-stack technologies. 
              I bring digital visions to life with seamless functionality and engaging user experiences.
            </p>
          </div>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8b4513] to-[#cd853f] hover:from-[#cd853f] hover:to-[#8b4513] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3d1b09]/50 group"
          >
            Learn More
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="opacity-0 translate-y-8 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}