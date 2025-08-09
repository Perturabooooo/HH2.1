import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageLayout from "@/app/components/pagelayout/pagelayout";


export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <PageLayout>
            <TouchableOpacity className="flex-1 justify-center p-2.5">
                <Text>New</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 justify-center p-2.5">
                <Text>Saved</Text>
            </TouchableOpacity>
        </PageLayout>
    );
}
// onPress={() => navigation.navigate('FactionSelect')}