/**
 * 
 */
'use strict';


var { NativeModules } = require('react-native');

var RCTModule = NativeModules.ECGProfileModule

/**
 * @module ECGProfileModule
 */
module.exports = {


    /**
     * The action value of event indicates the error of ECG device.<br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *      <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *      <tr><td>action</td><td>{@link module:ECGProfileModule.ACTION_ERROR_ECG ECGProfileModule.ACTION_ERROR_ECG("error_ecg")}</td></tr>
     *      <tr><td>{@link module:ECGProfileModule.ERROR_NUM_ECG ECGProfileModule.ERROR_NUM_ECG("error")}</td><td>the error of ECG device.<br/> e.g. 400</td></tr>
     * </table>
     *
     * <b>message example:</b><br/>
     * <b>{<br/>
     * &nbsp; &nbsp; "error": 400,<br/>
     * &nbsp; &nbsp; "description": "setUnit() parameter unit should be 0 or 1."<br/>
     * }<br/></b>
     */
    ACTION_ERROR_ECG:RCTModule.ACTION_ERROR_ECG,


    /**
     * The Key of error number of ECG device. <br/>
     *
     * <b>Value range:</b><br/>
     * <p>1:Electrode Loss.</p>
     * <p>2:Electrode Loss Recovery.</p>
     * <p>3:Electrode Loss Timeout.</p>
     * <p>4:SDCard Communication Error.</p>
     * <p>5:Collection Module Error.</p>
     * <p>6:Low Power.</p>
     * <p>7:Device Memory Full.</p>
     * <p>8:Disconnect.</p>
     * <p>9:Over Time.</p>
     * <p>10:Delete Error.</p>
     * <p>11:Error Data.</p>
     * <p>12:No Data.</p>
     * <p>13:Reset SDCard Error.</p>
     * <p>400:Parameter Error.</p>
     * <p>401:Firmware Version Is Not Supported.</p>
     */
    ERROR_NUM_ECG:RCTModule.ERROR_NUM_ECG,

    /**
     * The Key of error description of ECG device. <br/>
     *
     * <b>Value range:</b><br/>
          * <p>1:Electrode Loss.</p>
     * <p>2:Electrode Loss Recovery.</p>
     * <p>3:Electrode Loss Timeout.</p>
     * <p>4:SDCard Communication Error.</p>
     * <p>5:Collection Module Error.</p>
     * <p>6:Low Power.</p>
     * <p>7:Device Memory Full.</p>
     * <p>8:Disconnect.</p>
     * <p>9:Over Time.</p>
     * <p>10:Delete Error.</p>
     * <p>11:Error Data.</p>
     * <p>12:No Data.</p>
     * <p>13:Reset SDCard Error.</p>
     * <p>400:Parameter Error.</p>
     * <p>401:Firmware Version Is Not Supported.</p>
     */
    ERROR_DESCRIPTION_ECG:RCTModule.ERROR_DESCRIPTION_ECG,

    /**
     * The action value of event indicates the battery of ECG device.<br/>
     * The key and value will be as below: <br/>
     *
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *      <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *      <tr><td>action</td><td>{@link module:ECGProfileModule.ACTION_BATTERY_ECG ECGProfileModule.ACTION_BATTERY_ECG("battery_ecg")}</td></tr>
     *      <tr><td>{@link module:ECGProfileModule.BATTERY_ECG ECGProfileModule.BATTERY_ECG("battery")}</td><td>Battery status.<br/> e.g. 90</td></tr>
     * </table>
     *
     * <b>message example:</b><br/>
     * <b>{<br/>
     * &nbsp; &nbsp; "battery": 90<br/>
     * }<br/></b>
     *
     */
    ACTION_BATTERY_ECG:RCTModule.ACTION_BATTERY_ECG,

    /**
     * The Key of BATTERY_ECG for ECG device. <br/>
     * <b>Value range:</b><br/>
     * 0-100.
     */
    BATTERY_ECG:RCTModule.BATTERY_ECG,
    /**
     * sync time.<br/>
     * The key and value will be as below: <br/>
     *
     * <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *     <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *     <tr><td>action</td><td>{@link module:ECGProfileModule.ACTION_SYSTIME ECGProfileModule.ACTION_SYSTIME("ACTION_SYSTIME")}</td></tr>
     * </table>
     *
     * <b>message example:</b><br/>
     * <b> null </b>
     *
     */
    ACTION_SYSTIME:RCTModule.ACTION_SYSTIME,
    
    /**
     * Measure. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */
    ACTION_MEASURE_ECG:RCTModule.ACTION_MEASURE_ECG,

    /**
     * Stop Measure.<br/>
     * <b>Value Format:</b> 32 bits Hex String.
     * <p>Example:</p>
     * "810D4F4CED95759AB738EBC1E74EA8F6"
     */
    ACTION_STOPMEASURE_ECG:RCTModule.ACTION_STOPMEASURE_ECG,

    /**
     * ACTION_MEASURE_WAVEData. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */
    ACTION_MEASURE_WAVEData:RCTModule.ACTION_MEASURE_WAVEData,
    /**
     * ACTION_MEASURE_ECGPulse. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */
    ACTION_MEASURE_ECGPulse:RCTModule.ACTION_MEASURE_ECGPulse,
    /**
     * ACTION_SYNCDATA_ECGUSB. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */

    ACTION_SYNCDATA_ECGUSB:RCTModule.ACTION_SYNCDATA_ECGUSB,
    /**
     * ACTION_STARTSYNCDATA_ECGUSB. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */
    ACTION_STARTSYNCDATA_ECGUSB:RCTModule.ACTION_STARTSYNCDATA_ECGUSB,
    /**
     * ACTION_SYNCDATAINFO_ECGUSB. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */
    ACTION_SYNCDATAINFO_ECGUSB:RCTModule.ACTION_SYNCDATAINFO_ECGUSB,
    /**
     * DATAINFO. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */
    DATAINFO:RCTModule.DATAINFO,
    /**
     * ACTION_FINISHSYNCDATA_ECGUSB. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */
    ACTION_FINISHSYNCDATA_ECGUSB:RCTModule.ACTION_FINISHSYNCDATA_ECGUSB,
    /**
     * ACTION_SYNCDATAPROGRESS_ECGUSB. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */
    ACTION_SYNCDATAPROGRESS_ECGUSB:RCTModule.ACTION_SYNCDATAPROGRESS_ECGUSB,
    /**
     * PROGRESS. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */
    PROGRESS:RCTModule.PROGRESS,
    /**
     * ACTION_DELETEDATA_ECGUSB. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */
    ACTION_DELETEDATA_ECGUSB:RCTModule.ACTION_DELETEDATA_ECGUSB,
    
}


