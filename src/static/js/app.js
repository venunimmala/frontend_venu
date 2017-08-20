import React from 'react';

const virtualiztion = [
  {
    play: "play",
    virtualizationID: "1",
    apiType: "REST",
    name: "petstore",
    protocol: "HTTP",
    port: "8091",
    running: "false"
  },
  {
    play: "stop",
    virtualizationID: "1",
    apiType: "WDSL",
    name: "currencyconverter",
    protocol: "HTTP",
    port: "8092",
    running: "false"
  },
  {
    play: "play",
    virtualizationID: "1",
    apiType: "REST",
    name: "paystore",
    protocol: "HTTPs",
    port: "8094",
    running: "false"
  }
];

const virtualiztions = virtualiztion.map(virtualiztion =>
  <div className="box">
    <form action="/">
      <h1 className="title">{virtualiztion.name}</h1>
      <a href="#" title="Play" className="play" />

      <button>{virtualiztion.apiType}</button>
      <label><span>port</span>{virtualiztion.port}</label>
      <label><span>protocol</span>{virtualiztion.protocol}</label>
    </form>
  </div>
);



