/* eslint-disable @typescript-eslint/no-unsafe-call */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, beforeEach, it, expect } from 'vitest';
import axios from 'axios';
import App from './App';

vi.mock('axios');
const mockedAxios = vi.mocked(axios);

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders main elements and login form', () => {
    render(<App />);
    
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('shows greeting after login', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('Enter your name');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    
    fireEvent.change(input, { target: { value: 'John' } });
    fireEvent.click(loginButton);
    
    expect(screen.getByText('Hello John!')).toBeInTheDocument();
  });

  it('increments counter when button clicked after login', () => {
    render(<App />);
    
    // Login first
    const input = screen.getByPlaceholderText('Enter your name');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.change(input, { target: { value: 'John' } });
    fireEvent.click(loginButton);
    
    const countButton = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(countButton);
    
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });
});