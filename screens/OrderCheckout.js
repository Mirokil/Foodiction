import React from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native"
import { icons, colors, fonts } from '../constants';

const OrderCheckout = ({ route, navigation }) => {

    const [table, setTable] = React.useState(null);
    const [order, setOrder] = React.useState(null);
    const [restaurant, setRestaurant] = React.useState(null);
    const [qty, setQty] = React.useState(null);
    const [request, setRequest] = React.useState(null);

    React.useEffect(() => {
        let { item } = route.params;
        let { order } = route.params;
        let { restaurant } = route.params;
        let { qty } = route.params;
        let { request } = route.params;

        setTable(item)
        setOrder(order)
        setRestaurant(restaurant)
        setQty(qty)
        setRequest(request)
    })

    function renderHeader() {
        return (
            <View
                style={{
                    height: 80,
                    paddingTop: 50,
                    flexDirection: 'row',
                    backgroundColor: colors.middle
                }}
            >
                <TouchableOpacity
                    style={{
                        paddingLeft: 20,
                        paddingRight: 54
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{
                            top: 4,
                            width: 15,
                            height: 15,
                            tintColor: colors.gray
                        }}
                        resizeMode="contain"
                        source={icons.close}
                    />
                </TouchableOpacity>

                <Text
                    style={{
                        ...fonts.h3,
                        fontSize: 20,
                        color: colors.gray
                    }}
                >Complete your Order</Text>
            </View>
        )
    }

    function renderBody() {
        return (
            <ScrollView
                contentContainerStyle={{ padding: 20 }}
                showsVerticalScrollIndicator={false}
            >
                <Image
                    style={{
                        width: "100%",
                        height: 170,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12
                    }}
                    resizeMode="cover"
                    source={restaurant?.thumbnail}
                />
                
                <View
                    style={{
                        padding: 15,
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        backgroundColor: colors.bottom
                    }}
                >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 20,
                            paddingTop: 5,
                            color: colors.gray
                        }}
                    >{order?.name}</Text>

                    <View
                        style={{
                            paddingTop: 12,
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                ...fonts.h4,
                                flex: 1,
                                fontSize: 17,
                                color: colors.gray
                            }}
                        >Send to</Text>

                        <Text
                            style={{
                                ...fonts.h3,
                                fontSize: 17,
                                color: colors.gray
                            }}
                        >{table?.name}</Text>
                    </View>

                    <View
                        style={{
                            paddingTop: 12,
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                ...fonts.h4,
                                flex: 1,
                                fontSize: 17,
                                color: colors.gray
                            }}
                        >Subtotal</Text>
                        
                        <Text
                            style={{
                                ...fonts.h3,
                                fontSize: 17,
                                color: colors.gray
                            }}
                        >£{(order?.price * qty).toFixed(2)}</Text>
                    </View>

                    <View
                        style={{
                            paddingTop: 12,
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                ...fonts.h4,
                                flex: 1,
                                fontSize: 17,
                                color: colors.gray
                            }}
                        >Service Charge (5.0%)</Text>

                        <Text
                            style={{
                                ...fonts.h3,
                                fontSize: 17,
                                color: colors.gray
                            }}
                        >£{((order?.price * qty) * 0.05).toFixed(2)}</Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            paddingTop: 30,
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            borderBottomColor: colors.darkgray
                        }}
                    >
                        <Text
                            style={{
                                ...fonts.h3,
                                fontSize: 17,
                                paddingBottom: 20,
                                color: colors.gray
                            }}
                        >Got a discount code?</Text>

                        <Text
                            style={{
                                ...fonts.h3,
                                bottom: 3.5,
                                fontSize: 23,
                                color: colors.gray
                            }}
                        > {"›"}</Text>
                    </TouchableOpacity>

                    <View
                        style={{ marginTop: 20 }}
                    >
                        <Text
                            style={{
                                ...fonts.h3,
                                fontSize: 18,
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
                                value={request}
                                spellCheck={false}
                                keyboardAppearance = 'dark'
                                selectionColor={colors.gray}
                                enablesReturnKeyAutomatically={true}
                                placeholderTextColor={colors.darkgray}
                                placeholder='Please enter any additional dietary requirements.'
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

    function renderBottom() {
        return (
            <View
                style={{
                    paddingBottom: 55,
                    alignItems: 'center',
                    backgroundColor: colors.bottom
                }}
            >
                <TouchableOpacity
                    style={{
                        paddingTop: 15,
                        paddingRight: 30,
                        alignSelf: 'flex-end'
                    }}
                    onPress={() => navigation.navigate("Venue")}
                >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 17,
                            color: colors.gray
                        }}
                    >Cancel</Text>
                </TouchableOpacity>

                <View
                    style={{
                        paddingTop: 20,
                        paddingBottom: 15,
                        paddingLeft: 30,
                        paddingRight: 30,
                        flexDirection: 'row'
                    }}
                >
                    <Text
                        style={{
                            ...fonts.h4,
                            flex: 1,
                            fontSize: 21,
                            color: colors.gray
                        }}
                    >Total to Pay</Text>

                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 21,
                            color: colors.gray
                        }}
                    >£{((order?.price * qty) + ((order?.price * qty) * 0.05)).toFixed(2)}</Text>
                </View>

                <TouchableOpacity
                    style={{
                        width: 320,
                        height: 55,
                        borderRadius: 10,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        backgroundColor: colors.black
                    }}
                >
                    <Text
                        style={{
                            ...fonts.h4,
                            fontSize: 25,
                            color: colors.gray
                        }}
                    >Order with </Text>

                    <Image
                        style={{
                            bottom: 1,
                            width: 20,
                            height: 20,
                            tintColor: colors.gray
                        }}
                        resizeMode="contain"
                        source={icons.apple}
                    />

                    <Text
                        style={{
                            ...fonts.h4,
                            fontSize: 25,
                            color: colors.gray
                        }}
                    > Pay</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        marginTop: 15,
                        flexDirection: 'row'
                    }}
                    onPress={() => navigation.navigate("QR_Code")}
                >
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 16,
                            color: colors.gray
                        }}
                    >Other Payment Methods</Text>

                    <Text
                        style={{
                            ...fonts.h3,
                            bottom: 4,
                            fontSize: 22,
                            color: colors.gray
                        }}
                    > {"›"}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderHeader()}

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                {renderBody()}
            </KeyboardAvoidingView>

            {renderBottom()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.top
    }
})

export default OrderCheckout;