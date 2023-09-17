import React from 'react'
import HeadTxt from '../Components/HeadTxt'
import CountryCard from '../Components/CountryCard'

const CountryListingPage = () => {
  return (
    <div className='container rounded shadow'>
      <HeadTxt/>
      <div className="row">
        <CountryCard/>
      </div>
    </div>
  )
}

export default CountryListingPage
