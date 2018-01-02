/**
 * Created by zhangxu on 16/11/11.
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
    BP3LModule,
    BPProfileModule
} from 'ihealthlibrary-react-native'


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



export default class BP3LView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultText:''
        }


    }

    componentWillMount() {
        console.info('BP3LView', 'componentWillMount()', null);
        this._addListener();
    }

    componentDidMount() {
        console.info('BP3LView', 'componentDidMount()', null);
    }


    componentWillUnmount() {
        console.info('BP3LView', 'componentWillUnmount()', null);

        this._removeListener();

    }

    render() {

        console.info('BP3LView', 'render()', null);

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
                        onPress={() => this._getBattery()}>

                        <Text style={styles.buttonText}>
                            GetBattery
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
        this.connectionListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, function (e: Event) {
            // handle event.
            console.info('BP3LView', 'addListener_DeviceDisconnect', JSON.stringify(e));
            self.props.navigation.goBack();
        });
        this.notifyListener = DeviceEventEmitter.addListener(BP3LModule.Event_Notify, function (e: Event) {
            console.info('BP3LView', 'addListener_Event_Notify', "Action = " + e.action + "\n" + "Message = " + JSON.stringify(e));

            let result = "";
            if (e.action === BPProfileModule.ACTION_ERROR_BP) {
                let errorNum = e[BPProfileModule.ERROR_NUM_BP];
                let description = e[BPProfileModule.ERROR_DESCRIPTION_BP];
                result = "\nErrorNum = " + errorNum + "\nDescription = " + description;
            }
            else if (e.action === BPProfileModule.ACTION_BATTERY_BP) {
                let battery = e[BPProfileModule.BATTERY_BP];
                result = '\nBattery = ' + battery;
            }
            else if (e.action === BPProfileModule.ACTION_ZOREING_BP) {
                result = '\nBP device is zeroing';
            }
            else if (e.action === BPProfileModule.ACTION_ZOREOVER_BP) {
                result = '\nBP device is zero over';
            }
            else if (e.action === BPProfileModule.ACTION_ONLINE_PRESSURE_BP) {
                let pressure = e[BPProfileModule.BLOOD_PRESSURE_BP];
                result = '\npressure = ' + pressure;
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


    _getDeviceIDPS() {
        iHealthDeviceManagerModule.getDevicesIDPS(this.props.navigation.state.params.mac, (e) => {
            console.info('deviceIDPS:' + JSON.stringify(e));
            this.setState({resultText: JSON.stringify(e)})
        })
    }

    _getAllConnectedDevices(){
        BP3LModule.getAllConnectedDevices();
    }

    _startMeasure() {

        BP3LModule.startMeasure(this.props.navigation.state.params.mac);
    }

    _stopMeasure() {
        BP3LModule.stopMeasure(this.props.navigation.state.params.mac);
    }

    _getBattery() {
        BP3LModule.getBattery(this.props.navigation.state.params.mac);
    }

    _disConnect() {
        BP3LModule.disconnect(this.props.navigation.state.params.mac);
    }
}