// Created by iWeb 3.0.4 local-build-20120421

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.meghankennedy.com/MeghanKennedy.com/Figures_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.meghankennedy.com/MeghanKennedy.com',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.meghankennedy.com/MeghanKennedy.com',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(203,203),new IWSize(203,16),new IWSize(203,234),27,27,0,new IWSize(12,13)),new IWPhotoFrame([IWCreateImage('Figures_files/Modern_C_TL.png'),IWCreateImage('Figures_files/Modern_S_T.png'),IWCreateImage('Figures_files/Modern_C_TR.png'),IWCreateImage('Figures_files/Modern_S_R.png'),IWCreateImage('Figures_files/Modern_C_BR.png'),IWCreateImage('Figures_files/Modern_S_B.png'),IWCreateImage('Figures_files/Modern_C_BL.png'),IWCreateImage('Figures_files/Modern_S_L.png')],null,2,0.333333,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Figures_files/FiguresMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id3');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
