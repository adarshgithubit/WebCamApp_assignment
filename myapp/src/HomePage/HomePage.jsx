import React from 'react'
import "./HomePage.css"
import  { useEffect, useRef } from "react";
 

const HomePage = () => {
  let videoRef = useRef(null);
 
  let photoRef = useRef(null)
 
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };
 
  const takePicture = () => {
    const width = 400
    const height = width / (16 / 9)
    
    let video = videoRef.current
 
    let photo = photoRef.current
 
    photo.width = width
 
    photo.height = height
 
    let ctx = photo.getContext('2d')
 
    ctx.drawImage(video, 0, 0, width, height)
    
  }
 
  const clearImage = () => {
    let photo = photoRef.current
 
    let ctx = photo.getContext('2d')
 
    ctx.clearRect(0,0,photo.width,photo.height)
  }
 
  useEffect(() => {
    getVideo();
  }, [videoRef]);
 

  return (
    <>
     
      <div className="container">


      <h1>Camera Selfie App in React</h1>
     
 
      <video ref={videoRef} className="container"></video>
 
      <button onClick={takePicture} className="btn">Take Picture</button>
 
      <canvas  ref={photoRef}></canvas>
 
      <button onClick={clearImage} className="btn">Clear Image</button>
 
      <br/><br/>
      </div>

    </>
  )
}

export default HomePage