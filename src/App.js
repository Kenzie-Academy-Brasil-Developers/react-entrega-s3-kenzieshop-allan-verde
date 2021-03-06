import Routes from './routes'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App