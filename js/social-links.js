function socialSelector(social) {
  const OS = getMobileOperatingSystem();
  if (OS == "iOS") {
    if (social == "fb") {
      setTimeout(function () {
        window.location = "https://itunes.apple.com/ar/app/facebook/id284882215?mt=8";
      }, 25);
      window.location = "fb://profile/170668123303322";
    } else {
      setTimeout(function () {
        window.location = "https://itunes.apple.com/ar/app/instagram/id389801252?mt=8";
      }, 25);
      window.location = "instagram://user?username=volareindumentaria";
    }

  } else if (OS == "Android") {
    if (social == "fb") {
      setTimeout(function () {
        window.location = "https://play.google.com/store/apps/details?id=com.facebook.katana&hl=es_419";
      }, 1000);
      window.location = "fb://page/170668123303322";
    } else {
      setTimeout(function () {
        window.location = "https://play.google.com/store/apps/details?id=com.instagram.android&hl=es_419";
      }, 1000);
      window.location = "intent://instagram.com/_u/volareindumentaria/#Intent;package=com.instagram.android;scheme=https;end";
    }

  } else {
    if (social == 'fb') {
      window.open("https://www.facebook.com/Volare-Indumentaria-Para-Entrenar-170668123303322/");
    } else {
      window.open("https://www.instagram.com/volareindumentaria/");
    }
  }
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }
  if (/android/i.test(userAgent))
    return "Android";
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
    return "iOS";

  return "unknown";
}