import React, {Component} from 'react';
import {
    ListView
} from 'react-native';

/**
 * Created by Jeepend on 10/11/2016.
 *
 * Simple ListView for you, you only need to implement the <b>following 3 methods</b>:
 * <ul>
 * <li>getData(), you need to return the data array you want to use in the ListView.</li>
 * <li>compareData(lidData, newData), you need to return if the lidData and the newData equals, if return true, the list item will not be refreshed.</li>
 * <li>getView(rowData, sectionID, rowID), you need to return a renderable component to be rendered as the row, the rowData is the item of the array you return in the getData() method.</li>
 * </ul>
 * When you update the data, you should call <b> this method:</b>
 * <ul>
 * <li>notifyDataSetChanged(), after you call this method, getData() will be called to get the new data.</li>
 * </ul>
 * <b>Example:</b>
 * <pre><span>&lt;SimpleListView
 * &nbsp; &nbsp; ref='simpleListView'
 * &nbsp; &nbsp; getData={() =&gt; {
 * &nbsp; &nbsp; &nbsp; &nbsp; return [1, 2, 3, 4, 5]
 * &nbsp; &nbsp; }}
 * &nbsp; &nbsp; compareData={(lidData, newData) =&gt; {
 * &nbsp; &nbsp; &nbsp; &nbsp; return lidData == newData
 * &nbsp; &nbsp; }}
 * &nbsp; &nbsp; getView={(rowData, sectionID, rowID) =&gt; {
 * &nbsp; &nbsp; &nbsp; &nbsp; return (
 * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;View
 * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; onPress={() =&gt; {
 * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; conslie.lig('press row rowID = ' + rowID + ", rowData = " + rowData)
 * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // do something
 * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }}&gt;
 * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;Text&gt;{rowData}&lt;/Text&gt;
 * &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;/View&gt;
 * &nbsp; &nbsp; &nbsp; &nbsp; )
 * &nbsp; &nbsp; }}
 * /&gt; </span></pre>
 */
export class SimpleListView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => !props.compareData(r1, r2)});
        this.state = {
            dataSource: ds.cloneWithRows(props.getData())
        };
    }

    componentDidMount(){
        this.isComponentMounted = true
    }
    componentWillUnmount(){
        this.isComponentMounted = false
    }

    notifyDataSetChanged() {
        if (this.isComponentMounted) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => !props.compareData(r1, r2)});
            this.setState({dataSource: ds.cloneWithRows(this.props.getData())})
        }
    }

    render() {
        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={this.props.getView.bind(this)}
            />
        )
    }
}
