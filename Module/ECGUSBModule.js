/**
 * 
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.ECGUSBModule

/**
 * @module ECGUSBModule
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
     * {@link module:ECGUSBModule.Event_Notify ECGUSBModule.Event_Notify("event_notify_ecgusb")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:ECGProfileModule.ACTION_SYNCDATA_ECGUSB ECGProfileModule.ACTION_SYNCDATA_ECGUSB("ACTION_SYNCDATA_ECGUSB")}</td></tr>
     * <tr><td>{@link module:ECGProfileModule.ACTION_STARTSYNCDATA_ECGUSB ECGProfileModule.ACTION_STARTSYNCDATA_ECGUSB("ACTION_STARTSYNCDATA_ECGUSB")}</td><td>
     * <tr><td>{@link module:ECGProfileModule.ACTION_SYNCDATAINFO_ECGUSB ECGProfileModule.ACTION_SYNCDATAINFO_ECGUSB("ACTION_SYNCDATAINFO_ECGUSB")}</td><td>
     * <tr><td>{@link module:ECGProfileModule.DATAINFO ECGProfileModule.DATAINFO("DATAINFO")}</td><td>
     * <tr><td>{@link module:ECGProfileModule.ACTION_FINISHSYNCDATA_ECGUSB ECGProfileModule.ACTION_FINISHSYNCDATA_ECGUSB("ACTION_FINISHSYNCDATA_ECGUSB")}</td><td>
     * <tr><td>{@link module:ECGProfileModule.ACTION_SYNCDATAPROGRESS_ECGUSB ECGProfileModule.ACTION_SYNCDATAPROGRESS_ECGUSB("ACTION_SYNCDATAPROGRESS_ECGUSB")}</td><td>
     * <tr><td>{@link module:ECGProfileModule.PROGRESS ECGProfileModule.PROGRESS("PROGRESS")}</td><td>
     * </table>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(ECGProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>

     */
    syncData: function () {
        RCTModule.syncData()
    },

    /**
     * deleteData.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:ECGUSBModule.Event_Notify ECGUSBModule.Event_Notify("event_notify_ecgusb")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:ECGProfileModule.ACTION_DELETEDATA_ECGUSB ECGProfileModule.ACTION_DELETEDATA_ECGUSB("ACTION_DELETEDATA_ECGUSB")}</td></tr>
     * <tr><td>{@link module:ECGProfileModule.ACTION_DELETEDATA_ECGUSB ECGProfileModule.ACTION_DELETEDATA_ECGUSB("ACTION_DELETEDATA_ECGUSB")}</td><td>
     * </table>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(ECGProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>

     */
    deleteData: function () {
        RCTModule.deleteData()
    },
       /**
     * Get all connected ECG device
     *
     * e.g. {"devices":"A4D5783FB00C"}
     */

    getAllConnectedDevices: function () {
        RCTModule.getAllConnectedDevices()
    },

   
}