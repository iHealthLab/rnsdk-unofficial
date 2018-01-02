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
    BTMModule,
    BTMProfileModule
} from 'ihealthlibrary-react-native';

/**
 * Created by lixuesong on 16/11/2016.
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

export default class BTMView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultText: ""
        }
    }

    render() {
        console.log("BTMView render() type = " + this.props.navigation.state.params.type)
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
                        onPress={() => BTMModule.getAllConnectedDevices()}>

                        <Text style={styles.buttonText}>
                            GetAllConnectedDevices
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            BTMModule.disconnect(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            Disconnect
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            BTMModule.getBattery(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            Get Battery
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            BTMModule.getMemoryData(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            Get Memory Data
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            BTMModule.setStandbyTime(this.props.navigation.state.params.mac, 0, 1, 0)
                        }}>
                        <Text style={styles.buttonText}>
                            Set Standby Time
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            BTMModule.setTemperatureUnit(this.props.navigation.state.params.mac, 1)
                        }}>
                        <Text style={styles.buttonText}>
                            Set Temperature Unit
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            BTMModule.setMeasuringTarget(this.props.navigation.state.params.mac, 1)
                        }}>
                        <Text style={styles.buttonText}>
                            Set Measuring Target
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            BTMModule.setOfflineTarget(this.props.navigation.state.params.mac, 2)
                        }}>
                        <Text style={styles.buttonText}>
                            Set Offline Target
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }

    componentWillMount() {
        console.info('BTMView', 'componentWillMount()', "mac = " + this.props.navigation.state.params.mac + " type = " + this.props.navigation.state.params.type);

    }

    componentDidMount() {
        let self = this
        //noinspection JSAnnotator
        this.disconnectListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, function (e: Event) {
            // handle event.
            if (e.mac == self.props.navigation.state.params.mac) {
                self.props.navigation.goBack();
            }
        });

        //noinspection JSAnnotator
        this.notifyListener = DeviceEventEmitter.addListener(BTMModule.Event_Notify, function (e: Event) {
            let resultText
            let action = e.action
            if (action == BTMProfileModule.ACTION_BTM_BATTERY) {
                resultText = "Get battery information successfully.\n"
                let battery = e[BTMProfileModule.BTM_BATTERY]
                resultText += "battery = " + battery
            } else if (action == BTMProfileModule.ACTION_BTM_MEMORY) {
                let count = e[BTMProfileModule.MEMORY_COUNT]
                resultText = "Get offline data successfully.\nThere is(are) " + count
                    + " data(s) in total:\n"
                resultText += "memory count = " + count
                let offlineData = e[BTMProfileModule.BTM_TEMPERATURE_ARRAY]
                for (let i = 0; i < offlineData.length; i++) {
                    let dataInfo = offlineData[i]
                    let temperature = dataInfo[BTMProfileModule.BTM_TEMPERATURE]
                    let target = dataInfo[BTMProfileModule.BTM_TEMPERATURE_TARGET]
                    let time = dataInfo[BTMProfileModule.BTM_MEASURE_TIME]
                    resultText += "---------------------------------------------------------------"
                    resultText += "\ntemperature = " + temperature
                    resultText += "\ntarget = " + target
                    resultText += "\ntime = " + time
                }
            } else if (action == BTMProfileModule.ACTION_BTM_MEASURE) {
                resultText = "Get measure information successfully.\n"
                let temperature = e[BTMProfileModule.BTM_TEMPERATURE]
                let target = e[BTMProfileModule.BTM_TEMPERATURE_TARGET]
                resultText += "temperature = " + temperature
                resultText += "target = " + target
            } else if (action == BTMProfileModule.ACTION_ERROR_BTM) {
                resultText = "Error happens: "
                let num = e[BTMProfileModule.ERROR_NUM_BTM]
                let description = e[BTMProfileModule.ERROR_DESCRIPTION_BTM]
                resultText += "num = " + num
                resultText += "description = " + description
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