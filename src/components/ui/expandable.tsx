"use client"
import { createContext, useContext, useState } from "react"

type ExpandableContextType = {
  activeIndex: number | null
  setActiveIndex: (index: number | null) => void
  length: number
}

const ExpandableContext = createContext<ExpandableContextType | null>(null)

function ExpandableGroup({ children }: { children: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const childrenArray = Array.isArray(children) ? children : [children]
  const length = childrenArray.length

  return (
    <ExpandableContext.Provider value={{ activeIndex, setActiveIndex, length }}>
      <div className="flex w-full gap-2">{children}</div>
    </ExpandableContext.Provider>
  )
}


function useExpandable() {
  const context = useContext(ExpandableContext)
  if (!context) throw new Error("Must be used inside ExpandableGroup")
  return context
}
function ExpandableCard({
  index,
  duration = 300,
  children,
}: {
  index: number
  duration?: number
  children: React.ReactNode
}) {
  const { activeIndex, setActiveIndex, length } = useExpandable()
  const isActive = activeIndex === index
  const expandedFlex = length // 자동 비율

  return (
    <div
      className="overflow-hidden transition-all ease-in-out"
      style={{
        flex: isActive ? expandedFlex : 1,
        transitionDuration: `${duration}ms`,
      }}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div
        className="transition-all ease-in-out w-full"
        style={{
          transitionDuration: `${duration}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}



export { ExpandableGroup, useExpandable, ExpandableCard }