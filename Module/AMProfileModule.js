/**
 * Created by Jeepend on 15/11/2016.
 */
'use strict';


var {NativeModules} = require('react-native');

var RCTModule = NativeModules.AMProfileModule

/**
 * @module AMProfileModule
 */
module.exports = {
    // Actions
    /**
     * The action value of event indicating the error of AM device.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_ERROR_AM</td></tr>
     * <tr><td>AMProfileModule.ERROR_NUM_AM</td><td>AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400) indicates parameter error.<br/>AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402) indicates version not support error.</td></tr>
     * <tr><td>AMProfileModule.ERROR_DESCRIPTION_AM</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "error_am",<br/>
     * &nbsp; &nbsp; "error": 400,<br/>
     * &nbsp; &nbsp; "description": "setAlarmClock() parameter min should be in the range [0, 59]."<br/>
     * }<br/>
     */
    ACTION_ERROR_AM: RCTModule.ACTION_ERROR_AM,
    /**
     * The action value of event indicating reset AM device finish.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_RESET_AM</td></tr>
     * <tr><td>AMProfileModule.RESET_AM</td><td>0 indicates reset failed.<br/>1 indicates reset successfully.</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "reset_am",<br/>
     * &nbsp; &nbsp; "reset": 1<br/>
     * }<br/>
     */
    ACTION_RESET_AM: RCTModule.ACTION_RESET_AM,
    /**
     * The action value of event indicating get user's ID successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_USERID_AM</td></tr>
     * <tr><td>AMProfileModule.USERID_AM</td><td>User's ID</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "userid_am",<br/>
     * &nbsp; &nbsp; "userid": 123456<br/>
     * }<br/>
     */
    ACTION_USERID_AM: RCTModule.ACTION_USERID_AM,
    /**
     * The action value of event indicating set user's ID successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_SET_USERID_SUCCESS_AM</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "set_userid_success_am"<br/>
     * }<br/>
     */
    ACTION_SET_USERID_SUCCESS_AM: RCTModule.ACTION_SET_USERID_SUCCESS_AM,
    /**
     * The action value of event indicating send system time to AM device successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_SYNC_TIME_SUCCESS_AM</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "set_sync_time_success_am"<br/>
     * }<br/>
     */
    ACTION_SYNC_TIME_SUCCESS_AM: RCTModule.ACTION_SYNC_TIME_SUCCESS_AM,
    /**
     * The action value of event indicating set user's information successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_SET_USERINFO_SUCCESS_AM</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "set_userinfo_success_am"<br/>
     * }<br/>
     */
    ACTION_SET_USERINFO_SUCCESS_AM: RCTModule.ACTION_SET_USERINFO_SUCCESS_AM,
    /**
     * The action value of event indicating get user's information successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_USERINFO_AM AMProfileModule.ACTION_GET_USERINFO_AM("get_userinfo_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_USER_AGE_AM AMProfileModule.GET_USER_AGE_AM("age")}</td><td>User's age.<br/><b>Value range:</b><br/>0-255(0xFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_USER_STEP_AM AMProfileModule.GET_USER_STEP_AM("step")}</td><td>User's step length.<br/><b>Value range:</b><br/>0-255(0xFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_USER_HEIGHT_AM AMProfileModule.GET_USER_HEIGHT_AM("height")}</td><td>User's height.<br/><b>Value range:</b><br/>0-255(0xFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_USER_SEX_AM AMProfileModule.GET_USER_SEX_AM("gender")}</td><td>User's gender.<br/><b>Value:</b><br/><ul><li>{@link module:AMProfileModule.AM_SET_FEMALE AMProfileModule.AM_SET_FEMALE(0)}</li><li>{@link module:AMProfileModule.AM_SET_MALE AMProfileModule.AM_SET_MALE(1)}</li></ul></td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_USER_WEIGHT_AM AMProfileModule.GET_USER_WEIGHT_AM("weight")}</td><td>User's weight.<br/>The value is double type<br/><b>Value range:</b><br/>0.0-255.255(0xFF.0xFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_USER_UNIT_AM AMProfileModule.GET_USER_UNIT_AM("unit")}</td><td>The unit type.<br/><b>Value:</b><br/><ul><li>{@link module:AMProfileModule.AM_SET_UNIT_METRIC AMProfileModule.AM_SET_UNIT_METRIC(1)}</li><li>{@link module:AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD(0)}</li></ul></td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_USER_TARGET1_AM AMProfileModule.GET_USER_TARGET1_AM("target1")}</td><td>The the goal of max step number.<br/><b>Value range:</b><br/>0-4294967295(0xFFFFFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_USER_TARGET2_AM AMProfileModule.GET_USER_TARGET2_AM("target2")}</td><td>The goal of middle step number.<br/><b>Value range:</b><br/>0-4294967295(0xFFFFFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_USER_TARGET3_AM AMProfileModule.GET_USER_TARGET3_AM("target3")}</td><td>The goal of min step number.<br/><b>Value range:</b><br/>0-4294967295(0xFFFFFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_USER_SWIMTARGET_AM AMProfileModule.GET_USER_SWIMTARGET_AM("swim_target")}</td><td>The goal of swim time(in minutes).<br/><b>Value range:</b><br/>0-15360(0xFF*60 + 60)</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "get_userinfo_am",<br/>
     * &nbsp; &nbsp; "age": 29,<br/>
     * &nbsp; &nbsp; "step": 80,<br/>
     * &nbsp; &nbsp; "height": 177,<br/>
     * &nbsp; &nbsp; "gender": 1,<br/>
     * &nbsp; &nbsp; "weight": 65,<br/>
     * &nbsp; &nbsp; "unit": 1,<br/>
     * &nbsp; &nbsp; "target1": 2500,<br/>
     * &nbsp; &nbsp; "target2": 1250,<br/>
     * &nbsp; &nbsp; "target3": 625,<br/>
     * &nbsp; &nbsp; "swim_target": 59<br/>
     * }<br/>
     */
    ACTION_GET_USERINFO_AM: RCTModule.ACTION_GET_USERINFO_AM,
    /**
     * The action value of event indicating get alarm number successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_ALARMNUM_AM AMProfileModule.ACTION_GET_ALARMNUM_AM("get_alarmnum_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ALARMNUM_AM AMProfileModule.GET_ALARMNUM_AM("alarmclocknumber")}</td><td>Alarm clock count</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ALARMNUM_ID_AM AMProfileModule.GET_ALARMNUM_ID_AM("alarmclocknumberid")}</td><td>Alarm clock id array, e.g. [1, 2, 3]</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "get_alarmnum_am",<br/>
     * &nbsp; &nbsp; "alarmclocknumber": 2,<br/>
     * &nbsp; &nbsp; "alarmclocknumberid": [1, 2]<br/>
     * }<br/>
     */
    ACTION_GET_ALARMNUM_AM: RCTModule.ACTION_GET_ALARMNUM_AM,
    /**
     * The action value of event indicating get alarm information successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_ALARMINFO_AM AMProfileModule.ACTION_GET_ALARMINFO_AM("get_alarminfo_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ALARM_CLOCK_DETAIL AMProfileModule.GET_ALARM_CLOCK_DETAIL("alarmclockdetail")}</td><td>Alarm imformation array.</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ALARM_ID_AM AMProfileModule.GET_ALARM_ID_AM("alarmid")}</td><td>Alarm clock id for each elemet in the array.</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ALARM_TIME_AM AMProfileModule.GET_ALARM_TIME_AM("time")}</td><td>Alarm clock time for each elemet in the array.</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ALARM_ISREPEAT_AM AMProfileModule.GET_ALARM_ISREPEAT_AM("repeat")}</td><td>true if the alarm will repeat as the week repeat information shows below.<br/>false will not repeat.</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ALARM_WEEK_AM AMProfileModule.GET_ALARM_WEEK_AM("get_alarm_week")}</td><td>Week repeat information, true if the alarm will repeat on specified day.</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ALARM_ISON_AM AMProfileModule.GET_ALARM_ISON_AM("switch")}</td><td>true indicates the alarm is enabled.<br/>false indicates the alarm is disabled.</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "get_alarminfo_am",<br/>
     * &nbsp; &nbsp; "alarmclockdetail": [<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "alarmid": 1,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "16:46",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "repeat": false,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "get_alarm_week": {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "sun": true,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mon": true,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "tue": true,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "wed": true,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "thu": false,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fri": true,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "sat": true<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "switch": false<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "alarmid": 2,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "16:50",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "repeat": true,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "get_alarm_week": {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "sun": true,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "mon": true,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "tue": true,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "wed": true,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "thu": false,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "fri": true,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "sat": true<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "switch": true<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; }<br/>
     * &nbsp; &nbsp; ]<br/>
     * }<br/>
     */
    ACTION_GET_ALARMINFO_AM: RCTModule.ACTION_GET_ALARMINFO_AM,
    /**
     * The action value of event indicating set/unset alarm successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_SET_ALARMINFO_SUCCESS_AM</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "set_alarminfo_success_am",<br/>
     * }<br/>
     */
    ACTION_SET_ALARMINFO_SUCCESS_AM: RCTModule.ACTION_SET_ALARMINFO_SUCCESS_AM,
    /**
     * The action value of event indicating delete alarm successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_DELETE_ALARM_SUCCESS_AM</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "delete_alarm_success_am",<br/>
     * }<br/>
     */
    ACTION_DELETE_ALARM_SUCCESS_AM: RCTModule.ACTION_DELETE_ALARM_SUCCESS_AM,
    /**
     * The action value of event indicating get activity remind information successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_ACTIVITY_REMIND_AM AMProfileModule.ACTION_GET_ACTIVITY_REMIND_AM("get_activity_remind_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ACTIVITY_REMIND_TIME_AM AMProfileModule.GET_ACTIVITY_REMIND_TIME_AM("time")}</td><td>The time of activity reminder<br/><b>Value format:</b><br/>HH:mm</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ACTIVITY_REMIND_ISON_AM AMProfileModule.GET_ACTIVITY_REMIND_ISON_AM("switch")}</td><td>Whether activity reminder open or not.</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "get_activity_remind_am",<br/>
     * &nbsp; &nbsp; "time": "01:20",<br/>
     * &nbsp; &nbsp; "switch": true<br/>
     * }<br/>
     */
    ACTION_GET_ACTIVITY_REMIND_AM: RCTModule.ACTION_GET_ACTIVITY_REMIND_AM,
    /**
     * The action value of event indicating set/unset activity remind successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_SET_ACTIVITYREMIND_SUCCESS_AM</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "set_activityremind_success_am"<br/>
     * }<br/>
     */
    ACTION_SET_ACTIVITYREMIND_SUCCESS_AM: RCTModule.ACTION_SET_ACTIVITYREMIND_SUCCESS_AM,
    /**
     * The action value of event indicating get activity data successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SYNC_ACTIVITY_DATA_AM AMProfileModule.ACTION_SYNC_ACTIVITY_DATA_AM("sync_activity_data_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_ACTIVITY_DATA_AM AMProfileModule.SYNC_ACTIVITY_DATA_AM("activity")}</td><td>The whole activity data</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_ACTIVITY_EACH_DATA_AM AMProfileModule.SYNC_ACTIVITY_EACH_DATA_AM("activity_each_data")}</td><td>The whole data for every 5 min activity data</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_ACTIVITY_DATA_TIME_AM AMProfileModule.SYNC_ACTIVITY_DATA_TIME_AM("time")}</td><td>The time for every 5 min activity data.<br/><b>Value format: </b><br/>yyyy-MM-dd HH:mm:ss<br/><b>Example: </b><br/>2016-07-18 09:00:00</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_ACTIVITY_DATA_STEP_AM AMProfileModule.SYNC_ACTIVITY_DATA_STEP_AM("step")}</td><td>The step number for every 5 min activity data.<br/><b>Value range:</b><br/>0-4294967295(0xFFFFFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_ACTIVITY_DATA_CALORIE_AM AMProfileModule.SYNC_ACTIVITY_DATA_CALORIE_AM("calorie")}</td><td>The calorie for every 5 min activity data.<br/><b>Value range:</b><br/>0-65535(0xFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_ACTIVITY_DATA_STEP_LENGTH_AM AMProfileModule.SYNC_ACTIVITY_DATA_STEP_LENGTH_AM("stepsize")}</td><td>The step length for every 5 min activity data.<br/><b>Value range:</b><br/>0-255(0xFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.DATAID AMProfileModule.DATAID("dataID")}</td><td>The MD5 hash of the data.</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "sync_activity_data_am",<br/>
     * &nbsp; &nbsp; "activity": [<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "activity_each_data": [<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-18 09:00:00",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stepsize": 77,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "step": 1428,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "calorie": 60,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "C7AAB9E0561836DB2DF1F3B6DFFE89CF"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-18 09:05:00",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stepsize": 77,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "step": 1492,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "calorie": 62,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "7CC5AFB17BB1AA967EF00D224F727C12"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "activity_each_data": [<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-18 11:40:00",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stepsize": 77,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "step": 1868,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "calorie": 72,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "DDC376F96B1245E1B5AD91BB5C57BC21"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-18 11:45:00",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stepsize": 77,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "step": 1884,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "calorie": 73,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "544D49E3C5CAFC5B2D2D4076635A0ABA"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; }<br/>
     * &nbsp; &nbsp; ]<br/>
     * }<br/>
     */
    ACTION_SYNC_ACTIVITY_DATA_AM: RCTModule.ACTION_SYNC_ACTIVITY_DATA_AM,
    /**
     * The action value of event indicating get sleep data successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SYNC_SLEEP_DATA_AM AMProfileModule.ACTION_SYNC_SLEEP_DATA_AM("sync_sleep_data_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_SLEEP_DATA_AM AMProfileModule.SYNC_SLEEP_DATA_AM("sleep")}</td><td>The whole sleep data</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_SLEEP_EACH_DATA_AM AMProfileModule.SYNC_SLEEP_EACH_DATA_AM("sleep_each_data")}</td><td>The data array of each 5 minute.<br/><b>Value example:</b><br/>[<br/>&nbsp; &nbsp; {<br/>&nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-29 00:05:01",<br/>&nbsp; &nbsp; &nbsp; &nbsp; "level": "1",<br/>&nbsp; &nbsp; &nbsp; &nbsp; "dataID": "60D6048F3BFBA17CD7FD137E68CE29DD"<br/>&nbsp; &nbsp; },<br/>&nbsp; &nbsp; {<br/>&nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-29 00:10:01",<br/>&nbsp; &nbsp; &nbsp; &nbsp; "level": "0",<br/>&nbsp; &nbsp; &nbsp; &nbsp; "dataID": "1C0E2BBDE85C0D4C4E8895F98C9F6AC4"<br/>&nbsp; &nbsp; }<br/>]<br/></td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_SLEEP_DATA_TIME_AM AMProfileModule.SYNC_SLEEP_DATA_TIME_AM("time")}</td><td>The time of each 5 minute's sleep.<br/><b>Value format:</b><br/>yyyy-MM-dd HH:mm:ss</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_SLEEP_DATA_LEVEL_AM AMProfileModule.SYNC_SLEEP_DATA_LEVEL_AM("level")}</td><td>The sleep level of each 5 minute.<br/><b>Value:</b><br/><ul><li>0 indicates awake</li><li>1 indicates light sleep</li><li>2 indicates deep sleep</li></ul></td></tr>
     * <tr><td>{@link module:AMProfileModule.DATAID AMProfileModule.DATAID("dataID")}</td><td>The MD5 hash of the data.</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "sync_sleep_data_am",<br/>
     * &nbsp; &nbsp; "sleep": [<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "sleep_each_data": [<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-28 23:39:40",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "level": "1",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "B278297A6DE0B28D3B317B5DC23F830A"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-28 23:44:40",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "level": "1",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "DE4E5FAAA6CC79B53EECC8F833BA433E"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-28 23:49:40",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "level": "1",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "B1855AC96F036CE7AA3384D5B00834B5"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-28 23:54:40",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "level": "1",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "3DC6AC62CDCAC8BAF1FCA7A2B4FDCA38"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-28 23:59:40",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "level": "0",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "FD8507F4B25F15B33513315FFF1BFA15"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "sleep_each_data": [<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-29 00:05:01",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "level": "1",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "60D6048F3BFBA17CD7FD137E68CE29DD"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-29 00:10:01",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "level": "0",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "1C0E2BBDE85C0D4C4E8895F98C9F6AC4"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ]<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; }<br/>
     * &nbsp; &nbsp; ]<br/>
     * }<br/>
     */
    ACTION_SYNC_SLEEP_DATA_AM: RCTModule.ACTION_SYNC_SLEEP_DATA_AM,
    /**
     * The action value of event indicating get stage data successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SYNC_STAGE_DATA_AM AMProfileModule.ACTION_SYNC_STAGE_DATA_AM("sync_stage_data_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_AM AMProfileModule.SYNC_STAGE_DATA_AM("stage_data")}</td><td>The data array of the stage data.</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_TYPE_AM AMProfileModule.SYNC_STAGE_DATA_TYPE_AM("type")}</td><td>The type of stage report.<br/><b>Value:</b><br/><ul><li>{@link module:AMProfileModule.SYNC_STAGE_DATA_TYPE_SWIM_AM AMProfileModule.SYNC_STAGE_DATA_TYPE_SWIM_AM("swim")}</li><li>{@link module:AMProfileModule.SYNC_STAGE_DATA_TYPE_WORKOUT_AM AMProfileModule.SYNC_STAGE_DATA_TYPE_WORKOUT_AM("stage_data_type_workout")}</li><li>{@link module:AMProfileModule.SYNC_STAGE_DATA_TYPE_SLEEP_AM AMProfileModule.SYNC_STAGE_DATA_TYPE_SLEEP_AM("sleep")}</li><li>{@link module:AMProfileModule.SYNC_STAGE_DATA_TYPE_PAGE_VIEW_SUMMARY AMProfileModule.SYNC_STAGE_DATA_TYPE_PAGE_VIEW_SUMMARY("page_view_summary")}</li></ul></td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_STOP_TIME_AM AMProfileModule.SYNC_STAGE_DATA_STOP_TIME_AM("stoptime")}</td><td>The stop time of stage report.<br/><b>Value format:</b><br/>yyyy-MM-dd HH:mm:ss</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_USED_TIME_AM AMProfileModule.SYNC_STAGE_DATA_USED_TIME_AM("usedtime")}</td><td>The time stage report used(in minutes)<br/><b>Value range:</b><br/>0-65535(0xFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_SLEEP_EFFICIENCY_AM AMProfileModule.SYNC_STAGE_DATA_SLEEP_EFFICIENCY_AM("sleepefficiency")}</td><td>The efficiency of sleep.<br/><b>Value range:</b><br/>0.0-100.0</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_SLEEP_IS50MIN_AM AMProfileModule.SYNC_STAGE_DATA_SLEEP_IS50MIN_AM("is50min")}</td><td>Whether need to extend sleep 50 minutes or not.<br/><b>Value:</b><br/><ul><li>0 indicates not need to extend.</li><li>1 indicates need to extend.</li></ul></td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_SWIM_PULL_TIMES_AM AMProfileModule.SYNC_STAGE_DATA_SWIM_PULL_TIMES_AM("number of strokes")}</td><td>The arm pulling time of swim.<br/><b>Value range:</b><br/>0-65535(0xFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_CALORIE_AM AMProfileModule.SYNC_STAGE_DATA_CALORIE_AM("calorie")}</td><td>The calorie of the stage report.<br/><b>Value range:</b><br/>0-65535(0xFFFF).</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_SWIM_STROKE_AM AMProfileModule.SYNC_STAGE_DATA_SWIM_STROKE_AM("swimming stroke")}</td><td>Swim stroke.<br/><b>Value:</b><br/><ul><li>0 indicates freestyle.</li><li>1 indicates breaststroke.</li><li>2 indicates backstroke.</li><li>5 indicates unknown.</li></ul></td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_SWIM_TURNS_AM AMProfileModule.SYNC_STAGE_DATA_SWIM_TURNS_AM("number of turns")}</td><td>The round number of swim.<br/><b>Value range:</b><br/>0-255(0xFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_SWIMPOOL_LENGTH_AM AMProfileModule.SYNC_STAGE_DATA_SWIMPOOL_LENGTH_AM("stage_data_swimpool_length")}</td><td>The length of the swimming pool.<br/><b>Value range:</b><br/>0-255(0xFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_SWIM_CUTINDIF_AM AMProfileModule.SYNC_STAGE_DATA_SWIM_CUTINDIF_AM("stage_data_cutindif")}</td><td>The time of cut in swim and begin swim.(in minutes)<br/><b>Value range:</b><br/>0-65535(0xFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_SWIM_CUTOUTDIF_AM AMProfileModule.SYNC_STAGE_DATA_SWIM_CUTOUTDIF_AM("stage_data_cutoutdif")}</td><td>The time of cut out swim and end swim.(in minutes)<br/><b>Value range:</b><br/>0-65535(0xFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_SWIM_PROCESSFLAG_AM AMProfileModule.SYNC_STAGE_DATA_SWIM_PROCESSFLAG_AM("stage_data_processflag")}</td><td>The process flag of the swim.<br/><b>Value:</b><br/><ul><li>0 indicates swim in process.</li><li>1 indicates start of swimming.</li><li>2 indicates end of swimming.</li><li>3 indicates the swim is only a single round.</li></ul></td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_WORKOUT_STEP_AM AMProfileModule.SYNC_STAGE_DATA_WORKOUT_STEP_AM("stage_data_workout_step")}</td><td>The step number of work out.<br/><b>Value range:</b><br/>0-4294967295(0xFFFFFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_DISTANCE_AM AMProfileModule.SYNC_STAGE_DATA_DISTANCE_AM("stage_data_distance")}</td><td>The distance.<br/>It's string type<br/><b>Value format&range:</b><br/>"123.456"("0.0"-"255.255"(0xFF.0xFF))</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_DATE_AM AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_DATE_AM("stage_data_view_summary_date")}</td><td>The date of page view summary<br/><b>Value format:</b><br/>yyyy-MM-dd</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_STEP_AM AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_STEP_AM("stage_data_view_summary_step")}</td><td>The count that user view the step page.<br/><b>Value range:</b><br/>0-65535(0xFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_DISTANCE_AM AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_DISTANCE_AM("stage_data_view_summary_distance")}</td><td>The MD5 hash of the data.</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_DISTANCE_AM AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_DISTANCE_AM("stage_data_view_summary_distance")}</td><td>The count that user view the distance page.<br/><b>Value range:</b><br/>0-65535(0xFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_CALORIE_AM AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_CALORIE_AM("stage_data_view_summary_calorie")}</td><td>The count that user view the calorie page.<br/><b>Value range:</b><br/>0-65535(0xFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_TARGET_AM AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_TARGET_AM("stage_data_view_summary_target")}</td><td>The count that user view the activity target page.<br/><b>Value range:</b><br/>0-65535(0xFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_SWIM_AM AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_SWIM_AM("stage_data_view_summary_swim")}</td><td>The count that user view the swim summary page.<br/><b>Value range:</b><br/>0-65535(0xFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.DATAID AMProfileModule.DATAID("dataID")}</td><td>The MD5 hash of the data.</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "sync_stage_data_am",<br/>
     * &nbsp; &nbsp; "stage_data": [<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "page_view_summary",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_view_summary_date": "2016-08-02",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_view_summary_step": 38,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_view_summary_distance": 13,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_view_summary_calorie": 5,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_view_summary_target": 1,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_view_summary_swim": 0<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "stage_data_type_workout",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stoptime": "2016-07-30 17:54:00",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "usedtime": 34,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_workout_step": 2257,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_distance": "1.73",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "calorie": 63,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "5BC76712509E372168FCF2C4B30BAACB"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "sleep",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stoptime": "2016-07-30 23:54:00",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "usedtime": 95,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "sleepefficiency": 947,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "is50min": 1<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "swim",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stoptime": "2016-07-31 09:37:55",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "usedtime": 37,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "number of strokes": 12,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "calorie": 1,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "swimming stroke": 2,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "number of turns": 1,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_swimpool_length": 50,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_cutindif": 14,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_cutoutdif": 0,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_processflag": 1,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "F0323A2534E7506E6C063BD1DA42A882"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "swim",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stoptime": "2016-07-31 09:39:05",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "usedtime": 23,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "number of strokes": 19,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "calorie": 2,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "swimming stroke": 2,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "number of turns": 2,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_swimpool_length": 50,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_cutindif": 0,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_cutoutdif": 0,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_processflag": 0,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "6D309E2FBB447B50D332F6F5E55AC8DA"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "swim",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stoptime": "2016-07-31 09:40:43",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "usedtime": 23,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "number of strokes": 30,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "calorie": 3,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "swimming stroke": 2,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "number of turns": 3,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_swimpool_length": 50,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_cutindif": 0,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_cutoutdif": 0,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_processflag": 0,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "C68D26A036D2BCBAD9AA62E3B956B0E7"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "swim",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stoptime": "2016-07-31 09:42:14",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "usedtime": 23,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "number of strokes": 38,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "calorie": 4,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "swimming stroke": 2,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "number of turns": 4,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_swimpool_length": 50,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_cutindif": 0,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_cutoutdif": 0,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_processflag": 0,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "E823F5EBC035B20A90B2C999E5148806"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "type": "swim",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stoptime": "2016-07-31 09:44:55",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "usedtime": 23,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "number of strokes": 47,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "calorie": 5,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "swimming stroke": 2,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "number of turns": 5,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_swimpool_length": 50,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_cutindif": 0,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_cutoutdif": 714,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "stage_data_processflag": 2,<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "002AA68A5DCD05F6595F769D9245E4F2"<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; }<br/>
     * &nbsp; &nbsp; ]<br/>
     * }<br/>
     */
    ACTION_SYNC_STAGE_DATA_AM: RCTModule.ACTION_SYNC_STAGE_DATA_AM,
    /**
     * The action value of event indicating get AM device state successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_QUERY_STATE_AM AMProfileModule.ACTION_QUERY_STATE_AM("query_state_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.QUERY_STATE_AM AMProfileModule.QUERY_STATE_AM("query_state")}</td><td>The value of state information.<br/><b>Value:</b><br/><ul><li>0 indicates waist</li><li>1 indicates wrist</li><li>2 indicates sleep</li></ul></td></tr>
     * <tr><td>{@link module:AMProfileModule.QUERY_BATTERY_AM AMProfileModule.QUERY_BATTERY_AM("battery")}</td><td>The value of battery level.<br/><b>Value range:</b><br/>0-10(10 indicates full)</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "query_state_am",<br/>
     * &nbsp; &nbsp; "query_state": 1,<br/>
     * &nbsp; &nbsp; "battery": 6<br/>
     * }<br/>
     */
    ACTION_QUERY_STATE_AM: RCTModule.ACTION_QUERY_STATE_AM,
    /**
     * The action value of event indicating get real time data successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SYNC_REAL_DATA_AM AMProfileModule.ACTION_SYNC_REAL_DATA_AM("sync_real_data_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_REAL_STEP_AM AMProfileModule.SYNC_REAL_STEP_AM("step")}</td><td>The real step count.<br/><b>Value range:</b><br/>0-4294967295(0xFFFFFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_REAL_CALORIE_AM AMProfileModule.SYNC_REAL_CALORIE_AM("calorie")}</td><td>The real calorie(not including BMR).<br/><b>Value range:</b><br/>0-65535(0xFFFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.SYNC_REAL_TOTALCALORIE_AM AMProfileModule.SYNC_REAL_TOTALCALORIE_AM("totalcalories")}</td><td>The real summary calorie(including BMR).<br/><b>Value range:</b><br/>0-65535 + BMR(0xFFFF + BMR)</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "sync_real_data_am",<br/>
     * &nbsp; &nbsp; "step": 2771,<br/>
     * &nbsp; &nbsp; "calorie": 151,<br/>
     * &nbsp; &nbsp; "totalcalories": 1206<br/>
     * }<br/>
     */
    ACTION_SYNC_REAL_DATA_AM: RCTModule.ACTION_SYNC_REAL_DATA_AM,
    /**
     * The action value of event indicating set user's basal metabolic rate successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_SET_BMR_SUCCESS_AM</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "set_bmr_success_am"<br/>
     * }<br/>
     */
    ACTION_SET_BMR_SUCCESS_AM: RCTModule.ACTION_SET_BMR_SUCCESS_AM,
    /**
     * The action value of event indicating get swim parameters successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_SWIMINFO_AM AMProfileModule.ACTION_GET_SWIMINFO_AM("get_swiminfo_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_SWIM_SWITCH_AM AMProfileModule.GET_SWIM_SWITCH_AM("get_swim_switch_am")}</td><td>Whether the swim function is open or not.<br/><b>Value:</b><br/><ul><li>0 indicates swim function closed</li><li>1/2 indicates swim function open</li></ul></td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_SWIMLANE_LENGTH_AM AMProfileModule.GET_SWIMLANE_LENGTH_AM("get_swimlane_length")}</td><td>Swimming lane length.<br/><b>Value range:</b><br/>0-255(0xFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_SWIM_CUTOUT_HOUR_AM AMProfileModule.GET_SWIM_CUTOUT_HOUR_AM("get_swim_cutout_hour_am")}</td><td>The hour part of cut out swim function.<br/><b>Value range:</b><br/>0-255(0xFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_SWIM_CUTOUT_MINUTE_AM AMProfileModule.GET_SWIM_CUTOUT_MINUTE_AM("get_swim_cutout_min_am")}</td><td>The minute part of cut out swim function.<br/><b>Value range:</b><br/>0-255(0xFF)</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_SWIM_UNIT_AM AMProfileModule.GET_SWIM_UNIT_AM("get_swim_unit_am")}</td><td>The swim unit type.<br/><b>Value:</b><br/><ul><li>{@link module:AMProfileModule.AM_SET_UNIT_METRIC AMProfileModule.AM_SET_UNIT_METRIC(1)}</li><li>{@link module:AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD(0)}</li></ul></td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "get_swiminfo_am",<br/>
     * &nbsp; &nbsp; "get_swim_switch_am": 1,<br/>
     * &nbsp; &nbsp; "get_swimlane_length": 50,<br/>
     * &nbsp; &nbsp; "get_swim_cutout_hour_am": 0,<br/>
     * &nbsp; &nbsp; "get_swim_cutout_min_am": 30,<br/>
     * &nbsp; &nbsp; "get_swim_unit_am": 0<br/>
     * }<br/>
     */
    ACTION_GET_SWIMINFO_AM: RCTModule.ACTION_GET_SWIMINFO_AM,
    /**
     * The action value of event indicating set swim information successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_SET_SWIMINFO_AM</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "set_swiminfo_am"<br/>
     * }<br/>
     */
    ACTION_SET_SWIMINFO_AM: RCTModule.ACTION_SET_SWIMINFO_AM,
    /**
     * The action value of event indicating send random number to AM device successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_RANDOM_AM AMProfileModule.ACTION_GET_RANDOM_AM("get_random_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_RANDOM_AM AMProfileModule.GET_RANDOM_AM("random")}</td><td>The random number sent to device.<br/>The value will be a 6-long number decimal string.<br/><b>Value range:</b><br/>"000000"-"999999"</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "get_random_am",<br/>
     * &nbsp; &nbsp; "random": "150305"<br/>
     * }<br/>
     */
    ACTION_GET_RANDOM_AM: RCTModule.ACTION_GET_RANDOM_AM,
    /**
     * The action value of event indicating set hour mode successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_SET_HOUR_MODE_SUCCESS_AM</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "set_hour_mode_success_am",<br/>
     * }<br/>
     */
    ACTION_SET_HOUR_MODE_SUCCESS_AM: RCTModule.ACTION_SET_HOUR_MODE_SUCCESS_AM,
    /**
     * The action value of event indicating get hour mode successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_HOUR_MODE_AM AMProfileModule.ACTION_GET_HOUR_MODE_AM("get_hour_mode_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_HOUR_MODE_AM AMProfileModule.GET_HOUR_MODE_AM("hourtype")}</td><td>The time mode.<br/><b>Value:</b><br/><ul><li>{@link module:AMProfileModule.AM_SET_12_HOUR_MODE AMProfileModule.AM_SET_12_HOUR_MODE(0)}</li><li>{@link module:AMProfileModule.AM_SET_24_HOUR_MODE AMProfileModule.AM_SET_24_HOUR_MODE(1)}</li><li>{@link module:AMProfileModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE AMProfileModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE(2)}</li><li>{@link module:AMProfileModule.AM_SET_EUROPE_12_HOUR_MODE AMProfileModule.AM_SET_EUROPE_12_HOUR_MODE(3)}</li><li>{@link module:AMProfileModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE AMProfileModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE(4)}</li><li>{@link module:AMProfileModule.AM_SET_EUROPE_24_HOUR_MODE AMProfileModule.AM_SET_EUROPE_24_HOUR_MODE(5)}</li></ul></td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "get_hour_mode_am",<br/>
     * &nbsp; &nbsp; "hourtype": 1<br/>
     * }<br/>
     */
    ACTION_GET_HOUR_MODE_AM: RCTModule.ACTION_GET_HOUR_MODE_AM,
    /**
     * The action value of event indicating set device mode successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>AMProfileModule.ACTION_SET_DEVICE_MODE_AM</td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "set_device_mode_am",<br/>
     * }<br/>
     */
    ACTION_SET_DEVICE_MODE_AM: RCTModule.ACTION_SET_DEVICE_MODE_AM,
    ACTION_CLOUD_BINDING_AM_SUCCESS: RCTModule.ACTION_CLOUD_BINDING_AM_SUCCESS,
    ACTION_CLOUD_BINDING_AM_FAIL: RCTModule.ACTION_CLOUD_BINDING_AM_FAIL,
    ACTION_CLOUD_UNBINDING_AM_SUCCESS: RCTModule.ACTION_CLOUD_UNBINDING_AM_SUCCESS,
    ACTION_CLOUD_UNBINDING_AM_FAIL: RCTModule.ACTION_CLOUD_UNBINDING_AM_FAIL,
    ACTION_CLOUD_SEARCH_AM: RCTModule.ACTION_CLOUD_SEARCH_AM,
    ACTION_CLOUD_SEARCH_FAIL_AM: RCTModule.ACTION_CLOUD_SEARCH_FAIL_AM,
    /**
     * The action value of event indicating set picture successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SET_PICTURE_SUCCESS_AM AMProfileModule.ACTION_SET_USERINFO_SUCCESS_AM("set_userinfo_success_am")}</td></tr>
     * </tbody>
     * </table>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "set_picture_success_am"<br/>
     * }<br/>
     */
    ACTION_SET_PICTURE_SUCCESS_AM: RCTModule.ACTION_SET_PICTURE_SUCCESS_AM,
    /**
     * The action value of event indicating get picture successfully.<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_PICTURE_AM AMProfileModule.ACTION_GET_PICTURE_AM("get_picture_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_PICTURE_AM AMProfileModule.GET_PICTURE_AM("get_picture_am)}</td><td>The picture index.<br/><b>Value:</b><br/><ul><li>0 indicates the frog picture.</li><li>1 indicates the default picture.</li></ul></td></tr>
     * </tbody>
     * </table>
     * <b>Example:</b><br/>
     * {<br/>
     * &nbsp; &nbsp; "action": "get_picture_am",<br/>
     * &nbsp; &nbsp; "get_picture_am": 0<br/>
     * }<br/>
     */
    ACTION_GET_PICTURE_AM: RCTModule.ACTION_GET_PICTURE_AM,

    // Keys:
    /**
     * The key of error ID number of AM device.<br/>
     * <b>Value:</b>
     * <ul>
     * <li>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)} indicates parameter error.</li>
     * <li>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)} indicates version not support error.</li>
     * </ul>
     */
    ERROR_NUM_AM: RCTModule.ERROR_NUM_AM,
    /**
     * The error ID indicates parameter error(400).
     */
    ERROR_ID_ILLEGAL_ARGUMENT: RCTModule.ERROR_ID_ILLEGAL_ARGUMENT,
    /**
     * The error ID indicates version not support error(402).
     */
    ERROR_ID_VERSION_NOT_SUPPORT: RCTModule.ERROR_ID_VERSION_NOT_SUPPORT,
    /**
     * The key of error description.("description")<br/>
     * The value string will show the detail description of the error.
     */
    ERROR_DESCRIPTION_AM: RCTModule.ERROR_DESCRIPTION_AM,
    /**
     * The key of the reset result.("reset_am")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>0 indicates reset failed.</li>
     * <li>1 indicates reset successfully.</li>
     * </ul>
     */
    RESET_AM: RCTModule.RESET_AM,
    /**
     * The key of the user's ID.("userid")<br/>
     * <b>Value range:</b><br/>
     * 0-4294967295(0xFFFFFFFF)
     */
    USERID_AM: RCTModule.USERID_AM,
    /**
     * The key of the user's age.("age")<br/>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    GET_USER_AGE_AM: RCTModule.GET_USER_AGE_AM,
    /**
     * The key of the user's step length.("step")<br/>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    GET_USER_STEP_AM: RCTModule.GET_USER_STEP_AM,
    /**
     * The key of the user's height.("height")<br/>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    GET_USER_HEIGHT_AM: RCTModule.GET_USER_HEIGHT_AM,
    /**
     * The key of the user's gender.("gender")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>{@link module:AMProfileModule.AM_SET_FEMALE AMProfileModule.AM_SET_FEMALE(0)}</li>
     * <li>{@link module:AMProfileModule.AM_SET_MALE AMProfileModule.AM_SET_MALE(1)}</li>
     * </ul>
     */
    GET_USER_SEX_AM: RCTModule.GET_USER_SEX_AM,
    /**
     * The key of the user's weight.("weight")<br/>
     * The value is double type<br/>
     * <b>Value range:</b><br/>
     * 0.0-255.255(0xFF.0xFF)
     */
    GET_USER_WEIGHT_AM: RCTModule.GET_USER_WEIGHT_AM,
    /**
     * The key of the unit type.<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>{@link module:AMProfileModule.AM_SET_UNIT_METRIC AMProfileModule.AM_SET_UNIT_METRIC(1)}</li>
     * <li>{@link module:AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD(0)}</li>
     * </ul>
     */
    GET_USER_UNIT_AM: RCTModule.GET_USER_UNIT_AM,
    /**
     * The key of the goal of max step number.("target1")<br/>
     * <b>Value range:</b><br/>
     * 0-4294967295(0xFFFFFFFF)
     */
    GET_USER_TARGET1_AM: RCTModule.GET_USER_TARGET1_AM,
    /**
     * The key of the goal of middle step number.("target2")<br/>
     * <b>Value range:</b><br/>
     * 0-4294967295(0xFFFFFFFF)
     */
    GET_USER_TARGET2_AM: RCTModule.GET_USER_TARGET2_AM,
    /**
     * The key of the goal of min step number.("target3")<br/>
     * <b>Value range:</b><br/>
     * 0-4294967295(0xFFFFFFFF)
     */
    GET_USER_TARGET3_AM: RCTModule.GET_USER_TARGET3_AM,
    /**
     * The key of the goal of swim time(in minutes).("swim_target")<br/>
     * <b>Value range:</b><br/>
     * 0-15360(0xFF*60 + 60)
     */
    GET_USER_SWIMTARGET_AM: RCTModule.GET_USER_SWIMTARGET_AM,
    /**
     * The key of the alarms' count.("alarmclocknumber")<br/>
     * <b>Value range:</b><br/>
     * 0-3(currently only support 3 alarms)
     */
    GET_ALARMNUM_AM: RCTModule.GET_ALARMNUM_AM,
    /**
     * The key of the alarms's id array.("alarmclocknumberid")<br/>
     * <b>Value:</b><br/>
     * Integer array contains set alarms.
     */
    GET_ALARMNUM_ID_AM: RCTModule.GET_ALARMNUM_ID_AM,
    /**
     * The key of the whole alarm information.("alarmclockdetail")
     */
    GET_ALARM_CLOCK_DETAIL: RCTModule.GET_ALARM_CLOCK_DETAIL,
    /**
     * The key of the alarm id.("alarmid")<br/>
     * Value should be 1, 2, 3.<br/>
     * <b>Note:</b> If specified alarm not set yet, the result will not include the id.<br/>
     */
    GET_ALARM_ID_AM: RCTModule.GET_ALARM_ID_AM,
    /**
     * The key of the alarm time.("time")<br/>
     * <b>Value format:</b><br/>
     * HH:mm
     */
    GET_ALARM_TIME_AM: RCTModule.GET_ALARM_TIME_AM,
    /**
     * The key of whether alarm repeat or not.("repeat")<br/>
     * <ul>
     * <li>If value is true, it indicates that alarm will repeat as following key's value:<br/>
     * AMProfileModule.GET_ALARM_WEEK_AM
     * </li>
     * <li>If the value is false, it indicates that alarm will only play one time.</li>
     * </ul>
     */
    GET_ALARM_ISREPEAT_AM: RCTModule.GET_ALARM_ISREPEAT_AM,
    /**
     * The key of week repeat record.("get_alarm_week")<br/>
     * It will contains 7 JSON key-values:
     * <ul>
     * <li>{@link module:AMProfileModule.GET_ALARM_WEEK_SUNDAY_AM AMProfileModule.GET_ALARM_WEEK_SUNDAY_AM("sun")}</li>
     * <li>{@link module:AMProfileModule.GET_ALARM_WEEK_MONDAY_AM AMProfileModule.GET_ALARM_WEEK_MONDAY_AM("mon")}</li>
     * <li>{@link module:AMProfileModule.GET_ALARM_WEEK_TUESDAY_AM AMProfileModule.GET_ALARM_WEEK_TUESDAY_AM("tue")}</li>
     * <li>{@link module:AMProfileModule.GET_ALARM_WEEK_WEDNESDAY_AM AMProfileModule.GET_ALARM_WEEK_WEDNESDAY_AM("wed")}</li>
     * <li>{@link module:AMProfileModule.GET_ALARM_WEEK_THURSDAY_AM AMProfileModule.GET_ALARM_WEEK_THURSDAY_AM("thu")}</li>
     * <li>{@link module:AMProfileModule.GET_ALARM_WEEK_FRIDAY_AM AMProfileModule.GET_ALARM_WEEK_FRIDAY_AM("fri")}</li>
     * <li>{@link module:AMProfileModule.GET_ALARM_WEEK_SATURDAY_AM AMProfileModule.GET_ALARM_WEEK_SATURDAY_AM("sat")}</li>
     * </ul>
     */
    GET_ALARM_WEEK_AM: RCTModule.GET_ALARM_WEEK_AM,
    /**
     * The key of whether alarm should play on Sunday.("sun")
     * <ul>
     * <li>If the value is true, it indicates that it should play.</li>
     * <li>If the value is false, it indicates that it should NOT play.</li>
     * </ul>
     */
    GET_ALARM_WEEK_SUNDAY_AM: RCTModule.GET_ALARM_WEEK_SUNDAY_AM,
    /**
     * The key of whether alarm should play on Monday.("mon")
     * <ul>
     * <li>If the value is true, it indicates that it should play.</li>
     * <li>If the value is false, it indicates that it should NOT play.</li>
     * </ul>
     */
    GET_ALARM_WEEK_MONDAY_AM: RCTModule.GET_ALARM_WEEK_MONDAY_AM,
    /**
     * The key of whether alarm should play on Tuesday.("tue")
     * <ul>
     * <li>If the value is true, it indicates that it should play.</li>
     * <li>If the value is false, it indicates that it should NOT play.</li>
     * </ul>
     */
    GET_ALARM_WEEK_TUESDAY_AM: RCTModule.GET_ALARM_WEEK_TUESDAY_AM,
    /**
     * The key of whether alarm should play on Wednesday.("wed")
     * <ul>
     * <li>If the value is true, it indicates that it should play.</li>
     * <li>If the value is false, it indicates that it should NOT play.</li>
     * </ul>
     */
    GET_ALARM_WEEK_WEDNESDAY_AM: RCTModule.GET_ALARM_WEEK_WEDNESDAY_AM,
    /**
     * The key of whether alarm should play on Thursday.("thu")
     * <ul>
     * <li>If the value is true, it indicates that it should play.</li>
     * <li>If the value is false, it indicates that it should NOT play.</li>
     * </ul>
     */
    GET_ALARM_WEEK_THURSDAY_AM: RCTModule.GET_ALARM_WEEK_THURSDAY_AM,
    /**
     * The key of whether alarm should play on Friday.("fri")
     * <ul>
     * <li>If the value is true, it indicates that it should play.</li>
     * <li>If the value is false, it indicates that it should NOT play.</li>
     * </ul>
     */
    GET_ALARM_WEEK_FRIDAY_AM: RCTModule.GET_ALARM_WEEK_FRIDAY_AM,
    /**
     * The key of whether alarm should play on Saturday.("sat")
     * <ul>
     * <li>If the value is true, it indicates that it should play.</li>
     * <li>If the value is false, it indicates that it should NOT play.</li>
     * </ul>
     */
    GET_ALARM_WEEK_SATURDAY_AM: RCTModule.GET_ALARM_WEEK_SATURDAY_AM,
    /**
     * The key of whether alarm is set/unset.("switch")
     * <ul>
     * <li>If the value is true, it indicates that it is set.</li>
     * <li>If the value is false, it indicates that it is unset.</li>
     * </ul>
     */
    GET_ALARM_ISON_AM: RCTModule.GET_ALARM_ISON_AM,
    /**
     * The key of time of activity reminder.("time")<br/>
     * <b>Value format:</b><br/>
     * HH:mm
     */
    GET_ACTIVITY_REMIND_TIME_AM: RCTModule.GET_ACTIVITY_REMIND_TIME_AM,
    /**
     * The key of whether activity reminder open or not.("switch")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>true indicates open</li>
     * <li>false indicates not open</li>
     * </ul>
     */
    GET_ACTIVITY_REMIND_ISON_AM: RCTModule.GET_ACTIVITY_REMIND_ISON_AM,
    /**
     * The key of the whole activity data.("activity")
     */
    SYNC_ACTIVITY_DATA_AM: RCTModule.SYNC_ACTIVITY_DATA_AM,
    /**
     * The key of the time for every 5 min activity data.("time")<br/>
     * <b>Value format: </b><br/>
     * yyyy-MM-dd HH:mm:ss<br/>
     * <b>Example: </b><br/>
     * 2016-07-18 09:00:00
     */
    SYNC_ACTIVITY_DATA_TIME_AM: RCTModule.SYNC_ACTIVITY_DATA_TIME_AM,
    /**
     * The key of the step number for every 5 min activity data.("step")<br/>
     * <b>Value range:</b><br/>
     * 0-4294967295(0xFFFFFFFF)
     */
    SYNC_ACTIVITY_DATA_STEP_AM: RCTModule.SYNC_ACTIVITY_DATA_STEP_AM,
    /**
     * The key of the step length for every 5 min activity data.("stepsize")<br/>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    SYNC_ACTIVITY_DATA_STEP_LENGTH_AM: RCTModule.SYNC_ACTIVITY_DATA_STEP_LENGTH_AM,
    /**
     * The key of the calorie for every 5 min activity data.("calorie")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_ACTIVITY_DATA_CALORIE_AM: RCTModule.SYNC_ACTIVITY_DATA_CALORIE_AM,
    /**
     * The key of the whole data for every 5 min activity data.("activity_each_data")
     */
    SYNC_ACTIVITY_EACH_DATA_AM: RCTModule.SYNC_ACTIVITY_EACH_DATA_AM,
    /**
     * The key of the whole sleep data.("sleep")
     */
    SYNC_SLEEP_DATA_AM: RCTModule.SYNC_SLEEP_DATA_AM,
    /**
     * The key of the each 5 minute's sleep time.("time")<br/>
     * <b>Value format:</b><br/>
     * yyyy-MM-dd HH:mm:ss
     */
    SYNC_SLEEP_DATA_TIME_AM: RCTModule.SYNC_SLEEP_DATA_TIME_AM,
    /**
     * The key of the each 5 minute's sleep level.("level")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>0 indicates awake</li>
     * <li>1 indicates light sleep</li>
     * <li>2 indicates deep sleep</li>
     * </ul>
     */
    SYNC_SLEEP_DATA_LEVEL_AM: RCTModule.SYNC_SLEEP_DATA_LEVEL_AM,
    /**
     * The key of the each 5 minute data array.("sleep_each_data")<br/>
     * <b>Value example:</b><br/>
     * [<br/>
     * &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-29 00:05:01",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; "level": "1",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "60D6048F3BFBA17CD7FD137E68CE29DD"<br/>
     * &nbsp; &nbsp; },<br/>
     * &nbsp; &nbsp; {<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; "time": "2016-07-29 00:10:01",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; "level": "0",<br/>
     * &nbsp; &nbsp; &nbsp; &nbsp; "dataID": "1C0E2BBDE85C0D4C4E8895F98C9F6AC4"<br/>
     * &nbsp; &nbsp; }<br/>
     * ]<br/>
     */
    SYNC_SLEEP_EACH_DATA_AM: RCTModule.SYNC_SLEEP_EACH_DATA_AM,
    /**
     * The key of data array of the stage data.("stage_data")
     */
    SYNC_STAGE_DATA_AM: RCTModule.SYNC_STAGE_DATA_AM,
    /**
     * The key of the type of stage report.("type")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>{@link module:AMProfileModule.SYNC_STAGE_DATA_TYPE_SWIM_AM AMProfileModule.SYNC_STAGE_DATA_TYPE_SWIM_AM("swim")}</li>
     * <li>{@link module:AMProfileModule.SYNC_STAGE_DATA_TYPE_WORKOUT_AM AMProfileModule.SYNC_STAGE_DATA_TYPE_WORKOUT_AM("stage_data_type_workout")}</li>
     * <li>{@link module:AMProfileModule.SYNC_STAGE_DATA_TYPE_SLEEP_AM AMProfileModule.SYNC_STAGE_DATA_TYPE_SLEEP_AM("sleep")}</li>
     * <li>{@link module:AMProfileModule.SYNC_STAGE_DATA_TYPE_PAGE_VIEW_SUMMARY AMProfileModule.SYNC_STAGE_DATA_TYPE_PAGE_VIEW_SUMMARY("page_view_summary")}</li>
     * </ul>
     */
    SYNC_STAGE_DATA_TYPE_AM: RCTModule.SYNC_STAGE_DATA_TYPE_AM,
    /**
     * Type of work out.("stage_data_type_workout")
     */
    SYNC_STAGE_DATA_TYPE_WORKOUT_AM: RCTModule.SYNC_STAGE_DATA_TYPE_WORKOUT_AM,
    /**
     * Type of sleep.("sleep")
     */
    SYNC_STAGE_DATA_TYPE_SLEEP_AM: RCTModule.SYNC_STAGE_DATA_TYPE_SLEEP_AM,
    /**
     * Type of swim.("swim")
     */
    SYNC_STAGE_DATA_TYPE_SWIM_AM: RCTModule.SYNC_STAGE_DATA_TYPE_SWIM_AM,
    /**
     * Type of page view summary.("page_view_summary")
     */
    SYNC_STAGE_DATA_TYPE_PAGE_VIEW_SUMMARY: RCTModule.SYNC_STAGE_DATA_TYPE_PAGE_VIEW_SUMMARY,
    /**
     * The key of stage report stop time.("stoptime")<br/>
     * <b>Value format:</b><br/>
     * yyyy-MM-dd HH:mm:ss
     */
    SYNC_STAGE_DATA_STOP_TIME_AM: RCTModule.SYNC_STAGE_DATA_STOP_TIME_AM,
    /**
     * The key of stage report used time(in minutes).("usedtime")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_STAGE_DATA_USED_TIME_AM: RCTModule.SYNC_STAGE_DATA_USED_TIME_AM,
    /**
     * The key of the step number of work out.("stage_data_workout_step")<br/>
     * <b>Value range:</b><br/>
     * 0-4294967295(0xFFFFFFFF)
     */
    SYNC_STAGE_DATA_WORKOUT_STEP_AM: RCTModule.SYNC_STAGE_DATA_WORKOUT_STEP_AM,
    /**
     * The key of the distance.("stage_data_distance")<br/>
     * It's string type<br/>
     * <b>Value format&range:</b><br/>
     * "123.456"("0.0"-"255.255"(0xFF.0xFF))
     */
    SYNC_STAGE_DATA_DISTANCE_AM: RCTModule.SYNC_STAGE_DATA_DISTANCE_AM,
    /**
     * The key of the calorie.("calorie")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_STAGE_DATA_CALORIE_AM: RCTModule.SYNC_STAGE_DATA_CALORIE_AM,
    /**
     * The key of sleep efficiency.("sleepefficiency")<br/>
     * <b>Value range:</b><br/>
     * 0.0-100.0
     */
    SYNC_STAGE_DATA_SLEEP_EFFICIENCY_AM: RCTModule.SYNC_STAGE_DATA_SLEEP_EFFICIENCY_AM,
    /**
     * The key of whether need to extend sleep 50 minutes or not.("is50min")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>0 indicates not need to extend.</li>
     * <li>1 indicates need to extend.</li>
     * </ul>
     */
    SYNC_STAGE_DATA_SLEEP_IS50MIN_AM: RCTModule.SYNC_STAGE_DATA_SLEEP_IS50MIN_AM,
    /**
     * The key of swim stroke.("swimming stroke")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>0 indicates freestyle.</li>
     * <li>1 indicates breaststroke.</li>
     * <li>2 indicates backstroke.</li>
     * <li>5 indicates unknown.</li>
     * </ul>
     */
    SYNC_STAGE_DATA_SWIM_STROKE_AM: RCTModule.SYNC_STAGE_DATA_SWIM_STROKE_AM,
    /**
     * The key of swim arm pulling time.("number of strokes")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_STAGE_DATA_SWIM_PULL_TIMES_AM: RCTModule.SYNC_STAGE_DATA_SWIM_PULL_TIMES_AM,
    /**
     * The key of swim round number.("number of turns")<br/>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    SYNC_STAGE_DATA_SWIM_TURNS_AM: RCTModule.SYNC_STAGE_DATA_SWIM_TURNS_AM,
    /**
     * The key of the swimming pool length.("stage_data_swimpool_length")<br/>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    SYNC_STAGE_DATA_SWIMPOOL_LENGTH_AM: RCTModule.SYNC_STAGE_DATA_SWIMPOOL_LENGTH_AM,
    /**
     * The key of the time of cut in swim and begin swim(in minutes).("stage_data_cutindif")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_STAGE_DATA_SWIM_CUTINDIF_AM: RCTModule.SYNC_STAGE_DATA_SWIM_CUTINDIF_AM,
    /**
     * The key of the time of cut out swim and end swim(in minutes).("stage_data_cutoutdif")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_STAGE_DATA_SWIM_CUTOUTDIF_AM: RCTModule.SYNC_STAGE_DATA_SWIM_CUTOUTDIF_AM,
    /**
     * The key of the swim process flag.("stage_data_processflag")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>0 indicates swim in process.</li>
     * <li>1 indicates start of swimming.</li>
     * <li>2 indicates end of swimming.</li>
     * <li>3 indicates the swim is only a single round.</li>
     * </ul>
     */
    SYNC_STAGE_DATA_SWIM_PROCESSFLAG_AM: RCTModule.SYNC_STAGE_DATA_SWIM_PROCESSFLAG_AM,
    /**
     * The key of the date of page view summary.("stage_data_view_summary_date")<br/>
     * <b>Value format:</b><br/>
     * yyyy-MM-dd
     */
    SYNC_STAGE_DATA_VIEW_SUMMARY_DATE_AM: RCTModule.SYNC_STAGE_DATA_VIEW_SUMMARY_DATE_AM,
    /**
     * The key of the count that user view the step page.("stage_data_view_summary_step")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_STAGE_DATA_VIEW_SUMMARY_STEP_AM: RCTModule.SYNC_STAGE_DATA_VIEW_SUMMARY_STEP_AM,
    /**
     * The key of the count that user view the distance page.("stage_data_view_summary_distance")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_STAGE_DATA_VIEW_SUMMARY_DISTANCE_AM: RCTModule.SYNC_STAGE_DATA_VIEW_SUMMARY_DISTANCE_AM,
    /**
     * The key of the count that user view the calorie page.("stage_data_view_summary_calorie")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_STAGE_DATA_VIEW_SUMMARY_CALORIE_AM: RCTModule.SYNC_STAGE_DATA_VIEW_SUMMARY_CALORIE_AM,
    /**
     * The key of the count that user view the activity target page.("stage_data_view_summary_target")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_STAGE_DATA_VIEW_SUMMARY_TARGET_AM: RCTModule.SYNC_STAGE_DATA_VIEW_SUMMARY_TARGET_AM,
    /**
     * The key of the count that user view the swim summary page.("stage_data_view_summary_swim")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_STAGE_DATA_VIEW_SUMMARY_SWIM_AM: RCTModule.SYNC_STAGE_DATA_VIEW_SUMMARY_SWIM_AM,
    /**
     * The key of state information.("query_state")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>0 indicates waist</li>
     * <li>1 indicates wrist</li>
     * <li>2 indicates sleep</li>
     * </ul>
     */
    QUERY_STATE_AM: RCTModule.QUERY_STATE_AM,
    /**
     * The key of battery level.("battery")<br/>
     * <b>Value range:</b><br/>
     * 0-10(10 indicates full)
     */
    QUERY_BATTERY_AM: RCTModule.QUERY_BATTERY_AM,
    /**
     * The key of the real step count.("step")<br/>
     * <b>Value range:</b><br/>
     * 0-4294967295(0xFFFFFFFF)
     */
    SYNC_REAL_STEP_AM: RCTModule.SYNC_REAL_STEP_AM,
    /**
     * The key of the real calorie(not including BMR).("calorie")<br/>
     * <b>Value range:</b><br/>
     * 0-65535(0xFFFF)
     */
    SYNC_REAL_CALORIE_AM: RCTModule.SYNC_REAL_CALORIE_AM,
    /**
     * The key of the real summary calorie(including BMR).("totalcalories")<br/>
     * <b>Value range:</b><br/>
     * 0-65535 + BMR(0xFFFF + BMR)
     */
    SYNC_REAL_TOTALCALORIE_AM: RCTModule.SYNC_REAL_TOTALCALORIE_AM,
    /**
     * The key of swimming lane length.("get_swimlane_length")<br/>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    GET_SWIMLANE_LENGTH_AM: RCTModule.GET_SWIMLANE_LENGTH_AM,
    /**
     * The key of whether the swim function is open or not.("get_swim_switch_am")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>0 indicates swim function closed</li>
     * <li>1/2 indicates swim function open</li>
     * </ul>
     */
    GET_SWIM_SWITCH_AM: RCTModule.GET_SWIM_SWITCH_AM,
    /**
     * The key of the hour part of cut out swim function.("get_swim_cutout_hour_am")<br/>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    GET_SWIM_CUTOUT_HOUR_AM: RCTModule.GET_SWIM_CUTOUT_HOUR_AM,
    /**
     * The key of the minute part of cut out swim function.("get_swim_cutout_min_am")<br/>
     * <b>Value range:</b><br/>
     * 0-255(0xFF)
     */
    GET_SWIM_CUTOUT_MINUTE_AM: RCTModule.GET_SWIM_CUTOUT_MINUTE_AM,
    /**
     * The key of swim unit type.("get_swim_unit_am")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>{@link module:AMProfileModule.AM_SET_UNIT_METRIC AMProfileModule.AM_SET_UNIT_METRIC(1)}</li>
     * <li>{@link module:AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD(0)}</li>
     * </ul>
     */
    GET_SWIM_UNIT_AM: RCTModule.GET_SWIM_UNIT_AM,
    /**
     * The key of the random number sent to device.("random")<br/>
     * The value will be a 6-long number decimal string.<br/>
     * <b>Value range:</b><br/>
     * "000000"-"999999"
     */
    GET_RANDOM_AM: RCTModule.GET_RANDOM_AM,
    AM_SWITCH_OPEN: RCTModule.AM_SWITCH_OPEN,
    AM_SWITCH_CLOSE: RCTModule.AM_SWITCH_CLOSE,
    AM_SWITCH_REPEAT: RCTModule.AM_SWITCH_REPEAT,
    AM_SEITCH_NOT_REPEAT: RCTModule.AM_SEITCH_NOT_REPEAT,
    /**
     * The value indicates male.(1)
     */
    AM_SET_MALE: RCTModule.AM_SET_MALE,
    /**
     * The value indicates female.(0)
     */
    AM_SET_FEMALE: RCTModule.AM_SET_FEMALE,
    /**
     * The value indicates metric unit type(kilometre/metre).(1)
     */
    AM_SET_UNIT_METRIC: RCTModule.AM_SET_UNIT_METRIC,
    /**
     * The value indicates imperial standard unit type(miles/yard).(0)
     */
    AM_SET_UNIT_IMPERIAL_STANDARD: RCTModule.AM_SET_UNIT_IMPERIAL_STANDARD,
    /**
     * The value indicates whole world 12 hour mode(0)
     */
    AM_SET_12_HOUR_MODE: RCTModule.AM_SET_12_HOUR_MODE,
    /**
     * The value indicates whole world 24 hour mode(1)
     */
    AM_SET_24_HOUR_MODE: RCTModule.AM_SET_24_HOUR_MODE,
    /**
     * The value indicates Europe world 12 hour mode(3)
     */
    AM_SET_EUROPE_12_HOUR_MODE: RCTModule.AM_SET_EUROPE_12_HOUR_MODE,
    /**
     * The value indicates Europe world 24 hour mode(5)
     */
    AM_SET_EUROPE_24_HOUR_MODE: RCTModule.AM_SET_EUROPE_24_HOUR_MODE,
    /**
     * The value indicates except Europe world 12 hour mode(2)
     */
    AM_SET_EXCEPT_EUROPE_12_HOUR_MODE: RCTModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE,
    /**
     * The value indicates except Europe world 24 hour mode(4)
     */
    AM_SET_EXCEPT_EUROPE_24_HOUR_MODE: RCTModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE,
    /**
     * The key of the time mdoe.<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>{@link module:AMProfileModule.AM_SET_12_HOUR_MODE AMProfileModule.AM_SET_12_HOUR_MODE(0)}</li>
     * <li>{@link module:AMProfileModule.AM_SET_24_HOUR_MODE AMProfileModule.AM_SET_24_HOUR_MODE(1)}</li>
     * <li>{@link module:AMProfileModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE AMProfileModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE(2)}</li>
     * <li>{@link module:AMProfileModule.AM_SET_EUROPE_12_HOUR_MODE AMProfileModule.AM_SET_EUROPE_12_HOUR_MODE(3)}</li>
     * <li>{@link module:AMProfileModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE AMProfileModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE(4)}</li>
     * <li>{@link module:AMProfileModule.AM_SET_EUROPE_24_HOUR_MODE AMProfileModule.AM_SET_EUROPE_24_HOUR_MODE(5)}</li>
     * </ul>
     */
    GET_HOUR_MODE_AM: RCTModule.GET_HOUR_MODE_AM,
    /**
     * Indicates device is sleep mode.(0)
     */
    AM_DEVICE_MODE_SLEEP: RCTModule.AM_DEVICE_MODE_SLEEP,
    /**
     * Indicates device is activity mode.(1)
     */
    AM_DEVICE_MODE_ACTIVITY: RCTModule.AM_DEVICE_MODE_ACTIVITY,
    /**
     * Indicates device is flight mode.(2)
     */
    AM_DEVICE_MODE_FLIGHT: RCTModule.AM_DEVICE_MODE_FLIGHT,
    /**
     * Indicates device is driving mode.(3)
     */
    AM_DEVICE_MODE_DRIVING: RCTModule.AM_DEVICE_MODE_DRIVING,
    CLOUD_SEARCH_AM: RCTModule.CLOUD_SEARCH_AM,
    /**
     * The key of the MD5 hash of the data.("dataID")
     */
    DATAID: RCTModule.DATAID,
    /**
     * The key of the picture index.("get_picture_am")<br/>
     * <b>Value:</b><br/>
     * <ul>
     * <li>0 indicates the frog picture.</li>
     * <li>1 indicates the default picture.</li>
     * </ul>
     */
    GET_PICTURE_AM: RCTModule.GET_PICTURE_AM
}