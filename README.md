# Angular E-Commerce Application (UI Only)

This Angular E-Commerce application is a user interface (UI) implementation without any backend functionality. It allows users to browse a shop page with products fetched from a fake API, navigate through login and registration forms with validation, manage a shopping cart, search for products, and sort products based on title, price, and stock.

## Features

- **Shop Page**:
  - Display products fetched from a fake API.
- **Login Page**:

  - Provide a login form with validation.

- **Register Page**:

  - Provide a registration form with validation.

- **Cart Page**:

  - Allow users to:
    - Add products to the cart.
    - Change quantities of products.

- **Search for Product**:

  - Implement product search functionality.

- **Sort Products**:
  - Allow users to sort products by:
    - Title.
    - Price.
    - Stock.

## How to Run the Application

1. Clone this repository:

   ```bash
   git clone https://github.com/ahmedshaaban1608/angular-ecommerce.git
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Run the Angular E-Commerce application:

   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200/`. Open this URL in your web browser to access the application.

## Project Structure

The project structure follows the Angular best practices and is organized as follows:

- **src/app**:
  - **components**:
    - Contains the various Angular components of the application (e.g., shop page, login page, register page, cart page).
  - **services**:
    - Contains the services for fetching fake API data and managing cart functionality.
  - **models**:
    - Contains the TypeScript interfaces used throughout the application.
  - **interfaces**:
    - Contains interfaces for api product and cart product

## License

This Angular E-Commerce application is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute as per the terms of the license.
