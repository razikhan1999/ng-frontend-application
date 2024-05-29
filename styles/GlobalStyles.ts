import { Cinzel, Inter } from 'next/font/google'
import { DefaultTheme, createGlobalStyle } from 'styled-components'

export const cinzel = Cinzel({ weight: '700', subsets: ['latin'] })
export const interRegular = Inter({ weight: '400', subsets: ['latin'] })
export const interBold = Inter({ weight: '700', subsets: ['latin'] })

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	//========================================================================================================
	// GENERAL
	//========================================================================================================
	* {
		box-sizing: border-box;
	}
	*::before {
		box-sizing: border-box;
	}
	*::after {
		box-sizing: border-box;
	}

	body {
    background-color: ${({ theme }) => theme.colors.black};
    background-image: url('assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;
  }

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	button {
		font-family: ${cinzel.style.fontFamily};
		font-weight: ${cinzel.style.fontWeight};
		color: ${({ theme }) => theme.colors.white};
	}

	b {
		font-weight: 700;
		
	}

	a{
		color:black;

	}

	p,
	span,
	input,
	textarea {
		color: ${({ theme }) => theme.colors.white};
		font-family: ${cinzel.style.fontFamily};
		font-weight: ${cinzel.style.fontWeight};
		
	}
`

export default GlobalStyle
