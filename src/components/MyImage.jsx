import React, { useState } from 'react'

const MyImage = ({image = [{url: ''}]}) => {
 const [mainImage, setMainImage] = useState(image[0]);
   // Check if image is undefined or null
   if (!image) {
    return null; 
  }
  return (
    <>
    <div className='grid grid-col-2 grid-flow-col'>
      <div className='grid grid-row-4'>
      {image.map((image, i) => {
        return (
          <figure>
            <img className='w-40 mb-5' src={image.url} alt={image.filename} key={i} onClick = {() => {
              setMainImage(image);
            }}/>
          </figure>
        )
      })}
      </div>
      <div className='grid items-center'>
        <img className='p-5' src={mainImage.url} alt={mainImage.filename}/>
      </div>
    </div>
    </>
  )
}

export default MyImage
