import SingleItem from './SingleItem'

const ItemList = ({ items, toggleChecked, removeItem }) => {
  return (
    <ul className='container list-group'>
      {items.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          toggleChecked={toggleChecked}
          removeItem={removeItem}
        />
      ))}
    </ul>
  )
}
export default ItemList
