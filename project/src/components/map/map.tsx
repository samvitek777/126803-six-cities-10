import {Icon, Marker} from 'leaflet';
import React, {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import {City, Offers} from '../../types/offers';

const defaultCustomIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  city: City,
  offers : Offers,
  selectedCardId: number | null,
}

function Map({city, offers, selectedCardId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedCardId !== undefined && offer.id === selectedCardId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedCardId]);

  return (<section style={{height: '100%'}} className='cities__map' ref={mapRef} />);
}

export default React.memo(Map);
