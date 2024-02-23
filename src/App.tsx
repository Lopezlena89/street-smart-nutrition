import { NavbarPage } from "./components/ui/NavbarPage"
import { PrincipalPage } from "./components/ui/PrincipalPage"



function App() {
  

  return (
    <>
      <div className="w-full h-auto flex flex-col items-center">
          <NavbarPage/>
          <PrincipalPage/>
      </div>
    </>
  )
}

export default App
