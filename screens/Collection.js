import React from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import { SimpleStepper } from 'react-native-simple-stepper';
import { icons, colors, fonts } from '../constants';

const Collection = ({ route, navigation }) => {
    
    const [item, setItem] = React.useState(null);
    const [qty, setQty] = React.useState(1);
    const [request, setRequest] = React.useState(null);

    React.useEffect(() => {
        let { item } = route.params;
        setItem(item)
    })

    qtyChanged = value => {
        const newQty = Number(value);
        setQty(newQty);
    }

    function subtotal() {
        let sub = item?.price * qty
        return sub.toFixed(2)
    }

    function renderHeader() {
        return (
            <View
                style={{
                    height: 55,
                    marginTop: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: colors.bottom
                }}
            >
                <Text
                    style={{
                        ...fonts.h3,
                        flex: 1,
                        left: 90,
                        fontSize: 20,
                        color: colors.gray
                    }}
                >Customise your item</Text>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text
                        style={{
                            ...fonts.h5,
                            fontSize: 20,
                            paddingRight: 15,
                            color: colors.gray
                        }}
                    >Cancel</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderBody() {
        return (
            <ScrollView
                style={{
                    padding: 15,
                    marginBottom: -40,
                    backgroundColor: colors.middle
                }}
            >
                <View>
                    <Image
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: 12
                        }}
                        resizeMode="cover"
                        source={item?.photo}
                    />

                    <View
                        style={{
                            width: 75,
                            height: 25,
                            bottom: -1,
                            paddingLeft: 6,
                            position: 'absolute',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            backgroundColor: colors.top,
                            borderTopRightRadius: 12,
                            borderBottomLeftRadius: 12
                        }}
                    >
                        {
                            [1, 2, 3].map((duration) => (
                                <Image
                                    style={{
                                        width: 15,
                                        height: 15,
                                        marginRight: 5,
                                        tintColor: (duration <= item?.duration) ? colors.gray : colors.darkgray
                                    }}
                                    key={duration}
                                    resizeMode="contain"
                                    source={icons.time}
                                />
                            ))
                        }
                    </View>
                </View>

                <View style={{ marginTop: 50 }}>
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 21,
                            color: colors.gray
                        }}
                    >Any special requests?</Text>

                    <View
                        style={{
                            height: 60,
                            padding: 10,
                            paddingTop: 5,
                            marginTop: 15,
                            borderRadius: 12,
                            backgroundColor: colors.top
                        }}
                    >
                        <TextInput
                            style={{
                                ...fonts.h4,
                                fontSize: 16,
                                color: colors.gray
                            }}
                            multiline
                            minHeight={48}
                            maxHeight={48}
                            spellCheck={false}
                            onChangeText={setRequest}
                            keyboardAppearance = 'dark'
                            selectionColor={colors.gray}
                            enablesReturnKeyAutomatically={true}
                            placeholderTextColor={colors.darkgray}
                            placeholder='Please enter any additional dietary requirements.'
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }

    function renderBottom() {
        return (
            <View
                style={{
                    bottom: -38,
                    paddingTop: 25,
                    paddingBottom: 65,
                    alignItems: 'center',
                    backgroundColor: colors.bottom
                }}
            >
                <View>
                    <SimpleStepper
                        valueChanged={value => qtyChanged(value)}
                        initialValue={1}
                        minimumValue={1}
                        maximumValue={99}
                        incrementImage={icons.plus}
                        decrementImage={icons.minus}
                        showText={true}
                        textStyle={styles.text}
                        containerStyle={styles.box}
                        separatorStyle={styles.separator}
                        incrementImageStyle={styles.signs}
                        decrementImageStyle={styles.signs}
                    />
                </View>

                <TouchableOpacity
                    style={{
                        width: 320,
                        height: 65,
                        marginTop: 15,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors.green
                    }}
                    onPress={() => navigation.navigate("CollectionTime", { item, qty, request })}
                >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 25,
                            color: colors.darkblue
                        }}
                    >Add for £{subtotal()}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderBody()}
            {renderBottom()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkgreen
    },
    separator: {
        backgroundColor: colors.transparent
    },
    signs: {
        width: 33,
        height: 33,
        tintColor: colors.green
    },
    box: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.transparent
    },
    text: {
        ...fonts.h3,
        fontSize: 25,
        paddingTop: 3,
        paddingLeft: 23,
        paddingRight: 23,
        color: colors.gray
    }
})

export default Collection;