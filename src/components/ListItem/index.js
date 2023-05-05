import './index.css'

const ListItem = props => {
  const {each} = props
  const {InputValue, Length} = each

  return (
    <li className="list-item">
      <p>
        {InputValue} : {Length}
      </p>
    </li>
  )
}

export default ListItem
