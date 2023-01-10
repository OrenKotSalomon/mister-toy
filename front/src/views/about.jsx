import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{ fontSize: '1.5rem' }}>{text}</div>;
const Loc1 = ({ text }) => <div style={{ fontSize: '1.5rem' }}>{text}</div>
const Loc2 = ({ text }) => <div style={{ fontSize: '1.5rem' }}>{text}</div>
const Loc3 = ({ text }) => <div style={{ fontSize: '1.5rem' }}>{text}</div>

export function About() {

    const [coordinates, setCoordinates] = useState({ lat: 32.0853, lng: 34.7818 })
    const zoom = 11

    const handleClick = ({ lat, lng }) => {
        setCoordinates({ lat, lng })
        console.log({ lat, lng });
    }

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '70vh', width: '90%', margin: 'auto', }}>
            <GoogleMapReact
                onClick={handleClick}
                bootstrapURLKeys={{ key: "AIzaSyA5YAKbctMWmj2etXv-KY7MSXDMGaWr0qs" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={zoom}
            >

                <AnyReactComponent
                    lat={32.1}
                    lng={34.999}

                    text="🚩"
                />
                <Loc1
                    lat={32.222}
                    lng={34.833}

                    text="🚩"
                />
                <Loc2
                    lat={32.8222}
                    lng={34.98033}
                    text="🚩"
                />
                <Loc3
                    lat={32.8222}
                    lng={35.033}
                    text="🚩"
                />
            </GoogleMapReact>
            <div className="google-btn">

                <div onClick={() => setCoordinates({
                    lat
                        :
                        32.081780252142266,
                    lng
                        :
                        34.78431426281503
                })}>Tel Aviv</div>
                <div onClick={() => setCoordinates({
                    lat
                        :
                        31.247278152959762,
                    lng
                        :
                        34.78107899446109
                })}>Beer Sheva</div>
                <div onClick={() => setCoordinates({
                    lat
                        :
                        32.3118649922173,
                    lng
                        :
                        34.85072362419434
                })}>Netanya</div>
            </div>

        </div>
    );
}