
 jwplayer("vplayer").setup({
    sources: [{file:"http://42.201.228.226:8678/TENSPORT_EBRAVO_MOBILE/tracks-v1a1/mono.m3u8"}],
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
var vvplay,vvad,x2ok=0;
var vastdone1=0,vastdone2=0;
var player = jwplayer();
player.on('time', function(x) { 
    if(5>0 && x.position>=5 && vvad!=1){vvad=1;$('div.video_ad_fadein').fadeIn('slow');}
    if(x2ok==0 && x.position>=2862 && x.position<=(2862+2)){x2ok=x.position;}
    
});
player.on('play', function(x) { doPlay(x); });
player.on('complete', function() { $('div.video_ad').show();  });

function doPlay(x)
{
  $('div.video_ad').show();
  if(vvplay)return;
  vvplay=1;
  adb=0;
  if( window.cRAds === undefined ){ adb=1; }
  
  
  
}
    player.on('ready', function(){
    		$('.jw-settings-content-item:contains("Upload")').click( function (e){
		showCCform();
		jwplayer().setCurrentCaptions(0);
		jwplayer().pause(true);
} );

function showCCform()
{
var $dd=	$("<div />").css({
   position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    zIndex: 1000000,
    background: "rgba(10%, 10%, 10%, 0.4)",
    "text-align": "center"
});
$("<iframe />").css({
    width: "60%",
    height: "60%",
    zIndex: 1000001,
    "margin-top": "50px"
}) 

 $dd.click(function (){ $(this).remove(); jwplayer().play(); });
 $dd.appendTo( $('#vplayer') );
}


    });



