import { RouterProvider } from "react-router-dom"
import router from "./router"
import AuthProvider from "./context/AuthContext"


function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  )
}

export default App
