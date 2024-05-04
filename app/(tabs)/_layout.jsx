import { Tabs } from 'expo-router'
import { View, Text, Image } from 'react-native'
import {icons} from "../../constants"

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
                {name}
            </Text>
        </View>
    )
}


const TabsLayout = () => {
    return (
        <>
            <Tabs
                // tab bar label show 
                screenOptions={{
                    tabBarShowLabel: false
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout