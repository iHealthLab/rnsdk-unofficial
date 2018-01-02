/**
 * Created by zhangxu on 16/11/20.
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    DeviceEventEmitter,
    ScrollView
} from 'react-native';


import {
    iHealthDeviceManagerModule,
    BP550BTModule,
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



export default class BP550BTView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultText:''
        }


    }

    componentWillMount() {
        console.info('BP550BTView', 'componentWillMount()', "mac = " + this.props.navigation.state.params.mac + " type = " + this.props.navigation.state.params.type);
        this._addListener();

    }

    componentDidMount() {
        console.info('BP550BTView', 'componentDidMount()');
    }

    componentWillUnmount() {
        console.info('BP550BTView', 'componentWillUnmount()');

        this._removeListener();


    }

    render() {

        console.info('BP550BTView', 'render()');

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


        );


    }


    _addListener() {


        let self = this;
        let result = "";

        this.connectionListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, function (e: Event) {
            // handle event.
            console.info('BP550BTView', 'addListener_DeviceDisconnect', JSON.stringify(e));
            self.props.navigation.goBack();
        });
        this.notifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify, function (e: Event) {
            console.info('BP550BTView', 'addListener_Event_Notify', "Action = " + e.action + "\n" + "Message = " + JSON.stringify(e));

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
                }else {
                    result = "OfflineData：";
                    for (let i = 0; i < dataArray.length; i++) {
                        let offlineData = dataArray[i];

                        let time = offlineData[BPProfileModule.MEASUREMENT_DATE_BP];
                        let sys = offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP];
                        let dia = offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP];
                        let heartRate = offlineData[BPProfileModule.PULSE_BP];
                        let arrhythmia = offlineData[BPProfileModule.MEASUREMENT_AHR_BP];
                        let hsd = offlineData[BPProfileModule.MEASUREMENT_HSD_BP];
                        let dataID = offlineData[BPProfileModule.DATAID];

                        result += "\n---------------------------------------------------------------";
                        result += "\ntime = " + time +
                            "\nsys = " + sys +
                            "\ndia = " + dia +
                            "\nheartRate" + heartRate +
                            "\narrhythmia = " + arrhythmia +
                            "\nhsd = " + hsd +
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
            }else {
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
            this.setState({resultText: JSON.stringify(e)});
        })
    }

    _getFunctionInfo() {

        BP550BTModule.getFunctionInfo(this.props.navigation.state.params.mac);
    }

    _getOffLineNum() {

        BP550BTModule.getOffLineNum(this.props.navigation.state.params.mac);
    }

    _getOffLineData() {
        BP550BTModule.getOffLineData(this.props.navigation.state.params.mac);
    }

    _getBattery() {
        BP550BTModule.getBattery(this.props.navigation.state.params.mac);
    }

    _disConnect() {
        BP550BTModule.disconnect(this.props.navigation.state.params.mac);
    }

    _getAllConnectedDevices(){
        BP550BTModule.getAllConnectedDevices();
    }
}