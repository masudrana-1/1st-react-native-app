import { Slot } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'


const RootLayout = () => {
    return (
        <>
            <Text>Header</Text>
            <Slot />
            <Text>Footer</Text>
        </>
    )
}

export default RootLayout
