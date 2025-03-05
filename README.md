# Shop Inventory Management

A shop inventory management app built with Expo and TypeScript.

## Feature

- 📦 **Inventory Management** – Add, edit, delete, and view products.

## Tech Stack

- **Frontend:** React Native (Expo) with TypeScript
- **State Management:** React Context 
- **Navigation:** React Navigation

## Installation

### Prerequisites

- Node.js & npm/yarn
- Expo CLI (`npm install -g expo-cli`)
- Supabase account

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/uzairrehan/shop-inventory.git
   cd shop-inventory
   ```

2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```


3. Start the development server:
   ```sh
   expo start
   ```

## Folder Structure

```
📦 shop-inventory
├── 📂 src
│   ├── 📂 components   # Reusable UI components
│   ├── 📂 context      # Context state management
│   ├── 📂 app          # All Tabs
│   ├── App.tsx        # Entry point
├── package.json       # Project dependencies
└── README.md          # Documentation
```

## Usage

1. **Adding Products:** Navigate to the inventory screen and add new items with details like name, price, and stock quantity.
2. **Managing Orders:** Track customer orders and update stock accordingly.

## Contributing

Feel free to fork this repo, make improvements, and submit a pull request. Contributions are welcome! 🚀

## License

This project is open-source under the [MIT License](LICENSE).