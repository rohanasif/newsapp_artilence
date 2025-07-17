# 🌐 World News Today

A modern, professional news headlines app built with React and Tailwind CSS, powered by [NewsAPI.org](https://newsapi.org). Stay updated with the latest headlines from around the world, filter by country and category, and enjoy a clean, responsive UI.

## Features

- Browse top headlines from multiple countries and categories
- Responsive, card-based layout for news articles
- Professional, consistent design with Tailwind CSS
- Graceful placeholder for articles with no image
- Fast, client-side filtering and loading
- Powered by [NewsAPI.org](https://newsapi.org)

## Screenshots

![App Screenshot](screenshot.png) <!-- Add a screenshot if available -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add your NewsAPI key:
     ```env
     VITE_NEWSAPI_KEY=your_newsapi_key_here
     ```
   - Get a free API key from [NewsAPI.org](https://newsapi.org/register).

4. **Run the app locally:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:5173` (or as shown in your terminal).

## Usage

- Select a country from the dropdown to view headlines from that region.
- Filter news by category using the buttons.
- Click "Read more →" to open the full article in a new tab.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [NewsAPI.org](https://newsapi.org)

## Credits

- News data provided by [NewsAPI.org](https://newsapi.org)
- UI built with [Tailwind CSS](https://tailwindcss.com/)
- Placeholder SVG icon from [Heroicons](https://heroicons.com/)

---

Feel free to fork, contribute, or suggest improvements!
