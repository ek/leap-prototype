import React from 'react';

export default class AudioPlayer extends React.Component {

  componentDidMount() {
    
    function getContext() {
      var contextClass = (window.AudioContext ||  window.webkitAudioContext || 
          window.mozAudioContext || 
          window.oAudioContext || 
          window.msAudioContext);
      if (contextClass) {
        // Web Audio API is available.
        return new contextClass();
      } else {
        console.log('Web Audio API is not available.');
      }
    }

    function playSound(buffer) {
      var source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);
      source.start(0);
    }

    function loadAudio(url, context) {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'arraybuffer';
      // Decode asynchronously
      request.onload = function() {
          context.decodeAudioData(request.response, function(theBuffer) {
              var buffer = theBuffer;
              playSound(buffer);
          }, function(err) {
              console.log(err);
          });
      }
      request.send();
    }
    const context = getContext();
    console.log(context)
    const { audioUrl } = this.props;
    loadAudio(audioUrl, context);

  }

  render() {
    const { audioUrl } = this.props;
    return (
      <h3>
        {audioUrl}
      </h3>
    )
  }
}
=