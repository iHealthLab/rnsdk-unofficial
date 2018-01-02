import React, {Component} from 'react';
import {
    Modal,
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';

/**
 * Created by Jeepend on 13/12/2016.
 * AlertDialog for you, you only need to implement the <b>following 2 methods</b>:
 * <ul>
 * <li>getView(), you need to return a renderable component to be rendered as the content view of the dialog.</li>
 * <li>onClick(index), this callback method will be called when you click the buttons of the dialog, index will be 0 if you click left button, 1 if right.</li>
 * </ul>
 * When you want to show/hide the dialog, you should call <b> this method:</b>
 * <ul>
 * <li>setModalVisible(visible), pass true if you want to show the dialog, false to hide it.</li>
 * </ul>
 * <b>Example:</b>
 * &lt;AlertDialog
 * &nbsp; &nbsp; ref="dialog"
 * &nbsp; &nbsp; title="Select Type"
 * &nbsp; &nbsp; leftButtonText="Cancel"
 * &nbsp; &nbsp; rightButtonText="Confirm"
 * &nbsp; &nbsp; getView={() =&gt; {
 * &nbsp; &nbsp; &nbsp; &nbsp; return (
 * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;Text&gt;This is content of the dialog.&lt;/Text&gt;
 * &nbsp; &nbsp; &nbsp; &nbsp; )
 * &nbsp; &nbsp; }}
 * &nbsp; &nbsp; onClick={(index) =&gt; {
 * &nbsp; &nbsp; &nbsp; &nbsp; if (index == 0) {
 * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.warn("Left button clicked!")
 * &nbsp; &nbsp; &nbsp; &nbsp; } else if (index == 1) {
 * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.warn("Right button clicked!")
 * &nbsp; &nbsp; &nbsp; &nbsp; }
 * &nbsp; &nbsp; }}
 * /&gt;
 */
export class AlertDialog extends Component {
    BUTTON_INDEX_LEFT = 0
    BUTTON_INDEX_RIGHT = 1
    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    onLeftButtonClick() {
        this.onButtonClick(this.BUTTON_INDEX_LEFT)
    }

    onRightButtonClick() {
        this.onButtonClick(this.BUTTON_INDEX_RIGHT)
    }

    onButtonClick(index) {
        this.setState({
            modalVisible: false
        })
        this.props.onClick(index)
    }

    render() {
        return (
            <Modal
                style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
                animationType={"slide"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    this.setState({
                        modalVisible: false
                    })
                }}>
                <View style={styles.modalStyle}>
                    <View style={styles.subView}>
                        <Text style={styles.titleText}>{this.props.title}</Text>
                        {this.props.getView()}
                        {
                            // Immediately Invoked Function Expression format
                            (() => {
                                let Platform = require('Platform')
                                if (Platform.OS === 'android') {
                                    return (<View style={styles.horizontalLine}/>)
                                } else {
                                    return (<View style={styles.horizontalLineIOS}/>)
                                }
                            })()
                        }
                        <View style={styles.buttonView}>
                            <TouchableOpacity underlayColor='transparent'
                                              style={styles.buttonStyle}
                                              onPress={this.onLeftButtonClick.bind(this)}>
                                <Text style={styles.buttonText}>{this.props.leftButtonText}</Text>
                            </TouchableOpacity>
                            <View style={styles.verticalLine}/>
                            <TouchableOpacity underlayColor='transparent'
                                              style={styles.buttonStyle}
                                              onPress={this.onRightButtonClick.bind(this)}>
                                <Text style={styles.buttonText}>{this.props.rightButtonText}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )

    }
}
;
var styles = StyleSheet.create({
    modalStyle: {
        // backgroundColor:'#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    subView: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#ccc',
    },
    titleText: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentText: {
        margin: 8,
        fontSize: 14,
        textAlign: 'center',
    },
    horizontalLine: {
        marginTop: 5,
        height: 0.5,
        backgroundColor: '#ccc',
    },
    horizontalLineIOS: {
        marginTop: 221,
        height: 0.5,
        backgroundColor: '#ccc',
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStyle: {
        flex: 1,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    verticalLine: {
        width: 0.5,
        height: 44,
        backgroundColor: '#ccc',
    },
    buttonText: {
        fontSize: 16,
        color: '#3393F2',
        textAlign: 'center',
    },
})