'use client'

import { LayersControl, MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';


const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

type Latlng = [number, number]
type LocationMarkerProps = {
  position: Latlng | null,
  setPosition: (position : Latlng) => void
}

function LocationMarker({position, setPosition}: LocationMarkerProps) {
    
    const map = useMapEvents({
      click(e) {

        const newLocation: Latlng = [e.latlng.lat, e.latlng.lng]
        setPosition(newLocation)

        map.flyTo(e.latlng)
      }

    })
  
    return position === null ? null : (
      <Marker position={position} icon={markerIcon}>
        <Popup>You are here</Popup>
      </Marker>
    )
}

const MapLandmark = ({location}: {location?: {lat: number, lng: number}}) => {

  const [position, setPosition] = useState<Latlng | null>(null)

  // console.log(position)

  const defaultLocation: Latlng = [13.8, 100.5]

  return (
    <>
        <h1 className='font-semibold'> Where are you? </h1>
        <input type="hidden" name='lat' value={position? position[0] : '' } />
        <input type="hidden" name='lng' value={position? position[1] : '' } />

        <MapContainer 
            center={ location || defaultLocation } 
            zoom={7} 
            scrollWheelZoom={true}
            className='h-[55vh] rounded-lg z-0 relative'
        >
            
            <Marker position={ location || defaultLocation } icon={markerIcon}>
              <Popup>
                  A pretty CSS3 popFup. <br /> Easily customizable.
              </Popup>
            </Marker>

            <LocationMarker position={position} setPosition={setPosition} />
        
            <LayersControl>
              <LayersControl.BaseLayer name='Openstreetmap' checked>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>

              <LayersControl.BaseLayer name='Esri WorldImagery'>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
              </LayersControl.BaseLayer>
            </LayersControl>
        
        </MapContainer>
    </>
  );
};
export default MapLandmark;
