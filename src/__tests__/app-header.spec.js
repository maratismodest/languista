import React from 'react'
import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom';
import AppHeader from "../components/AppHeader/AppHeader";

describe('AppHeader', () => {

    beforeEach(() => {
        render(<MemoryRouter>
            <AppHeader/>
        </MemoryRouter>)
    });

    afterEach(() => {

    });

    it('renders a words menu item', () => {
        const res = screen.getAllByTestId('words')
        expect(res).toBeTruthy()
        expect(res.isEmpty).toBeFalsy()
    })
    it('renders a phrases menu item', () => {
        const res = screen.getAllByTestId('phrases')
        expect(res).toBeTruthy()
        expect(res.isEmpty).toBeFalsy()
    })
    it('renders a profile menu item', () => {
        const res = screen.getAllByTestId('profile')
        expect(res).toBeTruthy()
        expect(res.isEmpty).toBeFalsy()
    })


})
