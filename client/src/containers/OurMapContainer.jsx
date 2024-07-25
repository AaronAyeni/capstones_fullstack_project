import { MapContainer} from 'react-leaflet';
import MapComponent from '../components/MapComponent';
import { useEffect, useState } from 'react';

const OurMapContainer = ({ waypointData, setPostalDistrict }) => {
    const [selectedDistrict, setSelectedDistrict] = useState('HD1');

    const handleDistrictChange = (event) => {
        const district = event.target.value;
        setSelectedDistrict(district);
        setPostalDistrict(district);
    };

    return (
        <>
        <div>
        <h1 className="header-colour">Map</h1>
            <div className='route-filter-select'>
                <select className="big-select" value={selectedDistrict} onChange={handleDistrictChange}>
                    <option value="HD1">HD1-1</option>
                    <option value="HD2">HD2-1</option>
                    <option value="HD3">HD3-1</option>
                    <option value="HD4">HD4-1</option>
                    <option value="HD5">HD5-1</option>
                    <option value="HD6">HD6-1</option>
                    <option value="HD7">HD7-1</option>
                    <option value="HD8">HD8-1</option>
                    <option value="HD9">HD9-1</option>
                </select>
                </div>
        <MapContainer center={[53.6458, -1.785]} zoom={12} id="map">
            <MapComponent waypoints={waypointData} />
        </MapContainer> 
        </div>
      </>
    );
}

export default OurMapContainer;
