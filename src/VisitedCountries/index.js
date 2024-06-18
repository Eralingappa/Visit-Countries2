import './index.css'
const VisitedCountries = props => {
  const {visitedCountriesDetails, deleteVisitCountry} = props

  const {name, imageUrl, id} = visitedCountriesDetails

  const remove = () => {
    deleteVisitCountry()
  }
  return (
    <li className="visited-countries-list-item">
      <div className="visited-countries-container">
        <img src={imageUrl} alt="thumbnail" className="country-image" />
        <div className="details-secion">
          <p className="visited-country-title">{name}</p>
          <button
            className="delete-button"
            type="button"
            onClick={remove}
            data-testid="delete"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}
export default VisitedCountries
