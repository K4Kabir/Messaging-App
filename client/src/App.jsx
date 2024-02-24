import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/auth/ProtectedRoute'
const Home = lazy(() =>
  import('./pages/Home')
)
const Login = lazy(() =>
  import('./pages/Login')
)
const Chat = lazy(() =>
  import('./pages/Chat')
)
const Group = lazy(() =>
  import('./pages/Group')
)
let user = false;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path='/' element={<Home />} />
          <Route path='/chat/:id' element={<Chat />} />
          <Route path='/group' element={<Group />} />
        </Route>

        <Route element={<ProtectedRoute user={!user} redirect='/' />}>
          <Route path='/login' element={<Login />} />
        </Route>


        <Route path='*' element={<h1>Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
