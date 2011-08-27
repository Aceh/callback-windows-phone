
/****************************** PHONEGAP-BASE ******************************/

/**
 * This represents the PhoneGap API itself.
 * It is dramatically simplified from other implementations as I couldn't get the queued processing of constructors working
 */

PhoneGap = {
};

PhoneGap.exec = function(nativeMethodAndArgs) 
{
   window.external.Notify(nativeMethodAndArgs);
};

PhoneGap.available = false;

function SetDeviceProperties(platform, version, name, uuid, gap) 
{
  device.platform = platform;
  device.version = version;
  device.name = name;
  device.uuid = uuid;
  device.gap = gap;

  // in theory, everything is now set up and working so this is where we should fire the deviceready event
  // unfortunately IE7 mobile doesn't seem to support a way of dynamically raising events
  PhoneGap.available = true;
}

// Load device info
//PhoneGap.exec("Device.GetAll;SetDeviceProperties");
