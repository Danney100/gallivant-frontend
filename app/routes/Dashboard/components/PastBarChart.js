import React from 'react'
import {BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, Bar} from 'recharts'
import {data} from './data'
import colors from 'colors'
import PropTypes from 'prop-types'

const PastBarChart = ({label, BarOffset}) => {
  const toCurrency = (value) => (label !== 'partiesPast' ? `$ ${value}` : value)

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data[label]} margin={{top: 5, bottom: 50}}>
        <XAxis dataKey="name" interval={0} axisLine={false} tickLine={false} tick={false} />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 'dataMax']}
          tickFormatter={toCurrency}
        />
        <Tooltip
          contentStyle={{
            background: colors['900'],
            border: `1px solid ${colors['900']}`,
            color: colors['white'],
          }}
        />
        <Bar dataKey="value" fill="#423b3c">
          <LabelList
            dataKey="name"
            position="bottom"
            dy={BarOffset.dy}
            dx={BarOffset.dx}
            angle={BarOffset.angle}
            offset={5}
            fill="#707070"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

PastBarChart.propTypes = {
  label: PropTypes.string,
  BarOffset: PropTypes.object,
}

export default PastBarChart
