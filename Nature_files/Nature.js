// Created by iWeb 3.0.4 local-build-20120421

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.meghankennedy.com/MeghanKennedy.com/Nature_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.meghankennedy.com/MeghanKennedy.com',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.meghankennedy.com/MeghanKennedy.com',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(203,203),new IWSize(203,33),new IWSize(203,251),27,27,0,new IWSize(0,0)),new IWPhotoFrame([IWCreateImage('Nature_files/Creme_frame3_01.png'),IWCreateImage('Nature_files/Creme_frame3_02.png'),IWCreateImage('Nature_files/Creme_frame3_03.png'),IWCreateImage('Nature_files/Creme_frame3_06.png'),IWCreateImage('Nature_files/Creme_frame3_09.png'),IWCreateImage('Nature_files/Creme_frame3_08.png'),IWCreateImage('Nature_files/Creme_frame3_07.png'),IWCreateImage('Nature_files/Creme_frame3_04.png')],null,0,1.000000,10.000000,10.000000,9.000000,10.000000,10.000000,10.000000,9.000000,10.000000,100.000000,150.000000,100.000000,150.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Nature_files/NatureMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id3');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
