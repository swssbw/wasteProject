import React from 'react'
import ItemSearch from './ItemSearch';
import Template from './Template';
import PleaseRead from './PleaseRead';

const LandingPage = () => {
  return (
    <>
      <Template>
        <PleaseRead />
        <ItemSearch />
      </Template>
    </>
  )
}

export default LandingPage
