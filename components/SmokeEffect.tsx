'use client'
import styled, { keyframes } from 'styled-components'

const smokeAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: translateY(-40px) scale(1.5);
    opacity: 0;
  }
`

const SmokeWrapper = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	overflow: hidden;
	z-index: 1;
`

const Smoke = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 150px;
	height: 150px;
	background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
	border-radius: 50%;
	animation: ${smokeAnimation} 4s ease-in-out infinite;
	pointer-events: none;
`

const Smoke1 = styled(Smoke)`
	left: 45%;
	animation-delay: 0s;
`

const Smoke2 = styled(Smoke)`
	left: 65%;
	animation-delay: 1s;
`

const Smoke3 = styled(Smoke)`
	left: 85%;
	animation-delay: 2s;
`

const SmokeEffect = () => {
	return (
		<SmokeWrapper>
			<Smoke1 />
			<Smoke2 />
			<Smoke3 />
		</SmokeWrapper>
	)
}

export default SmokeEffect
