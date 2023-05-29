import { rest, graphql, HttpResponse } from 'msw'

export const handlers = [
  rest.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  graphql.query('Viewer', () => {
    return HttpResponse.json({
      data: {
        viewer: {
          id: '1',
          name: {
            firstName: 'Eric',
            lastName: 'Bower',
          },
        },
      },
    })
  }),
]
