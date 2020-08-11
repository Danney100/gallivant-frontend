import React from 'react'
import {Pie, ResponsiveContainer, Cell, PieChart, Legend} from 'recharts'

import ChartLegend from './ChartLegend'
import {orderPartiesPast7} from './data'

const COLORS = ['#d18f77', '#423b3c']

const OrderOriginPast7Days = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Legend
          verticalAlign="top"
          margin={{top: -50, left: 0, right: 0, bottom: 0}}
          content={ChartLegend}
        />
        <Pie data={orderPartiesPast7} dataKey="value" labelLine={false} outerRadius={80}>
          {orderPartiesPast7.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default OrderOriginPast7Days
