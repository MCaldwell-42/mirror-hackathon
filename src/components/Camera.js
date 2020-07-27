import React, { useEffect, useRef, useCallback } from 'react';
import { Button } from 'react-bootstrap';

const Camera = () => {
  const videoPlayer = useRef(null);
  const canvas = useRef(null);
  var photoTaken = false;

  useEffect(() => {
    async function getCamera() {
      console.error('enumerate devices:', navigator.mediaDevices.enumerateDevices());
      const cameras = await navigator.mediaDevices.enumerateDevices();
      processDevices(cameras);
    }
    getCamera();
  }, []);

  const processDevices = useCallback((devices) => {
    devices.forEach((device) => {
      console.error('Device:', device.label);
      setDevice(device);
    });
  });

  const setDevice = async (device) => {
    const { deviceId } = device;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { deviceId } })
      .then((stream) => videoPlayer.current.srcObject = stream)
      .catch((err) => console.error(err));
    videoPlayer.current.play();
  };

  const turnCameraOff = () => {
    videoPlayer.current.srcObject.getVideoTracks().forEach((track) => track.stop());
  };

  const turnCameraOn = async () => {
    const cameras = await navigator.mediaDevices.enumerateDevices();
    processDevices(cameras);
  };

  const takePhoto = () => {
      setTimeout(() => {
      const context = canvas.current.getContext('2d');
      context.drawImage(videoPlayer.current, 0, 0, canvas.current.width, canvas.current.height);
  }, 4000);
     photoTaken = true;
  };

  const downloadPhoto = () => {
    if (photoTaken == true){
    const myCanvas = document.getElementById('my-canvas');
    myCanvas.toBlob(
        blob => {
          const anchor = document.getElementById('download-link');
          anchor.href = URL.createObjectURL(blob);
        },
        'image/jpeg',
        0.9,
      );
    }
    else {alert("no photo to download!")}
  }

  return (
    <div className="video_booth">
      <h2 id="camHeader">Photo Booth! Say Cheese!</h2>
      <Button className='mr-2' onClick={() => turnCameraOff()}>Turn off Camera</Button>
      <Button className='mr-2' onClick={() => turnCameraOn()}>Turn on Camera</Button>
      <Button onClick={() => takePhoto()}>Take photo! (4s delay)</Button>
      <div className="video_booth__viewer">
        <video ref={videoPlayer} width="680" height="500" />
      </div>
      <div className="video_booth__stage mt-2">
        <canvas id="my-canvas" className='canvas' width="680" height="500" ref={canvas} />
      </div>
       <a id="download-link" download="photobooth_pic.jpg"><Button onClick={() => downloadPhoto()}>Download Photo</Button></a>
    </div>
  );
};

export default Camera;
