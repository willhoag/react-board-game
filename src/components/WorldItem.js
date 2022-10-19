import { useWorld } from '../data/world.js'
import Root from './Root.js'
import Group from './Group.js'
import Card from './Card.js'

const itemTypes = {
  'card': Card,
  'group': Group,
  'root': Root,
}

const WorldItem = ({ worldId }) => {
  const [state] = useWorld(worldId)
  const Type = itemTypes[state.type]
  return <Type state={state} key={state.id}>
    {(state.children || []).map(childId => {
      return <WorldItem worldId={childId} key={childId} />
    })}
  </Type>
}

export default WorldItem

