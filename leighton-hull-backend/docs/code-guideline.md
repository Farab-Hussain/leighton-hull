# Leighton Hull Backend Code Guidelines

## Architecture Overview

The codebase follows a modular architecture with two main code blocks:

1. **Routes** (`src/routes`)
2. **Features** (`src/features`)

This separation allows for clean code organization, reusability, and clear responsibility boundaries.

## 1. Routes (`src/routes`)

Routes are NestJS Modules responsible for handling HTTP requests and responses. They define API endpoints and their behavior.

### Key Characteristics

- Located in the `src/routes` directory
- Do NOT include service logic (unlike traditional NestJS approach)
- Service logic is encapsulated in Features

### Implementation Requirements

#### Module Registration

- Must be imported in `app.module.ts` and registered in the `imports` array
- The module should be named ${MODULE_NAME} (e.g., UsersModule), but when importing it in `app.module.ts`, it should be imported as Route_${MODULE_NAME} (e.g., `Route_UsersModule`)

#### API Endpoints

- Controller methods must follow naming convention: `API_${METHOD_NAME}` (e.g., `API_getUser`)

#### Request Validation

- **Authentication**: Can be implemented at controller class level
- **Authorization**: Can be implemented at controller class level
- **Rate Limiting**: Must be implemented as needed
- **Input Validation**: Use `class-transformer` and `class-validator` DTOs
  - The DTOs must be imported from the `dtos.ts` file in the same directory
  - The DTOs must be named using the convention `${ENTITY_NAME}_APIInputDTO` (e.g., `User_APIInputDTO`)

#### Data Transformation

- All entities returned to API users MUST have DTOs
- All controllers must wrap the DTOs in an object
- DTO naming convention: `${ENTITY_NAME}_APIOutputDTO` (e.g., `User_APIOutputDTO`)
- The DTOs must be validated using `class-validator` decorators
- When an DTO needs to be returned from a controller, make sure to use `parseAndValidate` method from `UtilsService` to ensure the data is transformed and validated correctly.

  ```ts
  import { User_APIOutputDTO } from "@/routes/users/dtos";
  import { UtilsService } from "@/utils/utils.service";
  import { Controller, Get } from "@nestjs/common";

  @Controller("users")
  class UserController {
    constructor(private readonly utilsService: UtilsService) {}

    @Get()
    async API_getUser() {
      const userRaw = await this.usersService.getUser();
      const user = await this.utilsService.parseAndValidate(userRaw, User_APIOutputDTO);
      return { user };
    }
  }
  ```

#### Error Handling

- All errors must be caught and transformed into proper HTTP responses
- Features will throw CUSTOM errors that routes must handle appropriately

#### Response Formatting

- Via `app.useGlobalInterceptors(new ResponseFormInterceptor());` in the `main.ts` file, whatever we return from the controllers, will be wrapped in a standard response format.

## 2. Features (`src/features`)

Features are NestJS Modules that encapsulate core business logic and database interactions.

### Key Characteristics

- Located in the `src/features` directory
- Implement complex operations and business rules
- Designed to be reusable and composable
- Have their own services injected into routes

### Implementation Requirements

#### Module Structure

- Each feature must have its own directory under `src/features`
- Must be imported in `app.module.ts` and registered in the `imports` array
- The module should be named `${FEATURE_NAME}Module` (e.g., `GoalsModule`), but when importing it in `app.module.ts`, it should be imported as `Feature_${FEATURE_NAME}Module` (e.g., `Feature_GoalsModule`)

#### Service Methods

- Must accept ONLY ONE parameter (not the same as route DTOs)
- Each method requires a corresponding INPUT type in:
  `src/features/${FEATURE_NAME}/${SERVICE_NAME}.types.ts`

  Example:

  ```ts
  // src/features/auth/auth.service.ts
  class AuthService {
    async signin({ email, password }: SigninInput) {
      // Implementation
    }
  }

  // src/features/auth/auth.service.types.ts
  export interface SigninInput {
    email: string;
    password: string;
  }
  ```

#### Exception Handling

- Each feature must define its own custom exceptions in:
  `src/features/${FEATURE_NAME}/exceptions.ts`
- Custom exceptions must NOT extend built-in HTTP exceptions
- The exception class should extend `InternalException` from `utils/exceptions.ts`

  Example:

  ```ts
  import { InternalException, AUTH_EXCEPTION_CODE_PREFIX } from "@/utils/exceptions";

  export class SignInFailedException extends InternalException {
    constructor() {
      super("Failed to sign in", AUTH_EXCEPTION_CODE_PREFIX + 4);
    }
  }
  ```

## General Guidelines

- Never specify the return type of a function if it can be inferred by TypeScript!
- Never import a file with a relative path! Always use absolute paths with `@/`.
