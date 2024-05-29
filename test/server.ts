import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

export const server = setupServer(
	http.get('/quests', ({ request, params, cookies }) => {
		return HttpResponse.json([
			{ slug: 'quest-1', title: 'Quest 1' },
			{ slug: 'quest-2', title: 'Quest 2' }
		])
	})
)