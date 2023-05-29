/**
 * @vitest-environment jsdom
 */
import { unstable_createRemixStub as createRemixStub } from '@remix-run/testing'
import Index, { loader } from '../_index'
import { render, screen } from '@testing-library/react'

describe('_index', () => {
  it('should render without errors', async () => {
    const Page = createRemixStub([
      {
        path: '/',
        element: <Index />,
        loader: loader,
      },
    ])

    render(<Page initialEntries={['/']} />)

    expect(await screen.findByText('Eric')).toBeDefined()
  })
})
