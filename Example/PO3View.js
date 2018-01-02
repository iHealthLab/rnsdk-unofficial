/**
 * Created by lixuesong on 16/11/11.
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
    PO3Module,
    POProfileModule
} from 'ihealthlibrary-react-native';


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

export default class PO3View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultText: ""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={{height: 100, paddingBottom: 10}}>
                    <Text>{this.state.resultText}</Text>
                </ScrollView>
                <ScrollView style={styles.contentContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => PO3Module.getAllConnectedDevices()}>

                        <Text style={styles.buttonText}>
                        GetAllConnectedDevices
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            PO3Module.getBattery(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            Get Battery
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            PO3Module.startMeasure(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            Start Measure
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            PO3Module.getHistoryData(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            Get History Data
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            PO3Module.disconnect(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            Disconnect
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }


    componentWillMount() {
        console.info('PO3View', 'componentWillMount()', "mac = " + this.props.navigation.state.params.mac + " type = " + this.props.navigation.state.params.type);

    }
    componentDidMount() {
        let self = this;

        this.disconnectListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, function (e: Event) {
            // handle event.
            if (e.mac == self.props.navigation.state.params.mac) {
                self.props.navigation.goBack();
            }
        });

        this.notifyListener = DeviceEventEmitter.addListener(PO3Module.Event_Notify, (e) => {
            let resultText
            let action = e.action
            if (action == POProfileModule.ACTION_BATTERY_PO) {
                resultText = "Get battery information successfully.\n"
                let battery = e[POProfileModule.BATTERY_PO]
                resultText += "battery = " + battery
            } else if (action == POProfileModule.ACTION_LIVEDA_PO) {
                resultText = "The live data information:"
                let waves = e[POProfileModule.PULSE_WAVE_PO]
                resultText += "\nplus wave = " + waves
                let pi = e[POProfileModule.PI_PO]
                resultText += "\npi = " + pi
                let plusStrength = e[POProfileModule.PULSE_STRENGTH_PO]
                resultText += "\nplus strength = " + plusStrength
                let bloodOxygen = e[POProfileModule.BLOOD_OXYGEN_PO]
                resultText += "\nblood oxygen = " + bloodOxygen
                let plusRate = e[POProfileModule.PULSE_RATE_PO]
                resultText += "\nplus rate = " + plusRate
            } else if (action == POProfileModule.ACTION_RESULTDATA_PO) {
                resultText = "The result data information:"
                let dataId = e[POProfileModule.DATAID]
                resultText += "\ndata id = " + dataId
                let waves = e[POProfileModule.PULSE_WAVE_PO]
                resultText += "\nplus wave = " + waves
                let pi = e[POProfileModule.PI_PO]
                resultText += "\npi = " + pi
                let plusStrength = e[POProfileModule.PULSE_STRENGTH_PO]
                resultText += "\nplus strength = " + plusStrength
                let bloodOxygen = e[POProfileModule.BLOOD_OXYGEN_PO]
                resultText += "\nblood oxygen = " + bloodOxygen
                let plusRate = e[POProfileModule.PULSE_RATE_PO]
                resultText += "\nplus rate = " + plusRate
            } else if (action == POProfileModule.ACTION_OFFLINEDATA_PO) {
                let offlineData = e[POProfileModule.OFFLINEDATA_PO]
                resultText = "Get offline data successfully.\nThere is(are) " + offlineData.length
                    + " data(s) in total:\n"
                for (let i = 0; i < offlineData.length; i++) {
                    let dataInfo = offlineData[i]
                    let dataId = dataInfo[POProfileModule.DATAID]
                    let date = dataInfo[POProfileModule.MEASURE_DATE_PO]
                    let waves = dataInfo[POProfileModule.PULSE_WAVE_PO]
                    let plusRate = dataInfo[POProfileModule.PULSE_RATE_PO]
                    let bloodOxygen = dataInfo[POProfileModule.BLOOD_OXYGEN_PO]
                    resultText += "---------------------------------------------------------------"
                    resultText += "\ndataId = " + dataId
                    resultText += "\ndate = " + date
                    resultText += "\nwaves = " + waves
                    resultText += "\nplusRate = " + plusRate
                    resultText += "\nbloodOxygen = " + bloodOxygen
                }
            } else if (action == POProfileModule.ACTION_NO_OFFLINEDATA_PO) {
                resultText = "No History Data."
            } else if (action == POProfileModule.ACTION_ERROR_PO) {
                resultText = "Error happens: " + JSON.stringify(e)
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
