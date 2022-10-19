import { useState } from 'react'
import { useWorld, getWorld } from '../data/world.js'
import * as tuple from '../utils/tuple.js'

const Group = ({ state, children }) => {
  const [position, setPosition] = useWorld([state.id, 'position'])
  const [dragStartMouse, setDragStartMouse] = useState([0, 0])
  const [dragStartGroup, setDragStartGroup] = useState([0, 0])
  const world = getWorld()

  const size = state.children.reduce((size, childId) => {
    const child = world[childId]
    const childAdjustment = tuple.add(child.size, child.position)
    return tuple.combineLargest(size, childAdjustment)
  }, state.minSize || [0, 0])

  const groupStyle = {
    top: `${position[0]}px`,
    left: `${position[1]}px`,
    height: `${size[0]}px`,
    width: `${size[1]}px`
  }

  const handleDrag = e => {
    if (e.screenX === 0) return
    setPosition([
      dragStartGroup[0] + e.clientY - dragStartMouse[0],
      dragStartGroup[1] + e.clientX - dragStartMouse[1]
    ])
  }

  const handleDragStart = e => {
    const rect = e.target.getBoundingClientRect()
    setDragStartMouse([e.clientY, e.clientX])
    setDragStartGroup([rect.top, rect.left])
  }

  return <div className='group' style={groupStyle} onDragStart={handleDragStart} onDrag={handleDrag} draggable='true'>
    {children}
  </div>
}

export default Group