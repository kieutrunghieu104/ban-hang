# Cây Thư Mục Toàn Dự Án (Folder Tree)

```text
code_base/
├── README.md
└── app/
    ├── be/                                # Backend Application (Node.js/Express)
    │   ├── .env.development              # Biến môi trường local/dev
    │   ├── .env.production               # Biến môi trường production
    │   ├── .gitignore
    │   ├── package.json
    │   └── src/
    │       ├── server.js                 # Entry point khởi tạo HTTP server & kết nối DB
    │       ├── app.js                    # Cấu hình Express instance & global middlewares
    │       ├── config/                   # Cấu hình môi trường & database
    │       │   ├── db.js                 # Kết nối Mongoose / MongoDB
    │       │   └── env.js                # Quản lý tập trung các biến môi trường
    │       ├── middlewares/              # Các middleware dùng chung toàn app
    │       │   ├── authenticate.js       # Xác thực Token (JWT Auth)
    │       │   ├── authorize.js          # Phân quyền theo vai trò (RBAC)
    │       │   ├── errorHandler.js       # Bắt lỗi toàn cục (Global Error Handling)
    │       │   ├── notFound.js           # Bắt lỗi 404 Route Not Found
    │       │   └── validateRequest.js    # Validate dữ liệu request (body, query, params)
    │       ├── modules/                  # Chứa các feature/domain nghiệp vụ
    │       │   ├── auth/                 # Module Xác thực & Phân quyền
    │       │   │   ├── auth.controller.js
    │       │   │   ├── auth.routes.js
    │       │   │   ├── auth.service.js
    │       │   │   └── auth.validation.js
    │       │   └── users/                # Module Quản lý người dùng
    │       │       ├── user.controller.js
    │       │       ├── user.model.js
    │       │       ├── user.routes.js
    │       │       ├── user.service.js
    │       │       └── user.validation.js
    │       └── utils/                    # Các hàm và lớp tiện ích
    │           └── AppError.js           # Custom Error Class chuẩn hóa lỗi HTTP
    │
    └── fe/                                # Frontend Application (React/Vite)
        ├── .env.development              # Biến môi trường frontend (dev)
        ├── .env.production               # Biến môi trường frontend (prod)
        ├── .gitignore
        ├── eslint.config.js              # Cấu hình ESLint chuẩn
        ├── index.html                    # File HTML gốc của Vite
        ├── package.json
        ├── vite.config.js                # Cấu hình Vite & Path Aliases (~)
        └── src/
            ├── main.jsx                  # Entry point React DOM render
            ├── App.jsx                   # Root component
            ├── config/                   # Cấu hình frontend
            │   └── env.js                # Cấu hình biến môi trường client
            ├── app/                      # Cấu trúc cấp ứng dụng (Application Level)
            │   ├── contexts/             # Contexts toàn cục (AuthProvider.js, ...)
            │   ├── layouts/              # Các layout khung giao diện (DefaultLayout, AuthLayout, ...)
            │   ├── providers/            # Hợp nhất các Provider (AppProvider.js)
            │   └── router/               # Quản lý tuyến đường (AppRouter, routePaths, routes)
            ├── features/                 # Các tính năng/nghiệp vụ chính (Feature-based)
            │   ├── auth/                 # Tính năng Auth (Đăng nhập, đăng ký)
            │   │   ├── components/       # UI Components của Auth (LoginForm, RegisterForm)
            │   │   ├── hooks/            # Custom Hooks của Auth (useAuth)
            │   │   ├── pages/            # Màn hình Auth (LoginPage, RegisterPage)
            │   │   ├── schemas/          # Schema validate form (auth.schema.js)
            │   │   └── services/         # Gọi API xác thực (auth.service.js)
            │   └── products/             # Tính năng Sản phẩm
            │       ├── components/       # UI Components (ProductCard, ProductList, ProductFilters)
            │       ├── hooks/            # Custom Hooks (useProducts)
            │       ├── pages/            # Màn hình (ProductPage, ProductDetailPage)
            │       ├── schemas/          # Schema validate (product.schema.js)
            │       └── services/         # Gọi API sản phẩm (products.service.js)
            ├── shared/                   # Thành phần dùng chung toàn ứng dụng
            │   ├── api/                  # Cấu hình Axios & Interceptors (httpClient.js, interceptor.js)
            │   ├── components/           # Components UI dùng chung (ButtonCustom, InputCustom, ...)
            │   ├── constants/            # Các hằng số cố định (banner.js, ...)
            │   ├── hooks/                # Hooks tiện ích dùng lại (useDebounced.js, ...)
            │   ├── styles/               # SCSS toàn cục và tokens (GlobalStyles.scss, _variables.scss)
            │   └── utils/                # Hàm tiện ích dùng chung (validatePhone.js, ...)
            └── assets/                   # Hình ảnh, icons, media tĩnh
```
