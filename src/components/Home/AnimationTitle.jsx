import React from "react";
import $ from 'jquery';
import "./AnimationTitle.css"

function AnimationTitle() {
  $(function() {
    setTimeout(function(){
      $('.start p').fadeIn(1600);
    },500); 
    setTimeout(function(){
      $('.start h1').fadeIn(1600);
    },500); 
    setTimeout(function(){
      $('.start').fadeOut(500);
    },3500);
  });
  return (
    <div className="start">
      <h1>Chiho Maekawa</h1>
      <p>A Front-End Developer based in Vancouver</p>
    </div>
  );
}

export default AnimationTitle;

