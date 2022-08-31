import { useEffect, useState } from 'react';
import './countdown.scss';
import watercolorOv from '../assets/img/texture3.jpg';

export const Countdown = () => {
  const deadline = 'September, 10, 2022';

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? '0' + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    }
  };

  useEffect(() => {
    setInterval(() => {
      getTimeUntil(deadline);
    }, 1000);
    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div
      className='countdown-container'
      style={{ backgroundImage: `url(${watercolorOv})` }}
    >
      <div className='countdown-placeholder'>
        <div className='border'>
          <h2>¿Cuanto falta?</h2>
          <div className='countdown-cifras'>
            <div className='item item-dia'>
              <p className='digit'>{leading0(days)}</p>
              <p className='title-day'>DIAS</p>
            </div>
            <svg
              version='1.1'
              id='Capa_1'
              className='linea'
              x='0px'
              y='0px'
              viewBox='0 0 50 50'
              // style="enable-background:new 0 0 50 50;"
            >
              <line
                className='st0'
                x1='23.65'
                y1='0.77'
                x2='23.65'
                y2='48.51'
              />
            </svg>

            <div className='item item-hora'>
              <p className='digit'>{leading0(hours)}</p>
              <p className='title-horas'>HORAS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
