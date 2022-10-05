import React from 'react'
import { ColorRing } from 'react-loader-spinner';


export default function Loader() {
  return (
    <ColorRing
    visible={true}
    height="150"
    width="150"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#FFA408', '#FF06E5', '#FFF', '#FFA408', '#FF06E5']}
  />
  )
}
