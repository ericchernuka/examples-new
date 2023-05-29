import { rest, graphql, HttpResponse } from 'msw'
import type { ViewerQuery } from '~/patient-gql/graphql'

export const handlers = [
  rest.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  graphql.query<ViewerQuery>('Viewer', () => {
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
