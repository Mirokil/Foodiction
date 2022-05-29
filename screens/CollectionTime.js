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

const CollectionTime = ({ route, navigation }) => {

    const [time] = React.useState(data.times);
    const [qty, setQty] = React.useState(null);
    const [order, setOrder] = React.useState(null);
    const [request, setRequest] = React.useState(null);

    React.useEffect(() => {
        let { qty } = route.params;
        let { item } = route.params;
        let { request } = route.params;

        setQty(qty)
        setOrder(item)
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
                        paddingRight: 102
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
                >Pick a Time</Text>
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
                        >Search for available time slots</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderTimeList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    padding: 15,
                    paddingBottom: 10,
                    flexDirection: 'row'
                }}
                onPress={() => navigation.navigate("CollectionCheckout", { item, order, qty, request })}
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
                    borderRadius: 10,
                    marginBottom: 200,
                    backgroundColor: colors.bottom
                }}
            >
                <FlatList
                    data={time}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderSearchBar()}
            {renderTimeList()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.top
    }
})

export default CollectionTime;