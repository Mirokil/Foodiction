import React from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from "react-native";

import { data, icons, colors, fonts } from '../constants'

const Menu = ({ navigation }) => {

    const [dish, setDish] = React.useState(data.dishes)
    const [categories, setCategories] = React.useState(data.categories)
    const [selectedCategory, setSelectedCategory] = React.useState(null)

    function onSelectedCategory(category) {
        
        let dishList = data.dishes.filter(a => a.categories.includes(category.id))

        setDish(dishList)

        setSelectedCategory(category)
    }

    function renderHeader() {
        return (
            <View
                style={{
                    height: 40,
                    flexDirection: 'row'
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
                            width: "88%",
                            height: "100%",
                            borderRadius: 12,
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: colors.top
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
                        >Search Menu</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: 20,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: colors.gray
                        }}
                        resizeMode="contain"
                        source={icons.basket}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderCategories() {
        return (
            <View>
                <FlatList
                    horizontal
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    contentContainerStyle={{ paddingVertical: 30 }}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    padding: 10,
                                    borderRadius: 30,
                                    paddingBottom: 20,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginLeft: index == 0 ? 20 : 15,
                                    marginRight: index == categories.length - 1 ? 20 : 0,
                                    backgroundColor: (selectedCategory?.id == item.id) ? colors.darkgray : colors.bottom,
                                    ...styles.shadow
                                }}
                                onPress={() => onSelectedCategory(item)}
                            >
                                <View
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 30,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: (selectedCategory?.id == item.id) ? colors.middle : colors.darkgray
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: 30,
                                            height: 30
                                        }}
                                        resizeMode="contain"
                                        source={item.icon}
                                    />
                                </View>

                                <Text
                                    style={{
                                        ...fonts.h5,
                                        fontSize: 14,
                                        marginTop: 15,
                                        color: (selectedCategory?.id == item.id) ? colors.middle : colors.gray
                                    }}
                                >{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }

    function renderDishes() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    borderRadius: 12,
                    marginBottom: 20,
                    flexDirection: 'row',
                    backgroundColor: colors.bottom
                }}
                onPress={() => navigation.navigate("Collection", { item })}
            >
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 18,
                            marginTop: 25,
                            marginLeft: 12,
                            color: colors.gray
                        }}
                    >{item.name}</Text>

                    <Text
                        style={{
                            ...fonts.h3,
                            fontSize: 19,
                            marginTop: 20,
                            marginLeft: 12,
                            color: colors.gray
                        }}
                    >£{item.price}</Text>
                </View>

                <View
                    style={{
                        marginTop: 12,
                        marginRight: 12,
                        marginBottom: 12
                    }}
                >
                    <Image
                        style={{
                            width: 85,
                            height: 85,
                            borderRadius: 8
                        }}
                        resizeMode="cover"
                        source={item.photo}
                    />
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={dish}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingBottom: 65,
                    paddingHorizontal: 20
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderCategories()}
            {renderDishes()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.middle
    },
    shadow: {
        elevation: 1,
        shadowRadius: 3,
        shadowOpacity: 0.3,
        shadowColor: "#000",
        shadowOffset: { width: 7, height: 7 }
    }
})

export default Menu;