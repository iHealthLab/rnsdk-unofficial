/**
 * Created by lixuesong on 11/11/2016.
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.HS4SModule

/**
 * @module HS4SModule
 */
module.exports = {
    /**
     * Notify event type for HS4S
     */
    Event_Notify: RCTModule.Event_Notify,

    /**
     * Start real-time measurement.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If the measurement start, following event will be emit:<br/>
     * {@link module:HS4SModule.Event_Notify HS4SModule.Event_Notify("event_notify_hs4s")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HSProfileModule.ACTION_LIVEDATA_HS HSProfileModule.ACTION_LIVEDATA_HS("liveData_hs")}</td></tr>
     * <tr><td>{@link module:HSProfileModule.LIVEDATA_HS HSProfileModule.LIVEDATA_HS("value")}</td><td>The key of live data weight, e.g. 62.79999923706055</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If the measurement end, following event will be emit:<br/>
     * {@link module:HS4SModule.Event_Notify HS4SModule.Event_Notify("event_notify_hs4s")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HSProfileModule.ACTION_ONLINE_RESULT_HS HSProfileModule.ACTION_ONLINE_RESULT_HS("online_result_hs")}</td></tr>
     * <tr><td>{@link module:HSProfileModule.DATAID HSProfileModule.DATAID("dataID")}</td><td>The data id.<br/>Example: 67FFC7A454148723718144A604D4152B</td></tr>
     * <tr><td>{@link module:HSProfileModule.WEIGHT_HS HSProfileModule.WEIGHT_HS("value")}</td><td>The weight result.<br/>Value range: 0.0-150.0</td></tr>
     * <tr><td>{@link module:HSProfileModule.FAT_HS HSProfileModule.FAT_HS("fat")}</td><td>The body fat rate.<br/>Value range: 0.0-100.0</td></tr>
     * <tr><td>{@link module:HSProfileModule.WATER_HS HSProfileModule.WATER_HS("water")}</td><td>The body water rate.<br/>Value range: 0.0-100.0</td></tr>
     * <tr><td>{@link module:HSProfileModule.MUSCLE_HS HSProfileModule.MUSCLE_HS("muscle")}</td><td>The body muscle rate.<br/>Value range: 0.0-100.0</td></tr>
     * <tr><td>{@link module:HSProfileModule.SKELETON_HS HSProfileModule.SKELETON_HS("skeleton")}</td><td>The bone mass.<br/>Value range: 0.0-25.5(0xFF/10.0)</td></tr>
     * <tr><td>{@link module:HSProfileModule.FATELEVEL_HS HSProfileModule.FATELEVEL_HS("fatelevel")}</td><td>The fat level.<br/>Value range: 0-255(0xFF)</td></tr>
     * <tr><td>{@link module:HSProfileModule.DCI_HS HSProfileModule.DCI_HS("DCI")}</td><td>The DCI data.<br/>Value range: 0-65535(0xFFFF)</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:HSProfileModule.Event_Notify HSProfileModule.Event_Notify("event_notify_hs4s")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HSProfileModule.ACTION_ERROR_HS HSProfileModule.ACTION_ERROR_HS("error_hs")}</td></tr>
     * <tr><td>{@link module:HSProfileModule.ERROR_NUM_HS HSProfileModule.ERROR_NUM_HS("error")}</td><td>
     * {@link module:HSProfileModule.ERROR_ID_ILLEGAL_ARGUMENT HSProfileModule.ERROR_ID_ILLEGAL_ARGUMENT} indicates parameter error("400")<br/>
     * {@link module:HSProfileModule.ERROR_ID_WIFI_DISABLED HSProfileModule.ERROR_ID_WIFI_DISABLED} indicates wifi is disabled("500")
     * </td></tr>
     * <tr><td>{@link module:HSProfileModule.ERROR_DESCRIPTION_HS HSProfileModule.ERROR_DESCRIPTION_HS("description")}</td><td>The error description data.<br/>Example: getOfflineData() parameter userPstCode should be in the range [0, 19].</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(HSProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {string} unit Device's unit
     * @param {string} userId user id
     */
    measureOnline: function (mac, unit, userId) {
        RCTModule.measureOnline(mac, unit, userId)
    },

    /**
     * Get the value of historical data in the HS4S.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:HS4SModule.Event_Notify HS4SModule.Event_Notify("event_notify_hs4s")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HSProfileModule.ACTION_HISTORICAL_DATA_HS HSProfileModule.ACTION_HISTORICAL_DATA_HS("historicaldata_hs")}</td></tr>
     * <tr><td>{@link module:HSProfileModule.HISTORDATA__HS HSProfileModule.HISTORDATA__HS("historyData")}</td><td>
     * {@link module:HSProfileModule.DATAID HSProfileModule.DATAID("dataID")} The data id. Example: 67FFC7A454148723718144A604D4152B<br/>
     * {@link module:HSProfileModule.MEASUREMENT_DATE_HS HSProfileModule.MEASUREMENT_DATE_HS("date")} The measure date. Value format: yyyy-MM-dd HH:mm:ss<br/>
     * {@link module:HSProfileModule.WEIGHT_HS HSProfileModule.WEIGHT_HS("value")} The key of the weight result. The value's unit is kg. Value range: 0.0-150.0<br/>
     * {@link module:HSProfileModule.FAT_HS HSProfileModule.FAT_HS("fat")} The body fat rate. Value range: 0.0-100.0<br/>
     * {@link module:HSProfileModule.WATER_HS HSProfileModule.WATER_HS("water")} The body water rate. Value range: 0.0-100.0<br/>
     * {@link module:HSProfileModule.MUSCLE_HS HSProfileModule.MUSCLE_HS("muscle")} The body muscle rate. Value range: 0.0-100.0<br/>
     * {@link module:HSProfileModule.SKELETON_HS HSProfileModule.SKELETON_HS("skeleton")} The bone mass. Value range: 0.0-25.5(0xFF/10.0)<br/>
     * {@link module:HSProfileModule.FATELEVEL_HS HSProfileModule.FATELEVEL_HS("fatelevel")} The fat level. Value range: 0-255(0xFF)<br/>
     * {@link module:HSProfileModule.DCI_HS HSProfileModule.DCI_HS("DCI")} he DCI data. Value range: 0-65535(0xFFFF)
     * </td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:HSProfileModule.Event_Notify HSProfileModule.Event_Notify("event_notify_hs4s")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HSProfileModule.ACTION_ERROR_HS HSProfileModule.ACTION_ERROR_HS("error_hs")}</td></tr>
     * <tr><td>{@link module:HSProfileModule.ERROR_NUM_HS HSProfileModule.ERROR_NUM_HS("error")}</td><td>
     * {@link module:HSProfileModule.ERROR_ID_ILLEGAL_ARGUMENT HSProfileModule.ERROR_ID_ILLEGAL_ARGUMENT} indicates parameter error("400")<br/>
     * {@link module:HSProfileModule.ERROR_ID_WIFI_DISABLED HSProfileModule.ERROR_ID_WIFI_DISABLED} indicates wifi is disabled("500")
     * </td></tr>
     * <tr><td>{@link module:HSProfileModule.ERROR_DESCRIPTION_HS HSProfileModule.ERROR_DESCRIPTION_HS("description")}</td><td>The error description data.<br/>Example: getOfflineData() parameter userPstCode should be in the range [0, 19].</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(HSProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getOfflineData: function (mac) {
        RCTModule.getOfflineData(mac)
    },
    /**
     * Disconnect the HS4S
     * @param mac The mac address for blood pressure monitor
     */
    disconnect: function (mac) {
        RCTModule.disconnect(mac)
    },

    /**
     * Get all connected HS4S device
     *
     * e.g. {"devices":["A4D5783FB00C","A4D5783FFE58"]}
     */
    getAllConnectedDevices: function () {
        RCTModule.getAllConnectedDevices()
    },
}