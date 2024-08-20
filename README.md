# BeFit Tracker - react app (still in development phase)

An app that allows you to conveniently count calories and macronutrients, track physical activity and compare results.

The application is based on 3 core technologies: **React**, **Styled Components** and **Supabase**.

**LIVE APP**: <https://befittracker.netlify.app>

## Table of Contents

- [Technologies](#technologies)
- [General info](#general-info)
  - [Pages/Routes](#routes)
  - [Features](#features)

## Technologies

Project is created with:

- [TypeScript:](https://www.typescriptlang.org/) 5.5.4v
- [React:](https://reactjs.org/) 18.3.1v
  - [TanStack/React Query:](https://tanstack.com/) v5.51.11v
  - [React Router:](https://reactrouter.com/en/main) 6.24.1v
  - [React Hook Form:](https://react-hook-form.com/) 7.52.1v
  - [React Icons:](https://react-icons.github.io/react-icons/) 5.2.1v
  - [React Hot Toast:](https://react-hot-toast.com/) 2.4.1v
- [Supabase:](https://supabase.com/) 2.44.4v - for auth and backend
- [Styled Components:](https://styled-components.com/) 6.1.12v
- [Vite:](https://vitejs.dev) 5.3.4v
- Mobile-first workflow

## General info

The application is under development therefore some functionalities are not yet ready, for this reason the functionalities below are marked with the appropriate status: \
✅ - implemented \
❌ - not implemented yet\
⚠️ - in progress

### Routes

- Landing Page ✅
- 404 Not Found Page ❌
- App ⚠️
  - Login ✅
  - Create Account ✅
  - Dashboard ❌
  - Diet ⚠️
  - Workout ❌
  - Places ❌
  - Settings ⚠️
    - Profile ✅
    - Goals ✅
    - Account ❌

<br>

---

### Features

#### Auth

- Authentication via e-mail ✅
- Authentication via facebook & google ❌
- Reset forgotten password ❌
- Protect routes from unauthorized access ✅
- Create new user ✅

#### Dashboard

View will display combined data based on your profile data, workouts data and diet data.

#### Workout

View where you can manage workouts by adding, editing, and removing workouts with informations like workout type, duration, calories burned

- Add custom workout ❌
- Add workout from the list ❌
- Search and add workout by natural language input, example: '30 min yoga' ❌
- Edit workout ❌
- Remove workout ❌

#### Diet

View where you can manage diet by adding new meals manualy or search and add existing meals from data base with full data (calories, macronutrients, etc.)

- Display all meals for specific date ✅
- Display macronutrients intake summary for specific date ❌
- Add custom meal ✅
- Add meal from database based on search input ❌
- Add meal from database based on natural language input, for example - '1 cup mashed potatoes and 2 tbsp gravy' ❌
- Edit meal ⚠️
- Remove dish ✅

#### Places

View where will be displayed list and interactive map where will be marked interesting places pinned by user( for example: restaurants where you can eat well or places where can do workouts)

- Add new interesting place ❌
- Edit information about place ❌
- Remove place ❌

#### Settings

- Update profile data like gender, height, avatar... ✅
- Change goals like actual weight, goal weight, movement level... ✅
- Change password ❌
- Delete account ❌

#### UI

- Change theme mode ❌
