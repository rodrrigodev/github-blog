import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './pages/home'
import { PostDetail } from './pages/PostDetail'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path={`/postdetail/:postId`} element={<PostDetail />} />
      </Route>
    </Routes>
  )
}
