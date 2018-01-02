/**
 * Created by lixuesong on 11/11/2016.
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.PO3Module

/**
 * @module PO3Module
 */
module.exports = {
    /**
     * Notify event type for PO3
     */
    Event_Notify: RCTModule.Event_Notify,

    /**
     * Get the PO3 battery status.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:PO3Module.Event_Notify PO3Module.Event_Notify("event_notify_po3")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_BATTERY_PO POProfileModule.ACTION_BATTERY_PO("battery_po")}</td></tr>
     * <tr><td>POProfileModule.BATTERY_PO</td><td>Battery Status, e.g. 90</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:PO3Module.Event_Notify PO3Module.Event_Notify("event_notify_po3")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_ERROR_PO POProfileModule.ACTION_ERROR_PO("error_po")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(PO3Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getBattery: function (mac) {
        RCTModule.getBattery(mac)
    },

    /**
     * Start real-time measurement.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If the measurement start, following event will be emit:<br/>
     * {@link module:PO3Module.Event_Notify PO3Module.Event_Notify("event_notify_po3")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_LIVEDA_PO POProfileModule.ACTION_LIVEDA_PO("liveData_po")}</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_WAVE_PO POProfileModule.ACTION_LIVEDA_PO("pulseWave")}</td><td>Pulse Wave, e.g. [2415,2371,2279]</td></tr>
     * <tr><td>{@link module:POProfileModule.PI_PO POProfileModule.ACTION_LIVEDA_PO("pi")}</td><td>PI, e.g. 0.03999999910593033</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_STRENGTH_PO POProfileModule.ACTION_LIVEDA_PO("pulsestrength")}</td><td>Pulse Strength, e.g. 6</td><</tr>
     * <tr><td>{@link module:POProfileModule.BLOOD_OXYGEN_PO POProfileModule.ACTION_LIVEDA_PO("bloodoxygen")}</td><td>Blood Oxygen, e.g. 70</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_RATE_PO POProfileModule.ACTION_LIVEDA_PO("heartrate")}</td><td>Heart Rate, e.g. 30</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If the measurement end, following event will be emit:<br/>
     * {@link module:PO3Module.Event_Notify PO3Module.Event_Notify("event_notify_po3")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_RESULTDATA_PO POProfileModule.ACTION_RESULTDATA_PO("resultData_po")(iOS doesn't support this key)}</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_WAVE_PO POProfileModule.ACTION_LIVEDA_PO("pulseWave")}</td><td>Pulse Wave, e.g. [0,0,0]</td></tr>
     * <tr><td>{@link module:POProfileModule.DATAID POProfileModule.DATAID("dataID")}</td><td>The data id, e.g. 67FFC7A454148723718144A604D4152B</td></tr>
     * <tr><td>{@link module:POProfileModule.PI_PO POProfileModule.ACTION_LIVEDA_PO("pi")}</td><td>PI, e.g. 0.0430000014603138</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_STRENGTH_PO POProfileModule.ACTION_LIVEDA_PO("pulsestrength")}</td><td>Pulse Strength, e.g. 0</td><</tr>
     * <tr><td>{@link module:POProfileModule.BLOOD_OXYGEN_PO POProfileModule.ACTION_LIVEDA_PO("bloodoxygen")}</td><td>Blood Oxygen, e.g. 98</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_RATE_PO POProfileModule.ACTION_LIVEDA_PO("heartrate")}</td><td>Heart Rate, e.g. 65</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:PO3Module.Event_Notify PO3Module.Event_Notify("event_notify_po3")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_ERROR_PO PO3Module.ACTION_ERROR_PO("error_po")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(PO3Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    startMeasure: function (mac) {
        RCTModule.startMeasure(mac)
    },

    /**
     * Get the value of historical data in the PO3.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:PO3Module.Event_Notify PO3Module.Event_Notify("event_notify_po3")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_OFFLINEDATA_PO POProfileModule.ACTION_OFFLINEDATA_PO("offlineData_po")}</td></tr>
     * <tr><td>{@link module:POProfileModule.OFFLINEDATA_PO POProfileModule.OFFLINEDATA_PO("offlineData")}</td><td>Offline Data Array.</td></tr>
     * <tr><td>{@link module:POProfileModule.DATAID POProfileModule.DATAID("dataID")}</td><td>Data Id for each element in the array, e.g. 67FFC7A454148723718144A604D4152B</td></tr>
     * <tr><td>{@link module:POProfileModule.MEASURE_DATE_PO POProfileModule.MEASURE_DATE_PO("measureDate")}</td><td>The measure data.</td></tr>
     * <tr><td>{@link module:POProfileModule.BLOOD_OXYGEN_PO POProfileModule.BLOOD_OXYGEN_PO("bloodoxygen")}</td><td>Blood Oxygen for each element in the array, e.g. 98</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_RATE_PO POProfileModule.PULSE_RATE_PO("heartrate")}</td><td>Heart Rate for each element in the array, e.g. 65</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_WAVE_PO POProfileModule.PULSE_WAVE_PO("pulseWave")}</td><td>Pulse Wave for each element in the array, e.g. [0,0,0]</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:PO3Module.Event_Notify PO3Module.Event_Notify("event_notify_po3")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_ERROR_PO POProfileModule.ACTION_ERROR_PO("error_po")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(PO3Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getHistoryData: function (mac) {
        RCTModule.getHistoryData(mac)
    },
    /**
     * Disconnect the PO3
     * @param mac The mac address for blood pressure monitor
     */
    disconnect: function (mac) {
        RCTModule.disconnect(mac)
    },

    /**
     * Get all connected PO3 device
     *
     * e.g. {"devices":["A4D5783FB00C","A4D5783FFE58"]}
     */
    getAllConnectedDevices: function () {
        RCTModule.getAllConnectedDevices()
    },
}