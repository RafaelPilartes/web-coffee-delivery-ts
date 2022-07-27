import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routsName } from '../data/routsName'
import { Layout } from '../Layout'

import { CompleteOrder } from '../pages/CompleteOrder'
import Home from '../pages/Home'
import { OrderConfirmed } from '../pages/OrderConfirmed'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routsName.home} element={<Home />} />
          <Route path={routsName.completeOrder} element={<CompleteOrder />} />
          <Route path={routsName.orderConfirmed} element={<OrderConfirmed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
