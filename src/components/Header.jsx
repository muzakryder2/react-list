const Header = ({ items }) => {
  return (
    <nav className='navbar bg-body-tertiary'>
      <div className='container'>
        <span className='navbar-brand mb-0 h1'>React List</span>
        {items.length > 0 && (
          <span className='badge bg-dark'>{items.length} items</span>
        )}
      </div>
    </nav>
  )
}
export default Header
