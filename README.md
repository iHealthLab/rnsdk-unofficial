# iHealthLibrary_ReactNative

## Changelog

###BG1

1. (iOS)Removed Event_Device_Connected erroneous event immediately after Event_Scan_Device (清泉)
1. (iOS)Added volume to max on Event_Scan_Device (BG1 inserted) (github.com/jackkav)
1. Removed Examples and Documents from npm published package to cut down bundle size (github.com/jackkav)


## Install  
```
 npm install @ihealth/ihealthlibrary-react-native  
```


## Configure module for Android
```
1. android/settings.gradle    

	include ':ihealthlibrary-react-native'
	project(':ihealthlibrary-react-native').projectDir = new File(rootProject.projectDir,'../node_modules/@ihealth/ihealthlibrary-react-native/android')

2. android/app/build.gradle
	compile project(':ihealthlibrary-react-native')

3. register module (in MainActivity.java)    
	protected List<ReactPackage> getPackages() {  
		return Arrays.<ReactPackage>asList(
		   new MainReactPackage(),
		   new iHealthDeviceManagerPackage()       
	 	);  
	}  

4. configuration of location permission(in AndroidManifest.xml)

<!-- Need ACCESS_COARSE_LOCATION or ACCESS_FINE_LOCATION permission in Android API 23+ -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

```



## Configure module for iOS
```
1. Open your iOS project, add node_modules/@ihealth/ihealthlibrary-react-native/ios/ReactNativeIOSLibrary.xcodeproj to libraries

2. Under 'Build Phases' --  'Link Binary With Libraries', add libReactNativeIOSLibrary.a

```


## Import module
```
import {
  iHealthDeviceManagerModule,
  BP5Module,
  AM4Module
} from '@ihealth/ihealthlibrary-react-native'
```

## Work Flow
```
1. Use iHealthDeviceManagerModule to scan device, connect device, monitor connection status.

2. Use devieModule (for example AM3SModule) to operate device function.

```


## Demo Api
```
	Discovery:

	//Add listener for event
	DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Scan_Device, function (e: Event) {
            // handle event.
            console.log('~~~' + JSON.stringify(e))
        });

    //Call the api
	iHealthDeviceManagerModule.startDiscovery(iHealthDeviceManagerModule.BP5)  
```
```
	Connect:

	//Add listener for event
	DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Connected, function (e: Event) {
            // handle event.
            console.log('~~~' + JSON.stringify(e))
        });
    DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Connect_Failed, function (e: Event) {
            // handle event.
            console.log('~~~' + JSON.stringify(e))
        });

    //Call the api
	iHealthDeviceManagerModule.connectDevice(mac,type)  
```
```
	Start/Stop Measure:

	//Add listener for event
	DeviceEventEmitter.addListener(BP5Module.Event_Notify, function (e: Event) {
            // handle event.
            console.log('~~~' + JSON.stringify(e))
        });

    //Call the api
	 BP5Module.startMeasure(mac)  
	 BP5Module.stopMeasure(mac)
```

## Example

[Click this link](https://github.com/iHealthDeviceLabs/iHealthLibrary_ReactNative/tree/master/Example)
