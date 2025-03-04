# Shop Inventory Management

A feature-rich shop inventory management app built with Expo, TypeScript, and Supabase.

## Features

- 📦 **Inventory Management** – Add, edit, delete, and view products.
- 📊 **Stock Tracking** – Monitor stock levels in real time.
- 🔍 **Search & Filter** – Easily find products using search and filter options.
- 🛒 **Orders & Sales** – Manage customer orders and track sales.
- 📈 **Analytics & Reports** – View sales insights and generate reports.
- 🔑 **Authentication** – Secure user authentication using Supabase.
- ☁️ **Cloud Storage** – Store product images and data securely with Supabase.

## Tech Stack

- **Frontend:** React Native (Expo) with TypeScript
- **Backend:** Supabase (PostgreSQL, Authentication, Storage)
- **State Management:** Zustand / React Context (whichever you're using)
- **Navigation:** React Navigation
- **Styling:** Tailwind CSS / Styled Components (if used)

## Installation

### Prerequisites

- Node.js & npm/yarn
- Expo CLI (`npm install -g expo-cli`)
- Supabase account

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/shop-inventory.git
   cd shop-inventory
   ```

2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your Supabase credentials:
     ```env
     SUPABASE_URL=your-supabase-url
     SUPABASE_ANON_KEY=your-anon-key
     ```

4. Start the development server:
   ```sh
   expo start
   ```

## Folder Structure

```
📦 shop-inventory
├── 📂 src
│   ├── 📂 components   # Reusable UI components
│   ├── 📂 screens      # App screens/pages
│   ├── 📂 hooks        # Custom React hooks
│   ├── 📂 services     # API calls & Supabase interactions
│   ├── 📂 store        # Zustand/Context state management
│   ├── 📂 utils        # Utility functions
│   ├── App.tsx        # Entry point
├── .env               # Environment variables
├── package.json       # Project dependencies
└── README.md          # Documentation
```

## Usage

1. **Adding Products:** Navigate to the inventory screen and add new items with details like name, price, and stock quantity.
2. **Managing Orders:** Track customer orders and update stock accordingly.
3. **Viewing Reports:** Check sales performance with graphical insights.
4. **User Authentication:** Secure login/logout with Supabase authentication.

## Deployment

To build and deploy the app:
```sh
expo build:android  # For Android APK
expo build:ios      # For iOS
```

## Contributing

Feel free to fork this repo, make improvements, and submit a pull request. Contributions are welcome! 🚀

## License

This project is open-source under the [MIT License](LICENSE).
s