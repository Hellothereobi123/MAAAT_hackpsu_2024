// Map.jsx
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer className = "map_thing" center={[30.2906, -92.412]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[30.2906, -92.412]}>
        <Popup>
          This is a popup
        </Popup>
      </Marker>
    </MapContainer>
  );
}
