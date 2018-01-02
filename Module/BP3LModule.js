/**
 * Created by zhangxu on 16/11/14.
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.BP3LModule;

/**
 * @module BP3LModule
 */
module.exports = {
    /**
     * Notify event type for BP3L.
     */
    Event_Notify: RCTModule.Event_Notify,

    /**
     * Start measure blood pressure monitor
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP3LModule.Event_Notify BP3LModule.Event_Notify("event_notify_bp3l")}<br/>
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
     *         {@link module:BP3LModule.Event_Notify BP3LModule.Event_Notify("event_notify_bp3l")}</br>
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
     *         <b>DeviceEventEmitter.addListener(BP3LModule.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     *
     * @param {string} mac Device's mac address
     */
    startMeasure: function (mac) {

        if (RCTModule != null) {
            RCTModule.startMeasure(mac);
        } else {
            console.log('~~~~~ RCTModule is null')
        }

    },


    /**
     * Interrupt the measuring process immediately if device is in measuring state.
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP3LModule.Event_Notify BP3LModule.Event_Notify("event_notify_bp3l")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_INTERRUPTED_BP BPProfileModule.ACTION_INTERRUPTED_BP("interrupted_bp")}</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BP3LModule.Event_Notify BP3LModule.Event_Notify("event_notify_bp3l")}</br>
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
     *         <b>DeviceEventEmitter.addListener(BP3LModule.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    stopMeasure: function (mac) {
        if (RCTModule != null) {
            RCTModule.stopMeasure(mac);
        } else {
            console.log('~~~~~ RCTModule is null')
        }

    },

    /**
     * Get the BP3L device's battery.
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BP3LModule.Event_Notify BP3LModule.Event_Notify("event_notify_bp3l")}<br/>
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
     *         {@link module:BP3LModule.Event_Notify BP3LModule.Event_Notify("event_notify_bp3l")}</br>
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
     *         <b>DeviceEventEmitter.addListener(BP3LModule.Event_Notify, function (e: Event){});</b>
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
     * Disconnect the BP3L
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
     * Get all connected AM3S device
     *
     * e.g. {"devices":["A4D5783FB00C","A4D5783FFE58"]}
     */
    getAllConnectedDevices: function () {
        RCTModule.getAllConnectedDevices()
    },


}