'use client'

import React from 'react'
import MouseParticles from 'react-mouse-particles'

interface MouseParticlesProps {
	g?: number
	color?: string | string[]
	cull?: string
	level?: number
	[key: string]: any
}

const CustomMouseParticles: React.FC<MouseParticlesProps> = (props) => {
	return <MouseParticles {...props} />
}

export default CustomMouseParticles
