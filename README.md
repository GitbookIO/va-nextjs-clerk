GitBook Visitor Authentication with Next.js and Clerk.dev
====

This is an example application demonstrating GitBook Visitor Authentication on a Next.js and [Clerk.dev](https://clerk.dev) stack.

## Pre-requisites

You must have an account on [Clerk.dev](https://clerk.dev) to proceed.

This demo was built using the following framework versions:
* Node v18
* Next.js v13.3
* Clerk v4.16

## Setting everything up in development

### Clerk setup

1. Create a new application in Clerk — you can have a free one, for demo purposes — and set it up with a handful of providers: this demo uses GitHub, Google and the Email providers.
2. In the **API Keys** section, choose "Next.js" to retrieve your Clerk API keys.
3. Copy the `.env.local.example` to `.env.local` and replace the API keys with yours.

### Creating the JWT template on Clerk

Clerk offers JWT templates to customize how tokens are signed. It allows to **define the secret key used to sign the token so that GitBook can verify the validity of JWT tokens**.

Create a new JWT template:
1. Go to your Clerk dashboard.
2. In your Clerk application, go to JWT templates.
3. Create a new template using the "Blank" template.
4. Give your template a name (this demo uses `'GitBook'`).
5. Enable the **"Custom signing key"** and **select the HS256 algorithm**.
6. Go to your GitBook space.
7. Choose "Share", then "Share to an audience".
8. Enable "Publish with visitor authentication".
9. Copy the private key.
10. Paste that private key in Clerk's JWT template **Signing key** field.
11. Define a simple template (GitBook doesn't give possibility to make use of these fieds for now). For example, in development: 
    ```json
    {
        "aud": "https://localhost:3000/api/visitor-auth",
        "user_id": "{{user.id}}",
        "last_name": "{{user.last_name}}",
        "first_name": "{{user.first_name}}"
    }
    ```
12. Click **Apply changes**.

### Replace the redirect URL to your GitBook space

1. Go back to your GitBook space.
2. Go to "Share", then "Share to an audience"
3. In the **Customize URL** section, click **Copy published link**
4. Paste the link to the `.env.local` file in the `NEXT_PUBLIC_GITBOOK_URL` variable

This will make sure that you get redirected to the GitBook space once signed in.

## Run the application

Install dependencies and then run the development server:

```bash
npm install
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
2. Sign up for a new account using one of the providers you configured for your Clerk app.
3. Sign in using your newly created account, 

## How it works

[./pages/api/visitor-auth.ts](./pages/api/visitor-auth.ts) is the API endpoint used to get the JWT token and redirect to the protected GitBook space defined in the `NEXT_PUBLIC_GITBOOK_URL` environment variable. Notice how it makes use of the Clerk JWT template named `GitBookˋ to ensure the signature will match what GitBook expects.

The [./components/Header.tsx](./components/Header.tsx) and [./pages/index.tsx](./pages/index.tsx) use the `<SignedIn>` and `<SignedOut>` Clerk components to adapt the displayed content.

In [./pages/sign-in/[[...index]].tsx](./pages/sign-in/[[...index]].tsx), note the `afterSignInUrl="/api/visitor-auth"` parameter that is responsible to redirecting directly to the GitBook space after signing in. You can change this however you feel like.

Thanks!