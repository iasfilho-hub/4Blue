import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyles"
import { router } from "./routes"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />

  </StrictMode>,
)
