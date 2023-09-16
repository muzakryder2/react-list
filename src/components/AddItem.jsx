import { useState } from 'react'
import { GoPlusCircle } from 'react-icons/go'

const AddItem = ({ setItems }) => {
  const [text, setText] = useState('')

  const addItem = (e) => {
    e.preventDefault()

    if (text !== '') {
      setItems((prev) => [
        {
          id: crypto.randomUUID(),
          text,
          isChecked: false,
        },
        ...prev,
      ])

      setText('')
    }
  }

  return (
    <div className='container my-4'>
      <form onSubmit={addItem}>
        <div className='input-group mb-3'>
          <input
            type='text'
            name='text'
            className='form-control'
            placeholder='Add Item...'
            aria-label='Add Item'
            aria-describedby='add-item-button'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className='btn btn-dark' type='submit' id='add-item-button'>
            <GoPlusCircle size={25} />
          </button>
        </div>
      </form>
    </div>
  )
}
export default AddItem
