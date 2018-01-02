/**
 * Created by Jeepend on 11/11/2016.
 */
'use strict';


var {
    NativeModules,
    DeviceEventEmitter
} = require('react-native');

var AMProfileModule = require('./AMProfileModule.js');

var RCTModule = NativeModules.AM4Module

/**
 * @module AM4Module
 */
module.exports = {
    /**
     * Notify event type for AM4.("event_notify_am4")
     */
    Event_Notify: RCTModule.Event_Notify,
    /**
     * Get AM4 device's IDPS information.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The IDPS information will be the event object.
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getIdps: function (mac) {
        RCTModule.getIdps(mac)
    },
    /**
     * Reset AM4 device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If reset successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_RESET_AM AMProfileModule.ACTION_RESET_AM("reset_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.RESET_AM AMProfileModule.RESET_AM("reset")}</td><td>0 indicates reset failed.<br/>1 indicates reset successfully.</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    reset: function (mac) {
        RCTModule.reset(mac)
    },
    /**
     * Get user's ID
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If reset successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_USERID_AM AMProfileModule.ACTION_USERID_AM("userid_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.USERID_AM AMProfileModule.USERID_AM("userid")}</td><td>User's ID</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getUserId: function (mac) {
        RCTModule.getUserId(mac)
    },
    /**
     * Get alarms' count
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_ALARMNUM_AM AMProfileModule.ACTION_GET_ALARMNUM_AM("get_alarmnum_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ALARMNUM_AM AMProfileModule.GET_ALARMNUM_AM("alarmclocknumber")}</td><td>Alarm clock count</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ALARMNUM_ID_AM AMProfileModule.GET_ALARMNUM_ID_AM("alarmclocknumberid")}</td><td>Alarm clock id array, e.g. [1, 2, 3]</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getAlarmClockNum: function (mac) {
        RCTModule.getAlarmClockNum(mac)
    },
    /**
     * Get alarm information by id
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
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
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {array} alarmIDArray Alarm id array to be query.<br/>
     *            <ul>
     *            <li>The parameters should be 1, 2, or 3</li>
     *            <li>The duplicate parameters will be IGNORED</li>
     *            <li>The query result will be in ascending order of id.</li>
     *            <li>If specified alarm not set yet, the result will not include the id.</li>
     *            </ul>
     */
    getAlarmClockDetail: function (mac, alarmIDArray) {
        RCTModule.getAlarmClockDetail(mac, alarmIDArray)
    },
    /**
     * Set/Unset alarm
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set/unset successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SET_ALARMINFO_SUCCESS_AM AMProfileModule.ACTION_SET_ALARMINFO_SUCCESS_AM("set_alarminfo_success_am")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} id  Alarm id<br/>
     *                 <b>Range:</b> 1, 2 or 3
     * @param {number} hour Alarm hour part<br/>
     *                 <b>Range:</b> [0, 23]
     * @param {number} min Alarm minute part<br/>
     *                 <b>Range:</b> [0, 59]
     * @param {boolean} isRepeat Indicates whether it will repeat:
     *                  <ul>
     *                  <li>true indicates that it will repeat as the <b>weeks</b> parameter</li>
     *                  <li>false indicates that it will only play one time and <b>IGNORE</b> the <b>weeks</b> parameter</li>
     *                  </ul>
     * @param {array} weekArray The days in a week to repeat the alarm, week[0~6] indicates Sun~Sat.<br/>
     *                 And 1 indicates open, 0 indicates close.<br/>
     *                 <b>For example:</b><br/>
     *                 {0, 1, 1, 1, 1, 1, 0} means the alarm will repeat on Mon, Tue, Wed, Thu, Fri.
     * @param {boolean} isOn true if want to set the alarm, false to unset it.
     */
    setAlarmClock: function (mac, id, hour, min, isRepeat, weekArray, isOn) {
        RCTModule.setAlarmClock(mac, id, hour, min, isRepeat, weekArray, isOn)
    },
    /**
     * Delete alarm by id
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If delete successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_DELETE_ALARM_SUCCESS_AM AMProfileModule.ACTION_DELETE_ALARM_SUCCESS_AM("delete_alarm_success_am")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} id Alarm id(should be 1, 2 or 3)
     */
    deleteAlarmClock: function (mac, id) {
        RCTModule.deleteAlarmClock(mac, id)
    },
    /**
     * Get activity remind setting.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If delete successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_ACTIVITY_REMIND_AM AMProfileModule.ACTION_GET_ACTIVITY_REMIND_AM("get_activity_remind_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ACTIVITY_REMIND_TIME_AM AMProfileModule.GET_ACTIVITY_REMIND_TIME_AM("time")}</td><td>The time of activity reminder<br/><b>Value format:</b><br/>HH:mm</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_ACTIVITY_REMIND_ISON_AM AMProfileModule.GET_ACTIVITY_REMIND_ISON_AM("switch")}</td><td>Whether activity reminder open or not.</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getActivityRemind: function (mac) {
        RCTModule.getActivityRemind(mac)
    },
    /**
     * Set/Unset activity remind
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set/unset successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SET_ACTIVITYREMIND_SUCCESS_AM AMProfileModule.ACTION_SET_ACTIVITYREMIND_SUCCESS_AM("set_activityremind_success_am")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} hour Activity remind hour part<br/>
     *                 <b>Range:</b> [0, 23]
     * @param {number} min Activity remind minute part<br/>
     *                 <b>Range:</b>[0, 59]
     * @param {boolean} isOn true if want to set activity remind, false to unset it.
     */
    setActivityRemind: function (mac, hour, min, isOn) {
        RCTModule.setActivityRemind(mac, hour, min, isOn)
    },
    /**
     * Get device state and battery information
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_QUERY_STATE_AM AMProfileModule.ACTION_QUERY_STATE_AM("query_state_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.QUERY_STATE_AM AMProfileModule.QUERY_STATE_AM("query_state")}</td><td>The value of state information.<br/><b>Value:</b><br/><ul><li>0 indicates waist</li><li>1 indicates wrist</li><li>2 indicates sleep</li></ul></td></tr>
     * <tr><td>{@link module:AMProfileModule.QUERY_BATTERY_AM AMProfileModule.QUERY_BATTERY_AM("battery")}</td><td>The value of battery level.<br/><b>Value range:</b><br/>0-10(10 indicates full)</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    queryAMState: function (mac) {
        RCTModule.queryAMState(mac)
    },
    /**
     * Set user ID
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SET_USERID_SUCCESS_AM AMProfileModule.ACTION_SET_USERID_SUCCESS_AM("set_userid_success_am")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} id new user id <br/>
     *           <b>Range:</b> [1, 2147483647(0x7FFFFFFF)]
     */
    setUserId: function (mac, id) {
        if (id < 1 || id  > 0x7FFFFFFF) {
          let result = {
            "mac": mac,
            "type": "AM4",
            "action" : AMProfileModule.ACTION_ERROR_AM,
          }
          result[AMProfileModule.ERROR_NUM_AM] = AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT
          result[AMProfileModule.ERROR_DESCRIPTION_AM] = 'setUserId() parameter id should be in the range [1, 2147483647(0x7FFFFFFF)]'
          DeviceEventEmitter.emit(RCTModule.Event_Notify, result)
          return
        }
        RCTModule.setUserId(mac, id)
    },
    /**
     * Get user information
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
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
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getUserInfo: function (mac) {
        RCTModule.getUserInfo(mac)
    },
    /**
     * Set user's BMR
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SET_BMR_SUCCESS_AM AMProfileModule.ACTION_SET_BMR_SUCCESS_AM("set_bmr_success_am")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} bmr User's BMR<br/>
     *            <b>Range:</b> [1, 32767(0x7FFF)]
     */
    setUserBmr: function (mac, bmr) {
        RCTModule.setUserBmr(mac, bmr)
    },
    /**
     * Get the activity data.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
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
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    syncActivityData: function (mac) {
        RCTModule.syncActivityData(mac)
    },
    /**
     * Get the sleep data.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
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
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    syncSleepData: function (mac) {
        RCTModule.syncSleepData(mac)
    },
    /**
     * Get current time activity data
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
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
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    syncRealData: function (mac) {
        RCTModule.syncRealData(mac)
    },
    /**
     * Set the system time to AM device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SYNC_TIME_SUCCESS_AM AMProfileModule.ACTION_SYNC_TIME_SUCCESS_AM("set_sync_time_success_am")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    syncRealTime: function (mac) {
        RCTModule.syncRealTime(mac)
    },
    /**
     * Set hour mode
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SET_HOUR_MODE_SUCCESS_AM AMProfileModule.ACTION_SET_HOUR_MODE_SUCCESS_AM("set_hour_mode_success_am")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} hourMode The value should be one of following:
     *                 <ul>
     *                 <li>{@link module:AMProfileModule.AM_SET_12_HOUR_MODE AMProfileModule.AM_SET_12_HOUR_MODE(0)}</li>
     *                 <li>{@link module:AMProfileModule.AM_SET_24_HOUR_MODE AMProfileModule.AM_SET_24_HOUR_MODE(1)}</li>
     *                 <li>{@link module:AMProfileModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE AMProfileModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE(2)}</li>
     *                 <li>{@link module:AMProfileModule.AM_SET_EUROPE_12_HOUR_MODE AMProfileModule.AM_SET_EUROPE_12_HOUR_MODE(3)}</li>
     *                 <li>{@link module:AMProfileModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE AMProfileModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE(4)}</li>
     *                 <li>{@link module:AMProfileModule.AM_SET_EUROPE_24_HOUR_MODE AMProfileModule.AM_SET_EUROPE_24_HOUR_MODE(5)}</li>
     *                 </ul>
     */
    setHourMode: function (mac, hourMode) {
        RCTModule.setHourMode(mac, hourMode)
    },
    /**
     * Get hour mode
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_HOUR_MODE_AM AMProfileModule.ACTION_GET_HOUR_MODE_AM("get_hour_mode_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_HOUR_MODE_AM AMProfileModule.GET_HOUR_MODE_AM("hourtype")}</td><td>The time mode.<br/><b>Value:</b><br/><ul><li>{@link module:AMProfileModule.AM_SET_12_HOUR_MODE AMProfileModule.AM_SET_12_HOUR_MODE(0)}</li><li>{@link module:AMProfileModule.AM_SET_24_HOUR_MODE AMProfileModule.AM_SET_24_HOUR_MODE(1)}</li><li>{@link module:AMProfileModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE AMProfileModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE(2)}</li><li>{@link module:AMProfileModule.AM_SET_EUROPE_12_HOUR_MODE AMProfileModule.AM_SET_EUROPE_12_HOUR_MODE(3)}</li><li>{@link module:AMProfileModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE AMProfileModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE(4)}</li><li>{@link module:AMProfileModule.AM_SET_EUROPE_24_HOUR_MODE AMProfileModule.AM_SET_EUROPE_24_HOUR_MODE(5)}</li></ul></td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    getHourMode: function (mac) {
        RCTModule.getHourMode(mac)
    },
    /**
     * Disconnect device
     * @param {string} mac Device's mac address
     */
    disconnect: function (mac) {
        RCTModule.disconnect(mac)
    },
    /**
     * Set user information
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SET_USERINFO_SUCCESS_AM AMProfileModule.ACTION_SET_USERINFO_SUCCESS_AM("set_userinfo_success_am")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {number} age User's age<br/>
     *                      <b>Range:</b> [1, 255]
     * @param {number} height User's height(int in cm)<br/>
     *                      <b>Range:</b> [1, 255]
     * @param {number} weight User's weight(float)<br/>
     *                      <b>Range:</b> [1.0, 255.0]
     * @param {number} gender User's gender<br/>
     *                      <b>Value:</b>
     *                      <ul>
     *                      <li>{@link module:AMProfileModule.AM_SET_FEMALE AMProfileModule.AM_SET_FEMALE(0)}</li>
     *                      <li>{@link module:AMProfileModule.AM_SET_MALE AMProfileModule.AM_SET_MALE(1)}</li>
     *                      </ul>
     * @param {number} unit Distance's unit type(kilometre or miles)<br/>
     *                      <b>Value:</b>
     *                      <ul>
     *                      <li>{@link module:AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD(0)} (miles)</li>
     *                      <li>{@link module:AMProfileModule.AM_SET_UNIT_METRIC AMProfileModule.AM_SET_UNIT_METRIC(1)} (kilometre)</li>
     *                      </ul>
     * @param {number} target The goal of maximum steps<br/>
     *                      <b>Range:</b> [4, 2147483647(0x7FFFFFFF)]
     * @param {number} activityLevel The level of activity strength<br/>
     *                      <ul>
     *                      <li>1 indicates sedentary</li>
     *                      <li>2 indicates active</li>
     *                      <li>3 indicates very active</li>
     *                      </ul>
     * @param {number} min swim target time(in minutes)<br/>
     *                      <b>Range:</b> [1, 1439(23 * 60 + 59)]
     */
    setUserInfo: function (mac, age, height, weight, gender, unit, target, activityLevel, min) {
        RCTModule.setUserInfo(mac, age, height, weight, gender, unit, target, activityLevel, min)
    },
    /**
     * Get stage report data
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
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
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    syncStageReportData: function (mac) {
        RCTModule.syncStageReportData(mac)
    },
    /**
     * Send random number to device to prepare for binding, the number will be displayed on the device.
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If send successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_GET_RANDOM_AM AMProfileModule.ACTION_GET_RANDOM_AM("get_random_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.GET_RANDOM_AM AMProfileModule.GET_RANDOM_AM("random")}</td><td>The random number sent to device.<br/>The value will be a 6-long number decimal string.<br/><b>Value range:</b><br/>"000000"-"999999"</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    sendRandom: function (mac) {
        RCTModule.sendRandom(mac)
    },
    /**
     * Get swim parameters
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If get successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
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
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     */
    checkSwimPara: function (mac) {
        RCTModule.checkSwimPara(mac)
    },
    /**
     * Set swim parameters
     * <ul>
     * <li>This is an asynchronous call, it will return immediately.</li>
     * <li>If set successfully, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_SET_SWIMINFO_AM AMProfileModule.ACTION_SET_SWIMINFO_AM("set_swiminfo_am")}</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>If error happens, following event will be emit:<br/>
     * {@link module:AM4Module.Event_Notify AM4Module.Event_Notify("event_notify_am4")}<br/>
     * The key and value will be as below:
     * <table style="width:100px;" cellpadding="2" cellspacing="0" border="1" bordercolor="#000000">
     * <tbody>
     * <tr><td>Key</td><td>Value</td></tr>
     * <tr><td>action</td><td>{@link module:AMProfileModule.ACTION_ERROR_AM AMProfileModule.ACTION_ERROR_AM("error_am")}</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_NUM_AM AMProfileModule.ERROR_NUM_AM("error")}</td><td>{@link module:AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT AMProfileModule.ERROR_ID_ILLEGAL_ARGUMENT(400)}indicates parameter error.<br/>{@link module:AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT AMProfileModule.ERROR_ID_VERSION_NOT_SUPPORT(402)}indicates version not support error.</td></tr>
     * <tr><td>{@link module:AMProfileModule.ERROR_DESCRIPTION_AM AMProfileModule.ERROR_DESCRIPTION_AM("description")(iOS doesn't support this key)}</td><td>Detailed description of the error</td></tr>
     * </tbody>
     * </table>
     * </li>
     * <li>
     * Attention, if you want to be notified, it is mandatory to call following method before you call this method:<br/>
     * DeviceEventEmitter.addListener(AM4Module.Event_Notify, function (e: Event){});
     * </li>
     * </ul>
     * @param {string} mac Device's mac address
     * @param {boolean} isOpen Set true to open swim function, set false to close it.
     * @param {number} poolLength the swimming pool's length.<br/>
     *                   <b>Range:</b> [1, 255]
     * @param {number} hours The cut out time's hour part<br/>
     *              <b>Range:</b> [0, 23]
     * @param {number} minutes The cut out time's minute part<br/>
     *                Range[0, 59]
     * @param {number} unit The pool length's unit type(metre or yard).
     *             <ul>
     *             <li>{@link module:AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD(0)} (yard)</li>
     *             <li>{@link module:AMProfileModule.AM_SET_UNIT_METRIC AMProfileModule.AM_SET_UNIT_METRIC(1)} (metre)</li>
     *             </ul>
     */
    setSwimPara: function (mac, isOpen, poolLength, hours, minutes, unit) {
        RCTModule.setSwimPara(mac, isOpen, poolLength, hours, minutes, unit)
    },

    /**
     * Get all connected AM4 device
     *
     * e.g. {"devices":["A4D5783FB00C","A4D5783FFE58"]}
     */
    getAllConnectedDevices: function () {
        RCTModule.getAllConnectedDevices()
    },
}