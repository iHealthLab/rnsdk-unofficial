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
    ECGModule,
    ECGProfileModule
} from 'ihealthlibrary-react-native';

/**
 * Created by DQQ on 1/1/2018.
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

export default class ECGView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultText: ""
        }
    }

    render() {
        console.log("ECGView render() type = " + this.props.navigation.state.params.type)
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
                        onPress={() => ECGModule.getAllConnectedDevices()}>

                        <Text style={styles.buttonText}>
                            GetAllConnectedDevices
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            ECGModule.stopMeasure(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            stopMeasure
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            ECGModule.getBattery(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            Get Battery
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            ECGModule.sysTime(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            SYS Time
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            ECGModule.startMeasure(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            startMeasure
                        </Text>
                    </TouchableOpacity>
                    
                    
                </ScrollView>
            </View>
        )
    }

    componentWillMount() {
        console.info('ECGView', 'componentWillMount()', "mac = " + this.props.navigation.state.params.mac + " type = " + this.props.navigation.state.params.type);

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
        this.notifyListener = DeviceEventEmitter.addListener(ECGModule.Event_Notify, function (e: Event) {
            let resultText
            let action = e.action
            if (action == ECGProfileModule.ACTION_BATTERY_ECG) {
                resultText = "Get battery information successfully.\n"
                let battery = e[ECGProfileModule.BATTERY_ECG]
                resultText += "battery = " + battery
            } else if (action == ECGProfileModule.ACTION_MEASURE_ECG) {
               
               
            } else if (action == ECGProfileModule.ACTION_ERROR_ECG) {
                resultText = "Error happens: "
                let num = e[ECGProfileModule.ERROR_NUM_ECG]
                let description = e[ECGProfileModule.ERROR_DESCRIPTION_ECG]
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