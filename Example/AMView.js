import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    DeviceEventEmitter,
    ScrollView
} from 'react-native';

import {
    iHealthDeviceManagerModule,
    AM4Module,
    AM3SModule,
    AMProfileModule
} from 'ihealthlibrary-react-native';

/**
 * Created by Jeepend on 16/11/2016.
 */
var styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    // Navigation bar
    heading: {
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    // Navigation bar text
    headText: {
        color: '#ff5555',
        fontSize: 22
    },
    // Button
    button: {
        height: 45,
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: '#eedddd',
        alignItems: 'center'
    },
    // Button text
    buttonText: {
        fontSize: 18
    },
    cell: {
        marginTop: 10,
        height: 25,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 5
    },
});

export default class AMView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultText: ""
        }
    }

    render() {
        console.log("AMView render() type = " + this.props.navigation.state.params.type)
        if (this.props.navigation.state.params.type == 'AM4') {
            return (
                <View
                    style={styles.container}>
                    <ScrollView
                        style={{height: 100, paddingBottom: 10}}>
                        <Text>{this.state.resultText}</Text>
                    </ScrollView>
                    <ScrollView>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => AM4Module.getAllConnectedDevices()}>

                            <Text style={styles.buttonText}>
                            GetAllConnectedDevices
                            </Text>

                    </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.disconnect(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                Disconnect
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                iHealthDeviceManagerModule.getDevicesIDPS(this.props.navigation.state.params.mac, (e) => {
                                    console.info('deviceInfo:' + JSON.stringify(e));
                                    this.setState({resultText: JSON.stringify(e)})
                                })
                            }}>
                            <Text style={styles.buttonText}>
                                GetIdps
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.reset(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                reset
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.getUserId(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                getUserId
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.getAlarmClockNum(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                getAlarmClockNum
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.getAlarmClockDetail(this.props.navigation.state.params.mac, [1, 3, 2])
                            }}>
                            <Text style={styles.buttonText}>
                                getAlarmClockDetail
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.setAlarmClock(this.props.navigation.state.params.mac, 1, 12, 0, true, [1, 1, 1, 1, 1, 0, 0], false)
                            }}>
                            <Text style={styles.buttonText}>
                                setAlarmClock
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.deleteAlarmClock(this.props.navigation.state.params.mac, 1)
                            }}>
                            <Text style={styles.buttonText}>
                                deleteAlarmClock
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.getActivityRemind(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                getActivityRemind
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.setActivityRemind(this.props.navigation.state.params.mac, 0, 30, false)
                            }}>
                            <Text style={styles.buttonText}>
                                setActivityRemind
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.queryAMState(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                queryAMState
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.setUserId(this.props.navigation.state.params.mac, 8)
                            }}>
                            <Text style={styles.buttonText}>
                                setUserId
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.getUserInfo(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                getUserInfo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.setUserBmr(this.props.navigation.state.params.mac, 2000)
                            }}>
                            <Text style={styles.buttonText}>
                                setUserBmr
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.syncActivityData(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                syncActivityData
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.syncSleepData(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                syncSleepData
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.syncRealData(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                syncRealData
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.syncRealTime(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                syncRealTime
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.setHourMode(this.props.navigation.state.params.mac, AMProfileModule.AM_SET_24_HOUR_MODE)
                            }}>
                            <Text style={styles.buttonText}>
                                setHourMode
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.getHourMode(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                getHourMode
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.setUserInfo(this.props.navigation.state.params.mac, 25, 183, 80, AMProfileModule.AM_SET_MALE, AMProfileModule.AM_SET_UNIT_METRIC, 10000, 1, 30)
                            }}>
                            <Text style={styles.buttonText}>
                                setUserInfo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.syncStageReportData(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                syncStageReportData
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.sendRandom(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                sendRandom
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.checkSwimPara(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                checkSwimPara
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM4Module.setSwimPara(this.props.navigation.state.params.mac, true, 25, 0, 10, 0)
                            }}>
                            <Text style={styles.buttonText}>
                                setSwimPara
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            )
        } else {
            // AM3S
            return (
                <View
                    style={styles.container}>
                    <ScrollView
                        style={{height: 100, paddingBottom: 10}}>
                        <Text>{this.state.resultText}</Text>
                    </ScrollView>
                    <ScrollView>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => AM3SModule.getAllConnectedDevices()}>

                            <Text style={styles.buttonText}>
                            GetAllConnectedDevices
                            </Text>

                         </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.disconnect(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                Disconnect
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                iHealthDeviceManagerModule.getDevicesIDPS(this.props.navigation.state.params.mac, (e) => {
                                    console.info('deviceInfo:' + JSON.stringify(e));
                                    this.setState({resultText: JSON.stringify(e)})
                                })
                            }}>
                            <Text style={styles.buttonText}>
                                GetIdps
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.reset(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                reset
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.getUserId(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                getUserId
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.getAlarmClockNum(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                getAlarmClockNum
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.getAlarmClockDetail(this.props.navigation.state.params.mac, [1, 3, 2])
                            }}>
                            <Text style={styles.buttonText}>
                                getAlarmClockDetail
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.setAlarmClock(this.props.navigation.state.params.mac, 1, 12, 0, true, [1, 1, 1, 1, 1, 0, 0], false)
                            }}>
                            <Text style={styles.buttonText}>
                                setAlarmClock
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.deleteAlarmClock(this.props.navigation.state.params.mac, 1)
                            }}>
                            <Text style={styles.buttonText}>
                                deleteAlarmClock
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.getActivityRemind(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                getActivityRemind
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.setActivityRemind(this.props.navigation.state.params.mac, 0, 30, false)
                            }}>
                            <Text style={styles.buttonText}>
                                setActivityRemind
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.queryAMState(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                queryAMState
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.setUserId(this.props.navigation.state.params.mac, 8)
                            }}>
                            <Text style={styles.buttonText}>
                                setUserId
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.getUserInfo(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                getUserInfo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.setUserBmr(this.props.navigation.state.params.mac, 2000)
                            }}>
                            <Text style={styles.buttonText}>
                                setUserBmr
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.syncActivityData(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                syncActivityData
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.syncSleepData(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                syncSleepData
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.syncRealData(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                syncRealData
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.syncRealTime(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                syncRealTime
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.setHourMode(this.props.navigation.state.params.mac, AMProfileModule.AM_SET_24_HOUR_MODE)
                            }}>
                            <Text style={styles.buttonText}>
                                setHourMode
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.getHourMode(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                getHourMode
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.setUserInfo(this.props.navigation.state.params.mac, 25, 183, 80, AMProfileModule.AM_SET_MALE, AMProfileModule.AM_SET_UNIT_METRIC, 10000, 1)
                            }}>
                            <Text style={styles.buttonText}>
                                setUserInfo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.syncStageReportData(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                syncStageReportData
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.sendRandom(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                sendRandom
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.getPicture(this.props.navigation.state.params.mac)
                            }}>
                            <Text style={styles.buttonText}>
                                getPicture
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                AM3SModule.setPicture(this.props.navigation.state.params.mac, 1)
                            }}>
                            <Text style={styles.buttonText}>
                                setPicture
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            )
        }

    }
    componentWillMount() {
        console.info('AMView', 'componentWillMount', null);


    }

    componentDidMount() {
        let self = this
        this.disconnectListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, function (e: Event) {
            // handle event.
            if (e.mac == self.props.navigation.state.params.mac) {
                self.props.navigation.goBack();
            }
        });
        let eventName = this.props.navigation.state.params.type == 'AM4' ? AM4Module.Event_Notify : AM3SModule.Event_Notify
        this.notifyListener = DeviceEventEmitter.addListener(eventName, function (e: Event) {
            let resultText
            let action = e.action
            if (action == AMProfileModule.ACTION_RESET_AM) {
                resultText = "Reset AM device successfully."
            } else if (action == AMProfileModule.ACTION_USERID_AM) {
                let userID = e[AMProfileModule.USERID_AM]
                resultText = "Get user's ID successfully\nid = " + userID
            } else if (action == AMProfileModule.ACTION_SET_USERID_SUCCESS_AM) {
                resultText = "Set user's ID successfully."
            } else if (action == AMProfileModule.ACTION_SYNC_TIME_SUCCESS_AM) {
                resultText = "Sync time from phone to AM successfully."
            } else if (action == AMProfileModule.ACTION_SET_USERINFO_SUCCESS_AM) {
                resultText = "Set user's information successfully."
            } else if (action == AMProfileModule.ACTION_GET_USERINFO_AM) {
                resultText = "Get user's information successfully:"
                let age = e[AMProfileModule.GET_USER_AGE_AM]
                let stepLength = e[AMProfileModule.GET_USER_STEP_AM]
                let height = e[AMProfileModule.GET_USER_HEIGHT_AM]
                let sex = e[AMProfileModule.GET_USER_SEX_AM] == AMProfileModule.AM_SET_MALE ? 'male' : 'female'
                let weight = e[AMProfileModule.GET_USER_WEIGHT_AM]
                let unit = "Unknown unit type"
                switch(e[AMProfileModule.GET_USER_UNIT_AM]) {
                    case AMProfileModule.AM_SET_UNIT_METRIC:
                        unit = 'Metric unit type'
                        break;
                    case AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD:
                        unit = 'Imperial standard unit type'
                        break;
                }
                let target1 = e[AMProfileModule.GET_USER_TARGET1_AM]
                let target2 = e[AMProfileModule.GET_USER_TARGET2_AM]
                let target3 = e[AMProfileModule.GET_USER_TARGET3_AM]
                let swimTarget = e[AMProfileModule.GET_USER_SWIMTARGET_AM]
                resultText += "\nage = " + age
                    + "\nstepLength = " + stepLength + " cm"
                    + "\nheight = " + height + " cm"
                    + "\nsex = " + sex
                    + "\nweight = " + weight + " kg"
                    + "\nDisplayUnit = " + unit
                    + "\ntarget1 = " + target1
                    + "\ntarget2 = " + target2
                    + "\ntarget3 = " + target3
                    + (typeof swimTarget == 'undefined' ? "" : "\nswimTarget = " + swimTarget)
            } else if (action == AMProfileModule.ACTION_GET_ALARMNUM_AM) {
                resultText = "Get alarm number successfully.\n"
                let number = e[AMProfileModule.GET_ALARMNUM_AM]
                let alarmIDArray = e[AMProfileModule.GET_ALARMNUM_ID_AM]
                resultText += "There are " + number + " alarm(s) in total, the IDs:\n"
                for (let i = 0; i < number; i++) {
                    resultText += alarmIDArray[i] + " "
                }
            } else if (action == AMProfileModule.ACTION_GET_ALARMINFO_AM) {
                let alarmDetailInfoArray = e[AMProfileModule.GET_ALARM_CLOCK_DETAIL]
                resultText = "Get alarm detail information successfully.\nThere is(are) "
                    + alarmDetailInfoArray.length + " alarm(s) in total:\n"
                for (let i = 0; i < alarmDetailInfoArray.length; i++) {
                    let alarmInfo = alarmDetailInfoArray[i]

                    let id = alarmInfo[AMProfileModule.GET_ALARM_ID_AM]
                    let time = alarmInfo[AMProfileModule.GET_ALARM_TIME_AM]
                    let repeat = alarmInfo[AMProfileModule.GET_ALARM_ISREPEAT_AM]
                    let weekMap = alarmInfo[AMProfileModule.GET_ALARM_WEEK_AM]
                    let weekString = "The alarm will repeat on "
                    for (let key in weekMap) {
                        if (weekMap[key]) {
                            weekString += key + ", "
                        }
                    }
                    weekString = weekString.substr(0, weekString.length - 1)
                    let isOn = alarmInfo[AMProfileModule.GET_ALARM_ISON_AM]
                    resultText += "---------------------------------------------------------------"
                    resultText += "\nid = " + id
                    resultText += "\ntime = " + time
                    resultText += "\nrepeat = " + repeat
                    resultText += "\n" + weekString
                    resultText += "\nisOn = " + isOn
                }
            } else if (action == AMProfileModule.ACTION_SET_ALARMINFO_SUCCESS_AM) {
                resultText = "Set alarm successfully."
            } else if (action == AMProfileModule.ACTION_DELETE_ALARM_SUCCESS_AM) {
                resultText = "Delete alarm successfully."
            } else if (action == AMProfileModule.ACTION_GET_ACTIVITY_REMIND_AM) {
                resultText = "Get activity remind successfully."
                let time = e[AMProfileModule.GET_ACTIVITY_REMIND_TIME_AM]
                let isOn = e[AMProfileModule.GET_ACTIVITY_REMIND_ISON_AM]
                resultText += "\ntime = " + time + "\nisOn = " + isOn
            } else if (action == AMProfileModule.ACTION_SET_ACTIVITYREMIND_SUCCESS_AM) {
                resultText = "Set activity remind successfully."
            } else if (action == AMProfileModule.ACTION_SYNC_ACTIVITY_DATA_AM) {
                let activityDataFragmentArray = e[AMProfileModule.SYNC_ACTIVITY_DATA_AM]
                resultText = "Sync activity data successfully:"
                for (let i = 0; i < activityDataFragmentArray.length; i++) {
                    resultText += "\n=============Fragment " + (i + 1) + " ============="
                    let activityDataFragment = activityDataFragmentArray[i]
                    let activityDataArray = activityDataFragment[AMProfileModule.SYNC_ACTIVITY_EACH_DATA_AM]
                    for (let j = 0; j < activityDataArray.length; j++) {
                        let activityData = activityDataArray[j]
                        let time = activityData[AMProfileModule.SYNC_ACTIVITY_DATA_TIME_AM]
                        let step = activityData[AMProfileModule.SYNC_ACTIVITY_DATA_STEP_AM]
                        let calorie = activityData[AMProfileModule.SYNC_ACTIVITY_DATA_CALORIE_AM]
                        let stepLength = activityData[AMProfileModule.SYNC_ACTIVITY_DATA_STEP_LENGTH_AM]
                        let dataID = activityData[AMProfileModule.DATAID]

                        resultText += "\n---------------------------------------------------------------"
                        resultText += "\ntime = " + time
                        resultText += "\nstep = " + step
                        resultText += "\ncalorie = " + calorie + " kcal"
                        resultText += "\nstepLength = " + stepLength + " cm"
                        resultText += "\ndataID = " + dataID
                    }

                }

            } else if (action == AMProfileModule.ACTION_SYNC_SLEEP_DATA_AM) {
                let sleepDataFragmentArray = e[AMProfileModule.SYNC_SLEEP_DATA_AM]
                resultText = "Sync sleep data successfully:"
                for (let i = 0; i < sleepDataFragmentArray.length; i++) {
                    resultText += "\n=============Fragment " + (i + 1)
                    let sleepDataFragment = sleepDataFragmentArray[i]
                    let sleepDataArray = sleepDataFragment[AMProfileModule.SYNC_SLEEP_EACH_DATA_AM]
                    for (let j = 0; j < sleepDataArray.length; j++) {
                        let sleepData = sleepDataArray[j]
                        let time = sleepData[AMProfileModule.SYNC_SLEEP_DATA_TIME_AM]
                        let level = sleepData[AMProfileModule.SYNC_SLEEP_DATA_LEVEL_AM]
                        let dataID = sleepData[AMProfileModule.DATAID]

                        resultText += "\n---------------------------------------------------------------"
                        resultText += "\ntime = " + time
                        resultText += "\nlevel = " + level
                        resultText += "\ndataID = " + dataID
                    }

                }
            } else if (action == AMProfileModule.ACTION_SYNC_STAGE_DATA_AM) {
                let stageDataArray = e[AMProfileModule.SYNC_STAGE_DATA_AM]
                resultText = "Sync stage data successfully:"
                for (let i = 0; i < stageDataArray.length; i++) {
                    let stageData = stageDataArray[i]
                    let type = stageData[AMProfileModule.SYNC_STAGE_DATA_TYPE_AM]
                    let stopTime = ''
                    let usedTime = 0
                    let calorie = 0
                    let dataID = ''
                    switch (type) {
                        case AMProfileModule.SYNC_STAGE_DATA_TYPE_SWIM_AM:
                            stopTime = stageData[AMProfileModule.SYNC_STAGE_DATA_STOP_TIME_AM]
                            usedTime = stageData[AMProfileModule.SYNC_STAGE_DATA_USED_TIME_AM]
                            let pullNumber = stageData[AMProfileModule.SYNC_STAGE_DATA_SWIM_PULL_TIMES_AM]
                            calorie = stageData[AMProfileModule.SYNC_STAGE_DATA_CALORIE_AM]
                            let swimStroke = stageData[AMProfileModule.SYNC_STAGE_DATA_SWIM_STROKE_AM]
                            let swimTurns = stageData[AMProfileModule.SYNC_STAGE_DATA_SWIM_TURNS_AM]
                            let swimPollLength = stageData[AMProfileModule.SYNC_STAGE_DATA_SWIMPOOL_LENGTH_AM]
                            let cutInTime = stageData[AMProfileModule.SYNC_STAGE_DATA_SWIM_CUTINDIF_AM]
                            let cutOutTime = stageData[AMProfileModule.SYNC_STAGE_DATA_SWIM_CUTOUTDIF_AM]
                            let processFlag = stageData[AMProfileModule.SYNC_STAGE_DATA_SWIM_PROCESSFLAG_AM]
                            let currentProcess = "Unknown"
                            switch (processFlag) {
                                case 0:
                                    currentProcess = "swim in process"
                                    break;
                                case 1:
                                    currentProcess = "start of swimming"
                                    break;
                                case 2:
                                    currentProcess = "end of swimming"
                                    break;
                                case 3:
                                    currentProcess = "the swim is only a single round"
                                    break;
                            }
                            dataID = stageData[AMProfileModule.DATAID]

                            resultText += "\n---------------------------------------------------------------"
                            resultText += "\nSwim stage data:"
                            resultText += "\nstopTime = " + stopTime
                            resultText += "\nusedTime = " + usedTime + " min"
                            resultText += "\npullNumber = " + pullNumber
                            resultText += "\ncalorie = " + calorie + " kcal"
                            resultText += "\nswimStroke = " + swimStroke
                            resultText += "\nswimTurns = " + swimTurns
                            resultText += "\nswimPollLength = " + swimPollLength
                            resultText += "\ncutInTime = " + cutInTime + " min"
                            resultText += "\ncutOutTime = " + cutOutTime + " min"
                            resultText += "\ncurrentProcess = " + currentProcess
                            resultText += "\ndataID = " + dataID
                            break;
                        case AMProfileModule.SYNC_STAGE_DATA_TYPE_WORKOUT_AM:
                            stopTime = stageData[AMProfileModule.SYNC_STAGE_DATA_STOP_TIME_AM]
                            usedTime = stageData[AMProfileModule.SYNC_STAGE_DATA_USED_TIME_AM]
                            let step = stageData[AMProfileModule.SYNC_STAGE_DATA_WORKOUT_STEP_AM]
                            let distance = stageData[AMProfileModule.SYNC_STAGE_DATA_DISTANCE_AM]
                            calorie = stageData[AMProfileModule.SYNC_STAGE_DATA_CALORIE_AM]
                            dataID = stageData[AMProfileModule.DATAID]

                            resultText += "\n---------------------------------------------------------------"
                            resultText += "\nWorkout stage data:"
                            resultText += "\nstopTime = " + stopTime
                            resultText += "\nusedTime = " + usedTime + " min"
                            resultText += "\nstep = " + step
                            resultText += "\ndistance = " + distance + " km"
                            resultText += "\ncalorie = " + calorie + " kcal"
                            resultText += "\ndataID = " + dataID
                            break;
                        case AMProfileModule.SYNC_STAGE_DATA_TYPE_SLEEP_AM:
                            stopTime = stageData[AMProfileModule.SYNC_STAGE_DATA_STOP_TIME_AM]
                            usedTime = stageData[AMProfileModule.SYNC_STAGE_DATA_USED_TIME_AM]
                            let sleepEfficiency = stageData[AMProfileModule.SYNC_STAGE_DATA_SLEEP_EFFICIENCY_AM]
                            let ifNeedExtend50minAhead = stageData[AMProfileModule.SYNC_STAGE_DATA_SLEEP_IS50MIN_AM] == 1

                            resultText += "\n---------------------------------------------------------------"
                            resultText += "\nSleep summary stage data:"
                            resultText += "\nstopTime = " + stopTime
                            resultText += "\nusedTime = " + usedTime + " min"
                            resultText += "\nsleepEfficiency = " + sleepEfficiency
                            resultText += "\nifNeedExtend50minAhead = " + ifNeedExtend50minAhead
                            break;
                        case AMProfileModule.SYNC_STAGE_DATA_TYPE_PAGE_VIEW_SUMMARY:
                            let date = stageData[AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_DATE_AM]
                            let stepPageTime = stageData[AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_STEP_AM]
                            let distancePageTime = stageData[AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_DISTANCE_AM]
                            let caloriePageTime = stageData[AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_CALORIE_AM]
                            let targetPageTime = stageData[AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_TARGET_AM]
                            let swimPageTime = stageData[AMProfileModule.SYNC_STAGE_DATA_VIEW_SUMMARY_SWIM_AM]

                            resultText += "\n---------------------------------------------------------------"
                            resultText += "\nPage view times summary stage data:"
                            resultText += "\ndate = " + date
                            resultText += "\nstepPageTime = " + stepPageTime
                            resultText += "\ndistancePageTime = " + distancePageTime
                            resultText += "\ncaloriePageTime = " + caloriePageTime
                            resultText += "\ntargetPageTime = " + targetPageTime
                            resultText += "\nswimPageTime = " + swimPageTime
                            break;
                        default:
                            console.warn("Not support this stage data type : " + type)
                            break;
                    }
                }
            } else if (action == AMProfileModule.ACTION_QUERY_STATE_AM) {
                let state = e[AMProfileModule.QUERY_STATE_AM]
                let stateString  = "Unkonwn"
                switch (state) {
                    case 0:
                        stateString = "waist state"
                        break;
                    case 1:
                        stateString = "wrist state"
                        break;
                    case 2:
                        stateString = "sleep state"
                        break;
                }
                let battery = e[AMProfileModule.QUERY_BATTERY_AM]
                resultText = "Query AM state successfully:\nstate = " + stateString + "\nbattery = " + battery
            } else if (action == AMProfileModule.ACTION_SYNC_REAL_DATA_AM) {
                let step = e[AMProfileModule.SYNC_REAL_STEP_AM]
                let calorie = e[AMProfileModule.SYNC_REAL_CALORIE_AM]
                let totalCalorie = e[AMProfileModule.SYNC_REAL_TOTALCALORIE_AM]
                resultText = "Sync real-time data successfully:\nstep = " + step
                    + "\ncalorie(exclude BMR) = " + calorie + " kcal"
                    + "\ntotalCalorie(include BMR) = " + totalCalorie + " kcal"
            } else if (action == AMProfileModule.ACTION_SET_BMR_SUCCESS_AM) {
                resultText = "Set user's basal metabolic rate successfully."
            } else if (action == AMProfileModule.ACTION_GET_SWIMINFO_AM) {
                let isSwimEnabled = e[AMProfileModule.GET_SWIM_SWITCH_AM] != 0
                let swimLaneLength = e[AMProfileModule.GET_SWIMLANE_LENGTH_AM]
                let cutoutHourPart = e[AMProfileModule.GET_SWIM_CUTOUT_HOUR_AM]
                let cutoutMinutePart = e[AMProfileModule.GET_SWIM_CUTOUT_MINUTE_AM]
                let unit = e[AMProfileModule.GET_SWIM_UNIT_AM]
                let unitString = "Unknown unit type"
                switch(unit) {
                    case AMProfileModule.AM_SET_UNIT_METRIC:
                        unitString = "Metric unit type"
                        break;
                    case AMProfileModule.AM_SET_UNIT_IMPERIAL_STANDARD:
                        unitString = "Imperial standard unit type"
                        break;
                }
                resultText = "Get swim info successfully:\nisSwimEnabled = " + isSwimEnabled
                    + "\nswimLaneLength = " + swimLaneLength + " meters"
                    + "\nCut out time = " + cutoutHourPart + " : " + cutoutMinutePart
                    + "\nDisplay unit = " + unitString
            } else if (action == AMProfileModule.ACTION_SET_SWIMINFO_AM) {
                resultText = "Set swim information successfully."
            } else if (action == AMProfileModule.ACTION_GET_RANDOM_AM) {
                let number = e[AMProfileModule.GET_RANDOM_AM]
                resultText = "Send random number to AM device successfully\nnumber = " + number
            } else if (action == AMProfileModule.ACTION_SET_HOUR_MODE_SUCCESS_AM) {
                resultText = "Set hour mode successfully."
            } else if (action == AMProfileModule.ACTION_GET_HOUR_MODE_AM) {
                let mode = e[AMProfileModule.GET_HOUR_MODE_AM]
                let modeString  = "Unknown hour mode"
                switch (mode) {
                    case AMProfileModule.AM_SET_12_HOUR_MODE:
                        modeString = "12 hour mode"
                        break;
                    case AMProfileModule.AM_SET_24_HOUR_MODE:
                        modeString = "24 hour mode"
                        break;
                    case AMProfileModule.AM_SET_EUROPE_12_HOUR_MODE:
                        modeString = "Europe 12 hour mode"
                        break;
                    case AMProfileModule.AM_SET_EUROPE_24_HOUR_MODE:
                        modeString = "Europe 24 hour mode"
                        break;
                    case AMProfileModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE:
                        modeString = "Except europe 12 hour mode"
                        break;
                    case AMProfileModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE:
                        modeString = "Except europe 24 hour mode"
                        break;
                }
                resultText = "Get hour mode successfully\nmode = " + modeString
            } else if (action == AMProfileModule.ACTION_SET_PICTURE_SUCCESS_AM) {
                resultText = "Set picture successfully."
            } else if (action == AMProfileModule.ACTION_GET_PICTURE_AM) {
                let picture = e[AMProfileModule.GET_PICTURE_AM]
                resultText = "Get picture successfully:\npicture = " + picture
            } else if (action == AMProfileModule.ACTION_ERROR_AM) {
                let errorNumber = e[AMProfileModule.ERROR_NUM_AM]
                let errorDescription = e[AMProfileModule.ERROR_DESCRIPTION_AM]
                resultText = "Error happens:\nerrorNumber = " + errorNumber + "\nDescreption: " + errorDescription
            } else {
                resultText = JSON.stringify(e)
            }
            self.setState({resultText: resultText})
        });
    }

    componentWillUnmount() {
        this.disconnectListener.remove();
        this.notifyListener.remove();
    }
}