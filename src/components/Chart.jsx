import React from 'react'

const Chart = ({children, width, height}) => {
  
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width='100%'
      height='70%'
      preserveAspectRatio='xMidyMax meet'
      className='bg-SoftRed'
    >
      {children}
    </svg>
  )
}

export default Chart
