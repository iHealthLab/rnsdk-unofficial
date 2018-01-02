'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.BP5Module

/**
 * @module BP5Module
 */
module.exports = {

    /**
     * Notify event type for BP5.
     */
    Event_Notify: RCTModule.Event_Notify,


    /**
     * Start measure blood pressure monitor
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *         <caption>Device Zeroing</caption>
     *         <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *         <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ZOREING_BP BPProfileModule.ACTION_ZOREING_BP("zoreing_bp")}</td></tr>
     *     </table>
     *     <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *         <caption>Device ZeroOver</caption>
     *         <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *         <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ZOREOVER_BP BPProfileModule.ACTION_ZOREOVER_BP("zoreover_bp")}</td></tr>
     *     </table>
     *     <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *         <caption>Device OnlinePressure</caption>
     *         <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *         <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ONLINE_PRESSURE_BP BPProfileModule.ACTION_ONLINE_PRESSURE_BP("online_pressure_bp")}</td></tr>
     *         <tr><td>{@link module:BPProfileModule.BLOOD_PRESSURE_BP BPProfileModule.BLOOD_PRESSURE_BP("pressure")}</td><td>Real time pressure.<br/>e.g. 23</td></tr>
     *     </table>
     *     <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *         <caption>Device online pressure and wave</caption>
     *         <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *         <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP("online_pulsewave_bp")}</td></tr>
     *         <tr><td>{@link module:BPProfileModule.BLOOD_PRESSURE_BP BPProfileModule.BLOOD_PRESSURE_BP("pressure")}</td><td>Real time pressure.<br/> e.g. 23</td></tr>
     *         <tr><td>{@link module:BPProfileModule.PULSEWAVE_BP BPProfileModule.PULSEWAVE_BP("wave")}</td><td>Blood pressure pulse wave.<br/> e.g. [15,15,15,15,15]</td></tr>
     *         <tr><td>{@link module:BPProfileModule.FLAG_HEARTBEAT_BP BPProfileModule.FLAG_HEARTBEAT_BP("heartbeat")}</td><td>heartbeat.<br/> e.g. true</td></tr>
     *     </table>
     *     &nbsp
     *     <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *         <caption>Measure result</caption>
     *         <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *         <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ONLINE_RESULT_BP BPProfileModule.ACTION_ONLINE_RESULT_BP("online_result_bp")}</td></tr>
     *         <tr><td>{@link module:BPProfileModule.HIGH_BLOOD_PRESSURE_BP BPProfileModule.HIGH_BLOOD_PRESSURE_BP("sys")}</td><td>The high pressure for blood pressure.<br/> e.g. 118</td></tr>
     *         <tr><td>{@link module:BPProfileModule.LOW_BLOOD_PRESSURE_BP BPProfileModule.LOW_BLOOD_PRESSURE_BP("dia")}</td><td>The low pressure for blood pressure.<br/> e.g. 77</td></tr>
     *         <tr><td>{@link module:BPProfileModule.PULSE_BP BPProfileModule.PULSE_BP("heartRate")}</td><td>Blood pressure pulse, e.g. 77</td></tr>
     *         <tr><td>{@link module:BPProfileModule.MEASUREMENT_AHR_BP BPProfileModule.MEASUREMENT_AHR_BP("arrhythmia")}</td><td>The key of measurement is arrhythmia or not.<br/> e.g. true</td></tr>
     *         <tr><td>{@link module:BPProfileModule.MEASUREMENT_HSD_BP BPProfileModule.MEASUREMENT_HSD_BP("hsd")}(ios hsd 0:false 1:true)</td><td>The key of hemodynamic stability diagnosis, that Determines.<br/> e.g. true</td></tr>
     *         <tr><td>{@link module:BPProfileModule.DATAID BPProfileModule.DATAID("dataID")}</td><td>return blood pressure data id.<br/> e.g. 9F78D808BAB380CC8B8DA5F2DECA24F3</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}</br>
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
     *         <b>DeviceEventEmitter.addListener(BP5Module.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     *
     * @param {string} mac Device's mac address
     */

    startMeasure: function (mac) {
        RCTModule.startMeasure(mac)
    },

    /**
     * Interrupt the measuring process immediately if device is in measuring state.
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_INTERRUPTED_BP BPProfileModule.ACTION_INTERRUPTED_BP("interrupted_bp")}</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}</br>
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
     *         <b>DeviceEventEmitter.addListener(BP5Module.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */

    stopMeasure: function (mac) {
        RCTModule.stopMeasure(mac)
    },


    /**
     * Get the BP5 device's battery.
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}<br/>
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
     *         {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}</br>
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
     *         <b>DeviceEventEmitter.addListener(BP5Module.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getBattery: function (mac) {

        if (RCTModule != null) {
            RCTModule.getBattery(mac);
        } else {
            console.log('~~~~~ RCTModule is null')
        }

    },

    /**
     * Enable device can measure offline .
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ENABLE_OFFLINE_BP BPProfileModule.ACTION_ENABLE_OFFLINE_BP("enable_offline_bp")}</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}</br>
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
     *         <b>DeviceEventEmitter.addListener(BP5Module.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    enbleOffline: function (mac) {

        if (RCTModule != null) {
            RCTModule.enbleOffline(mac);
        } else {
            console.log('~~~~~ RCTModule is null')
        }

    },

    /**
     * Enable device can't measure offline .
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_DISENABLE_OFFLINE_BP BPProfileModule.ACTION_DISENABLE_OFFLINE_BP("disenable_offline_bp")}</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}</br>
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
     *         <b>DeviceEventEmitter.addListener(BP5Module.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    disableOffline: function (mac) {

        if (RCTModule != null) {
            RCTModule.disableOffline(mac);
        } else {
            console.log('~~~~~ RCTModule is null')
        }

    },

    /**
     * Enable device can't measure offline .
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_IS_ENABLE_OFFLINE BPProfileModule.ACTION_IS_ENABLE_OFFLINE("offlinestatus")}</td></tr>
     *          <tr><td>{@link module:BPProfileModule.IS_ENABLE_OFFLINE BPProfileModule.IS_ENABLE_OFFLINE("offlinestatus")}</td><td>Indicate device can measure offline or not. <br/> e.g. true</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}</br>
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
     *         <b>DeviceEventEmitter.addListener(BP5Module.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    isEnableOffline: function (mac) {

        if (RCTModule != null) {
            RCTModule.isEnableOffline(mac);
        } else {
            console.log('~~~~~ RCTModule is null')
        }

    },

    /**
     * get offline data number. (iOS not support)
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}<br/>
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
     *         {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}</br>
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
     *         <b>DeviceEventEmitter.addListener(BP5Module.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getOfflineNum: function (mac) {

        if (RCTModule != null) {
            RCTModule.getOfflineNum(mac);
        } else {
            console.log('~~~~~ RCTModule is null')
        }

    },

    /**
     * get offline data.
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_HISTORICAL_DATA_BP BPProfileModule.ACTION_HISTORICAL_DATA_BP("historicaldata_bp")}</td></tr>
     *          <tr><td>{@link module:BPProfileModule.HISTORICAL_DATA_BP BPProfileModule.HISTORICAL_DATA_BP("data")}</td><td>Array of history Data. <br/> e.g. {"data":[{"time":"2016-12-6 22:27:00","sys":119,"dia":67,"heartRate":69,"arrhythmia":false,"hsd":false,"dataID":"EFDF63A63749388AD17EA416AC97CB09"}]} </td></tr>
     *          <tr><td>{@link module:BPProfileModule.MEASUREMENT_DATE_BP BPProfileModule.MEASUREMENT_DATE_BP("time")}</td><td>Measuring time. <br/> e.g. 2016-12-6 22:27:00</td></tr>
     *          <tr><td>{@link module:BPProfileModule.HIGH_BLOOD_PRESSURE_BP BPProfileModule.HIGH_BLOOD_PRESSURE_BP("sys")}</td><td>The high pressure for blood pressure. <br/> e.g. 127</td></tr>
     *          <tr><td>{@link module:BPProfileModule.LOW_BLOOD_PRESSURE_BP BPProfileModule.LOW_BLOOD_PRESSURE_BP("dia")}</td><td>The low pressure for blood pressure. <br/> e.g. 80</td></tr>
     *          <tr><td>{@link module:BPProfileModule.PULSE_BP BPProfileModule.PULSE_BP("heartRate")}</td><td>Blood pressure pulse.<br/> e.g. 77</td></tr>
     *          <tr><td>{@link module:BPProfileModule.MEASUREMENT_AHR_BP BPProfileModule.MEASUREMENT_AHR_BP("arrhythmia")}</td><td>The key of measurement is arrhythmia or not. <br/> e.g. true</td></tr>
     *          <tr><td>{@link module:BPProfileModule.MEASUREMENT_HSD_BP BPProfileModule.MEASUREMENT_HSD_BP("hsd")}</td><td>The key of hemodynamic stability diagnosis, that Determines.<br/> e.g. false</td></tr>
     *          <tr><td>{@link module:BPProfileModule.DATAID BPProfileModule.DATAID("dataID")}</td><td>return blood pressure data id. <br/> e.g. 9F78D808BAB380CC8B8DA5F2DECA24F3</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BP5Module.Event_Notify BP5Module.Event_Notify("event_notify_bp5")}</br>
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
     *         <b>DeviceEventEmitter.addListener(BP5Module.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getOfflineData: function (mac) {

        if (RCTModule != null) {
            RCTModule.getOfflineData(mac);
        } else {
            console.log('~~~~~ RCTModule is null')
        }

    },

    /**
     * Disconnect the BP5 (iOS not support)
     *
     * @param {string} mac Device's mac address
     */

    disconnect: function (mac) {

        if (RCTModule != null) {
            RCTModule.disconnect(mac);
        } else {
            console.log('~~~~~ RCTModule is null')
        }

    },

    /**
     * Get all connected BP5 device
     *
     * e.g. {"devices":["A4D5783FB00C","A4D5783FFE58"]}
     */
    getAllConnectedDevices: function () {
        RCTModule.getAllConnectedDevices()
    },


}
