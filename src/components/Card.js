const Card = ({ state }) => {
  const cardStyle = {
    top: `${state.position[0]}px`,
    left: `${state.position[1]}px`,
    height: `${state.size[0]}px`,
    width: `${state.size[1]}px`
  }
  const frontStyle = {
    background: `url('${state.frontImage}')`
  }

  const backStyle = {
    background: `url('${state.backImage}')`
  }

  return <div className="card" style={cardStyle}>
    <div style={frontStyle}></div>
    <div style={backStyle}></div>
  </div>
}

export default Card