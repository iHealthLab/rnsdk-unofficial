/**
 * Created by lixuesong on 15/11/2016.
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.HS6ProfileModule

/**
 * @module HS6ProfileModule
 */
module.exports = {
    // Actions
    /**
     * The action value of event indicating the setting wifi of HS6 device.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_SETWIFI HS6ProfileModule.ACTION_HS6_SETWIFI("hs6_setwifi")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.SETWIFI_RESULT HS6ProfileModule.SETWIFI_RESULT("setWifiResult")}</td><td>The result of set wifi,it's a boolean,true set wifi success,otherwise false</td></tr>
     * </tbody>
     * </table>
     */
    ACTION_HS6_SETWIFI: RCTModule.ACTION_HS6_SETWIFI,
    /**
     * The action value of event indicating the bind user to the scale.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_BIND HS6ProfileModule.ACTION_HS6_BIND("hs6_bind")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.HS6_BIND_EXTRA HS6ProfileModule.HS6_BIND_EXTRA("bindData")}</td><td>
     * {@link module:HS6ProfileModule.BIND_HS6_RESULT HS6ProfileModule.BIND_HS6_RESULT("bindResult")} The result of bind HS6 device. 1 bind success; 2 the scale has no empty position ;3 bind fail<br/>
     * {@link module:HS6ProfileModule.HS6_MODEL HS6ProfileModule.HS6_MODEL("model")} The model of HS6.<br/>
     * {@link module:HS6ProfileModule.HS6_POSITION HS6ProfileModule.HS6_POSITION("position")} The user position in the HS6 range from 1 to 10,  -1 if bind false.<br/>
     * {@link module:HS6ProfileModule.HS6_SETTED_WIFI HS6ProfileModule.HS6_SETTED_WIFI("settedWifi")} Whether has setted wifi.1 setted ;0 not
     * </td></tr>
     * </tbody>
     * </table>
     */
    ACTION_HS6_BIND: RCTModule.ACTION_HS6_BIND,
    /**
     * The action value of event indicating the unbind of HS6.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_UNBIND HS6ProfileModule.ACTION_HS6_UNBIND("hs6_unbind")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.HS6_UNBIND_RESULT HS6ProfileModule. HS6_UNBIND_RESULT("unBind")}</td><td>the result of unBind,it's boolean,true set success,otherwise false</td></tr>
     * </tbody>
     * </table>
     */
    ACTION_HS6_UNBIND: RCTModule.ACTION_HS6_UNBIND,
    /**
     * The action value of event indicating the getting token of HS6.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_GET_TOKEN HS6ProfileModule.ACTION_HS6_GET_TOKEN("hs6_get_token")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.GET_TOKEN_RESULT HS6ProfileModule. GET_TOKEN_RESULT("getTokenResult")}</td><td>The result of get token,it's a JSONObject</td></tr>
     * </tbody>
     * </table>
     */
    ACTION_HS6_GET_TOKEN: RCTModule.ACTION_HS6_GET_TOKEN,
    /**
     * The action value of event indicating the set unit to the device.<br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_SET_UNIT HS6ProfileModule.ACTION_HS6_SET_UNIT("hs6_set_unit")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.SET_UNIT_RESULT HS6ProfileModule. SET_UNIT_RESULT("setUnitResult")}</td><td>The result of set unit,it's boolean,true set success,otherwise false</td></tr>
     </tbody>
     * </table>
     */
    ACTION_HS6_SET_UNIT: RCTModule.ACTION_HS6_SET_UNIT,
    /**
     * Callback indicating no the error for HS6 device.<br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HS6ProfileModule.ACTION_HS6_ERROR HS6ProfileModule.ACTION_HS6_ERROR("hs6_error")}</td></tr>
     * <tr><td>{@link module:HS6ProfileModule.HS6_ERROR HS6ProfileModule. HS6_ERROR("hs6_error")}</td><td>The error code: 1 user information upload error; 2 bind error</td></tr>
     * </tbody>
     * </table>
     */
    ACTION_HS6_ERROR: RCTModule.ACTION_HS6_ERROR,

    //Keys
    /**
     * The result of set wifi,it's a boolean.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * SETWIFI_RESULT ----> "setWifiResult".<br/>
     * </li>
     * </ul>
     * <b>true set wifi success,otherwise false</b>
     */
    SETWIFI_RESULT: RCTModule.SETWIFI_RESULT,
    /**
     * The key of the return data of bind user.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * HS6_BIND_EXTRA ----> "bindData".<br/>
     * </li>
     * </ul>
     */
    HS6_BIND_EXTRA: RCTModule.HS6_BIND_EXTRA,
    /**
     * The key of the result of bind HS6 device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * BIND_HS6_RESULT ----> "bindResult".<br/>
     * </li>
     * </ul>
     * <b>1 bind success; 2 the scale has no empty position ;3 bind fail</b>
     */
    BIND_HS6_RESULT: RCTModule.BIND_HS6_RESULT,
    /**
     * The key of the model of HS6.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * HS6_MODEL ----> "model".<br/>
     * </li>
     * </ul>
     */
    HS6_MODEL: RCTModule.HS6_MODEL,
    /**
     * The key of the user position in the HS6.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * HS6_POSITION ----> "position".<br/>
     * </li>
     * </ul>
     * <b>range from 1 to 10,  -1 if bind false</b>
     */
    HS6_POSITION: RCTModule.HS6_POSITION,
    /**
     * The key of the Whether has setted wifi.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * HS6_SETTED_WIFI ----> "settedWifi".<br/>
     * </li>
     * </ul>
     * <b>Value range: 1 setted ;0 not</b>
     */
    HS6_SETTED_WIFI: RCTModule.HS6_SETTED_WIFI,
    /**
     * The key of the unBind data for HS6.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * HS6_UNBIND_RESULT ----> "unBind".<br/>
     * </li>
     * </ul>
     * <b>It's boolean,true set success,otherwise false.</b>
     */
    HS6_UNBIND_RESULT: RCTModule.HS6_UNBIND_RESULT,
    /**
     * The key of the result of get token,it's a JSONObject.<br/>
     * Returns the message Key corresponding relation:
     * <ul>
     * <li>
     * GET_TOKEN_RESULT ----> "getTokenResult".<br/>
     * </li>
     * </ul>
     */
    GET_TOKEN_RESULT: RCTModule.GET_TOKEN_RESULT,
    /**
     * The key of the result of set unit.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * SET_UNIT_RESULT ----> "setUnitResult".<br/>
     * </li>
     * </ul>
     * <b>It's boolean,true set success,otherwise false</b>
     */
    SET_UNIT_RESULT: RCTModule.SET_UNIT_RESULT,
    /**
     * The key of the error code.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * HS6_ERROR ----> "hs6_error".<br/>
     * </li>
     * </ul>
     * <b>1 user information upload error; 2 bind error</b>
     */
    HS6_ERROR: RCTModule.HS6_ERROR
}