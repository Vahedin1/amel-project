// useGoogleMapState.js
import { useEffect, useState } from "react";
import { deepEqual } from "../utils/deepEqual";

const useGoogleMapState = (initialPosition, initialZoom) => {
    const [position, setPosition] = useState(initialPosition);
    const [zoom, setZoom] = useState(initialZoom);

    const setMapState = (newPosition, newZoom) => {
        if (!deepEqual(position, newPosition)) {
            setPosition(newPosition);
        }
        if (zoom !== newZoom) {
            setZoom(newZoom);
        }
    };

    return [position, zoom, setMapState];
};

export default useGoogleMapState;