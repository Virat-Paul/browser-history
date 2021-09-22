import './index.css'

const HistoryItem = props => {
  const {historyList, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onDeleteItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-list-item-container">
      <div className="time-logo-title-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button className="delete-button" onClick={onDeleteItem} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem

// ccbp submit RJSCPK3BCW
