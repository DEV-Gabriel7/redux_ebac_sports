import { GlobalStyle } from './styles'
import Header from './components/Header'
import Produtos from './containers/Produtos'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
