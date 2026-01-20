# Gia Lai Food 🌿

Tạp hóa đặc sản Gia Lai - Mang hương vị phố núi đến mọi nhà.

## 🚀 Giới thiệu

Đây là dự án website thương mại điện tử chuyên cung cấp các sản phẩm đặc sản của Gia Lai, được xây dựng với công nghệ hiện đại nhằm mang lại trải nghiệm tốt nhất cho người dùng.

## 🛠 Công nghệ sử dụng

Dự án được xây dựng dựa trên các công nghệ mới nhất:

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Quản lý State**: React Context API

## 📦 Cài đặt & Sử dụng

Để chạy dự án trên máy cục bộ, hãy làm theo các bước sau:

### 1. Yêu cầu

-   [Node.js](https://nodejs.org/) (Khuyên dùng phiên bản LTS mới nhất)
-   npm, yarn, pnpm hoặc bun

### 2. Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
```

### 3. Chạy môi trường development

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem kết quả.

## 📂 Cấu trúc dự án

-   `app/`: Chứa các trang (pages) và layout chính của Next.js App Router.
-   `modules/`: Chứa các component, logic, và context của ứng dụng.
    -   `layouts/`: Header, Footer...
    -   `SearchContext`: Quản lý tìm kiếm.
    -   `data.ts`: Dữ liệu mẫu (mock data).
-   `public/`: Chứa tài nguyên tĩnh (hình ảnh, fonts...).

## 📜 Scripts

-   `npm run dev`: Chạy server development.
-   `npm run build`: Build ứng dụng cho production.
-   `npm start`: Chạy server production sau khi build.
-   `npm run lint`: Kiểm tra lỗi code với ESLint.
