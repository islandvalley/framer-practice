import * as React from 'react'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const Example = () => {
  const constraintsRef = useRef(null)

  const [count, setCount] = React.useState(0)
  return (
    <div className="drug">
      <div className="example-container">
        <>
          <motion.div className="drag-area" ref={constraintsRef} />
          <motion.div drag dragConstraints={constraintsRef} key={count} />
        </>
      </div>
    </div>
  )
}

export default Example
