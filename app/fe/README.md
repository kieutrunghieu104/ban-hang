# Frontend Application (`app/fe`)

Ứng dụng Frontend được xây dựng bằng **React 19**, **Vite 8**, **Ant Design 6** và **Sass**, tổ chức theo mô hình **Feature-Driven Architecture**.

> Xem tài liệu tổng thể của toàn bộ dự án tại [README.md gốc](../../README.md).

---

## 📂 Cấu Trúc Thư Mục Frontend

```text
fe/
├── .env.development              # Biến môi trường local (VITE_API_URL=...)
├── .env.production               # Biến môi trường production
├── eslint.config.js              # Cấu hình ESLint
├── vite.config.js                # Cấu hình Vite & Alias "~" -> "src/"
├── index.html
├── package.json
└── src/
    ├── main.jsx                  # Điểm khởi đầu ReactDOM render
    ├── App.jsx                   # Component App chính
    ├── config/                   # Quản lý cấu hình tập trung (env.js)
    ├── app/                      # Cấu trúc tầng ứng dụng
    │   ├── contexts/             # React Context toàn cục (AuthProvider.js)
    │   ├── layouts/              # Các khung layout (DefaultLayout, AuthLayout)
    │   ├── providers/            # Tích hợp các Providers (AppProvider.js)
    │   └── router/               # Định tuyến (AppRouter.jsx, routes.js, routePaths.js)
    ├── features/                 # Các tính năng theo domain nghiệp vụ
    │   ├── auth/                 # Feature Đăng nhập/Đăng ký
    │   │   ├── components/       # Form, component riêng của Auth
    │   │   ├── hooks/            # Custom hooks nghiệp vụ (useAuth.js)
    │   │   ├── pages/            # Màn hình (LoginPage, RegisterPage)
    │   │   ├── schemas/          # Schema validation (auth.schema.js)
    │   │   └── services/         # Gọi API backend (auth.service.js)
    │   └── products/             # Feature Sản phẩm
    │       ├── components/       # ProductCard, ProductList, ProductFilters
    │       ├── hooks/            # useProducts.js
    │       ├── pages/            # ProductPage, ProductDetailPage
    │       ├── schemas/          # product.schema.js
    │       └── services/         # products.service.js
    ├── shared/                   # Thành phần tái sử dụng toàn dự án
    │   ├── api/                  # Axios instance & Interceptors
    │   ├── components/           # UI Components dùng chung (ButtonCustom, InputCustom)
    │   ├── constants/            # Các hằng số (banner.js, ...)
    │   ├── hooks/                # Custom hooks tiện ích (useDebounced.js)
    │   ├── styles/               # SCSS toàn cục và biến SCSS (_variables.scss, GlobalStyles.scss)
    │   └── utils/                # Hàm tiện ích dùng chung (validatePhone.js)
    └── assets/                   # Tài nguyên tĩnh (ảnh, icon)
```

---

## 🚀 Khởi Chạy Frontend

```bash
# Cài đặt thư viện
npm install

# Chạy server development trên cổng 9999
npm run dev

# Kiểm tra lint
npm run lint

# Build production
npm run build
```
