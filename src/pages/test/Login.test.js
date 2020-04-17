import React from 'react'
import { render,cleanup,fireEvent } from '@testing-library/react'
import Login from '../Login'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)
describe('Login',() => {
    it('renders correctly', () => {
        const tree = render(<Login />)
        expect(tree).toMatchSnapshot()
    })

    it('shows button text', () => {
        const {getByTestId} = render(<Login />)
        expect(getByTestId('button').textContent).toBe('login')

    })
    
   it('should handle button click', () => {
        const mockUserLogin = jest.fn()
        const {getByTestId, debug} = render(<Login />)
        const id = getByTestId('button')
        console.log(id)
        debug(id)
        fireEvent.click(id)
        expect(mockUserLogin).toHaveBeenCalled()
        // const spanid = getByTestId('span')
        // expect(spanid.textContent).toBe('test passed')
    })
})
