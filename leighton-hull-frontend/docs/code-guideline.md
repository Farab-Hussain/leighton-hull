# GWB Frontend Code Guidelines

## Architecture Overview

The codebase follows a modular structure with two main blocks:

1. **App** (`src/app`)
2. **Features, Common, and API** (`src/features`, `src/common`, `src/api`)

This separation ensures clean organization, reusability, and clear responsibility boundaries.

---

## 1. App (`src/app`)

The `src/app` directory contains the main application entry points, layouts, and global configuration.

### Key Characteristics

- Contains Next.js app router files (`layout.tsx`, `page.tsx`, etc.)
- Global styles and font-face declarations are in `src/app/globals.css`
- Uses Tailwind CSS for utility-first styling
- Custom fonts and design tokens are defined as CSS variables in `globals.css`
- Responsive breakpoints, font sizes, and colors are managed via CSS variables

### Implementation Requirements

#### Layouts & Pages

- Each route has its own directory under `src/app`
- Use `layout.tsx` for shared layout and `page.tsx` for route content
- Use `<Suspense>` for async boundaries as needed

#### Styling

- Use Tailwind CSS utility classes for all styling
- Use CSS variables for colors, fonts, and breakpoints (see `globals.css`)
- Custom fonts are registered with `@font-face` and referenced via CSS variables

#### File Naming

- Use lowercase and kebab-case for files and directories
- Use `.tsx` for React components and pages

---

## 2. Features, Common, and API

### Features (`src/features`)

- Reserved for feature-specific modules (add as needed)
- Each feature should have its own directory and encapsulate related logic and UI

### Common (`src/common`)

- `src/common/components`: Reusable UI components (e.g., Button, Input, Modal, Select)
  - Use PascalCase for component names and files (e.g., `Button.tsx`)
  - Components must be functional and typed with TypeScript
  - Export components as default exports
- `src/common/hooks`: Custom React hooks (e.g., `useIsMobile`)
  - Hook names must start with `use`
  - Hooks must be typed with TypeScript

---

## API Layer (`src/api`)

The `src/api` directory encapsulates all API logic, types, and slices. Each domain (e.g., `auth`, `user`) should have its own slice and entity files.

### Structure

- **Slices:** Each API domain (e.g., `auth`) has a slice class extending `ApiSlice` (see `src/api/slice.ts`).
- **Entities:** Each slice can define entity classes for response transformation and enums for domain-specific constants.
- **Types:** Shared API types (e.g., `SuccessResponse`, `FailedResponse`) are defined in `src/api/types.ts`.

### Example: Auth Slice

```ts
// src/api/auth.slice.ts
import { FailedResponse, SuccessResponse } from "@/api/types";
import ApiSlice from "@/api/slice";
import { LoginResponse } from "./entity";
import { ChangePasswordForm } from "@/features/change-password/schema";

export default class AuthSlice extends ApiSlice {
  static baseURL: string = ApiSlice.baseURL;

  static async SignIn(payload: { email: string; password: string }) {
    const rsp = await this.request("/auth/login/admin", "POST", payload);
    if (rsp.meta.error) return rsp as FailedResponse;

    const result: SuccessResponse<LoginResponse> = {
      ...(rsp as SuccessResponse),
      data: new LoginResponse((rsp.data && typeof rsp.data === "object" ? rsp.data : {}) as Record<string, unknown>)
    };

    return result;
  }

  static async ChangePassword(payload: Omit<ChangePasswordForm, "confirmNewPassword">) {
    const rsp = await this.request("/auth/change-password", "PATCH", payload, {
      auth: true
    });
    if (rsp.meta.error) return rsp as FailedResponse;

    const result: SuccessResponse<unknown> = {
      ...(rsp as SuccessResponse),
      data: rsp.data
    };

    return result;
  }
}
```

### Example: Auth Entity

```ts
// src/api/entity.ts
export enum userType {
  ADMIN = "admin",
  PARTNER = "partner"
}

export class LoginResponse {
  token: string;

  constructor(json: Record<string, unknown>) {
    this.token = json.token as string;
  }
}
```

### Guidelines

- Each API slice should encapsulate all endpoints for its domain.
- Use entity classes to transform and type API responses.
- Always use absolute imports with `@/`.
- Keep API logic out of UI components and hooks—consume slices in features or hooks as needed.

---

#### Example: Creating an Auth Slice

```ts
// src/api/auth.slice.ts
import Api from "@/api/slice";
import { AuthResponse } from "@/api/types";

export const AuthApi = {
  login: (data: { email: string; password: string }) => Api.request<AuthResponse>("/auth/login", "POST", data)
  // Add more auth endpoints as needed
};
```

---

## General Guidelines

- Use TypeScript for all code
- Prefer type inference; only specify return types when necessary
- Use absolute imports with `@/` (never use relative imports)
- Use functional components and React hooks exclusively
- Keep components small and focused; extract logic into hooks or utility functions as needed
- Use context providers for shared state only when necessary
- Prefer composition over inheritance for UI components
- Document complex components and hooks with JSDoc comments

---

## Styling & Design Tokens

- All global styles, font-face declarations, and design tokens (colors, breakpoints, font sizes) are defined in `src/app/globals.css`
- Use CSS variables for consistent theming and responsive design
- Example usage in a component:

```tsx
// ExampleComponent.tsx
export default function ExampleComponent() {
  return (
    <div className="bg-green30 text-white" style={{ fontFamily: "var(--font-jost-semibold)" }}>
      Hello, GWB!
    </div>
  );
}
```

---

## Example: Creating a New Component

```tsx
// src/common/components/ExampleButton.tsx
import React from "react";

interface ExampleButtonProps {
  label: string;
  onClick: () => void;
}

function ExampleButton({ label, onClick }: ExampleButtonProps) {
  return (
    <button className="bg-green30 rounded px-4 py-2 text-white" onClick={onClick}>
      {label}
    </button>
  );
}

export default ExampleButton;
```

---

## Example: Custom Hook

```ts
// src/common/hooks/useToggle.ts
import { useState } from "react";

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(v => !v);
  return [value, toggle] as const;
}
```

---

## Linting & Formatting

- Use ESLint and Prettier for code quality and formatting
- Follow the rules defined in `eslint.config.mjs` and `.prettierrc.json`
- Run `npm run lint` before committing

---

## Summary

- Organize code by app, features, common components, and API slices
- Use absolute imports with `@/`
- Use TypeScript and Tailwind CSS everywhere
- Keep code clean, modular, and well-typed
- Use CSS variables and Tailwind for consistent design
