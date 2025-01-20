import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "@/components/header/Header"
import Count from "@/pages/count/Count"
import Counts from "@/pages/count/Counts"
import User from "@/pages/user/User"
import MainPage from "@/pages/MainPage"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/count" element={<Count />} />
        <Route path="/counts" element={<Counts />} />
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
