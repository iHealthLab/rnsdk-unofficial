/**
 * Created by lixuesong on 11/11/2016.
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.HS6Module

/**
 * @module HS6Module
 */
module.exports = {
    /**
     * Notify event type for HS6
     */
    Event_Notify: RCTModule.Event_Notify,

    /**
     * Initializes method.
     * @param {string} userName the name of user
     */
    init: function (userName) {
        RCTModule.init(userName)
    },
    /**
     * Set wifi to the scale.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:HS6Module.Event_Notify HS6Module.Event_Notify("event_notify_hs6")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_SETWIFI HS6ProfileModule.ACTION_HS6_SETWIFI("hs6_setwifi")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.SETWIFI_RESULT HS6ProfileModule.SETWIFI_RESULT("setWifiResult")}</td><td>The result of set wifi,it's a boolean,true set wifi success,otherwise false</td></tr>
     * </tbody>
     * </table>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(HS6ProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} ssid the name of net
     * @param {string} password the password of the net
     */
    setWifi: function (ssid, password) {
        RCTModule.setWifi(ssid, password)
    },

    /**
     * Bind the user and scale together,after bind success user's weight datas can be transmitted to the cloud.
     * And this method is a time consuming operation that cannot be called in the main thread.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:HS6Module.Event_Notify HS6Module.Event_Notify("event_notify_hs6")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_BIND HS6ProfileModule.ACTION_HS6_BIND("hs6_bind")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.HS6_BIND_EXTRA HS6ProfileModule.HS6_BIND_EXTRA("bindData")}</td><td>
     * {@link module:HS6ProfileModule.BIND_HS6_RESULT HS6ProfileModule.BIND_HS6_RESULT("bindResult")} The result of bind HS6 device. 1 bind success; 2 the scale has no empty position ;3 bind fail.<br/>
     * {@link module:HS6ProfileModule.HS6_MODEL HS6ProfileModule.HS6_MODEL("model")} The model of HS6.<br/>
     * {@link module:HS6ProfileModule.HS6_POSITION HS6ProfileModule.HS6_POSITION("position")} The user position in the HS6 range from 1 to 10,  -1 if bind false.<br/>
     * {@link module:HS6ProfileModule.HS6_SETTED_WIFI HS6ProfileModule.HS6_SETTED_WIFI("settedWifi")} Whether has setted wifi.1 setted ;0 not
     * </td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:HS6ProfileModule.Event_Notify HS6ProfileModule.Event_Notify("event_notify_hs6")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_ERROR HS6ProfileModule.ACTION_HS6_ERROR("hs6_error")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.HS6_ERROR HS6ProfileModule.HS6_ERROR("hs6_error")}</td><td>The error code: 1 user information upload error; 2 bind error.</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(HS6ProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} birthday format like yyyy-MM-dd HH:mm:ss
     * @param {float} weight the unit is kg
     * @param {int} height the unit is cm
     * @param {int} isSporter is sporter; 2 is not ;3 unknown
     * @param {int} gender 0 is male ;1 is female
     * @param {string} serialNumber the mac address of the scale
     */
    bindDeviceHS6: function (birthday, weight, height, isSporter, gender, serialNumber) {
        RCTModule.bindDeviceHS6(birthday, weight, height, isSporter, gender, serialNumber)
    },
    /**
     * Unbind the user and scale,and this method is a time consuming operation that cannot be called in the main thread.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:HS6Module.Event_Notify HS6Module.Event_Notify("event_notify_hs6")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_UNBIND HS6ProfileModule.ACTION_HS6_UNBIND("hs6_unbind")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.HS6_UNBIND_RESULT HS6ProfileModule.HS6_UNBIND_RESULT("unBind")}</td><td>The result of unBind,it's boolean,true set success,otherwise false.</td></tr>
     * </tbody>
     * </table>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(HS6ProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} serialNumber the mac address of scale
     */
    unBindDeviceHS6: function (serialNumber) {
        RCTModule.unBindDeviceHS6(serialNumber)
    },
    /**
     * Get AccessToken of HS6 user,and this method is a time consuming operation that cannot be called
     * in the main thread.
     * After get AccessToken, you can call openApi(http://developer.ihealthlabs.com) to pull data form iHealth cloud.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:HS6Module.Event_Notify HS6Module.Event_Notify("event_notify_hs6")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_GET_TOKEN HS6ProfileModule.ACTION_HS6_GET_TOKEN("hs6_get_token")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.GET_TOKEN_RESULT HS6ProfileModule.GET_TOKEN_RESULT("getTokenResult")}</td><td>The result of get token,it's a JSONObject.</td></tr>
     * </tbody>
     * </table>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(HS6ProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} clientId the identification of the SDK
     * @param {string} clientSecret the identification of the SDK
     * @param {string} username the identification of the user
     * @param {string} clientPara a random string,return back without change
     */
    getToken: function (clientId, clientSecret, username, clientPara) {
        RCTModule.getToken(clientId, clientSecret, username, clientPara)
    },
    /**
     * Set unit of HS6,and this method is a time consuming operation that cannot be called
     * in the main thread.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:HS6Module.Event_Notify HS6Module.Event_Notify("event_notify_hs6")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_SET_UNIT HS6ProfileModule.ACTION_HS6_SET_UNIT("hs6_set_unit")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.SET_UNIT_RESULT HS6ProfileModule.SET_UNIT_RESULT("setUnitResult")}</td><td>The result of set unit,it's boolean,true set success,otherwise false.</td></tr>
     * </tbody>
     * </table>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(HS6ProfileModule.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} username the identification of the user
     * @param {int} unitType the unit type
     *                 <p>0 Kg
     *                 <p>1 lbs
     *                 <p>2 st
     */
    setUnit: function (username, unitType) {
        RCTModule.setUnit(username, unitType)
    },
}