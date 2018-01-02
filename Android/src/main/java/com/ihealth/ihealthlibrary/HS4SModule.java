package com.ihealth.ihealthlibrary;

import android.text.TextUtils;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.ihealth.communication.control.Hs4sControl;
import com.ihealth.communication.manager.iHealthDevicesManager;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lixuesong on 16/10/20.
 */

public class HS4SModule extends iHealthBaseModule {
    private static final String modelName = "HS4SModule";
    private static final String TAG = "HS4SModule";

    private static final String EVENT_NOTIFY = "event_notify_hs4s";

    public HS4SModule(ReactApplicationContext reactContext) {
        super(TAG, reactContext);
    }

    @Override
    public String getName() {
        return modelName;
    }

    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> map = new HashMap<>();
        map.put("Event_Notify", EVENT_NOTIFY);
        return map;
    }

    private static Hs4sControl getControl(String mac) {
        return iHealthDevicesManager.getInstance().getHs4sControl(mac);
    }

    @ReactMethod
    public void getOfflineData(String mac) {
        Hs4sControl control = getControl(mac);
        if (control != null) {
            control.getOfflineData();
        } else {
            Log.e(TAG, "Can not find HS4S Control mac:" + mac);
        }
    }

    @ReactMethod
    public void measureOnline(String mac, int unit, int userId) {
        Hs4sControl control = getControl(mac);
        if (control != null) {
            control.measureOnline(unit, userId);
        } else {
            Log.e(TAG, "Can not find HS4S Control mac:" + mac);
        }
    }

    @ReactMethod
    public void disconnect(String mac) {
        Hs4sControl hs4sControl = getControl(mac);
        if (hs4sControl != null) {
            hs4sControl.disconnect();
        } else {
            Log.e(TAG, "Can not find HS4S Control mac:" + mac);
        }
    }

    @Override
    public void handleNotify(String mac, String deviceType, String action, String message) {
        WritableMap params = Arguments.createMap();
        params.putString("action", action);
        params.putString("mac", mac);
        params.putString("type", deviceType);
        if (!TextUtils.isEmpty(message)) {
            Utils.jsonToMap(message, params);
        }
        sendEvent(EVENT_NOTIFY, params);
    }

    @ReactMethod
    public void getAllConnectedDevices() {
        List<String> devices = iHealthDevicesManager.getInstance().getHs4sDevices();
        WritableMap params = Arguments.createMap();
        if (devices.size() > 0) {
            WritableArray array = Arguments.createArray();
            for (String device : devices) {
                array.pushString(device);
            }
            params.putArray("devices", array);
        }
        sendEvent(EVENT_NOTIFY, params);
    }
}
