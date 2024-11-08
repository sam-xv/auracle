import './App.css'
import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import routes from './route'
import RenderRoute from './route/RenderRoute'
import ErrorPage from './route/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <QueryParamProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                element={<RenderRoute {...route} />}
                key={index}
              />
            ))}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </QueryParamProvider>
    </BrowserRouter>
  )
}

export default App