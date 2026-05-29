 # Job Card UI Component

A modern and reusable **Job Card UI Component** built with **React**, **Tailwind CSS**, and **Lucide React Icons**.
This component displays job information in a stylish card layout with a save/bookmark feature.

---

## ✨ Features

* Clean and modern UI
* Responsive card design
* Bookmark / Save toggle
* Company logo support
* Job details display
* Salary and location section
* Tailwind CSS styling
* Reusable React component

---

## 📦 Technologies Used

* React
* Tailwind CSS
* Lucide React

---

## 📁 Component Preview

The card includes:

* Company logo
* Company name
* Job role
* Job type
* Salary
* Location
* Apply button
* Save bookmark toggle

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/job-card-ui.git
```

Move into the project folder:

```bash
cd job-card-ui
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 📚 Usage

Import the component:

```jsx
import Card from "./Card";
```

Use it inside your app:

```jsx
<Card
  logo="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
  company="Google"
  role="Frontend Developer"
  job="Full Time"
  salary="120"
  address="California, USA"
/>
```

---

## 🧩 Props

| Prop      | Description            |
| --------- | ---------------------- |
| `logo`    | Company logo image URL |
| `company` | Company name           |
| `role`    | Job title              |
| `job`     | Job type               |
| `salary`  | Salary amount          |
| `address` | Job location           |

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   └── Card.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🎨 Styling

This project uses **Tailwind CSS** utility classes for styling.

Install Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 📌 Dependencies

Install Lucide React icons:

```bash
npm install lucide-react
```

---

## 🔮 Future Improvements

* Dark mode support
* Responsive grid layout
* API integration
* Dynamic job listings
* Animations and hover effects
* Save jobs to local storage

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Developed with React and Tailwind CSS.
