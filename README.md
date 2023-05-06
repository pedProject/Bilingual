### Libs & Tools

1. `React` - UI library
2. `Redux, Redux Toolkit` - State management
3. `Redux Toolkit Query` -
4. `Material UI` - UI library. `@mui/styled-engine
5. `React Router` - Routing

### Do's

1. Use `feature.based.case` for component names, component files.
2. Use `camelCase` for variables, functions, etc.
3. Use `UPPER_CASE` for constants.
4. Use `short lowercase names` for files and folders.
5. Separate UI from business logic.

##### Don'ts

1. Don't use `any` type.
2. Don't use `default export` for Components.
3. Don't use `default export` for functions.
4. Don't use `useEffect` to fetch data. Use `rtk-query` instead.
5. Don't write inline functions in Components bodies that return JSX.

##### File structure

src/
├── components/
│ ├── component1/
│ │ ├── component1.tsx
│ │ └── component1.types.ts
│ ├── component2/
│ │ ├── component2.tsx
│ │ └── component2.types.ts
│ └── index.ts  
│  
├── pages/
│ ├── page1/
│ │ ├── Page1.tsx
│ │ └── Page1.types.ts
│ ├── page2/
│ │ ├── page2.tsx
│ │ └── page2.types.ts
│ └── index.ts
│  
├── redux/
│ ├── api/
│ │ └── auth.api.ts
│ │ └── ...
│ ├── slices/
│ │ └── auth.slice.ts
│ └── index.ts
│  
├── routes/
├── model/
├── utils/
│  
├── App.tsx
└── index.tsx
