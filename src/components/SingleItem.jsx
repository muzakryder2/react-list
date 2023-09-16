import { FaMinusSquare } from 'react-icons/fa'

const SingleItem = ({ item, toggleChecked, removeItem }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center cursor ${
        item.isChecked && 'bg-success-subtle'
      }`}
      onClick={() => toggleChecked(item.id)}
    >
      {item.text}
      <span
        className='badge bg-danger rounded-full cursor'
        onClick={() => removeItem(item.id)}
      >
        <FaMinusSquare size={15} />
      </span>
    </li>
  )
}
export default SingleItem
