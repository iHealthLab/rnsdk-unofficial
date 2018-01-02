/**
 * Created by zhangxu on 16/11/11.
 */
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
    BP5Module,
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




export default class BP5View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultText:''
        }


    }


    componentWillMount() {
        console.info('BP5View', 'componentWillMount', null);
        this._addListener();


    }

    componentDidMount() {
        console.info('BP5View', 'componentDidMount', null);
    }

    componentWillUnmount() {
        console.info('BP5View', 'componentWillUnmount', null);
        this._removeListener();
    }





    _addListener() {
        let self = this;

        this.connectionListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, function (e: Event) {
            // handle event.
            console.info('BP5View', 'addListener_DeviceDisconnect', JSON.stringify(e));
            self.props.navigation.goBack();
        });
        this.notifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify, function (e: Event) {

            console.info('BP5View', 'addListener_Event_Notify',"Action = " +  e.action + "\n" + "Message = " +  JSON.stringify(e));
            let result = "";
            if (e.action === BPProfileModule.ACTION_ERROR_BP) {
                let errorNum = e[BPProfileModule.ERROR_NUM_BP];
                let description = e[BPProfileModule.ERROR_DESCRIPTION_BP];
                result = "\nErrorNum = " + errorNum + "\nDescription = " + description;
            }
            else if (e.action === BPProfileModule.ACTION_BATTERY_BP) {
                let battery = e[BPProfileModule.BATTERY_BP];
                result = "\nBattery = " + battery;
            }
            else if (e.action === BPProfileModule.ACTION_ZOREING_BP) {
                result = "\nBP device is zeroing"
            }
            else if (e.action === BPProfileModule.ACTION_ZOREOVER_BP) {
                result = "\nBP device is zero over"
            }
            else if (e.action === BPProfileModule.ACTION_ONLINE_PRESSURE_BP) {
                let pressure = e[BPProfileModule.BLOOD_PRESSURE_BP];
                result = "\npressure = " + pressure;
            }
            else if (e.action === BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP) {
                let pressure = e[BPProfileModule.BLOOD_PRESSURE_BP];
                let heartbeat = e[BPProfileModule.FLAG_HEARTBEAT_BP];
                let wave = e[BPProfileModule.PULSEWAVE_BP];

                result = "\npressure = " + pressure +
                    "\nheartbeat = " + heartbeat +
                    "\nwave = " + wave;
            }
            else if (e.action === BPProfileModule.ACTION_ONLINE_RESULT_BP) {
                let sys = e[BPProfileModule.HIGH_BLOOD_PRESSURE_BP];
                let dia = e[BPProfileModule.LOW_BLOOD_PRESSURE_BP];
                let heartRate = e[BPProfileModule.PULSE_BP];
                let arrhythmia = e[BPProfileModule.MEASUREMENT_AHR_BP];
                let dataID = e[BPProfileModule.DATAID];

                result = "\nsys = " + sys +
                    "\ndia = " + dia +
                    "\nheartRate = " + heartRate +
                    "\narrhythmia = " + arrhythmia +
                    "\ndataID = " + dataID;
            }
            else if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {
                let offlineNum = e[BPProfileModule.HISTORICAL_NUM_BP];
                result = "\nofflineNum = " + offlineNum;
            }
            else if (e.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {

                let dataArray = e[BPProfileModule.HISTORICAL_DATA_BP];
                if (dataArray == undefined) {
                    result = "\nThere is not offline data in device"
                }else {
                    result  = "OfflineData：";
                    for (let i = 0; i < dataArray.length; i++) {
                        let offlineData = dataArray[i];

                        let time = offlineData[BPProfileModule.MEASUREMENT_DATE_BP];
                        let sys = offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP];
                        let dia = offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP];
                        let heartRate = offlineData[BPProfileModule.PULSE_BP];
                        let arrhythmia = offlineData[BPProfileModule.MEASUREMENT_AHR_BP];
                        let hsd = offlineData[BPProfileModule.MEASUREMENT_HSD_BP];
                        let dataID = offlineData[BPProfileModule.DATAID];

                        result += "\n---------------------------------------------------------------"
                        result += "\ntime = " + time +
                            "\nsys = " + sys +
                            "\ndia = " + dia +
                            "\nheartRate" + heartRate +
                            "\narrhythmia = " + arrhythmia +
                            "\nhsd = " + hsd +
                            "\ndataID = " + dataID;
                    }
                }



            }
            else if (e.action === BPProfileModule.ACTION_ENABLE_OFFLINE_BP) {
                result = "\nEnable device can measure offline"
            }
            else if (e.action === BPProfileModule.ACTION_DISENABLE_OFFLINE_BP) {
                result = "\nDisEnable device can measure offline"
            }
            else if (e.action === BPProfileModule.ACTION_IS_ENABLE_OFFLINE) {
                let isEnableOffline = e[BPProfileModule.IS_ENABLE_OFFLINE];
                result = "\nisEnableOffline = " + isEnableOffline;
            }
            else if (e.action === BPProfileModule.ACTION_INTERRUPTED_BP) {
                result = "\nInterrupt measure"
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

    render() {

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
                        onPress={() => this._startMeasure()}>
                        <Text style={styles.buttonText}>
                            StartMeasure
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._stopMeasure()}>
                        <Text style={styles.buttonText}>
                            InterruptMeasure
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
                        onPress={() => this._enbleOffline()}>
                        <Text style={styles.buttonText}>
                            EnableOfflineMeasure
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._disableOffline()}>
                        <Text style={styles.buttonText}>
                            DisEnableOfflineMeasure
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._isEnableOffline()}>
                        <Text style={styles.buttonText}>
                            IsEnableOfflineMeasure
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._getOfflineNum()}>
                        <Text style={styles.buttonText}>
                            GetOfflineDataNum
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._getOfflineData()}>
                        <Text style={styles.buttonText}>
                            GetOfflineData
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this._disconnect()}>
                        <Text style={styles.buttonText}>
                            Disconnect
                        </Text>
                    </TouchableOpacity>
                </ScrollView>

                <TouchableOpacity
                    style={{backgroundColor:'#000000',height:3}}>
                </TouchableOpacity>

                <ScrollView
                    style={{height: 150, paddingBottom: 10}}>
                    <Text>{this.state.resultText}</Text>
                </ScrollView>

            </View>
        )
    }
    _getDeviceIDPS() {
        iHealthDeviceManagerModule.getDevicesIDPS(this.props.navigation.state.params.mac, (e) => {
            console.info('deviceInfo:' + JSON.stringify(e));
            this.setState({resultText: JSON.stringify(e)})
        })
    }
    _startMeasure() {
        BP5Module.startMeasure(this.props.navigation.state.params.mac)
    }
    _stopMeasure() {
        BP5Module.stopMeasure(this.props.navigation.state.params.mac)
    }

    _getBattery() {
        BP5Module.getBattery(this.props.navigation.state.params.mac)
    }
    _enbleOffline() {
        BP5Module.enbleOffline(this.props.navigation.state.params.mac)
    }
    _disableOffline() {
        BP5Module.disableOffline(this.props.navigation.state.params.mac)
    }
    _isEnableOffline() {
        BP5Module.isEnableOffline(this.props.navigation.state.params.mac)
    }
    _getOfflineNum() {
        BP5Module.getOfflineNum(this.props.navigation.state.params.mac)
    }
    _getOfflineData() {
        BP5Module.getOfflineData(this.props.navigation.state.params.mac)
    }
    _disconnect() {
        BP5Module.disconnect(this.props.navigation.state.params.mac)
    }

    _getAllConnectedDevices(){
        BP5Module.getAllConnectedDevices();
    }
}
