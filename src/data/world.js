import { useState } from 'react'
import { assocPath, path } from 'ramda'

const world = {
  'root': {
    type: 'root',
    children: ['43f945f7']
  },
  '43f945f7': {
    id: '43f945f7',
    type: 'group',
    position: [10, 200],
    minSize: [40, 40],
    children: [
      '50a5edad',
      '24270899'
    ]
  },
  '24270899': {
    id: '24270899',
    type: 'card',
    position: [0, 0],
    size: [200, 100],
    frontImage: '../images/front.png',
    backImage: '../images/back.png'
  },
  '50a5edad': {
    id: '50a5edad',
    type: 'card',
    position: [10, 50],
    size: [200,100],
    frontImage: '../images/front.png',
    backImage: '../images/back.png'
  }
}

export const useWorld = (select) => {
  const [state, setState] = useState(world)
  const setSelectedState = updatedState => {
    const newState = select
      ? assocPath([].concat(select), updatedState, state)
      : updatedState
    setState(newState)
  }
  const selectedState = select
    ? path([].concat(select), state)
    : state
  return [selectedState, setSelectedState]
}

export const getWorld = (select) => {
  const selectedState = select
    ? path([].concat(select), world)
    : world
  return selectedState
}