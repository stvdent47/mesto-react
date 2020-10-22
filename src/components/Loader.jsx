import React from 'react';

const Loader = () => {
  return (
    <div class='ui segment'>
      <div class='ui active dimmer'>
        <div class='ui text loader'>Загрузка</div>
      </div>
      <p></p>
    </div>
  );
};

export default Loader;