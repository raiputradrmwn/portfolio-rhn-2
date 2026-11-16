import React, { JSX } from 'react'

interface SkillCardProps {
  name: string
  icon: JSX.Element
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="px-2">
      <div className="flex w-full space-x-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
        <div className="h-5 w-5">{icon}</div>
        <div className="whitespace-nowrap">{name}</div>
      </div>
    </div>
  )
}
