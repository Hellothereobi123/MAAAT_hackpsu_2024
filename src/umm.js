import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const markerIcon = new Icon({
  iconUrl: '/placeholder.svg?height=25&width=25',
  iconSize: [25, 25]
})

/**
 * @typedef {Object} City
 * @property {string} name
 * @property {[number, number]} position
 * @property {number} resourceAllocation
 */

/** @type {City[]} */
const cities = [
  { name: "Tampa", position: [27.9506, -82.4572], resourceAllocation: 80 },
  { name: "Orlando", position: [28.5383, -81.3792], resourceAllocation: 20 },
]

/**
 * @param {Object} props
 * @param {City} props.city
 */
const ResourceAllocationCard = ({ city }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{city.name}</h3>
      <p>Resource Allocation: {city.resourceAllocation}%</p>
    </div>
  )
}

const FloridaResourceMap = () => {
  const [selectedCity, setSelectedCity] = useState(null)

  useEffect(() => {
    // This effect ensures Leaflet is only loaded on the client-side
  }, [])

  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 h-[400px] md:h-full relative">
        <MapContainer center={[28.3, -81.9]} zoom={7} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cities.map(city => (
            <Marker 
              key={city.name} 
              position={city.position} 
              icon={markerIcon}
              eventHandlers={{
                click: () => setSelectedCity(city),
              }}
            >
              <Popup>
                <strong>{city.name}</strong><br />
                Resource Allocation: {city.resourceAllocation}%
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="w-full md:w-1/4 p-4 bg-gray-100 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Resource Allocation in Florida</h2>
        {selectedCity ? (
          <ResourceAllocationCard city={selectedCity} />
        ) : (
          <p>Click on a city to view resource allocation details</p>
        )}
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">All Cities</h3>
          {cities.map(city => (
            <div key={city.name} className="mb-2">
              <strong>{city.name}:</strong> {city.resourceAllocation}%
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FloridaResourceMap