import { Tabs } from 'expo-router'
import { View, Text, Image } from 'react-native'
import {icons} from "../../constants"

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View>
            <Image
                source={icon}
                resizeMode='contain'
            />
        </View>
    )
}


const TabsLayout = () => {
    return (
        <>
            <Tabs>
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