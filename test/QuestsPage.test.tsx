import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { HttpResponse, http } from 'msw'
import { describe, expect, it } from 'vitest'
import QuestsPage from '../app/quests/page'
import { server } from './server'

const renderWithQueryClient = (ui: React.ReactElement) => {
	const queryClient = new QueryClient()
	return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>)
}

describe('QuestsPage', () => {
	it('displays loading message while fetching data', () => {
		renderWithQueryClient(<QuestsPage />)
		expect(screen.getByText(/loading/i)).toBeInTheDocument()
	})

	it('displays error message if fetching data fails', async () => {
		server.use(
			http.get('/quests', ({ request, params, cookies }) => {
				return HttpResponse.error('Internal Server Error', { status: 500 })
			})
		)

		renderWithQueryClient(<QuestsPage />)

		await waitFor(() => expect(screen.getByText(/an error occurred/i)).toBeInTheDocument())
	})

	it('displays quest data when fetching is successful', async () => {
		renderWithQueryClient(<QuestsPage />)

		await waitFor(() => expect(screen.getByText(/quest 1/i)).toBeInTheDocument())
		expect(screen.getByText(/quest 2/i)).toBeInTheDocument()
	})
})