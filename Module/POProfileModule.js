/**
 * Created by lixuesong on 15/11/2016.
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.POProfileModule

/**
 * @module POProfileModule
 */
module.exports = {
    // Actions
    /**
     * The action value of event indicating the battery of PO3 device.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_BATTERY_PO POProfileModule.ACTION_BATTERY_PO("battery_po")}</td></tr>
     * <tr><td>{@link module:POProfileModule.BATTERY_PO POProfileModule.BATTERY_PO("battery")}</td><td>Battery percentage.<br/>Value range:0-100(0xff)</td></tr>
     * </tbody>
     * </table>
     * <b>message example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "battery": 90<br/>
     * }<br/>
     */
    ACTION_BATTERY_PO: RCTModule.ACTION_BATTERY_PO,
    /**
     * The action value of event indicating the start measure of PO3 device.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_LIVEDA_PO POProfileModule.ACTION_LIVEDA_PO("liveData_po")}</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_WAVE_PO POProfileModule.PULSE_WAVE_PO("pulseWave")}</td><td>The pulse wave data.<br/>Example: [2415,2371,2279]</td></tr>
     * <tr><td>{@link module:POProfileModule.PI_PO POProfileModule.PI_PO("pi")}</td><td>The perfusion index data.<br/>Example: 0.03999999910593033</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_STRENGTH_PO POProfileModule.PULSE_STRENGTH_PO("pulsestrength")}</td><td>The pulse strength data.<br/>Example: 6</td></tr>
     * <tr><td>{@link module:POProfileModule.BLOOD_OXYGEN_PO POProfileModule.BLOOD_OXYGEN_PO("bloodoxygen")}</td><td>The blood oxygen data.<br/>Example: 70</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_RATE_PO POProfileModule.PULSE_RATE_PO("heartrate")}</td><td>The heart rate data.<br/>Example: 30</td></tr>
     * </tbody>
     * </table>
     * <b>message example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "pulseWave": [2415,2371,2279],<br/>
     * &nbsp; &nbsp; "pi": 0.03999999910593033,<br/>
     * &nbsp; &nbsp; "pulsestrength": 6,<br/>
     * &nbsp; &nbsp; "bloodoxygen": 70,<br/>
     * &nbsp; &nbsp; "heartrate": 30<br/>
     * }<br/>
     */
    ACTION_LIVEDA_PO: RCTModule.ACTION_LIVEDA_PO,
    /**
     * The action value of event indicating the stop measure of PO3 device.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_RESULTDATA_PO POProfileModule.ACTION_RESULTDATA_PO("resultData_po")}</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_WAVE_PO POProfileModule.PULSE_WAVE_PO("pulseWave")}</td><td>The pulse wave data.<br/>Example: [0,0,0]</td></tr>
     * <tr><td>{@link module:POProfileModule.DATAID POProfileModule.DATAID("dataID")}</td><td>The data id.<br/>Example: 67FFC7A454148723718144A604D4152B</td></tr>
     * <tr><td>{@link module:POProfileModule.PI_PO POProfileModule.PI_PO("pi")}</td><td>The perfusion index data.<br/>Example: 0.0430000014603138</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_STRENGTH_PO POProfileModule.PULSE_STRENGTH_PO("pulsestrength")}</td><td>The pulse strength data.<br/>Example: 0</td></tr>
     * <tr><td>{@link module:POProfileModule.BLOOD_OXYGEN_PO POProfileModule.BLOOD_OXYGEN_PO("bloodoxygen")}</td><td>The blood oxygen data.<br/>Example: 99</td></tr>
     * <tr><td>{@link module:POProfileModule.PULSE_RATE_PO POProfileModule.PULSE_RATE_PO("heartrate")}</td><td>The heart rate data.<br/>Example: 65</td></tr>
     * </tbody>
     * </table>
     * <b>message example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "pulseWave": [0,0,0],<br/>
     * &nbsp; &nbsp; "dataID": 67FFC7A454148723718144A604D4152B,<br/>
     * &nbsp; &nbsp; "pi": 0.0430000014603138,<br/>
     * &nbsp; &nbsp; "pulsestrength": 0,<br/>
     * &nbsp; &nbsp; "bloodoxygen": 99,<br/>
     * &nbsp; &nbsp; "heartrate": 65<br/>
     * }<br/>
     */
    ACTION_RESULTDATA_PO: RCTModule.ACTION_RESULTDATA_PO,
    /**
     * The action value of event indicating the history data of PO3 device.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_OFFLINEDATA_PO POProfileModule.ACTION_OFFLINEDATA_PO("offlineData_po")}</td></tr>
     * <tr><td>{@link module:POProfileModule.OFFLINEDATA_PO POProfileModule.OFFLINEDATA_PO("offlineData")}</td><td>
     * {@link module:POProfileModule.DATAID POProfileModule.DATAID("dataID")} The data id. Example: 67FFC7A454148723718144A604D4152B<br/>
     * {@link module:POProfileModule.MEASURE_DATE_PO POProfileModule.MEASURE_DATE_PO("measureDate")} The measure data.<br/>
     * {@link module:POProfileModule.BLOOD_OXYGEN_PO POProfileModule.BLOOD_OXYGEN_PO("bloodoxygen")} The blood oxygen data. Example: 99<br/>
     * {@link module:POProfileModule.PULSE_RATE_PO POProfileModule.PULSE_RATE_PO("heartrate")} The heart rate data. Example: 65<br/>
     * {@link module:POProfileModule.PULSE_WAVE_PO POProfileModule.PULSE_WAVE_PO("pulseWave")} The pulse wave data. Example: [0,0,0]
     * </td></tr>
     * </tbody>
     * </table>
     */
    ACTION_OFFLINEDATA_PO: RCTModule.ACTION_OFFLINEDATA_PO,
    /**
     * The action value of event indicating the no history data of PO3 device.<br/>
     * Callback indicating no historical data for Po device.<br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_NO_OFFLINEDATA_PO POProfileModule.ACTION_NO_OFFLINEDATA_PO("noOfflineData_po")}</td></tr>
     * </tbody>
     * </table>
     */
    ACTION_NO_OFFLINEDATA_PO: RCTModule.ACTION_NO_OFFLINEDATA_PO,
    /**
     * Callback indicating no the error for Po device.<br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:POProfileModule.ACTION_ERROR_PO POProfileModule.ACTION_ERROR_PO("error_po")}</td></tr>
     * </tbody>
     * </table>
     */
    ACTION_ERROR_PO: RCTModule.ACTION_ERROR_PO,

    //Keys
    /**
     * The key of the power of battery for Po device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * BATTERY_PO ----> "battery".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0-100(0xff)
     */
    BATTERY_PO: RCTModule.BATTERY_PO,
    /**
     * The key of the pulse wave for Po device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * PULSE_WAVE_PO ----> "pulseWave".<br/>
     * </li>
     * </ul>
     * <b>Example: </b><br/>
     * [2415,2371,2279]
     */
    PULSE_WAVE_PO: RCTModule.PULSE_WAVE_PO,
    /**
     * The key of the PI data for Po device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * PI_PO ----> "pi".<br/>
     * </li>
     * </ul>
     * <b>Example: </b><br/>
     * 0.03999999910593033
     */
    PI_PO: RCTModule.PI_PO,
    /**
     * The key of the pulse strength data for Po device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * PULSE_STRENGTH_PO ----> "pulsestrength".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0-255(0xff)
     */
    PULSE_STRENGTH_PO: RCTModule.PULSE_STRENGTH_PO,
    /**
     * The key of the blood oxygen data for Po device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * BLOOD_OXYGEN_PO ----> "bloodoxygen".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    BLOOD_OXYGEN_PO: RCTModule.BLOOD_OXYGEN_PO,
    /**
     * The key of the pulse rate data for Po device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * PULSE_RATE_PO ----> "heartrate".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    PULSE_RATE_PO: RCTModule.PULSE_RATE_PO,
    /**
     * The key of the data id for Po device.<br/>
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
     * The key of the historical data for Po device.<br/>
     * Returns the message Key corresponding relation:
     * <ul>
     * <li>
     * OFFLINEDATA_PO ----> "offlineData".<br/>
     * </li>
     * </ul>
     */
    OFFLINEDATA_PO: RCTModule.OFFLINEDATA_PO,
    /**
     * The key of the measure date for Po device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * MEASURE_DATE_PO ----> "measureDate".<br/>
     * </li>
     * </ul>
     */
    MEASURE_DATE_PO: RCTModule.MEASURE_DATE_PO
}