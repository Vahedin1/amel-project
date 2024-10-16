import ResponsiveAppBar from './AppBar';
import Footer from './Footer';
import { APIProvider, Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import React, { useState, useRef } from "react";
import useGoogleMapState from '../hooks/useGoogleMapState';

export default function GooglesMap() {
    const position = { lat: 50.110924, lng: 8.682127 };
    const [open, setOpen] = useState(false);
    const { center, zoom} = useGoogleMapState(position);
    const mapRef = useRef(null); // Declare mapRef here

    const handleMapIdle = (map) => {
        console.log('Map instance:', map); // Debugging info
        if (map && typeof map.getCenter === 'function') {
            const center = map.getCenter();
            if (center) {
                console.log('Map center:', center.toJSON());
            } else {
                console.error('Center is null.');
            }
        } else {
            console.error('Map instance is not valid or does not have getCenter method.');
        }
    };

    return (
        <>
            <ResponsiveAppBar />
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY2}>
                <div className='map-container' style={{ height: '650px', width: '100%' }}>
                    <Map
                        center={center}
                        defaultCenter={position}
                        mapId={process.env.REACT_APP_GOOGLE_MAPS_ID2}
                        zoom={zoom}
                        defaultZoom={14}
                        options={{
                            gestureHandling: "auto",
                            zoomControl: true,
                            streetViewControl: true,
                        }}
                        onIdle={handleMapIdle} // Correctly handling onIdle
                        onLoad={(mapInstance) => {
                            mapRef.current = mapInstance; // Store the map instance in the ref
                        }}
                    >
                        <AdvancedMarker
                            position={position}
                            onClick={() => setOpen(true)}
                        />
                        {open && (
                            <InfoWindow
                                position={position}
                                onCloseClick={() => setOpen(false)}
                                options={{ pixelOffset: new window.google.maps.Size(0, -35) }}
                            >
                                <div style={{ padding: '10px', fontFamily: 'Arial', color: 'black', lineHeight: '1.5' }}>
                                    <h4 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>Amel Ungery</h4>
                                    <p style={{ margin: '0', fontSize: '14px' }}>Am Zernsee 16, 14542 Werder/Havel</p>
                                    <p style={{ margin: '5px 0', fontSize: '14px' }}>0162 420 66 78</p>
                                    <p style={{ margin: '0', fontSize: '14px' }}>
                                        <a href="mailto:office@amel-bau.de" style={{ color: '#4285F4', textDecoration: 'none' }}>
                                            office@Unger-bau.de
                                        </a>
                                    </p>
                                </div>
                            </InfoWindow>
                        )}
                    </Map>
                </div>
            </APIProvider>
            <Footer />
        </>
    );
}
