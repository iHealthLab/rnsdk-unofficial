/**
 * Created by zhangxu on 16/11/20.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Picker,
    PickerIOS,
    View,
    Button,
    TouchableOpacity,
    DeviceEventEmitter,
    ScrollView
} from 'react-native';


import {
    iHealthDeviceManagerModule,
    BP7SModule,
    BPProfileModule
} from 'ihealthlibrary-react-native';


var styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    contentContainer: {
        height: 300,
    },
    // button style
    button: {
        height: 60,
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: '#eedddd',
        alignItems: 'center'
    },
    // button text style
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


export default class BP7SView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            unit: 0,
            resultText: ''
        }

    }

    componentWillMount() {
        console.info('BP7SView', 'componentWillMount()', "mac = " + this.props.navigation.state.params.mac + " type = " + this.props.navigation.state.params.type);
        this._addListener();

    }

    componentDidMount() {
        console.info('BP7SView', 'componentDidMount()');
    }


    componentWillUnmount() {
        console.info('BP7SView', 'componentWillUnmount()');

        this._removeListener();


    }

    render() {

        console.info('BP7SView', 'render()');

        return (
            <View style={styles.container}>

                <ScrollView style={styles.contentContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._getAllConnectedDevices()}>

                        <Text style={styles.buttonText}>
                            GetAllConnectedDevices
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity

                        style={styles.button}
                        onPress={() => this._getDeviceIDPS()}>

                        <Text style={styles.buttonText}>
                            GetIDPS
                        </Text>


                    </TouchableOpacity>

                    <TouchableOpacity

                        style={styles.button}
                        onPress={() => this._getFunctionInfo()}>

                        <Text style={styles.buttonText}>
                            GetFunctionInfoAndSyncTime
                        </Text>


                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._getBattery()}>

                        <Text style={styles.buttonText}>
                            GetBattery
                        </Text>


                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._getOffLineNum()}>

                        <Text style={styles.buttonText}>
                            GetOfflineDataNum
                        </Text>


                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._getOffLineData()}>

                        <Text style={styles.buttonText}>
                            GetOfflineData
                        </Text>


                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', marginTop: 10}}>

                        {(() => {
                            let Platform = require('Platform')
                            if (Platform.OS === 'android') {
                                return (
                                    <Picker
                                        style={{flex: 1, height: 60}}
                                        selectedValue={this.state.unit}
                                        onValueChange={(value) => {
                                            this.setState({unit: value})
                                        }}
                                        mode="dialog">
                                        <Picker.Item label='mmHg' value={0}/>
                                        <Picker.Item label='KPa' value={1}/>
                                    </Picker>
                                )
                            } else {
                                return (
                                    <PickerIOS
                                        itemStyle={{height: 60, color: 'red'}}
                                        style={{flex: 1}}
                                        selectedValue={this.state.unit}
                                        onValueChange={(value) => {
                                            this.setState({unit: value})
                                        }}
                                        mode="dialog">
                                        <PickerIOS.Item label='mmHg' value={0}/>
                                        <PickerIOS.Item label='KPa' value={1}/>
                                    </PickerIOS>
                                )
                            }
                        })()}


                        <TouchableOpacity

                            style={{
                                height: 60,
                                justifyContent: 'center',
                                backgroundColor: '#eedddd',
                                alignItems: 'center',
                                flex: 2
                            }}
                            onPress={() => this._setUnit(this.state.unit)}>

                            <Text style={styles.buttonText}>
                                SetUnit
                            </Text>


                        </TouchableOpacity>

                    </View>


                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._setAngle()}>

                        <Text style={styles.buttonText}>
                            SetAngle
                        </Text>


                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._disConnect()}>

                        <Text style={styles.buttonText}>
                            Disconnect
                        </Text>


                    </TouchableOpacity>

                </ScrollView>

                <TouchableOpacity
                    style={{backgroundColor: '#000000', height: 3}}>
                </TouchableOpacity>

                <ScrollView
                    style={{height: 150, paddingBottom: 10}}>
                    <Text>{this.state.resultText}</Text>
                </ScrollView>

            </View>


        )


    }


    _addListener() {


        let result = "";
        let self = this;

        this.connectionListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, function (e: Event) {
            // handle event.
            console.info(JSON.stringify(e));
            self.props.navigation.goBack();
        });
        this.notifyListener = DeviceEventEmitter.addListener(BP7SModule.Event_Notify, function (e: Event) {
            console.info("Action = " + e.action + "\n" + "Message = " + JSON.stringify(e));

            if (e.action === BPProfileModule.ACTION_ERROR_BP) {
                let errorNum = e[BPProfileModule.ERROR_NUM_BP];
                let description = e[BPProfileModule.ERROR_DESCRIPTION_BP];
                result = "\nErrorNum = " + errorNum + "\nDescription = " + description;
            }
            else if (e.action === BPProfileModule.ACTION_BATTERY_BP) {
                let battery = e[BPProfileModule.BATTERY_BP];
                result = "\nBattery = " + battery;
            }
            else if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {
                let offlineNum = e[BPProfileModule.HISTORICAL_NUM_BP];
                result = "\nofflineNum = " + offlineNum;
            }
            else if (e.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {

                let dataArray = e[BPProfileModule.HISTORICAL_DATA_BP];

                if (dataArray == undefined) {
                    result = "There is not offline data in device"
                } else {
                    result = "OfflineData：";

                    for (let i = 0; i < dataArray.length; i++) {
                        let offlineData = dataArray[i];

                        let time = offlineData[BPProfileModule.MEASUREMENT_DATE_BP];
                        let sys = offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP];
                        let dia = offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP];
                        let heartRate = offlineData[BPProfileModule.PULSE_BP];
                        let arrhythmia = offlineData[BPProfileModule.MEASUREMENT_AHR_BP];
                        let hsd = offlineData[BPProfileModule.MEASUREMENT_HSD_BP];
                        let startAngle = offlineData[BPProfileModule.MEASUREMENT_STRAT_ANGLE_BP];
                        let measureAngleChange = offlineData[BPProfileModule.MEASUREMENT_ANGLE_CHANGE_BP];
                        let chooseHand = offlineData[BPProfileModule.MEASUREMENT_HAND_BP];
                        let dataID = offlineData[BPProfileModule.DATAID];

                        result += "\n---------------------------------------------------------------"
                        result += "\ntime = " + time +
                            "\nsys = " + sys +
                            "\ndia = " + dia +
                            "\nheartRate" + heartRate +
                            "\narrhythmia = " + arrhythmia +
                            "\nhsd = " + hsd +
                            "\nstartAngle = " + startAngle +
                            "\nmeasureAngleChange = " + measureAngleChange +
                            "\nchooseHand = " + chooseHand +
                            "\ndataID = " + dataID;
                    }
                }

            } else if (e.action === BPProfileModule.ACTION_HISTORICAL_OVER_BP) {
                result += "\n---------------------------------------------------------------";
                result += "\n update offlineData over"
            } else if (e.action === BPProfileModule.ACTION_FUNCTION_INFORMATION_BP) {

                let upAirMeasureFlg = e[BPProfileModule.FUNCTION_IS_UPAIR_MEASURE];
                let armMeasureFlg = e[BPProfileModule.FUNCTION_IS_ARM_MEASURE];
                let haveAngleSensor = e[BPProfileModule.FUNCTION_HAVE_ANGLE_SENSOR];
                let haveOffline = e[BPProfileModule.FUNCTION_HAVE_OFFLINE];
                let haveHSD = e[BPProfileModule.FUNCTION_HAVE_HSD];
                let haveAngleSet = e[BPProfileModule.FUNCTION_HAVE_ANGLE_SETTING];
                let mutableUpload = e[BPProfileModule.FUNCTION_IS_MULTI_UPLOAD];
                let selfUpdate = e[BPProfileModule.FUNCTION_HAVE_SELF_UPDATE];

                result = "Device functionInfo：" + "\nupAirMeasureFlg = " + upAirMeasureFlg +
                    "\narmMeasureFlg = " + armMeasureFlg +
                    "\nhaveAngleSensor = " + haveAngleSensor +
                    "\nhaveOffline" + haveOffline +
                    "\nhaveHSD = " + haveHSD +
                    "\nhaveAngleSet = " + haveAngleSet +
                    "\nmutableUpload = " + mutableUpload +
                    "\nselfUpdate = " + selfUpdate


            }
            else if (e.action === BPProfileModule.ACTION_SET_UNIT_SUCCESS_BP) {
                result = "\nset unit successfully";
            }
            else if (e.action === BPProfileModule.ACTION_SET_ANGLE_SUCCESS_BP) {
                result = "\nset angle successfully";
            } else {
                result = "\nHaven't suitable action and message = " + JSON.stringify(e);
            }

            self.setState({resultText: result});
        });


    }

    _removeListener() {
        //Unregister  event
        if (this.connectionListener) {
            this.connectionListener.remove()
        }
        if (this.notifyListener) {
            this.notifyListener.remove()
        }

    }


    _getDeviceIDPS() {
        iHealthDeviceManagerModule.getDevicesIDPS(this.props.navigation.state.params.mac, (e) => {
            console.info('deviceInfo:' + JSON.stringify(e));
            this.setState({resultText: JSON.stringify(e)})
        })
    }

    _getFunctionInfo() {

        BP7SModule.getFunctionInfo(this.props.navigation.state.params.mac);
    }

    _getOffLineNum() {

        BP7SModule.getOffLineNum(this.props.navigation.state.params.mac);
    }

    _getOffLineData() {
        BP7SModule.getOffLineData(this.props.navigation.state.params.mac);
    }

    _getBattery() {
        BP7SModule.getBattery(this.props.navigation.state.params.mac);
    }

    _setUnit(unit) {
        BP7SModule.setUnit(this.props.navigation.state.params.mac, unit);
    }

    _setAngle() {
        BP7SModule.angleSet(this.props.navigation.state.params.mac, 80, 30, 80, 30);
    }

    _disConnect() {
        BP7SModule.disconnect(this.props.navigation.state.params.mac);
    }

    _getAllConnectedDevices() {
        BP7SModule.getAllConnectedDevices();
    }

}