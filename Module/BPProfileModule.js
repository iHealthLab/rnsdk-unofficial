/**
 * Created by zhangxu on 16/11/16.
 */
'use strict';


var { NativeModules } = require('react-native');

var RCTModule = NativeModules.BPProfileModule

/**
 * @module BPProfileModule
 */
module.exports = {


    /**
     * The action value of event indicates the error of BP device.<br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *      <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *      <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ERROR_BP BPProfileModule.ACTION_ERROR_BP("error_bp")}</td></tr>
     *      <tr><td>{@link module:BPProfileModule.ERROR_NUM_BP BPProfileModule.ERROR_NUM_BP("error")}</td><td>the error of Bp device.<br/> e.g. 400</td></tr>
     * </table>
     *
     * <b>message example:</b><br/>
     * <b>{<br/>
     * &nbsp; &nbsp; "error": 400,<br/>
     * &nbsp; &nbsp; "description": "setUnit() parameter unit should be 0 or 1."<br/>
     * }<br/></b>
     */
    ACTION_ERROR_BP:RCTModule.ACTION_ERROR_BP,


    /**
     * The Key of error number of Bp device. <br/>
     *
     * <b>Value range:</b><br/>
     * <p>0:not find a suitable zero in 20s.</p>
     * <p>1:not find high pressure.</p>
     * <p>2:not find low pressure or the high pressure value is lower than the low pressure value.</p>
     * <p>3:pressurization fast.</p>
     * <p>4:pressurization slow.</p>
     * <p>5:pressure exceeds 300mmHg.</p>
     * <p>6:time of pressure greater than 15 mmHg exceeds 160s.</p>
     * <p>7:EE read and write error.</p>
     * <p>8:EE three backup data error.</p>
     * <p>9:retention.</p>
     * <p>10:SPAN value error.</p>
     * <p>11:CRC errors.</p>
     * <p>12:connect error.</p>
     * <p>13:low power tips.</p>
     * <p>14:high or low pressure value of measurement exceeds the set upper limit.</p>
     * <p>15:high or low pressure value of measurement exceeds the set lower limit.</p>
     * <p>16:arm movement during the measurement over the machine set point.</p>
     * <p>400:the argument of method is illegal.</p>
     * <p>401:the operation is illegal.</p>
     */
    ERROR_NUM_BP:RCTModule.ERROR_NUM_BP,

    /**
     * The Key of error description of Bp device. <br/>
     *
     * <b>Value range:</b><br/>
     * <p>0:not find a suitable zero in 20s.</p>
     * <p>1:not find high pressure.</p>
     * <p>2:not find low pressure or the high pressure value is lower than the low pressure value.</p>
     * <p>3:pressurization fast.</p>
     * <p>4:pressurization slow.</p>
     * <p>5:pressure exceeds 300mmHg.</p>
     * <p>6:time of pressure greater than 15 mmHg exceeds 160s.</p>
     * <p>7:EE read and write error.</p>
     * <p>8:EE three backup data error.</p>
     * <p>9:retention.</p>
     * <p>10:SPAN value error.</p>
     * <p>11:CRC errors.</p>
     * <p>12:connect error.</p>
     * <p>13:low power tips.</p>
     * <p>14:high or low pressure value of measurement exceeds the set upper limit.</p>
     * <p>15:high or low pressure value of measurement exceeds the set lower limit.</p>
     * <p>16:arm movement during the measurement over the machine set point.</p>
     * <p>400:the argument of method is illegal.</p>
     * <p>401:the operation is illegal.</p>
     */
    ERROR_DESCRIPTION_BP:RCTModule.ERROR_DESCRIPTION_BP,

    /**
     * The action value of event indicates the battery of BP device.<br/>
     * The key and value will be as below: <br/>
     *
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *      <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *      <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_BATTERY_BP BPProfileModule.ACTION_BATTERY_BP("battery_bp")}</td></tr>
     *      <tr><td>{@link module:BPProfileModule.BATTERY_BP BPProfileModule.BATTERY_BP("battery")}</td><td>Battery status.<br/> e.g. 90</td></tr>
     * </table>
     *
     * <b>message example:</b><br/>
     * <b>{<br/>
     * &nbsp; &nbsp; "battery": 90<br/>
     * }<br/></b>
     *
     */
    ACTION_BATTERY_BP:RCTModule.ACTION_BATTERY_BP,

    /**
     * The Key of battery for BP device. <br/>
     * <b>Value range:</b><br/>
     * 0-100.
     */
    BATTERY_BP:RCTModule.BATTERY_BP,
    /**
     * The action value of event indicates the Bp device is being initialized and the parameter is reset.<br/>
     * The key and value will be as below: <br/>
     *
     * <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *     <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *     <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ZOREING_BP BPProfileModule.ACTION_ZOREING_BP("zoreing_bp")}</td></tr>
     * </table>
     *
     * <b>message example:</b><br/>
     * <b> null </b>
     *
     */
    ACTION_ZOREING_BP:RCTModule.ACTION_ZOREING_BP,
    /**
     * The action value of event indicates the Initialization of the Bp device has been completed.<br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *     <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *     <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ZOREOVER_BP BPProfileModule.ACTION_ZOREOVER_BP("zoreover_bp")}</td></tr>
     * </table>
     * <b>message example:</b><br/>
     * <b> null </b>
     */
    ACTION_ZOREOVER_BP:RCTModule.ACTION_ZOREOVER_BP,
    /**
     * The action value of event indicates the device's pressure in the measurement. <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *      <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *      <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ONLINE_PRESSURE_BP BPProfileModule.ACTION_ONLINE_PRESSURE_BP("online_pressure_bp")}</td></tr>
     *      <tr><td>{@link module:BPProfileModule.BLOOD_PRESSURE_BP BPProfileModule.BLOOD_PRESSURE_BP("pressure")}</td><td>Real time pressure.<br/>e.g. 23</td></tr>
     * </table>
     * <b>message example:</b><br/>
     * <b>
     *     {<br/>
     *     &nbsp; &nbsp; "pressure": 0 <br/>
     *     }<br/>
     * </b>
     */
    ACTION_ONLINE_PRESSURE_BP:RCTModule.ACTION_ONLINE_PRESSURE_BP,

    /**
     * The Key of Bp device pressure. <br/>
     * <b>Value range:</b><br/>
     * <b>0-255</b>
     */
    BLOOD_PRESSURE_BP:RCTModule.BLOOD_PRESSURE_BP,
    /**
     * The action value of event indicates the device's pressure and pulse wave in the measurement. <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *     <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *     <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP("online_pulsewave_bp")}</td></tr>
     *     <tr><td>{@link module:BPProfileModule.BLOOD_PRESSURE_BP BPProfileModule.BLOOD_PRESSURE_BP("pressure")}</td><td>Real time pressure.<br/> e.g. 23</td></tr>
     *     <tr><td>{@link module:BPProfileModule.PULSEWAVE_BP BPProfileModule.PULSEWAVE_BP("wave")}</td><td>Blood pressure pulse wave.<br/> e.g. [15,15,15,15,15]</td></tr>
     *     <tr><td>{@link module:BPProfileModule.FLAG_HEARTBEAT_BP BPProfileModule.FLAG_HEARTBEAT_BP("heartbeat")}</td><td>heartbeat.<br/> e.g. true</td></tr>
     * </table>
     *
     * <b>message example:</b><br/>
     * <b>
     *     {<br/>
     *     &nbsp; &nbsp; "pressure": 37, <br/>
     *     &nbsp; &nbsp; "wave": "[15,15,15,15,15]", <br/>
     *     &nbsp; &nbsp; "heartbeat": false <br/>
     *     }<br/>
     * </b>
     */
    ACTION_ONLINE_PULSEWAVE_BP:RCTModule.ACTION_ONLINE_PULSEWAVE_BP,

    /**
     * The Key of heartbeat graphical control flag. <br/>
     * <b>Value range:</b><br/>
     * <b>true: device can check the heartbeat</b> <br/>
     * <b>false: device can't check the heartbeat</b> <br/>
     */
    FLAG_HEARTBEAT_BP:RCTModule.FLAG_HEARTBEAT_BP,

    /**
     * The Key of blood pressure pulse wave.<br />
     */
    PULSEWAVE_BP:RCTModule.PULSEWAVE_BP,
    /**
     * The action value of event indicates the result of measurement. <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *     <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *     <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ONLINE_RESULT_BP BPProfileModule.ACTION_ONLINE_RESULT_BP("online_result_bp")}</td></tr>
     *     <tr><td>{@link module:BPProfileModule.HIGH_BLOOD_PRESSURE_BP BPProfileModule.HIGH_BLOOD_PRESSURE_BP("sys")}</td><td>The high pressure for blood pressure.<br/> e.g. 118</td></tr>
     *     <tr><td>{@link module:BPProfileModule.LOW_BLOOD_PRESSURE_BP BPProfileModule.LOW_BLOOD_PRESSURE_BP("dia")}</td><td>The low pressure for blood pressure.<br/> e.g. 77</td></tr>
     *     <tr><td>{@link module:BPProfileModule.PULSE_BP BPProfileModule.PULSE_BP("heartRate")}</td><td>Blood pressure pulse, e.g. 77</td></tr>
     *     <tr><td>{@link module:BPProfileModule.MEASUREMENT_AHR_BP BPProfileModule.MEASUREMENT_AHR_BP("arrhythmia")}</td><td>The key of measurement is arrhythmia or not.<br/> e.g. true</td></tr>
     *     <tr><td>{@link module:BPProfileModule.MEASUREMENT_HSD_BP BPProfileModule.MEASUREMENT_HSD_BP("hsd")}(ios hsd 0:false 1:true)</td><td>The key of hemodynamic stability diagnosis, that Determines.<br/> e.g. true</td></tr>
     *     <tr><td>{@link module:BPProfileModule.DATAID BPProfileModule.DATAID("dataID")}</td><td>return blood pressure data id.<br/> e.g. 9F78D808BAB380CC8B8DA5F2DECA24F3</td></tr>
     * </table>
     *
     * <b>message example:</b><br/>
     * <b>
     *     {<br/>
     *     &nbsp; &nbsp; "sys": 114, <br/>
     *     &nbsp; &nbsp; "dia": 68, <br/>
     *     &nbsp; &nbsp; "heartRate": 66, <br/>
     *     &nbsp; &nbsp; "arrhythmia": false, <br/>
     *     &nbsp; &nbsp; "hsd": false, <br/>
     *     &nbsp; &nbsp; "dataID": "D21A8DB6F6E0311DC016B203E2055A40" <br/>
     *     }<br/>
     * </b>
     *
     */
    ACTION_ONLINE_RESULT_BP:RCTModule.ACTION_ONLINE_RESULT_BP,

    /**
     * The Key of high pressure for blood pressure. <br/>
     * <b>Value range:</b><br/>
     * <b>0-255</b>
     */
    HIGH_BLOOD_PRESSURE_BP:RCTModule.HIGH_BLOOD_PRESSURE_BP,

    /**
     * The Key of low pressure for blood pressure. <br/>
     * <b>Value range:</b><br/>
     * <b>0-255</b>
     */
    LOW_BLOOD_PRESSURE_BP:RCTModule.LOW_BLOOD_PRESSURE_BP,

    /**
     * The Key of blood pressure pulse. <br/>
     */
    PULSE_BP:RCTModule.PULSE_BP,

    /**
     * The Key of measurement is arrhythmia or not.<br />
     * <b>Value range:</b><br/>
     * <b>true: is arrhythmia</b><br/>
     * <b>false: not arrhythmia</b>
     */
    MEASUREMENT_AHR_BP:RCTModule.MEASUREMENT_AHR_BP,

    /**
     * The key of hemodynamic stability diagnosis, that Determines whether the circulatory system is sufficiently at rest or not. <br>
     * <b>Value range:</b><br/><br/>
     * <b>true: sufficiently</b><br/>
     * <b>false: insufficiently</b>
     */
    MEASUREMENT_HSD_BP:RCTModule.MEASUREMENT_HSD_BP,

    /**
     * The key of blood pressure data id.<br/>
     * <b>Value Format:</b> 32 bits Hex String.
     * <p>Example:</p>
     * "810D4F4CED95759AB738EBC1E74EA8F6"
     */
    DATAID:RCTModule.DATAID,

    /**
     * The action value of event indicates number of historical data for Bp device. <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *      <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *      <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_HISTORICAL_NUM_BP BPProfileModule.ACTION_HISTORICAL_NUM_BP("offlinenum")}</td></tr>
     *      <tr><td>{@link module:BPProfileModule.HISTORICAL_NUM_BP BPProfileModule.HISTORICAL_NUM_BP("num")}</td><td>Offline data number. <br/> e.g. 2</td></tr>
     * </table>
     *
     * <b>message example:</b><br/>
     *
     * <b>
     *     {<br/>
     *     &nbsp; &nbsp; "offlinenum":22 <br/>
     *     }<br/>
     * </b>
     */
    ACTION_HISTORICAL_NUM_BP:RCTModule.ACTION_HISTORICAL_NUM_BP,

    /**
     * The key of number of historical data for Bp device.<br />
     * <b>Value range:</b><br/>
     * <b>0-255</b>
     */
    HISTORICAL_NUM_BP:RCTModule.HISTORICAL_NUM_BP,

    /**
     * The action value of event indicates historical data for Bp device.<br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *      <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *      <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_HISTORICAL_DATA_BP BPProfileModule.ACTION_HISTORICAL_DATA_BP("historicaldata_bp")}</td></tr>
     *      <tr><td>{@link module:BPProfileModule.HISTORICAL_DATA_BP BPProfileModule.HISTORICAL_DATA_BP("data")}</td><td>Array of history Data. <br/> e.g. {"data":[{"time":"2016-12-6 22:27:00","sys":119,"dia":67,"heartRate":69,"arrhythmia":false,"hsd":false,"dataID":"EFDF63A63749388AD17EA416AC97CB09"}]} </td></tr>
     *      <tr><td>{@link module:BPProfileModule.MEASUREMENT_DATE_BP BPProfileModule.MEASUREMENT_DATE_BP("time")}</td><td>Measuring time. <br/> e.g. 2016-12-6 22:27:00</td></tr>
     *      <tr><td>{@link module:BPProfileModule.HIGH_BLOOD_PRESSURE_BP BPProfileModule.HIGH_BLOOD_PRESSURE_BP("sys")}</td><td>The high pressure for blood pressure. <br/> e.g. 127</td></tr>
     *      <tr><td>{@link module:BPProfileModule.LOW_BLOOD_PRESSURE_BP BPProfileModule.LOW_BLOOD_PRESSURE_BP("dia")}</td><td>The low pressure for blood pressure. <br/> e.g. 80</td></tr>
     *      <tr><td>{@link module:BPProfileModule.PULSE_BP BPProfileModule.PULSE_BP("heartRate")}</td><td>Blood pressure pulse.<br/> e.g. 77</td></tr>
     *      <tr><td>{@link module:BPProfileModule.MEASUREMENT_AHR_BP BPProfileModule.MEASUREMENT_AHR_BP("arrhythmia")}</td><td>The key of measurement is arrhythmia or not. <br/> e.g. true</td></tr>
     *      <tr><td>{@link module:BPProfileModule.MEASUREMENT_HSD_BP BPProfileModule.MEASUREMENT_HSD_BP("hsd")}</td><td>The key of hemodynamic stability diagnosis, that Determines.<br/> e.g. false</td></tr>
     *      <tr><td>{@link module:BPProfileModule.DATAID BPProfileModule.DATAID("dataID")}</td><td>return blood pressure data id. <br/> e.g. 9F78D808BAB380CC8B8DA5F2DECA24F3</td></tr>
     * </table>
     *
     * <b>message example:</b><br/>
     *
     * <p>Message example of 550BT、BP5、BP7:</p>
     * <b>
     *     {<br/>
     *     &nbsp; &nbsp; "data": [<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-18 09:00:00",<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "sys": 99,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dia": 60<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "heartRate": 60,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "arrhythmia":false,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hsd": "false,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID":"E4A5B3ABB0AF67F836880694AB7800D6"<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-19 09:05:00",<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "sys": 105,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dia": 65,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "heartRate": 60,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "arrhythmia":false,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hsd": "false,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID":"E4A5B3ABB0AF67F836880694AB7800D6"<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br/>
     *     &nbsp; &nbsp; ]<br/>
     *     }<br/>
     * </b>
     *
     * <p>Message example of BP7S:</p>
     * <b>
     *     {<br/>
     *     &nbsp; &nbsp; "data": [<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-18 09:00:00",<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "sys": 99,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dia": 60<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "heartRate": 60,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "arrhythmia":false,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hsd": "false,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "startAngle":25,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "measureAngleChange":0,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "chooseHand":1,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID":"E4A5B3ABB0AF67F836880694AB7800D6"<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-19 09:05:00",<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "sys": 105,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dia": 65,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "heartRate": 60,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "arrhythmia":false,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "hsd": "false<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "startAngle":25,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "measureAngleChange":0,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "chooseHand":1,<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID":"E4A5B3ABB0AF67F836880694AB7800D6"<br/>
     *     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br/>
     *     &nbsp; &nbsp; ]<br/>
     *     }<br/>
     * </b>
     */
    ACTION_HISTORICAL_DATA_BP:RCTModule.ACTION_HISTORICAL_DATA_BP,


    /**
     * The key of historical data for Bp device.<br/>
     */
    HISTORICAL_DATA_BP:RCTModule.HISTORICAL_DATA_BP,

    /**
     * The key of measurement time.<br />
     * <b>Value format: </b><br/>
     * yyyy-MM-dd HH:mm:ss<br/>
     * <b>Example: </b><br/>
     * 2016-07-18 09:00:00
     */
    MEASUREMENT_DATE_BP:RCTModule.MEASUREMENT_DATE_BP,

    /**
     * The key of start angle for measurement.<br />
     * <b>Value Range:</b><br/>
     * <b>0-180</b>
     */
    MEASUREMENT_STRAT_ANGLE_BP:RCTModule.MEASUREMENT_STRAT_ANGLE_BP,

    /**
     * The key of angle change during measurement.<br />
     * <b>Value Range:</b><br/>
     * <b>0-180</b>
     */
    MEASUREMENT_ANGLE_CHANGE_BP:RCTModule.MEASUREMENT_ANGLE_CHANGE_BP,

    /**
     * The key of hand for measurement.<br />
     * <b>Value Range:</b>
     * <b>0, left hand;</b> <br/>
     * <b>1, right hand;</b> <br/>
     * <b>2, unknown </b> <br/>
     */
    MEASUREMENT_HAND_BP:RCTModule.MEASUREMENT_HAND_BP,


    /**
     * The action value of event indicates historical data update over <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *      <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *      <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_HISTORICAL_OVER_BP BPProfileModule.ACTION_HISTORICAL_OVER_BP("get_historical_over_bp")}</td></tr>
     * </table>
     * <b>message example:</b><br/>
     * <b>null</b>
     *
     */
    ACTION_HISTORICAL_OVER_BP:RCTModule.ACTION_HISTORICAL_OVER_BP,


    /**
     * The action value of event indicates the function information data of bp devices. <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *      <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *      <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_FUNCTION_INFORMATION_BP BPProfileModule.ACTION_FUNCTION_INFORMATION_BP("function_info_bp")}</td></tr>
     *      <tr><td>{@link module:BPProfileModule.FUNCTION_IS_UPAIR_MEASURE BPProfileModule.FUNCTION_IS_UPAIR_MEASURE("upAirMeasureFlg")}</td><td>The way to measure is up air or low air, up is "true", low is "false".<br/> e.g. false</td></tr>
     *      <tr><td>{@link module:BPProfileModule.FUNCTION_IS_ARM_MEASURE BPProfileModule.FUNCTION_IS_ARM_MEASURE("armMeasureFlg")}</td><td>device is arm or wrist, arm is "true", wrist is "false".<br/> e.g. true</td></tr>
     *      <tr><td>{@link module:BPProfileModule.FUNCTION_HAVE_ANGLE_SENSOR BPProfileModule.FUNCTION_HAVE_ANGLE_SENSOR("haveAngleSensor")}</td><td>device has angle sensor or not, have is "true", otherwise is "false"device has angle sensor or not, have is "true", otherwise is "false".<br/> e.g. false</td></tr>
     *      <tr><td>{@link module:BPProfileModule.FUNCTION_HAVE_OFFLINE BPProfileModule.FUNCTION_HAVE_OFFLINE("haveOffline")}</td><td>device has offline-measure function or not, have is "true", otherwise is "false".<br/> e.g. true</td></tr>
     *      <tr><td>{@link module:BPProfileModule.FUNCTION_HAVE_HSD BPProfileModule.FUNCTION_HAVE_HSD("haveHSD")}</td><td>device had HSD function or not, have is "true", otherwise is "false".<br/> e.g. false</td></tr>
     *      <tr><td>{@link module:BPProfileModule.FUNCTION_HAVE_ANGLE_SETTING BPProfileModule.FUNCTION_HAVE_ANGLE_SETTING("haveAngleSet")}</td><td>device has angle setting function or not, have is "true", otherwise is "false".<br/> e.g. true</td></tr>
     *      <tr><td>{@link module:BPProfileModule.FUNCTION_IS_MULTI_UPLOAD BPProfileModule.FUNCTION_IS_MULTI_UPLOAD("mutableUpload")}</td><td>device is multi upload or single upload, multi is "true", single is "false".<br/> e.g. true</td></tr>
     *      <tr><td>{@link module:BPProfileModule.FUNCTION_HAVE_SELF_UPDATE BPProfileModule.FUNCTION_HAVE_SELF_UPDATE("selfUpdate")}</td><td>device had self update function or not, have is "true", otherwise is "false".<br/> e.g. false</td></tr>
     * </table>
     *
     * <b>message example:</b><br/>
     * <b>
     *     {<br/>
     *     &nbsp; &nbsp; "modenumber": "KN-550BT 11070", <br/>
     *     &nbsp; &nbsp; "serialnumber": "7CEC793DF3BC", <br/>
     *     &nbsp; &nbsp; "manufacture": "iHealth", <br/>
     *     &nbsp; &nbsp; "hardwareversion": "100", <br/>
     *     &nbsp; &nbsp; "firmwareversion": "100", <br/>
     *     &nbsp; &nbsp; "accessoryname": "BP Monitor", <br/>
     *     &nbsp; &nbsp; "protocolstring": "com.jiuan.BPAV10" <br/>
     *
     *     }<br/>
     * </b>
     */
    ACTION_FUNCTION_INFORMATION_BP:RCTModule.ACTION_FUNCTION_INFORMATION_BP,

    /**
     * The Key of the function information:The way to measure is up air or down air. <br/>
     * <b>Value Range:</b><br/>
     * <b>true: up air</b><br/>
     * <b>false: down air</b>
     */
    FUNCTION_IS_UPAIR_MEASURE:RCTModule.FUNCTION_IS_UPAIR_MEASURE,

    /**
     * The Key of the function information:device is arm or wrist. <br/>
     * <b>Value Range:</b><br/>
     * <b>true: arm</b><br/>
     * <b>false: wrist air</b>
     */
    FUNCTION_IS_ARM_MEASURE:RCTModule.FUNCTION_IS_ARM_MEASURE,

    /**
     * The Key of the function information:device has angle sensor or not. <br/>
     * <b>Value Range:</b><br/>
     * <b>true: have angle sensor</b><br/>
     * <b>false: don't have angle sensor</b>
     */
    FUNCTION_HAVE_ANGLE_SENSOR:RCTModule.FUNCTION_HAVE_ANGLE_SENSOR,

    /**
     * The Key of the function information:device has offline-measure function or not. <br/>
     * <b>Value Range:</b><br/>
     * <b>true: have offline-measure function</b><br/>
     * <b>false: don't have offline-measure function</b>
     */
    FUNCTION_HAVE_OFFLINE:RCTModule.FUNCTION_HAVE_OFFLINE,

    /**
     * The Key of the function information:device had HSD function or not. <br/>
     * <b>Value Range:</b><br/>
     * <b>true: have HSD function</b><br/>
     * <b>false: don't have HSD function</b>
     */
    FUNCTION_HAVE_HSD:RCTModule.FUNCTION_HAVE_HSD,

    /**
     * The Key of the function information:device has angle setting function or not. <br/>
     * <b>Value Range:</b><br/>
     * <b>true: have angle setting function</b><br/>
     * <b>false: don't have angle setting function</b>
     */
    FUNCTION_HAVE_ANGLE_SETTING:RCTModule.FUNCTION_HAVE_ANGLE_SETTING,

    /**
     * The Key of the function information:device is multi upload or single upload. <br/>
     * <b>Value Range:</b><br/>
     * <b>true: multi/b><br/>
     * <b>false: single</b>
     */
    FUNCTION_IS_MULTI_UPLOAD:RCTModule.FUNCTION_IS_MULTI_UPLOAD,

    /**
     * The Key of the function information:device had self update function or not. <br/>
     * <b>Value Range:</b><br/>
     * <b>true: have self update function/b><br/>
     * <b>false: don't have self update function</b>
     */
    FUNCTION_HAVE_SELF_UPDATE:RCTModule.FUNCTION_HAVE_SELF_UPDATE,

    /**
     * The action value of event indicates setting unit successfully <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *      <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *      <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_SET_UNIT_SUCCESS_BP BPProfileModule.ACTION_SET_UNIT_SUCCESS_BP("set_unit_success")}</td></tr>
     * </table>
     * <b>message example:</b><br/>
     * <b>null</b>
     *
     */
    ACTION_SET_UNIT_SUCCESS_BP:RCTModule.ACTION_SET_UNIT_SUCCESS_BP,

    /**
     * The action value of event indicates setting angle successfully <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *     <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *     <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_SET_ANGLE_SUCCESS_BP BPProfileModule.ACTION_SET_ANGLE_SUCCESS_BP("set_angle_success")}</td></tr>
     * </table>
     * <b>message example:</b><br/>
     * <b>null</b>
     *
     */
    ACTION_SET_ANGLE_SUCCESS_BP:RCTModule.ACTION_SET_ANGLE_SUCCESS_BP,
    /**
     * The action value of event indicates enabling Off-line measurement operation is success <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *     <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *     <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_ENABLE_OFFLINE_BP BPProfileModule.ACTION_ENABLE_OFFLINE_BP("enable_offline_bp")}</td></tr>
     * </table>
     * <b>message example:</b><br/>
     * <b>null</b>
     *
     */
    ACTION_ENABLE_OFFLINE_BP:RCTModule.ACTION_ENABLE_OFFLINE_BP,

    /**
     * The action value of event indicates disenabling Off-line measurement operation is success <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *      <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *      <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_DISENABLE_OFFLINE_BP BPProfileModule.ACTION_DISENABLE_OFFLINE_BP("disenable_offline_bp")}</td></tr>
     * </table>
     * <b>message example:</b><br/>
     * <b>null</b>
     *
     */
    ACTION_DISENABLE_OFFLINE_BP:RCTModule.ACTION_DISENABLE_OFFLINE_BP,

    /**
     * The action value of event indicates whether off-line measurement is on or not <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *     <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *     <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_IS_ENABLE_OFFLINE BPProfileModule.ACTION_IS_ENABLE_OFFLINE("offlinestatus")}</td></tr>
     *     <tr><td>{@link module:BPProfileModule.IS_ENABLE_OFFLINE BPProfileModule.IS_ENABLE_OFFLINE("offlinestatus")}</td><td>Indicate device can measure offline or not. <br/> e.g. true</td></tr>
     * </table>
     * <b>message example:</b><br/>
     * <b>
     *     {<br/>
     *     &nbsp; &nbsp; "offlinestatus":true <br/>
     *     }<br/>
     * </b>
     *
     */
    ACTION_IS_ENABLE_OFFLINE:RCTModule.ACTION_IS_ENABLE_OFFLINE,

    /**
     * The Key of status indicates whether off-line measurement is on or not . <br/>
     * <b>Value Range:</b><br/>
     * <b>true:  on/b><br/>
     * <b>false: off</b>
     */
    IS_ENABLE_OFFLINE:RCTModule.IS_ENABLE_OFFLINE,

    /**
     * The action value of event indicates interrupting measure <br/>
     * The key and value will be as below: <br/>
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     *     <tr bgcolor="#cccccc"><th >Key</th><th align="center" >Value</th></tr>
     *     <tr><td>action</td><td>{@link module:BPProfileModule.ACTION_INTERRUPTED_BP BPProfileModule.ACTION_INTERRUPTED_BP("interrupted_bp")}</td></tr>
     * </table>
     * <b>message example:</b><br/>
     * <b>null</b>
     *
     */
    ACTION_INTERRUPTED_BP:RCTModule.ACTION_INTERRUPTED_BP
}


