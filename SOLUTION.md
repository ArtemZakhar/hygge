# SOLUTION

## Estimation

Estimated: 16 hours

Spent: 12 hours

## Solution

I have not work with React for a while so it was interesting for me to implement the task using React 😀
The main focus was to centralize query params updates and product data fetching. 
The useHandleSearchParams hook, in combination with useProductsWithParams handle the core functionality.

## Technology Stack

- **React** Library for building component-based UIs.
- **Tailwind** Utility-first CSS framework for styling.
- **Axios** HTTP client for communicating with backend services.
- **TanStack React Query** For fetching, caching, and updating server state in React applications.
- **React Router Dom** Client-side routing solution for React.

## Project Structure

└───src                                 # Main source directory for the application
  ├───components  
  │ ├───common                          # Common/shared components across the app
  │ └───pages                           # Pages-specific components
  │   ├───HomePage                      # Page with contacts information.
  │   └───ProductsPage                  # Page related to the test assignment
  ├───constants                         # Global constants 
  ├───context                           # React context-related files
  ├───hooks                             # Custom React hooks
  │ ├───api                             # interacting with API endpoints
  │ ├───useDebounce                     # Delay utility for requests
  │ ├───useHandleSearchParams           # Centralized query parameter handling
  │ ├───useQueryResponseHandler         # Handling fetch responses
  │ └───useUserSearchParametersHandler  # Manages search/filter parameters
  ├───services                          # Functions for API calls
  ├───styles                            # Global styling and theme configuration
  ├───types                             # TypeScript types
  └───utils                             # Utility functions and helpers

## Notes
There were a few features I planned to implement, such as price range filter and product detailed page but due to personal time constraints I had to skip them.

Initially, I planned to use context for both: ProductList page and SideBar component. However the absence metadata in the API response forced me to separate the logic. I left the context only for short informational message in the SideBar component.
