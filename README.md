# AI Form Builder

AI Form Builder is a dynamic and intelligent form-building SaaS application designed to create, customize, and deploy forms effortlessly. Built with cutting-edge technologies, this project leverages AI to simplify form generation while offering seamless integration and deployment.

---

## Features

- **AI-Powered Form Generation**: Leverage the power of Gemini API to dynamically create forms based on user input.
- **User-Friendly Interface**: Build and customize forms with a responsive and intuitive UI designed using TailwindCSS and DaisyUI.
- **Secure Authentication**: Integrated with Clerk for hassle-free user management and authentication.
- **Seamless Payments**: Supports payments through Stripe for monetization.
- **Database Management**: Utilizes PostgreSQL with DrizzleORM for efficient and scalable data handling.
- **Rapid Deployment**: Easily deploy and manage your application with Vercel.

---

## Tech Stack

- **Frontend**: React, Next.js, TailwindCSS, DaisyUI
- **Backend**: DrizzleORM, PostgreSQL, Gemini API
- **Authentication**: Clerk
- **Payment Integration**: Stripe
- **Deployment**: Vercel

---

## Installation

Follow these steps to set up the project locally:

### Clone the repository
   ```bash
   git clone https://github.com/UpgradedDhruv/ai-form-builder.git
   cd ai-form-builder
   ```

### Install dependencies
   ```bash
   npm install
   ```

### Set up environment variables
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_api
   DATABASE_URL=your_postgresql_url
   GEMINI_API_KEY=your_gemini_api_key
   ```

### Run the development server
   ```bash
   npm run dev
   ```
   Access the application at [http://localhost:3000](http://localhost:3000).

---

## Deployment

Deploy the project using Vercel:

### Login to Vercel
   ```bash
   vercel login
   ```

### Deploy the project
   ```bash
   vercel --prod
   ```
   The application will be live and accessible via the provided URL.

---

## Usage

### Sign Up or Log In
   Use Clerk to authenticate and access the form builder.

### Create Forms
   Leverage the AI-driven interface powered by the Gemini API to generate forms dynamically.

### Manage Forms
   Edit, delete, and customize forms as needed.

### Deploy Forms
   Share or embed your forms with ease.

### Collect Payments
   Use Stripe integration to collect payments securely.

---

## Contributing

Contributions are welcome! Follow these steps:

### Fork the repository

### Create a feature branch
   ```bash
   git checkout -b feature-name
   ```

### Commit your changes
   ```bash
   git commit -m "Add feature description"
   ```

### Push to the branch
   ```bash
   git push origin feature-name
   ```

### Create a pull request

---



## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Stripe](https://stripe.com/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [DrizzleORM](https://github.com/drizzle-team/drizzle-orm)
- [Clerk](https://clerk.dev/)
- [Gemini API](https://geminiapi.com/)
- [Vercel](https://vercel.com/)

