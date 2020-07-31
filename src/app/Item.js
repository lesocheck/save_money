import React, {PureComponent} from 'react';
import {Text, View, ScrollView, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import {w} from "../../constants";
import {ITEMS} from "../routes";

class Item extends PureComponent {
    render() {
        const {h1, h2, sub, container, img} = styles;
        const {title, discription, image} = this.props.navigation.state.params;
        const {navigation} = this.props;
        return (
            <View style={container}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.btnText}>GO BACK</Text>
                </TouchableOpacity>
                <ScrollView>
                    <View style={sub}>
                        <Text style={h1}>{title}</Text>
                        <Image style={styles.img} source={{uri: image}} />
                        <Text style={h2}>{discription}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    sub: {
        paddingTop: 20,
        paddingHorizontal: 15,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 30,
        paddingTop: 20,
        textAlign: 'center',
    },
    h2: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 20,
        padding: 15,
        color: 'grey',
        paddingHorizontal: 15,
        textAlign: 'justify',
    },
    img: {
        marginTop: 20,
        marginBottom: 20,
        width: w / 1.2,
        height: w / 2.4,
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btn: {
        alignItems: 'center',
        backgroundColor: '#cbd633',
        justifyContent: 'center',
        padding: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Item;
