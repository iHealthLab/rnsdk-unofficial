'use strict';


var { NativeModules } = require('react-native');

var RCTModule = NativeModules.BG1Module

/**
 * @module BG1Module
 */
module.exports = {
    /**
     * Notify event type for BG1.
     */
    Event_Notify: RCTModule.Event_Notify,

     /**
     * Send code to bg1 device
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BG1Module.Event_Notify BG1Module.Event_Notify("event_notify_bg1")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BG1ProfileModule.ACTION_BG1_SENDCODE_RESULT BG1ProfileModule.ACTION_BG1_SENDCODE_RESULT("action_sendcode_result_for_bg1")}</td></tr>
     *          <tr><td>{@link module:BG1ProfileModule.BG1_SENDCODE_RESULT BG1ProfileModule.BG1_SENDCODE_RESULT("sendcode_result_for_bg1")}</td><td>Flag of send code. <br/> e.g. {"sendcode_result_for_bg1":0,"mac":"","type":"BG1","action":"action_sendcode_result_for_bg1"} </td></tr>
     *          <tr><td>action</td><td>{@link module:BG1ProfileModule.ACTION_BG1_MEASURE_STRIP_IN BG1ProfileModule.ACTION_BG1_MEASURE_STRIP_IN("action_measure_strip_in_for_bg1")}</td><td><br/>e.g.{"mac":"","type":"BG1","action":"action_measure_strip_in_for_bg1"}</td></tr>
     *          <tr><td>action</td><td>{@link module:BG1ProfileModule.ACTION_BG1_MEASURE_GET_BLOOD BG1ProfileModule.ACTION_BG1_MEASURE_GET_BLOOD("action_measure_get_blood_for_bg1")}</td><td><br/>e.g.{"mac":"","type":"BG1","action":"action_measure_get_blood_for_bg1"}</td></tr>
     *          <tr><td>action</td><td>{@link module:BG1ProfileModule.ACTION_BG1_MEASURE_RESULT BG1ProfileModule.ACTION_BG1_MEASURE_RESULT("action_measure_result_for_bg1")}</td></tr>
     *          <tr><td>{@link module:BG1ProfileModule.BG1_MEASURE_RESULT BG1ProfileModule.BG1_MEASURE_RESULT("measure_result_for_bg1")}</td><td>Value of measure result.</td></tr>
     *          <tr><td>{@link module:BG1ProfileModule.DATA_ID BG1ProfileModule.DATA_ID("dataID")}</td><td>DataId of measure result. <br/> e.g. {"dataID":"B4D34EE3764178BBE858055473B18766","measure_result_for_bg1":131,"mac":"","type":"BG1","action":"action_measure_result_for_bg1"}</td></tr>
     *          <tr><td>action</td><td>{@link module:BG1ProfileModule.ACTION_BG1_MEASURE_STRIP_OUT BG1ProfileModule.ACTION_BG1_MEASURE_STRIP_OUT("action_measure_strip_out_for_bg1")}</td><td><br/>e.g.{"mac":"","type":"BG1","action":"action_measure_get_blood_for_bg1"}</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BG1Module.Event_Notify BG1Module.Event_Not
     *         The key and value will be as below:
     *         <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#00000ify("event_notify_bg1")}</br>0">
     *             <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *             <tr><td>action</td><td>{@link module:BG1ProfileModule.ACTION_BG1_MEASURE_STANDBY BG1ProfileModule.ACTION_BG1_MEASURE_STANDBY("action_measure_standby_for_bg1")(iOS doesn't support this key)}</td><td><br/>e.g.{"mac":"","type":"BG1","action":"action_measure_standby_for_bg1"}</td></tr>
     *             <tr><td>action</td><td>{@link module:BG1ProfileModule.ACTION_BG1_MEASURE_ERROR BG1ProfileModule.ACTION_BG1_MEASURE_ERROR("action_measure_error_for_bg1")}</td></tr>
     *             <tr><td>{@link module:BG1ProfileModule.BG1_MEASURE_ERROR BG1ProfileModule.BG1_MEASURE_ERROR("error_num_for_bg1")(iOS doesn't support this key)}</td><td>Error number. <br/> e.g. {"error_num_for_bg1":12,"mac":"","type":"BG1","action":"action_measure_error_for_bg1"} </td></tr>
     *         </table>
     *     </li>
     *
     *     <li>
     *         <b>Attention</b>, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     *         <b>DeviceEventEmitter.addListener(BG1Module.Event_Notify, function (e: Event){});</b>
     *     </li>
     * </ul>
     * 
     * @param {string} QRCode the result string of scanning strip bottle(ignore if use GDH strip)
     * @param {int} stripType 1:GOD      2:GDH
     * @param {int} measureType 1:Test with Blood    2:Test with control liquid (CTL)
     */
	sendCode: function(QRCode, stripType, measureType) {
        if (RCTModule != null) {
            RCTModule.sendCode(QRCode, stripType, measureType);
        }else {
            console.log('~~~~~ RCTModule is null')
        }
	},
    
    /**
     * Parse bottle info from QRCode, include strip expire time,strip number,bottle id
     * <ul>
     *     <li>This is an asynchronous call, it will return immediately.</li>
     *     <li>If get successfully, following event will be emit:<br/>
     *     {@link module:BG1Module.Event_Notify BG1Module.Event_Notify("event_notify_bg1")}<br/>
     *     The key and value will be as below:
     *     <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *          <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *          <tr><td>action</td><td>{@link module:BG1ProfileModule.ACTION_CODE_ANALYSIS BG1ProfileModule.ACTION_CODE_ANALYSIS("action_code_analysis")}</td></tr>
     *          <tr><td>{@link module:BG1ProfileModule.STRIP_NUM_BG BG1ProfileModule.STRIP_NUM_BG("strip_num")(iOS doesn't support this key)}</td></tr>
     *          <tr><td>{@link module:BG1ProfileModule.STRIP_EXPIRETIME_BG BG1ProfileModule.STRIP_EXPIRETIME_BG("expire_time")}</td></tr>
     *          <tr><td>{@link module:BG1ProfileModule.BOTTLEID_BG BG1ProfileModule.BOTTLEID_BG("bottle_id")(iOS doesn't support this key)}</td></tr>
     *          <tr><<td><br/> e.g. {"expire_time":"2017-07-15","strip_num":"25","bottle_id":"3998032623","action":"action_code_analysis"}</td></tr>
     *     </table>
     *     </li>
     *
     *     <li>
     *         If error happens, following event will be emit:</br>
     *         {@link module:BG1Module.Event_Notify BG1Module.Event_Notify("event_notify_bg1")}</br>
     *         The result will be as below:
     *         {"description":"QRCode format error","action":"action_code_analysis"}
     *     </li>
     *
     *     <li>
     *         <b>Attention</b>, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     *         <b>DeviceEventEmitter.addListener(BG1Module.Event_Notify, function (e: Event){});</b>
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
    }

}