// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { handlers } from './mocks/handlers';
import { setupServer } from 'msw/node'

const server = setupServer(...handlers)

beforeAll(() => server.listen());
afterAll(() => server.restoreHandlers());