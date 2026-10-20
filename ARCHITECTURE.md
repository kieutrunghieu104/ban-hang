# Project Directory Tree

```text
code_base/
├── README.md
└── app/
    ├── be/                                # Backend Application (Node.js/Express)
    │   ├── .env.development              # Local / Development environment variables
    │   ├── .env.production               # Production environment variables
    │   ├── .gitignore
    │   ├── package.json
    │   └── src/
    │       ├── server.js                 # Entry point: HTTP server initialization & DB connection
    │       ├── app.js                    # Express app configuration & global middlewares
    │       ├── config/                   # Environment & database configuration
    │       │   ├── db.js                 # Mongoose / MongoDB connection
    │       │   └── env.js                # Centralized environment variable management
    │       ├── middlewares/              # Application-wide shared middlewares
    │       │   ├── authenticate.js       # Token authentication (JWT Auth)
    │       │   ├── authorize.js          # Role-Based Access Control (RBAC)
    │       │   ├── errorHandler.js       # Global error handling middleware
    │       │   ├── notFound.js           # 404 Route Not Found handler
    │       │   └── validateRequest.js    # Request data validation (body, query, params)
    │       ├── modules/                  # Business domain modules / features
    │       │   ├── auth/                 # Authentication & Authorization module
    │       │   │   ├── auth.controller.js
    │       │   │   ├── auth.routes.js
    │       │   │   ├── auth.service.js
    │       │   │   └── auth.validation.js
    │       │   └── users/                # User management module
    │       │       ├── user.controller.js
    │       │       ├── user.model.js
    │       │       ├── user.routes.js
    │       │       ├── user.service.js
    │       │       └── user.validation.js
    │       └── utils/                    # Utility functions and helper classes
    │           └── AppError.js           # Custom Error class for standardized HTTP errors
    │
    └── fe/                                # Frontend Application (React/Vite)
        ├── .env.development              # Frontend development environment variables
        ├── .env.production               # Frontend production environment variables
        ├── .gitignore
        ├── eslint.config.js              # ESLint standard configuration
        ├── index.html                    # Vite root HTML template
        ├── package.json
        ├── vite.config.js                # Vite configuration & path aliases (~)
        └── src/
            ├── main.jsx                  # React DOM render entry point
            ├── App.jsx                   # Root component
            ├── config/                   # Frontend configuration
            │   └── env.js                # Client-side environment variables
            ├── app/                      # Application-level architecture
            │   ├── contexts/             # Global contexts (AuthProvider.js, ...)
            │   ├── layouts/              # Layout wrappers (DefaultLayout, AuthLayout, ...)
            │   ├── providers/            # Consolidated providers wrapper (AppProvider.js)
            │   └── router/               # Route definitions & router setup (AppRouter, routePaths, routes)
            ├── features/                 # Feature-based business modules
            │   ├── auth/                 # Auth feature (Login, Register)
            │   │   ├── components/       # Auth UI components (LoginForm, RegisterForm)
            │   │   ├── hooks/            # Auth custom hooks (useAuth)
            │   │   ├── pages/            # Auth pages (LoginPage, RegisterPage)
            │   │   ├── schemas/          # Form validation schemas (auth.schema.js)
            │   │   └── services/         # Auth API services (auth.service.js)
            │   └── products/             # Products feature
            │       ├── components/       # Product UI components (ProductCard, ProductList, ProductFilters)
            │       ├── hooks/            # Product custom hooks (useProducts)
            │       ├── pages/            # Product pages (ProductPage, ProductDetailPage)
            │       ├── schemas/          # Validation schemas (product.schema.js)
            │       └── services/         # Product API services (products.service.js)
            ├── shared/                   # Application-wide shared resources
            │   ├── api/                  # Axios configuration & interceptors (httpClient.js, interceptor.js)
            │   ├── components/           # Shared UI components (ButtonCustom, InputCustom, ...)
            │   ├── constants/            # Application constants (banner.js, ...)
            │   ├── hooks/                # Reusable utility hooks (useDebounced.js, ...)
            │   ├── styles/               # Global SCSS and tokens (GlobalStyles.scss, _variables.scss)
            │   └── utils/                # Shared utility functions (validatePhone.js, ...)
            └── assets/                   # Static assets, images, icons, and media
```
