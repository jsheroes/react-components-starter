import App from './App'
import { afterEach, describe, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('GitHub explorer app', () => {

  afterEach(() => {
    cleanup()
  })
  test('the title is visible', () => {
    render(<App />)
    expect(screen.getByText(/GitHub Explorer/i)).toBeInTheDocument()
  })

  test('the textbox should be present', async () => {
    render(<App />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('the search button should be present', async () => {
    render(<App />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  });

  test('the list of repos should be present', async () => {
    render(<App />)
    expect(screen.getByRole('list')).toBeInTheDocument()
  });

  test('the list of repos should have 3 items', async () => {
    render(<App />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  });
})