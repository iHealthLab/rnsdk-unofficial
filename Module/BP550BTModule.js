/**
 * Created by zhangxu on 16/11/20.
 */
/**
 * Created by zhangxu on 16/11/14.
 */
'use strict';


var { NativeModules } = require('react-native');

var RCTModule = NativeModules.BP550BTModule;

/**
 * @module BP550BTModule
 */

module.exports = {

    /**
     * Notify event type for BP550BT.
     */
    Event_Notify: RCTModule.Event_Notify,

    /**
     * Get the BP550BT device's battery.
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP550BTModule.Event_Notify BP550BTModule.Event_Notify("event_notify_bp550bt")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_BATTERY_BP BPProfileModule.ACTION_BATTERY_BP("battery_bp")}</td></tr>
     *          <tr><td>{@link module:BPProfileModule.BATTERY_BP BPProfileModule.BATTERY_BP("battery")}</td><td>Battery status.<br/> e.g. 90</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BP550BTModule.Event_Notify BP550BTModule.Event_Notify("event_notify_bp550bt")}</br>
     *         The key and value will be as below:
     *         <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *             <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *             <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ERROR_BP BPProfileModule.ACTION_ERROR_BP("error_bp")}</td></tr>
     *             <tr><td>{@link module:BPProfileModule.ERROR_NUM_BP BPProfileModule.ERROR_NUM_BP("error")}</td><td>the error of Bp device.<br/> e.g. 400</td></tr>
     *             <tr><td>{@link module:BPProfileModule.ERROR_DESCRIPTION_BP BPProfileModule.ERROR_DESCRIPTION_BP("description")}</td><td>the description of error.<br/> e.g. the argument of method is illegal</td></tr>
     *         </table>
     *     </li>
     *
     *     <li>
     *         <b>Attention</b>, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     *         <b>DeviceEventEmitter.addListener(BP550BTModule.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getBattery: function (mac) {

        if (RCTModule != null) {
            RCTModule.getBattery(mac);
        }else {
            console.log('~~~~~ RCTModule is null')
        }

    },
    /**
     * get offline data number.
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP550BTModule.Event_Notify BP550BTModule.Event_Notify("event_notify_bp550bt")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_HISTORICAL_NUM_BP BPProfileModule.ACTION_HISTORICAL_NUM_BP("offlinenum")}</td></tr>
     *          <tr><td>{@link module:BPProfileModule.HISTORICAL_NUM_BP BPProfileModule.HISTORICAL_NUM_BP("num")}</td><td>Offline data number. <br/> e.g. 2</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BP550BTModule.Event_Notify BP550BTModule.Event_Notify("event_notify_bp550bt")}</br>
     *         The key and value will be as below:
     *         <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *             <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *             <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ERROR_BP BPProfileModule.ACTION_ERROR_BP("error_bp")}</td></tr>
     *             <tr><td>{@link module:BPProfileModule.ERROR_NUM_BP BPProfileModule.ERROR_NUM_BP("error")}</td><td>the error of Bp device.<br/> e.g. 400</td></tr>
     *             <tr><td>{@link module:BPProfileModule.ERROR_DESCRIPTION_BP BPProfileModule.ERROR_DESCRIPTION_BP("description")}</td><td>the description of error.<br/> e.g. the argument of method is illegal</td></tr>
     *         </table>
     *     </li>
     *
     *     <li>
     *         <b>Attention</b>, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     *         <b>DeviceEventEmitter.addListener(BP550BTModule.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getOffLineNum:function (mac) {
        if (RCTModule != null) {
            RCTModule.getOffLineNum(mac);
        }else {
            console.log('~~~~~ RCTModule is null')
        }
    },
    /**
     * get offline data number.
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP550BTModule.Event_Notify BP550BTModule.Event_Notify("event_notify_bp550bt")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_HISTORICAL_DATA_BP BPProfileModule.ACTION_HISTORICAL_DATA_BP("historicaldata_bp")}</td></tr>
     *          <tr><td>{@link module:BPProfileModule.HISTORICAL_DATA_BP BPProfileModule.HISTORICAL_DATA_BP("data")}</td><td>Array of history Data. <br/> e.g. {"data":[{"time":"2016-12-7 0:11:00","sys":136,"dia":76,"heartRate":64,"arrhythmia":0,"hsd":false,"dataID":"6D7756186EF4356F3C58D3933CD2437A"}]} </td></tr>
     *          <tr><td>{@link module:BPProfileModule.MEASUREMENT_DATE_BP BPProfileModule.MEASUREMENT_DATE_BP("time")}</td><td>Measuring time. <br/> e.g. 2016-12-6 22:27:00</td></tr>
     *          <tr><td>{@link module:BPProfileModule.HIGH_BLOOD_PRESSURE_BP BPProfileModule.HIGH_BLOOD_PRESSURE_BP("sys")}</td><td>The high pressure for blood pressure. <br/> e.g. 127</td></tr>
     *          <tr><td>{@link module:BPProfileModule.LOW_BLOOD_PRESSURE_BP BPProfileModule.LOW_BLOOD_PRESSURE_BP("dia")}</td><td>The low pressure for blood pressure. <br/> e.g. 80</td></tr>
     *          <tr><td>{@link module:BPProfileModule.PULSE_BP BPProfileModule.PULSE_BP("heartRate")}</td><td>Blood pressure pulse.<br/> e.g. 77</td></tr>
     *          <tr><td>{@link module:BPProfileModule.MEASUREMENT_AHR_BP BPProfileModule.MEASUREMENT_AHR_BP("arrhythmia")}</td><td>The key of measurement is arrhythmia or not. <br/> e.g. true</td></tr>
     *          <tr><td>{@link module:BPProfileModule.MEASUREMENT_HSD_BP BPProfileModule.MEASUREMENT_HSD_BP("hsd")}(ios hsd 0:false 1:true)</td><td>The key of hemodynamic stability diagnosis, that Determines.<br/> e.g. false</td></tr>
     *          <tr><td>{@link module:BPProfileModule.DATAID BPProfileModule.DATAID("dataID")}</td><td>return blood pressure data id. <br/> e.g. 9F78D808BAB380CC8B8DA5F2DECA24F3</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BP550BTModule.Event_Notify BP550BTModule.Event_Notify("event_notify_bp550bt")}</br>
     *         The key and value will be as below:
     *         <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *             <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *             <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ERROR_BP BPProfileModule.ACTION_ERROR_BP("error_bp")}</td></tr>
     *             <tr><td>{@link module:BPProfileModule.ERROR_NUM_BP BPProfileModule.ERROR_NUM_BP("error")}</td><td>the error of Bp device.<br/> e.g. 400</td></tr>
     *             <tr><td>{@link module:BPProfileModule.ERROR_DESCRIPTION_BP BPProfileModule.ERROR_DESCRIPTION_BP("description")}</td><td>the description of error.<br/> e.g. the argument of method is illegal</td></tr>
     *         </table>
     *     </li>
     *
     *     <li>
     *         <b>Attention</b>, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     *         <b>DeviceEventEmitter.addListener(BP550BTModule.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getOffLineData:function (mac) {
        if (RCTModule != null) {
            RCTModule.getOffLineData(mac);
        }else {
            console.log('~~~~~ RCTModule is null')
        }
    },

    /**
     * Get the BP7S device's functionInfo.
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP550BTModule.Event_Notify BP550BTModule.Event_Notify("event_notify_bp550bt")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_FUNCTION_INFORMATION_BP BPProfileModule.ACTION_FUNCTION_INFORMATION_BP("function_info_bp")}</td></tr>
     *          <tr><td>{@link module:BPProfileModule.FUNCTION_IS_UPAIR_MEASURE BPProfileModule.FUNCTION_IS_UPAIR_MEASURE("upAirMeasureFlg")}</td><td>The way to measure is up air or low air, up is "true", low is "false".<br/> e.g. false</td></tr>
     *          <tr><td>{@link module:BPProfileModule.FUNCTION_IS_ARM_MEASURE BPProfileModule.FUNCTION_IS_ARM_MEASURE("armMeasureFlg")}</td><td>device is arm or wrist, arm is "true", wrist is "false".<br/> e.g. true</td></tr>
     *          <tr><td>{@link module:BPProfileModule.FUNCTION_HAVE_ANGLE_SENSOR BPProfileModule.FUNCTION_HAVE_ANGLE_SENSOR("haveAngleSensor")}</td><td>device has angle sensor or not, have is "true", otherwise is "false"device has angle sensor or not, have is "true", otherwise is "false".<br/> e.g. false</td></tr>
     *          <tr><td>{@link module:BPProfileModule.FUNCTION_HAVE_OFFLINE BPProfileModule.FUNCTION_HAVE_OFFLINE("haveOffline")}</td><td>device has offline-measure function or not, have is "true", otherwise is "false".<br/> e.g. true</td></tr>
     *          <tr><td>{@link module:BPProfileModule.FUNCTION_HAVE_HSD BPProfileModule.FUNCTION_HAVE_HSD("haveHSD")}</td><td>device had HSD function or not, have is "true", otherwise is "false".<br/> e.g. false</td></tr>
     *          <tr><td>{@link module:BPProfileModule.FUNCTION_HAVE_ANGLE_SETTING BPProfileModule.FUNCTION_HAVE_ANGLE_SETTING("haveAngleSet")}</td><td>device has angle setting function or not, have is "true", otherwise is "false".<br/> e.g. true</td></tr>
     *          <tr><td>{@link module:BPProfileModule.FUNCTION_IS_MULTI_UPLOAD BPProfileModule.FUNCTION_IS_MULTI_UPLOAD("mutableUpload")}</td><td>device is multi upload or single upload, multi is "true", single is "false".<br/> e.g. true</td></tr>
     *          <tr><td>{@link module:BPProfileModule.FUNCTION_HAVE_SELF_UPDATE BPProfileModule.FUNCTION_HAVE_SELF_UPDATE("selfUpdate")}</td><td>device had self update function or not, have is "true", otherwise is "false".<br/> e.g. false</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BP550BTModule.Event_Notify BP550BTModule.Event_Notify("event_notify_bp550bt")}</br>
     *         The key and value will be as below:
     *         <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *             <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *             <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ERROR_BP BPProfileModule.ACTION_ERROR_BP("error_bp")}</td></tr>
     *             <tr><td>{@link module:BPProfileModule.ERROR_NUM_BP BPProfileModule.ERROR_NUM_BP("error")}</td><td>the error of Bp device.<br/> e.g. 400</td></tr>
     *             <tr><td>{@link module:BPProfileModule.ERROR_DESCRIPTION_BP BPProfileModule.ERROR_DESCRIPTION_BP("description")}</td><td>the description of error.<br/> e.g. the argument of method is illegal</td></tr>
     *         </table>
     *     </li>
     *
     *     <li>
     *         <b>Attention</b>, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     *         <b>DeviceEventEmitter.addListener(BP550BTModule.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getFunctionInfo:function (mac) {
        if (RCTModule != null) {
            RCTModule.getFunctionInfo(mac);
        }else {
            console.log('~~~~~ RCTModule is null')
        }
    },

    /**
     * Disconnect the KN-550BT
     *
     * @param {string} mac Device's mac address
     */
    disconnect: function (mac) {

        if (RCTModule != null) {
            RCTModule.disconnect(mac);
        }else {
            console.log('~~~~~ RCTModule is null')
        }
    },

    /**
     * Get all connected BP550BT device
     *
     * e.g. {"devices":["A4D5783FB00C","A4D5783FFE58"]}
     */
    getAllConnectedDevices: function () {
        RCTModule.getAllConnectedDevices()
    },


}

