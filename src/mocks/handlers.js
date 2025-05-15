import { rest } from "msw"

const baseURL = "https://drf-api-micah-ad42675b3e01.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(ctx.json(
            {
                "pk": 3,
                "username": "Grummant",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 3,
                "profile_image": "https://res.cloudinary.com/ddfubj6vf/image/upload/v1/media/../default_profile_o8yykv"
            }
        ))
    }),
    rest.post(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    }),
    rest.post(`${baseURL}dj-rest-auth/token/refresh/`, (req, res, ctx) => {
        return res(ctx.json({ access: 'mocked-access-token' }));
    }),

    rest.options(`${baseURL}dj-rest-auth/token/refresh/`, (req, res, ctx) => {
        return res(ctx.status(204)); // Mock successful preflight response
    }),
]
