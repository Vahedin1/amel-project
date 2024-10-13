"use client";

import ResponsiveAppBar from './AppBar';
import Footer from './Footer';
import { APIProvider, Map, AdvancedMarker, InfoWindow, } from "@vis.gl/react-google-maps";
import React, { useState } from "react";

export default function GooglesMap() {
    const position = {
        lat: 60.5461,
        lng: 20.6150,
    };
    const [open, setOpen] = useState(false);

    return (
        <>

            <ResponsiveAppBar />

            {/* Google Map */}
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY2}>
                <div className='map-container' style={{ height: '650px', width: '100%' }}>
                    <Map
                        center={position}
                        defaultCenter={position}
                        mapId={process.env.REACT_APP_GOOGLE_MAPS_ID2}
                        zoom={16}
                        defaultZoom={16}
                        options={{
                            gestureHandling: "auto",
                            zoomControl: true,
                            streetViewControl: true,
                        }}
                    >
                        <AdvancedMarker
                            position={position}
                            onClick={() => setOpen(true)}
                        >

                        </AdvancedMarker>

                        {open && (
                            <InfoWindow
                                position={position}
                                onCloseClick={() => setOpen(false)}
                                options={{
                                    pixelOffset: new window.google.maps.Size(0, -35)
                                }}>
                                <div style={{ padding: '10px', fontFamily: 'Arial', color: 'black', lineHeight: '1.5', }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h4 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>Bauunternehmen Roberto Swarovsky</h4>
                                    </div>

                                    <p style={{ margin: '0', fontSize: '14px' }}>Am Zernsee 16, 14542 Werder/Havel</p>
                                    <p style={{ margin: '5px 0', fontSize: '14px' }}>0162 420 66 78</p>
                                    <p style={{ margin: '0', fontSize: '14px' }}>
                                        <a href="mailto:office@swarovsky-bau.de" style={{ color: '#4285F4', textDecoration: 'none' }}>
                                            office@swarovsky-bau.de
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