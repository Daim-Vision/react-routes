import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Contacts = (props) => {
  const defaultState = {
    center: [43.324675, 45.692376],
    zoom: 18,
  };
  return (
    <div className="map">
      <YMaps>
        <Map defaultState={defaultState} className="Map">
          <Placemark geometry={[43.324675, 45.692376]} />
        </Map>
      </YMaps>
    </div>
  );
};

export { Contacts };
