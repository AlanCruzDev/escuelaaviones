import React from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';



const containerStyle = {
  width: '100%',
  height: '100vh'
};


export const Mapa = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC_LYtMcEyNc1wBmdpUcYiFUPRkCa7jM9o"
  });


  return (
    <div className='map'>
        {
          isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{
                lat:19.794060,
                lng:-99.074888
              }}
              zoom={10}
            >
              <Marker
                position={
                  {
                    lat:19.794060,
                    lng:-99.074888
                  }
                }
              />
            </GoogleMap>
        ) : (<></>)
        }
    </div>
  )
}
