import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test('render NavBar', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    )
    // screen.debug();
    const signInLink = screen.getByRole('link', { name: 'Sign in'})
    expect(signInLink).toBeInTheDocument();
})

test('renders link to the user profile for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );
    // screen.debug();
    const profileAvatar = await screen.findByText('Profile')
    expect(profileAvatar).toBeInTheDocument();
});

test('renders link to the user create a post', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );
    // screen.debug();
    const createPost = await screen.findByText('Add post')
    expect(createPost).toBeInTheDocument();
});

test('renders sign in and sign up button on logout', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );
    // screen.debug();
    const signOutLink = await screen.findByRole('link', {name: 'Sign out'});
    fireEvent.click(signOutLink);

    const signInLink = await screen.findByRole("link", { name: "Sign in" });
    const signUpLink = await screen.findByRole("link", { name: "Sign up" });

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
});

test('renders link to the feed and liked buttons for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );
    // screen.debug();
    const feed = await screen.findByRole('link', {name: 'Feed'})
    const liked = await screen.findByRole('link', {name: 'Liked'})

    expect(feed).toBeInTheDocument();
    expect(liked).toBeInTheDocument();
});