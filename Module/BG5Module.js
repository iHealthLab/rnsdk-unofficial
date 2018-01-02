/**
 * Created by gaoyuanlong on 16/11/17.
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.BG5Module

/**
 * @module BG5Module
 */
module.exports = {
    /**
     * Notify event type for BG5.
     */
    Event_Notify: RCTModule.Event_Notify,

    /**
     * Keep BG5 connecting.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If keep link successfully, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_KEEP_LINK BGProfileModule.ACTION_KEEP_LINK("action_keep_link")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_ERROR_BG BGProfileModule.ACTION_ERROR_BG("action_measure_error")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_NUM_BG BGProfileModule.ERROR_NUM_BG("error_num")}</td><td> The error num</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_DESCRIPTION_BG BGProfileModule.ERROR_DESCRIPTION_BG("description")}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    holdLink: function (mac){
        if (RCTModule != null) {
            RCTModule.holdLink(mac);
        } else {
            console.log('~~~~~ BG5 holdLink RCTModule is null')
        }
    },

    /**
     * Get battery level of BG5 device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get battery successfully, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_GET_BATTERY BGProfileModule.ACTION_GET_BATTERY("action_battery_bg")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.GET_BATTERY BGProfileModule.GET_BATTERY("battery")}</td><td>The battery value.</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_ERROR_BG BGProfileModule.ACTION_ERROR_BG("action_measure_error")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_NUM_BG BGProfileModule.ERROR_NUM_BG("error_num")}</td><td> The error num</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_DESCRIPTION_BG BGProfileModule.ERROR_DESCRIPTION_BG("description")}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getBattery: function (mac){

        if (RCTModule != null) {
            RCTModule.getBattery(mac);
        } else {
            console.log('~~~~~ BG5 getBattery RCTModule is null')
        }
    },

    /**
     * Set time to BG5 device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set time successfully, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_SET_TIME BGProfileModule.ACTION_SET_TIME("action_set_time")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_ERROR_BG BGProfileModule.ACTION_ERROR_BG("action_measure_error")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_NUM_BG BGProfileModule.ERROR_NUM_BG("error_num")}</td><td> The error num</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_DESCRIPTION_BG BGProfileModule.ERROR_DESCRIPTION_BG("description")}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    setTime: function (mac){
        if (RCTModule != null) {
            RCTModule.setTime(mac);
        } else {
            console.log('~~~~~ BG5 setTime RCTModule is null')
        }
    },

    /**
     * Set unit to BG5 device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set unit successfully, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_SET_UNIT BGProfileModule.ACTION_SET_UNIT("action_set_unit")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_ERROR_BG BGProfileModule.ACTION_ERROR_BG("action_measure_error")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_NUM_BG BGProfileModule.ERROR_NUM_BG("error_num")}</td><td> The error num</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_DESCRIPTION_BG BGProfileModule.ERROR_DESCRIPTION_BG("description")}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} type 1:mmol/L 2:mg/dL
     */
    setUnit: function (mac, type){
        if (RCTModule != null) {
            RCTModule.setUnit(mac, type);
        } else {
            console.log('~~~~~ BG5 setUnit RCTModule is null')
        }
    },

    /**
     * Start measure with specific measure type.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If start measure successfully, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_START_MEASURE BGProfileModule.ACTION_START_MEASURE("action_start_measure")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_ERROR_BG BGProfileModule.ACTION_ERROR_BG("action_measure_error")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_NUM_BG BGProfileModule.ERROR_NUM_BG("error_num")}</td><td> The error num</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_DESCRIPTION_BG BGProfileModule.ERROR_DESCRIPTION_BG("description")}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} type Measure type, 1.Measure with blood measure, 2.Measure with control liquid
     */
    startMeasure: function (mac, type){
        if (RCTModule != null) {
            RCTModule.startMeasure(mac, type);
        } else {
            console.log('~~~~~ BG5 startMeasure RCTModule is null')
        }
    },

    /**
     * Get offline data of BG5 device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get offline data successfully, two events will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_GET_OFFLINEDATA_COUNT BGProfileModule.ACTION_GET_OFFLINEDATA_COUNT("action_historicalnum_bg")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.GET_OFFLINEDATA_COUNT BGProfileModule.GET_OFFLINEDATA_COUNT("count")}</td><td>The offline data count value.</td></tr>
     * </tbody>
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_GET_OFFLINEDATA BGProfileModule.ACTION_GET_OFFLINEDATA("action_historicaldata_bg")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.GET_OFFLINEDATA BGProfileModule.GET_OFFLINEDATA("his_data_bg")}</td><td>Get offline data command result</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_ERROR_BG BGProfileModule.ACTION_ERROR_BG("action_measure_error")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_NUM_BG BGProfileModule.ERROR_NUM_BG("error_num")}</td><td> The error num</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_DESCRIPTION_BG BGProfileModule.ERROR_DESCRIPTION_BG("description")}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getOfflineData: function (mac){
        if (RCTModule != null) {
            RCTModule.getOfflineData(mac);
        } else {
            console.log('~~~~~ BG5 getOffineData RCTModule is null')
        }
    },

    /**
     * Delete the offline data in BG5 device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If delete offline data successfully, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_DELETE_OFFLINEDATA BGProfileModule.ACTION_DELETE_OFFLINEDATA("action_delete_historical_data")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_ERROR_BG BGProfileModule.ACTION_ERROR_BG("action_measure_error")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_NUM_BG BGProfileModule.ERROR_NUM_BG("error_num")}</td><td> The error num</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_DESCRIPTION_BG BGProfileModule.ERROR_DESCRIPTION_BG("description")}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    deleteOfflineData: function (mac){
        if (RCTModule != null) {
            RCTModule.deleteOfflineData(mac);
        } else {
            console.log('~~~~~ BG5 deleteOfflineData RCTModule is null')
        }
    },

    /**
     * Set bottle message to BG5 device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set QR code to device successfully, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_SET_BOTTLEMESSAGE BGProfileModule.ACTION_SET_BOTTLEMESSAGE("action_set_bottle_message_success")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.SET_BOTTLEMESSAGE BGProfileModule.SET_BOTTLEMESSAGE("set_bottle_message")}</td><td>Set bottle message command result</td></tr>
     * <tr><td>{@link module:BGProfileModule.START_MODE BGProfileModule.START_MODE("start_mode")}</td><td>The start mode of Bg5 device.</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_ERROR_BG BGProfileModule.ACTION_ERROR_BG("action_measure_error")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_NUM_BG BGProfileModule.ERROR_NUM_BG("error_num")}</td><td> The error num</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_DESCRIPTION_BG BGProfileModule.ERROR_DESCRIPTION_BG("description")}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} stripType GOD(value 1) or GDH(value 2)
     * @param {number} measureType measure with blood(value 1) or measure with control liquid(value 2)
     * @param {number} QRCode the QR code send to the deivce(GOD strip), GDH ignore
     * @param {number} stripNum the left count of strip, range [1, 255]
     * @param {string} overDate the expire time of the strip, format: yyyy-MM-dd, should be valid
     */
    setBottleMessage: function (mac, stripType, measureType, QRCode, stripNum, overDate){
        if (RCTModule != null) {
            RCTModule.setBottleMessageWithInfo(mac, stripType, measureType, QRCode, stripNum, overDate);
        } else {
            console.log('~~~~~ BG5 setBottleMessage RCTModule is null')
        }
    },

    /**
     * Get bottle message from BG5 device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get device message successfully, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_GET_BOTTLEMESSAGE BGProfileModule.ACTION_GET_BOTTLEMESSAGE("action_get_codeinfo")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.GET_EXPIRECTIME BGProfileModule.GET_EXPIRECTIME("expiretime")}</td><td>The strip expire time of Bg5 device.</td></tr>
     * <tr><td>{@link module:BGProfileModule.GET_USENUM BGProfileModule.GET_USENUM("usenum")}</td><td>The strip used num, from offline data by Bg5 device.</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_ERROR_BG BGProfileModule.ACTION_ERROR_BG("action_measure_error")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_NUM_BG BGProfileModule.ERROR_NUM_BG("error_num")}</td><td> The error num</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_DESCRIPTION_BG BGProfileModule.ERROR_DESCRIPTION_BG("description")}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getBottleMessage: function (mac){
        if (RCTModule != null) {
            RCTModule.getBottleMessage(mac);
        } else {
            console.log('~~~~~ BG5 getBottleMessage RCTModule is null')
        }
    },

    /**
     * Set bottleId to BG5 device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set userID to device successfully, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_SET_BOTTLEID BGProfileModule.ACTION_SET_BOTTLEID("action_setbottleid_success")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_ERROR_BG BGProfileModule.ACTION_ERROR_BG("action_measure_error")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_NUM_BG BGProfileModule.ERROR_NUM_BG("error_num")}</td><td> The error num</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_DESCRIPTION_BG BGProfileModule.ERROR_DESCRIPTION_BG("description")}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {string} ID UserID set to device
     */
    setBottleID: function (mac, ID){
        if (RCTModule != null) {
            RCTModule.setBottleId(mac, ID);
        } else {
            console.log('~~~~~ BG5 setBottleID RCTModule is null')
        }
    },

    /**
     * Get bottleId from BG5 device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get device ID successfully, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_GET_BOTTLEID BGProfileModule.ACTION_GET_BOTTLEID("action_get_bottleid")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.GET_BOTTLEID BGProfileModule.GET_BOTTLEID("bottleid")}</td><td>The bottleId of Bg5 device.</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_ERROR_BG BGProfileModule.ACTION_ERROR_BG("action_measure_error")}</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_NUM_BG BGProfileModule.ERROR_NUM_BG("error_num")}</td><td> The error num</td></tr>
     * <tr><td>{@link module:BGProfileModule.ERROR_DESCRIPTION_BG BGProfileModule.ERROR_DESCRIPTION_BG("description")}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getBottleID: function (mac){
        if (RCTModule != null) {
            RCTModule.getBottleId(mac);
        } else {
            console.log('~~~~~ BG5 getBottleID RCTModule is null')
        }
    },

    disConnect: function (mac){
        if (RCTModule != null) {
            RCTModule.disConnect(mac);
        } else {
            console.log('~~~~~ BG5 getBottleID RCTModule is null')
        }
    },

    /**
     * Parse bottle info from QRCode, include strip expire time,strip number,bottle id
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BGProfileModule.ACTION_CODE_ANALYSIS BGProfileModule.ACTION_CODE_ANALYSIS("action_code_analysis")}</td></tr>
     *          <tr><td>{@link module:BGProfileModule.STRIP_NUM_BG BGProfileModule.STRIP_NUM_BG("strip_num")}</td></tr>
     *          <tr><td>{@link module:BGProfileModule.STRIP_EXPIRETIME_BG BGProfileModule.STRIP_EXPIRETIME_BG("expire_time")}</td></tr>
     *          <tr><td>{@link module:BGProfileModule.BOTTLEID_BG BGProfileModule.BOTTLEID_BG("bottle_id")}</td></tr>
     *          <tr><<td><br/> e.g. {"expire_time":"2017-07-15","strip_num":"25","bottle_id":"3998032623","action":"action_code_analysis"}</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BG5Module.Event_Notify BG5Module.Event_Notify("event_notify_bg5")}</br>
     *         The result will be as below:
     *         {"description":"QRCode format error","action":"action_code_analysis"}
     *     </li>
     *
     *     <li>
     *         <b>Attention</b>, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     *         <b>DeviceEventEmitter.addListener(BG5Module.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} QRCode
     */
    getBottleInfoFromQR: function(QRCode){
        if (RCTModule != null) {
            RCTModule.getBottleInfoFromQR(QRCode);
        }else {
            console.log('~~~~~ RCTModule is null')
        }
    },
    /**
     * Get all connected BG5 device
     *
     * e.g. {"devices":["A4D5783FB00C","A4D5783FFE58"]}
     */
    getAllConnectedDevices: function () {
        RCTModule.getAllConnectedDevices()
    },
}
