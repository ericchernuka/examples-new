import type { LoaderFunction, V2_MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }]
}

export const loader: LoaderFunction = async () => {
  const response = await fetch('https://api.example.com/user')
  const serverSideData = await response.json()

  const graphqlResponse = await fetch('https://foo.com/api/runtime', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query Viewer {
          viewer {
            id
            name {
              firstName
              lastName
            }
          }
        }
      `,
    }),
  })
  const { data } = await graphqlResponse.json()

  return {
    serverSideData,
    viewerData: data,
  }
}

export default function Index() {
  const { serverSideData, viewerData } = useLoaderData()

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <p id="server-side-greeting">Hello, {serverSideData.firstName}!</p>
      {viewerData.viewer.name.firstName}
    </div>
  )
}
