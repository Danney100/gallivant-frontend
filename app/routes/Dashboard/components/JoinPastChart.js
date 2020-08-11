import React from 'react'
import {BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Bar} from 'recharts'
import {joinPast} from './data'
import ChartLegend from './ChartLegend'

const JoinPastChart = () => (
  <ResponsiveContainer width="100%" height={350}>
    <BarChart data={joinPast} margin={{left: -30, right: 15, bottom: 50}}>
      <XAxis dataKey="name" angle={-45} dx={-15} dy={25} />
      <YAxis axisLine={false} tickLine={false} />
      <Tooltip />
      <Legend verticalAlign="top" content={ChartLegend} />
      <Bar dataKey="Consultants" fill="#d18f77" barSize={7} />
      <Bar dataKey="Customers" fill="#66356b" barSize={7} />
      <Bar dataKey="Leads" fill="#28bfa3" barSize={7} />
    </BarChart>
  </ResponsiveContainer>
)

export default JoinPastChart
