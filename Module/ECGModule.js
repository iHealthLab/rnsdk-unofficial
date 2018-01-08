/**
 * 
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.ECGModule

console.log(`RCTModule = ${JSON.stringify(RCTModule)}`);

/**
 * @module ECGModule
 */
module.exports = {
    /**
     * Notify event type for ECG
     */
    Event_Notify: RCTModule.Event_Notify,

    
    /**
     * SyncTime.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:ECGModule.Event_Notify ECGModule.Event_Notify("event_notify_ecg")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:ECGProfileModule.ACTION_SYSTIME ECGProfileModule.ACTION_SYSTIME("ACTION_SYSTIME")}</td></tr>
     * <tr><td>{@link module:ECGProfileModule.ACTION_SYSTIME ECGProfileModule.ACTION_SYSTIME("ACTION_SYSTIME")}</td><td>
     * </table>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(ECGProfileModule.Event_Notify, function (e: Event){});
     */
    sysTime: function (mac) {
        RCTModule.sysTime(mac)
    },

    /**
     * startMeasure
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:ECGModule.Event_Notify ECGModule.Event_Notify("event_notify_ecg")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_MEASURE_ECG HS6ProfileModule.ACTION_MEASURE_ECG("ACTION_MEASURE_ECG")}</td></tr>
     * <tr><td>{@link module:ECGProfileModule.ACTION_MEASURE_ECG ECGProfileModule.ACTION_MEASURE_ECG("ACTION_MEASURE_ECG")}</td><td>
     * {@link module:ECGProfileModule.ACTION_MEASURE_WAVEData HS6ProfileModule.ACTION_MEASURE_WAVEData("ACTION_MEASURE_WAVEData")} <br/>
     * {@link module:ECGProfileModule.ACTION_MEASURE_ECGPulse ECGProfileModule.ACTION_MEASURE_ECGPulse("ACTION_MEASURE_ECGPulse")} <br/>
     * </td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:ECGProfileModule.Event_Notify ECGProfileModule.Event_Notify("event_notify_ecg")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:ECGProfileModule.ACTION_ERROR_ECG ECGProfileModule.ACTION_ERROR_ECG("ACTION_ERROR_ECG")}</td></tr>
     * <tr><td>{@link module:ECGProfileModule.ERROR_NUM_ECG ECGProfileModule.ERROR_NUM_ECG("ERROR_NUM_ECG")}</td><td>The error code: 1 user information upload error; 2 bind error.</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(ECGProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     */
    startMeasure: function (mac) {
        RCTModule.startMeasure(mac)
    },
    /**
     * getBattery
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:ECGModule.Event_Notify ECGModule.Event_Notify("event_notify_ecg")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:ECGProfileModule.ACTION_BATTERY_ECG ECGProfileModule.ACTION_BATTERY_ECG("ACTION_BATTERY_ECG")}</td></tr>
     * <tr><td>{@link module:ECGProfileModule.BATTERY_ECG ECGProfileModule.BATTERY_ECG("BATTERY_ECG")}</td><td></td></tr>
     * </tbody>
     * </table>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(ECGProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} serialNumber the mac address of scale
     */
    getBattery: function (mac) {
        RCTModule.getBattery(mac)
    },
    /**
     * stopMeasure
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:ECGModule.Event_Notify ECGModule.Event_Notify("event_notify_ecg")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:ECGProfileModule.ACTION_STOPMEASURE_ECG ECGProfileModule.ACTION_STOPMEASURE_ECG("ACTION_STOPMEASURE_ECG")}</td></tr></td></tr>
     * </tbody>
     * </table>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(ECGProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     */
    stopMeasure: function (mac) {
        RCTModule.stopMeasure(mac)
    },
      /**
     * Get all connected ECG device
     *
     * e.g. {"devices":["A4D5783FB00C","A4D5783FFE58"]}
     */

    getAllConnectedDevices: function () {
        RCTModule.getAllConnectedDevices()
    },
   
}