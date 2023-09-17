import { useState, useEffect } from 'react'
import AddItem from './components/AddItem'
import Header from './components/Header'
import ItemList from './components/ItemList'
import Footer from './components/Footer'

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('list')) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(items))
  }, [items])

  const toggleChecked = (id) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: !item.isChecked }
        }
        return item
      })
    )
  }

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const removeAllChecked = () => {
    setItems((prev) => prev.filter((item) => !item.isChecked))
  }

  const removeAllItems = () => {
    setItems([])
  }

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header items={items} />
      <AddItem setItems={setItems} />
      {items.length > 0 ? (
        <>
          <ItemList
            items={items}
            toggleChecked={toggleChecked}
            removeItem={removeItem}
          />
          <div className='container d-flex justify-content-center mt-4'>
            <button
              type='button'
              className='btn btn-warning me-3'
              onClick={removeAllChecked}
            >
              Remove All Checked
            </button>
            <button
              type='button'
              className='btn btn-danger'
              data-bs-toggle='modal'
              data-bs-target='#deleteAllModal'
            >
              Remove All Items
            </button>
          </div>
          {/* Modal */}
          <div
            className='modal fade'
            id='deleteAllModal'
            tabIndex='-1'
            aria-labelledby='deleteAllModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h1 className='modal-title fs-5' id='deleteAllModalLabel'>
                    Are you sure?
                  </h1>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='modal-body'>
                  Are you sure you want to delete all items?
                  <br />
                  This cannot be undone.
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                  >
                    Close
                  </button>
                  <button
                    type='button'
                    className='btn btn-primary'
                    data-bs-dismiss='modal'
                    onClick={removeAllItems}
                  >
                    Clear List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='container text-center'>
          <h2>List is empty</h2>
        </div>
      )}

      <Footer />
    </div>
  )
}
export default App
