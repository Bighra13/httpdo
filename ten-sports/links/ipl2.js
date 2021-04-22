
 jwplayer("vplayer").setup({
    sources: [{file:"http://35.244.55.13/ipl/index.m3u8"}],
    //hlslabels:{
    //       "1440":"1080p",
    //       "900":"720p",
    //       "768":"480p"
   //},
  
    width: "100%", 
    height: "100%",
    stretching: "uniform",
   
    //aspectratio: "16:9",
    preload: 'auto',
    androidhls: "true",
    hlshtml: "true",
    test: "1",
    primary: "html5",
    startparam: "start"
    
  
   
  });
