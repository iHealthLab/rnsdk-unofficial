/**
 * Created by lixuesong on 15/11/2016.
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.BTMProfileModule

/**
 * @module BTMProfileModule
 */
module.exports = {
    // Actions
    /**
     * The action value of event indicating the battery of BTM device.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_BTM_BATTERY BTMProfileModule.ACTION_BTM_BATTERY("battery_btm")}</td></tr>
     * <tr><td>{@link module:BTMProfileModule.BTM_BATTERY BTMProfileModule.BTM_BATTERY("battery")}</td><td>Battery percentage.<br/>0 Low powe ,1 Not Low power</td></tr>
     * </tbody>
     * </table>
     * <b>message example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "battery": 0<br/>
     * }<br/>
     */
    ACTION_BTM_BATTERY: RCTModule.ACTION_BTM_BATTERY,
    /**
     * The action value of event indicating the get memory data of BTM device.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_BTM_MEMORY BTMProfileModule.ACTION_BTM_MEMORY("memory_btm")}</td></tr>
     * <tr><td>{@link module:BTMProfileModule.MEMORY_COUNT BTMProfileModule.MEMORY_COUNT("memory_count")}</td><td>The key of the count of memory for BTM device.<br/>alue range: 0-255</td></tr>
     * <tr><td>{@link module:BTMProfileModule.BTM_TEMPERATURE_ARRAY BTMProfileModule.BTM_TEMPERATURE_ARRAY("btm_temperature_array")}</td><td>The key of the temperature array for BTM device.<br/></td></tr>
     * <tr><td>{@link module:BTMProfileModule.BTM_TEMPERATURE BTMProfileModule.BTM_TEMPERATURE("btm_temperature")}</td><td>The key of the temperature for BTM device.<br/></td></tr>
     * <tr><td>{@link module:BTMProfileModule.BTM_TEMPERATURE_TARGET BTMProfileModule.BTM_TEMPERATURE_TARGET("btm_temperature_target")}</td><td>The key of the temperature target for BTM device.<br/></td></tr>
     * <tr><td>{@link module:BTMProfileModule.BTM_MEASURE_TIME BTMProfileModule.BTM_MEASURE_TIME("measure_time")}</td><td>The key of the time of memory data for BTM device.<br/>Value Format: yyyy-MM-dd HH:mm</td></tr>
     * </tbody>
     * </table>
     */
    ACTION_BTM_MEMORY: RCTModule.ACTION_BTM_MEMORY,
    /**
     * The action value of event indicating the measure result of BTM device.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_BTM_MEASURE BTMProfileModule.ACTION_BTM_MEASURE("measure_btm")}</td></tr>
     * <tr><td>{@link module:BTMProfileModule.BTM_TEMPERATURE BTMProfileModule.BTM_TEMPERATURE("btm_temperature")}</td><td>The key of the temperature for BTM device.<br/></td></tr>
     * <tr><td>{@link module:BTMProfileModule.BTM_TEMPERATURE_TARGET BTMProfileModule.BTM_TEMPERATURE_TARGET("btm_temperature_target")}</td><td>The key of the temperature target for BTM device.<br/></td></tr>
     * </tbody>
     * </table>
     */
    ACTION_BTM_MEASURE: RCTModule.ACTION_BTM_MEASURE,
    /**
     * The action type of callback after all method is called of BTM device.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_BTM_CALLBACK BTMProfileModule.ACTION_BTM_CALLBACK("btm_callback")}</td></tr>
     * </tbody>
     * </table>
     */
    ACTION_BTM_CALLBACK: RCTModule.ACTION_BTM_CALLBACK,
    /**
     * Callback indicating no the error for BTM device.<br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:BTMProfileModule.ACTION_ERROR_BTM BTMProfileModule.ACTION_ERROR_BTM("action_error_btm")}</td></tr>
     * <tr><td>{@link module:BTMProfileModule.ERROR_NUM_BTM BTMProfileModule.ERROR_NUM_BTM("error_num")}</td><td>The key of error ID number of continue BTM device.<br/>101:Invalid state.</td></tr>
     * <tr><td>{@link module:BTMProfileModule.ERROR_DESCRIPTION_BTM BTMProfileModule.ERROR_DESCRIPTION_BTM("description")}</td><td>Callback indicating the error message.<br/>Invalid state.</td></tr>
     * </tbody>
     * </table>
     */
    ACTION_ERROR_BTM: RCTModule.ACTION_ERROR_BTM,

    //Keys
    /**
     * The key of the power of battery for BTM device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * BTM_BATTERY ----> "battery".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0 Low power
     * 1 Not Low power
     */
    BTM_BATTERY: RCTModule.BTM_BATTERY,
    /**
     * The key of the count of memory for BTM device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * MEMORY_COUNT ----> "memory_count".<br/>
     * </li>
     * </ul>
     * <b>Value range:</b><br/>
     * 0-255
     */
    MEMORY_COUNT: RCTModule.MEMORY_COUNT,
    /**
     * The key of the temperature array for BTM device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * BTM_TEMPERATURE_ARRAY ----> "btm_temperature_array".<br/>
     * </li>
     * </ul>
     */
    BTM_TEMPERATURE_ARRAY: RCTModule.BTM_TEMPERATURE_ARRAY,
    /**
     * The key of the temperature target for BTM device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * BTM_TEMPERATURE_TARGET ----> "btm_temperature_target".<br/>
     * </li>
     * </ul>
     */
    BTM_TEMPERATURE_TARGET: RCTModule.BTM_TEMPERATURE_TARGET,
    /**
     * The key of the temperature for BTM device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * BTM_TEMPERATURE ----> "btm_temperature".<br/>
     * </li>
     * </ul>
     */
    BTM_TEMPERATURE: RCTModule.BTM_TEMPERATURE,
    /**
     * The key of the time of memory data for BTM device.<br/>
     * Returns the message Key corresponding relation:<br/>
     * <ul>
     * <li>
     * BTM_MEASURE_TIME ----> "measure_time".<br/>
     * </li>
     * </ul>
     * <b>Value Format:</b><br/>
     * yyyy-MM-dd HH:mm
     */
    BTM_MEASURE_TIME: RCTModule.BTM_MEASURE_TIME,
    /**
     * The key of error ID number of continue BTM device.<br/>
     * <p>
     * Flag Error number of BTM device.
     * <ol>
     * <p>Error code and Description</p>
     * <p>
     * <p>101:Invalid state.</p>
     */
    ERROR_NUM_BTM: RCTModule.ERROR_NUM_BTM,
    /**
     * Callback indicating the error message.
     */
    ERROR_DESCRIPTION_BTM: RCTModule.ERROR_DESCRIPTION_BTM
}