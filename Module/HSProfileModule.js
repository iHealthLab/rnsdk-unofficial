/**
 * Created by lixuesong on 15/11/2016.
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.HSProfileModule

/**
 * @module HSProfileModule
 */
module.exports = {
    // Actions
    /**
     * The action value of event indicating the start measure of HS device.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HSProfileModule.ACTION_LIVEDATA_HS HSProfileModule.ACTION_LIVEDATA_HS("liveData_hs")}</td></tr>
     * <tr><td>{@link module:HSProfileModule.LIVEDATA_HS HSProfileModule.LIVEDATA_HS("value")}</td><td>The key of live data weight<br/>Value range: 0.0-150.0</td></tr>
     * </tbody>
     * </table>
     * <b>message example:</b><br/>
     * {<br/>
     * &nbsp; "value": 62.79999923706055<br/>
     * }<br/>
     */
    ACTION_LIVEDATA_HS: RCTModule.ACTION_LIVEDATA_HS,
    /**
     * The action value of event indicating the stop measure of HS device.<br/>
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
     * <tr><td>{@link module:HSProfileModule.FATELEVEL_HS HSProfileModule.FATELEVEL_HS("fatelevel")}</td><td>The fate level.<br/>Value range: 0-255(0xFF)</td></tr>
     * <tr><td>{@link module:HSProfileModule.DCI_HS HSProfileModule.DCI_HS("DCI")}</td><td>The DCI data.<br/>Value range: 0-65535(0xFFFF)</td></tr>
     * </tbody>
     * </table>
     * <b>message example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "dataID": "D433708291F0427F8D412268B91C44F3",<br/>
     * &nbsp; &nbsp; "value": 84.19999694824219,<br/>
     * &nbsp; &nbsp; "fat": 47.70000076293945,<br/>
     * &nbsp; &nbsp; "water": 45.29999923706055,<br/>
     * &nbsp; &nbsp; "muscle": 41.29999923706055,<br/>
     * &nbsp; &nbsp; "skeleton": 2.200000047683716,<br/>
     * &nbsp; &nbsp; "fatelevel": 8,<br/>
     * &nbsp; &nbsp; "DCI": 2502<br/>
     * }<br/>
     */
    ACTION_ONLINE_RESULT_HS: RCTModule.ACTION_ONLINE_RESULT_HS,
    /**
     * The action value of event indicating the history data of HS device.<br/>
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
     * {@link module:HSProfileModule.FATELEVEL_HS HSProfileModule.FATELEVEL_HS("fatelevel")} The fate level. Value range: 0-255(0xFF)<br/>
     * {@link module:HSProfileModule.DCI_HS HSProfileModule.DCI_HS("DCI")} he DCI data. Value range: 0-65535(0xFFFF)
     * </td></tr>
     * </tbody>
     * </table>
     */
    ACTION_HISTORICAL_DATA_HS: RCTModule.ACTION_HISTORICAL_DATA_HS,

    /**
     * Callback indicating historical data transferred complete for Hs device.
     */
    ACTION_HISTORICAL_DATA_COMPLETE_HS: RCTModule.ACTION_HISTORICAL_DATA_COMPLETE_HS,
    /**
     * The action value of event indicating the no history data of HS device.<br/>
     * Callback indicating no historical data for HS device.<br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:HSProfileModule.ACTION_NO_HISTORICALDATA HSProfileModule.ACTION_NO_HISTORICALDATA("noHistoryData")}</td></tr>
     * </tbody>
     * </table>
     */
    ACTION_NO_HISTORICALDATA: RCTModule.ACTION_NO_HISTORICALDATA,

    /**
     * The action type of callback indicating the error of HS device.<br/>
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
     * <b>Example message:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "error": 400,<br/>
     * &nbsp; &nbsp; "description": "getOfflineData() parameter userPstCode should be in the range [0, 19]."<br/>
     * }<br/>
     */
    ACTION_ERROR_HS: RCTModule.ACTION_ERROR_HS,

    //Keys
    /**
     * The key of live data weight<br/>
     * The value is float type, it's unit is kg.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * LIVEDATA_HS ----> "value".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0.0-150.0
     */
    LIVEDATA_HS: RCTModule.LIVEDATA_HS,
    /**
     * The key of the data id for HS device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * DATAID ----> "dataID".<br/>
     * </li>
     * </ul>
     * <b>Example: </b><br/>
     * 67FFC7A454148723718144A604D4152B
     */
    DATAID: RCTModule.DATAID,
    /**
     * The key of the weight result for HS device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * WEIGHT_HS ----> "value".<br/>
     * </li>
     * </ul>
     * <b>Value range: </b><br/>
     * 0.0-150.0
     */
    WEIGHT_HS: RCTModule.WEIGHT_HS,
    /**
     * The key of the body fat rate for HS device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * FAT_HS ----> "fat".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0.0-100.0
     */
    FAT_HS: RCTModule.FAT_HS,
    /**
     * The key of the body water rate for HS device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * WATER_HS ----> "water".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0.0-100.0
     */
    WATER_HS: RCTModule.WATER_HS,
    /**
     * The key of the body muscle rate for HS device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * MUSCLE_HS ----> "muscle".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0.0-100.0
     */
    MUSCLE_HS: RCTModule.MUSCLE_HS,
    /**
     * The key of the bone mass for HS device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * SKELETON_HS ----> "skeleton".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0.0-25.5(0xFF/10.0)
     */
    SKELETON_HS: RCTModule.SKELETON_HS,
    /**
     * The key of the fat level for HS device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * FATELEVEL_HS ----> "fatelevel".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    FATELEVEL_HS: RCTModule.FATELEVEL_HS,
    /**
     * The key of the DCI for HS device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * DCI_HS ----> "DCI".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    DCI_HS: RCTModule.DCI_HS,
    /**
     * The key of the historical data for HS device.<br/>
     * Returns the message Key corresponding relation:
     * <ul>
     * <li>
     * HISTORDATA__HS ----> "historyData".<br/>
     * </li>
     * </ul>
     */
    HISTORDATA__HS: RCTModule.HISTORDATA__HS,
    /**
     * The key of the measure date for HS device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * MEASUREMENT_DATE_HS ----> "date".<br/>
     * </li>
     * </ul>
     * <b>Value format:</b>
     * yyyy-MM-dd HH:mm:ss
     */
    MEASUREMENT_DATE_HS: RCTModule.MEASUREMENT_DATE_HS,
    /**
     * The key of error ID number of HS device.<br/>
     * The key and value will be as below:<br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>1</td><td>Battery level is low.</td></tr>
     * <tr><td>2</td><td>The Scale failed to initialize.</td></tr>
     * <tr><td>3</td><td>Maximum weight has been exceeded.</td></tr>
     * <tr><td>4</td><td>The Scale can't capture a steady reading.</td></tr>
     * <tr><td>5</td><td>Bluetooth connection error.</td></tr>
     * <tr><td>6</td><td>Movement while measuring.</td></tr>
     * <tr><td>7</td><td>Invalidate.</td></tr>
     * <tr><td>8</td><td>Scale memory access error.</td></tr>
     * <tr><td>9</td><td>No memory.</td></tr>
     * <tr><td>10</td><td>Device disconnect.</td></tr>
     * <tr><td>11</td><td>Communication error.</td></tr>
     * <tr><td>12</td><td>HS4DeviceRecWeightError.</td></tr>
     * <tr><td>13</td><td>Failed to create measurement connections.</td></tr>
     * <tr><td>14</td><td>Instruction timeout.</td></tr>
     * <tr><td>{@link module:HSProfileModule.ERROR_ID_ILLEGAL_ARGUMENT 400}</td><td>indicates parameter error("400")</td></tr>
     * <tr><td>{@link module:HSProfileModule.ERROR_ID_WIFI_DISABLED 500}</td><td>indicates wifi is disabled("500")</td></tr>
     * </tbody>
     * </table>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * ERROR_NUM_HS ----> "error".<br/>
     * </li>
     * </ul>
     */
    ERROR_NUM_HS: RCTModule.ERROR_NUM_HS,
    /**
     * The error ID indicates parameter error.<br/>
     * <b>Value</b>
     * 400
     */
    ERROR_ID_ILLEGAL_ARGUMENT: RCTModule.ERROR_ID_ILLEGAL_ARGUMENT,
    /**
     * The error ID indicates wifi is disabled.<br/>
     * <b>Value</b>
     * 500
     */
    ERROR_ID_WIFI_DISABLED: RCTModule.ERROR_ID_WIFI_DISABLED,
    /**
     * The key of the data id for HS device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * ERROR_DESCRIPTION_HS ----> "description".<br/>
     * </li>
     * </ul>
     * <b>Example: </b><br/>
     * {<br/>
     * &nbsp; "description": "getOfflineData() parameter userPstCode should be in the range [0, 19]."<br/>
     * }<br/>
     */
    ERROR_DESCRIPTION_HS: RCTModule.ERROR_DESCRIPTION_HS
}