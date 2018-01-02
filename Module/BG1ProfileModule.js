'use strict';


var { NativeModules } = require('react-native');

var RCTModule = NativeModules.BG1ProfileModule

/**
 * @module BG1ProfileModule
 */
module.exports = {
    /**
     * Callback indicating the send code result of bg1 device.
     * <ul>
     * KeyList:
     * <ul>
     * <li>
     * {@link #BG1_SENDCODE_RESULT}
     * </li>
     */
    ACTION_BG1_SENDCODE_RESULT:RCTModule.ACTION_BG1_SENDCODE_RESULT,

    /**
     * The send code result of bg1 device.
     * <p/>
     * value : 0 success; other error
     */
    BG1_SENDCODE_RESULT:RCTModule.BG1_SENDCODE_RESULT,

    /**
     * Callback indicating the error of Bg1 device.
     * <ul>
     * KeyList:
     * <ul>
     * <li>
     * {@link #BG1_MEASURE_ERROR}
     * </li>
     * </ul>
     * eg. {"error_num_for_bg1":0}
     * </ul>
     */
    ACTION_BG1_MEASURE_ERROR:RCTModule.ACTION_BG1_MEASURE_ERROR,

    /**
     * Flag Error number of Bg1 device.
     * <p>Error code and Description</p>
     * <p>0:Battery is low.</p>
     * <p>1:Glucose test result is out of the measurement range.</p>
     * <p>2:Unknown interference detected, please repeat the test.</p>
     * <p>3:Strip is used or unknown moisture detected, discard the test strip and repeat the test with a new strip..</p>
     * <p>4:Communication error,resend the code to repeat the test. {@link Bg1Control#sendCode(String)}</p>
     * <p>5:The environmental temperature is beyond normal range, place the meter at room temperature for at least 30 minutes, then repeat the test.</p>
     * <p>6:The environmental temperature is beyond normal range, place the meter at room temperature for at least 30 minutes, then repeat the test.</p>
     * <p>7:Test strip coding error.</p>
     * <p>8:Communication error,rescan the code to repeat the test.</p>
     * <p>9:Communication error,Repeat the test with a new test strip. If the problem persists, contact iHealth customer service for assistance.</p>
     * <p>10:Communication error,Repeat the test with a new test strip. If the problem persists, contact iHealth customer service for assistance.</p>
     * <p>11:Communication error,Repeat the test with a new test strip. If the problem persists, contact iHealth customer service for assistance.</p>
     * <p>12:Glucose test result is low.</p>
     * <p>13:Glucose test result is high.</p>
     * <p>101:BG meter is in sleeping mode, needs repair.</p>
     * <p>102:BG meter handshake failed.</p>
     * <p>400:Parameters out of range.</p>
     * <p>401:Dolby is on ,please turn it off.</p>
     */
    BG1_MEASURE_ERROR:RCTModule.BG1_MEASURE_ERROR,

    /**
     * Callback indicating the strip in action.
     */
    ACTION_BG1_MEASURE_STRIP_IN:RCTModule.ACTION_BG1_MEASURE_STRIP_IN,

    /**
     * Callback indicating the get blood action.
     */
    ACTION_BG1_MEASURE_GET_BLOOD:RCTModule.ACTION_BG1_MEASURE_GET_BLOOD,

    /**
     * Callback indicating the measure result.
     * <ul>
     * KeyList:
     * <ul>
     * <li>
     * {@link #BG1_MEASURE_RESULT}
     * </li>
     */
    ACTION_BG1_MEASURE_RESULT:RCTModule.ACTION_BG1_MEASURE_RESULT,

    /**
     * The measure result
     * <p/>
     * Range : 20-600 mg/dL
     */
    BG1_MEASURE_RESULT:RCTModule.BG1_MEASURE_RESULT,

    /**
     * Callback indicating the strip out action.
     */
    ACTION_BG1_MEASURE_STRIP_OUT:RCTModule.ACTION_BG1_MEASURE_STRIP_OUT,

    /**
     * Callback indicating the Bg1 device get in standby mode.
     */
    ACTION_BG1_MEASURE_STANDBY:RCTModule.ACTION_BG1_MEASURE_STANDBY,

    /**
     * the data id
     */
    DATA_ID:RCTModule.DATA_ID,
    

    /**
     * Callback indicating the code analysis result.
     */
    ACTION_CODE_ANALYSIS:RCTModule.ACTION_CODE_ANALYSIS,


    /**
     * the strip number
     */
    STRIP_NUM_BG:RCTModule.STRIP_NUM_BG,

    /**
     * the expire time
     */
    STRIP_EXPIRETIME_BG:RCTModule.STRIP_EXPIRETIME_BG,

    /**
     * the bottle id
     */
    BOTTLEID_BG:RCTModule.BOTTLEID_BG

}