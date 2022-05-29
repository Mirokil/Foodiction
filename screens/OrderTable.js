import React from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native"
import { data, icons, colors, fonts } from '../constants';

const OrderTable = ({ route, navigation }) => {

    const [tables] = React.useState(data.tables);
    const [order, setOrder] = React.useState(null);
    const [restaurant, setRestaurant] = React.useState(null);
    const [qty, setQty] = React.useState(null);
    const [request, setRequest] = React.useState(null);

    React.useEffect(() => {
        let { item } = route.params;
        let { restaurant } = route.params;
        let { qty } = route.params;
        let { request } = route.params;

        setOrder(item)
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
                        paddingRight: 82
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
                >Select Location</Text>
            </View>
        )
    }

    function renderSearchBar() {
        return (
            <View
                style={{
                    margin: 15,
                    height: 45
                }}
            >
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            width: "98%",
                            height: "100%",
                            borderRadius: 12,
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: colors.bottom
                        }}
                    >
                        <Image
                            style={{
                                width: 12.5,
                                height: 12.5,
                                marginLeft: 20,
                                marginBottom: 4,
                                tintColor: colors.darkgray
                            }}
                            resizeMode="contain"
                            source={icons.loop}
                        />

                        <Text
                            style={{
                                ...fonts.h5,
                                fontSize: 14,
                                marginLeft: 10,
                                color: colors.darkgray
                            }}
                        >Search for a location (e.g. Table No.)</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderTableList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    padding: 15,
                    paddingBottom: 10,
                    flexDirection: 'row'
                }}
                onPress={() => navigation.navigate("OrderCheckout", { item, order, restaurant, qty, request })}
            >
                <Text
                    style={{
                        ...fonts.h4,
                        flex: 1,
                        fontSize: 17,
                        color: colors.gray
                    }}
                >{item.name}</Text>

                <Text
                    style={{
                        ...fonts.h3,
                        bottom: 3,
                        fontSize: 22,
                        color: colors.darkgray
                    }}
                >{"›"}</Text>
            </TouchableOpacity>
        )

        return (
            <View
                style={{
                    margin: 15,
                    marginTop: 0,
                    marginBottom: 200,
                    borderRadius: 10,
                    backgroundColor: colors.bottom
                }}
            >
                <FlatList
                    data={tables}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderSearchBar()}
            {renderTableList()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.top
    }
})

export default OrderTable;