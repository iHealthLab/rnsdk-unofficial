/**
 * Created by lixuesong on 11/11/2016.
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.BTMModule

/**
 * @module BTMModule
 */
module.exports = {
    /**
     * Notify event type for BTM
     */
    Event_Notify: RCTModule.Event_Notify,

    /**
     * Get the BTM battery status.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_BTM_BATTERY BTMProfileModule.ACTION_BTM_BATTERY("battery_btm")}</td></tr>
     * <tr><td>BTMProfileModule.BTM_BATTERY</td><td>Value range: 0 Low power,1 Not Low power</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_ERROR_BTM BTMProfileModule.ACTION_ERROR_BTM("action_error_btm")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_NUM_BTM BTMProfileModule.ERROR_NUM_BTM("error_num")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_DESCRIPTION_BTM BTMProfileModule.ERROR_DESCRIPTION_BTM("description")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BTMModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getBattery: function (mac) {
        RCTModule.getBattery(mac)
    },

    /**
     * Get the value of historical data in the BTM.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_BTM_MEMORY BTMProfileModule.ACTION_BTM_MEMORY("memory_btm")}</td></tr>
     * <tr><td>{@link module:BTMProfileModule.MEMORY_COUNT BTMProfileModule.MEMORY_COUNT("memory_count")}</td><td>Memory count for BTM device.</td></tr>
     * <tr><td>{@link module:BTMProfileModule.BTM_TEMPERATURE_ARRAY BTMProfileModule.BTM_TEMPERATURE_ARRAY("btm_temperature_array")}</td><td>The key of the temperature array for BTM device</td></tr>
     * <tr><td>{@link module:BTMProfileModule.BTM_TEMPERATURE_TARGET BTMProfileModule.BTM_TEMPERATURE_TARGET("btm_temperature_target")}</td><td>The key of the temperature target for BTM device.</td></tr>
     * <tr><td>{@link module:BTMProfileModule.BTM_TEMPERATURE BTMProfileModule.BTM_TEMPERATURE("btm_temperature")}</td><td>The key of the temperature for BTM device</td></tr>
     * <tr><td>{@link module:BTMProfileModule.BTM_MEASURE_TIME BTMProfileModule.BTM_MEASURE_TIME("measure_time")}</td><td>The key of the time of memory data for BTM device</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_ERROR_BTM BTMProfileModule.ACTION_ERROR_BTM("action_error_btm")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_NUM_BTM BTMProfileModule.ERROR_NUM_BTM("error_num")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_DESCRIPTION_BTM BTMProfileModule.ERROR_DESCRIPTION_BTM("description")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BTMModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getMemoryData: function (mac) {
        RCTModule.getMemoryData(mac)
    },

    /**
     * Set the standby time
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set/unset successfully, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_BTM_CALLBACK BTMProfileModule.ACTION_BTM_CALLBACK("btm_callback")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_ERROR_BTM BTMProfileModule.ACTION_ERROR_BTM("action_error_btm")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_NUM_BTM BTMProfileModule.ERROR_NUM_BTM("error_num")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_DESCRIPTION_BTM BTMProfileModule.ERROR_DESCRIPTION_BTM("description")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BTMModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} hour Standby time hours<br/>
     *                 <b>Range:</b> [0, 23]
     * @param {number} minute Standby time minute<br/>
     *                 <b>Range:</b> [0, 59]
     * @param {number} second Standby time second<br/>
     *                 <b>Range:</b> [0, 59]
     */
    setStandbyTime: function (mac, hour, minute, second) {
        RCTModule.setStandbyTime(mac, hour, minute, second)
    },

    /**
     * Set the temperature unit
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set/unset successfully, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_BTM_CALLBACK BTMProfileModule.ACTION_BTM_CALLBACK("btm_callback")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_ERROR_BTM BTMProfileModule.ACTION_ERROR_BTM("action_error_btm")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_NUM_BTM BTMProfileModule.ERROR_NUM_BTM("error_num")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_DESCRIPTION_BTM BTMProfileModule.ERROR_DESCRIPTION_BTM("description")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BTMModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} unit temperature unit<br/>
     *                 <b>The unit of:</b> BtmControl.TEMPERATURE_UNIT_C or BtmControl.TEMPERATURE_UNIT_F
     */
    setTemperatureUnit: function (mac, unit) {
        RCTModule.setTemperatureUnit(mac, unit)
    },

    /**
     * Set the temperature unit
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set/unset successfully, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_BTM_CALLBACK BTMProfileModule.ACTION_BTM_CALLBACK("btm_callback")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_ERROR_BTM BTMProfileModule.ACTION_ERROR_BTM("action_error_btm")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_NUM_BTM BTMProfileModule.ERROR_NUM_BTM("error_num")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_DESCRIPTION_BTM BTMProfileModule.ERROR_DESCRIPTION_BTM("description")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BTMModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} measuring target<br/>
     *                 <b>The unit of:</b> BtmControl.MEASURING_TARGET_BODY or BtmControl.MEASURING_TARGET_OBJECT
     */
    setMeasuringTarget: function (mac, target) {
        RCTModule.setMeasuringTarget(mac, target)
    },

    /**
     * Set the temperature unit
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set/unset successfully, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_BTM_CALLBACK BTMProfileModule.ACTION_BTM_CALLBACK("btm_callback")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BTMModule.Event_Notify BTMModule.Event_Notify("event_notify_btm")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_ERROR_BTM BTMProfileModule.ACTION_ERROR_BTM("action_error_btm")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_NUM_BTM BTMProfileModule.ERROR_NUM_BTM("error_num")}</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ERROR_DESCRIPTION_BTM BTMProfileModule.ERROR_DESCRIPTION_BTM("description")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BTMModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} measuring target<br/>
     *                 <b>The unit of:</b> BtmControl.FUNCTION_TARGET_OFFLINE or BtmControl.FUNCTION_TARGET_ONLINE
     */
    setOfflineTarget: function (mac, target) {
        RCTModule.setOfflineTarget(mac, target)
    },

    /**
     * Disconnect the BTM
     * @param mac The mac address for BTM
     */
    disconnect: function (mac) {
        RCTModule.disconnect(mac)
    },

    /**
     * Get all connected BTM device
     *
     * e.g. {"devices":["A4D5783FB00C","A4D5783FFE58"]}
     */
    getAllConnectedDevices: function () {
        RCTModule.getAllConnectedDevices()
    },
}