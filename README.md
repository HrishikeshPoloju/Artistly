
# 🎭 Artistly — Performers Booking Platform

**Artistly** is a fictional event management platform where **event planners** can browse artists, and **managers** can onboard talent. This project was built as part of a frontend assignment using **Next.js App Router**, **Tailwind CSS**, **Shadcn UI**, and **React Hook Form**.

---

##  Features Implemented

###  1. Homepage

 File: `src/app/page.jsx`
 Components Used:

* `Header.jsx` (for navigation beteen pages)
* `Hero section`
* `ArtistCategoryCard.jsx` (Singers, Dancers, DJs, Speakers)
* `Footer.jsx`

 Features Implemented:

* Overview of the platform
* CTA button to **Explore Artists**
* Responsive category cards
* Navigation to `/artists`, `/onboard`, and `/dashboard`

---

###  2. Artist Listing Page

 File: `src/app/artists/page.jsx`
 Dummy Data: `src/lib/data/artists.json` for listing artists on Explore artist page
 Components Used:

* `ArtistCard.jsx`
* `FilterBlock.jsx`

 Features:

* Grid layout of artist cards
* Each card shows: **Name, Category, Fee, Location, Ask for Quote CTA**
* Fully working **filtering by Category, Location, Price**
* Responsive layout (list/grid toggle on screen size)

💡 **Logic**: Filtering is implemented via a custom hook:
 custom hook folder for filter logic: `src/hooks/useFilter.jsx`

---

###  3. Artist Onboarding Form

 File: `src/app/onboard/page.jsx`
 Form Logic: `src/components/OnboardForm.jsx`
 Tools Used:

* **React Hook Form + Yup** for validation
* **Shadcn UI** inputs
* **useContext** for state (see `ArtistContext.jsx`)

 Features:

* Inputs: Name, Bio, Location
* Multi-select checkboxes for **Category** and **Languages**
* Fee dropdown
* Optional Image upload
* Form submission updates shared context
* Real-time validation and error messages

 **Bonus**: This form is **lazy-loaded** using `next/dynamic` for better performance and we can see the boost in performance before and after lazy-loading.

---

###  4. Manager Dashboard Page

 File: `src/app/dashboard/page.jsx`
 Table Component: `src/components/Table.jsx`
 State From: `ArtistContext.jsx`

 Features:

* Table displays submitted artists from onboarding form
* Shows: Name, Category, Location, Fee, and **Remove** action
* Removing artist also removes them from **Explore**
* Conditional rendering (empty state message)

---

##  Other Technical Highlights

| Feature                 | Implementation                                                                 |
| ----------------------- | ------------------------------------------------------------------------------ |
| **Routing**             | Next.js App Router (`/app` directory)                                          |
| **State Management**    | `React Context API` — `ArtistContext.jsx`                                      |
| **Component Styling**   | `Tailwind CSS` + `Shadcn UI` (`src/components/ui/`)                            |
| **Form Validation**     | `React Hook Form` + `Yup`                                                      |
| **Lazy Loading**        | Used `next/dynamic` + `Suspense` to load onboarding form                       |
| **Responsive Design**   | Fully mobile-responsive using grid, flex, Tailwind utilities                   |
| **Code Structure**      | Modular folder structure: `components/`, `hooks/`, `lib/`, `context/`, `app/`  |
| **Deployment**          | Built for **Vercel** deployment with `/public` assets, metadata, and SEO-ready |
| **Reusable Components** | ArtistCard, Table, FilterBlock, Header, Footer, CategoryCard                   |

---

## 🌈 Bonus Features

*  React Context used for shared artist state
*  Lazy loading for `/onboard`


---

##  Submission Highlights

| Criteria           | Covered?              |
| ------------------ | --------------------- |
| Component reuse    | ✅ Yes                 |
| Filtering logic    | ✅ Yes                 |
| Form validation UX | ✅ Yes                 |
| useState/useEffect | ✅ Yes                 |
| useContext         | ✅ Yes                 |
| Data Simulation    | ✅ Local context state |
| Lazy Loading       | ✅ OnboardForm.jsx     |
| Deployment-ready   | ✅ Prepared for Vercel |

---

