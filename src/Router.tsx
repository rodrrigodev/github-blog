import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* <Route path='/' element={}/> */}
      </Route>
    </Routes>
  )
}
