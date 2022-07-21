import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '../Layout'

import { CompleteOrder } from '../pages/CompleteOrder'
import Home from '../pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/completeOrder" element={<CompleteOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
