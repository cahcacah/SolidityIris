// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityIris title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityIris/i);
    expect(titleElement).toBeInTheDocument();
});
