import './App.css'
import { Navbar, Header, Method, Work, Faq } from './components'

function App() {

  return (
    <div className="flex flex-col items-center px-4 lg:px-[6rem] xl:px-[8rem]">
      <Navbar />
      <Header />
      <Work />
      <Method />
      <Faq />
    </div>
  )
}

export default App
