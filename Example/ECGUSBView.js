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
    ECGUSBModule,
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

export default class ECGUSBView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultText: ""
        }
    }

    render() {
        console.log("ECGUSBView render() type = " + this.props.navigation.state.params.type)
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
                        onPress={() => ECGUSBModule.getAllConnectedDevices()}>

                        <Text style={styles.buttonText}>
                            GetAllConnectedDevices
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            ECGUSBModule.syncData(this.props.navigation.state.params)
                        }}>
                        <Text style={styles.buttonText}>
                            syncData
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            ECGUSBModule.deleteData(this.props.navigation.state.params)
                        }}>
                        <Text style={styles.buttonText}>
                            deleteData
                        </Text>
                    </TouchableOpacity>
                    
                    
                </ScrollView>
            </View>
        )
    }

    componentWillMount() {
        console.info('ECGUSBView', 'componentWillMount()', "mac = " + this.props.navigation.state.params.mac + " type = " + this.props.navigation.state.params.type);

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
        this.notifyListener = DeviceEventEmitter.addListener(ECGUSBModule.Event_Notify, function (e: Event) {
            let resultText
            let action = e.action
            if (action == ECGProfileModule.ACTION_SYNCDATA_ECGUSB) {
                // resultText = "Get syncData successfully.\n"
                // let battery = e[ECGProfileModule.BATTERY_ECG]
                // resultText += "battery = " + battery
            } else if (action == ECGProfileModule.ACTION_DELETEDATA_ECGUSB) {
               
               resultText ="deleteData successfully.\n"
               
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