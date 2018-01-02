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
    HS4SModule,
    HSProfileModule
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

export default class HS4SView extends Component {

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
                        onPress={() => HS4SModule.getAllConnectedDevices()}>

                        <Text style={styles.buttonText}>
                        GetAllConnectedDevices
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            HS4SModule.measureOnline(this.props.navigation.state.params.mac, 1, 123)
                        }}>
                        <Text style={styles.buttonText}>
                            Start Measure
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            HS4SModule.getOfflineData(this.props.navigation.state.params.mac)
                        }}>
                        <Text style={styles.buttonText}>
                            Get History Data
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            HS4SModule.disconnect(this.props.navigation.state.params.mac)
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
        console.info('HS4SView', 'componentWillMount()', "mac = " + this.props.navigation.state.params.mac + " type = " + this.props.navigation.state.params.type);
    }

    componentDidMount() {
        let self = this;
        let resultText = "";
        let offlineDataResult = '';

        this.disconnectListener = DeviceEventEmitter.addListener(iHealthDeviceManagerModule.Event_Device_Disconnect, function (e: Event) {
            // handle event.
            if (e.mac == self.props.navigation.state.params.mac) {
                self.props.navigation.goBack();
            }
        });

        this.notifyListener = DeviceEventEmitter.addListener(HS4SModule.Event_Notify, function (e: Event) {

            let action = e.action
            if (action == HSProfileModule.ACTION_LIVEDATA_HS) {
                resultText = "The live data information:"
                let value = e[HSProfileModule.LIVEDATA_HS]
                resultText += "\nvalue = " + value
            } else if (action == HSProfileModule.ACTION_ONLINE_RESULT_HS) {
                resultText = "The result data information:"
                let dataId = e[HSProfileModule.DATAID]
                resultText += "\ndata id = " + dataId
                let weight = e[HSProfileModule.WEIGHT_HS]
                resultText += "\nweight = " + weight
                // let fat = e[HSProfileModule.FAT_HS]
                // resultText += "\nfat = " + fat
                // let water = e[HSProfileModule.WATER_HS]
                // resultText += "\nwater = " + water
                // let muscle = e[HSProfileModule.MUSCLE_HS]
                // resultText += "\nmuscle = " + muscle
                // let skeleton = e[HSProfileModule.SKELETON_HS]
                // resultText += "\nskeleton = " + skeleton
                // let fateLevel = e[HSProfileModule.FATELEVEL_HS]
                // resultText += "\nfate level = " + fateLevel
                // let DCI = e[HSProfileModule.DCI_HS]
                // resultText += "\nDCI = " + DCI
            } else if (action == HSProfileModule.ACTION_HISTORICAL_DATA_HS) {
                resultText = '--------------正在获取离线数据--------------';
                let offlineData = e[HSProfileModule.HISTORDATA__HS];
                for (let i = 0; i < offlineData.length; i++) {
                    let dataInfo = offlineData[i]
                    let dataId = dataInfo[HSProfileModule.DATAID]
                    let date = dataInfo[HSProfileModule.MEASUREMENT_DATE_HS]
                    let weight = dataInfo[HSProfileModule.WEIGHT_HS]
                    // let fat = dataInfo[HSProfileModule.FAT_HS]
                    // let water = dataInfo[HSProfileModule.WATER_HS]
                    // let muscle = dataInfo[HSProfileModule.MUSCLE_HS]
                    // let skeleton = dataInfo[HSProfileModule.SKELETON_HS]
                    // let fateLevel = dataInfo[HSProfileModule.FATELEVEL_HS]
                    // let DCI = dataInfo[HSProfileModule.DCI_HS]
                    offlineDataResult += "\n---------------------------------------------------------------"
                    offlineDataResult += "\ndataId = " + dataId
                    offlineDataResult += "\ndate = " + date
                    offlineDataResult += "\nweight = " + weight
                    // resultText += "\nfat = " + fat
                    // resultText += "\nwater = " + water
                    // resultText += "\nmuscle = " + muscle
                    // resultText += "\nskeleton = " + skeleton
                    // resultText += "\nfate level = " + fateLevel
                    // resultText += "\nDCI = " + DCI
                }
            } else if (action == HSProfileModule.ACTION_HISTORICAL_DATA_COMPLETE_HS) {
                resultText = offlineDataResult;
                resultText += "\n--------------------华丽的分割线----------------------";
                resultText += "\nreceive history data over."
            } else if (action == HSProfileModule.ACTION_NO_HISTORICALDATA) {
                resultText = "No History Data."
            } else if (action == HSProfileModule.ACTION_ERROR_HS) {
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
