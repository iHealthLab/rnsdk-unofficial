package com.ihealth.ihealthlibrary;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by jing on 16/10/20.
 */

public class iHealthDeviceManagerPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new iHealthDeviceManagerModule(reactContext));
        modules.add(new AM3SModule(reactContext));
        modules.add(new AM4Module(reactContext));
        modules.add(new AMProfileModule(reactContext));
        modules.add(new BP5Module(reactContext));
        modules.add(new BP3LModule(reactContext));
        modules.add(new BP550BTModule(reactContext));
        modules.add(new BP7SModule(reactContext));
        modules.add(new BPProfileModule(reactContext));
        modules.add(new POProfileModule(reactContext));
        modules.add(new PO3Module(reactContext));
        modules.add(new HS4SModule(reactContext));
        modules.add(new HSProfileModule(reactContext));
        modules.add(new BG1Module(reactContext));
        modules.add(new BG1ProfileModule(reactContext));
        modules.add(new BG5Module(reactContext));
        modules.add(new BGProfileModule(reactContext));
        modules.add(new HS6Module(reactContext));
        modules.add(new HS6ProfileModule(reactContext));
        modules.add(new BTMModule(reactContext));
        modules.add(new BTMProfileModule(reactContext));
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
