import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../../assets/images/icon-location.svg";
const Map = ({ data }) => {
  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }
  const position = data
    ? [data.location.lat, data.location.lng]
    : [36.74453, 3.05268];

  const locationIcon = L.icon({
    iconUrl: marker,
    iconSize: [20, 25],
  });

  return (
    <div className="Map-content">
      <MapContainer
        center={[35.74453, 3.05268]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView coords={position} />
        <Marker position={position} icon={locationIcon}></Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
