import {render, screen} from '@testing-library/react';

const Send = () => {
    return (
        <div>
            <label htmlFor="send">From</label>
            <input type="text" id='send'/>
        </div>
    )
}

test('From element: exist in the DOM', () => {
    render(<Send/>)
    expect(screen.getByLabelText<HTMLSelectElement>('From')).toBeInTheDocument();
});
