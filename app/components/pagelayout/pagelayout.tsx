import {ReactNode} from "react";
import {View} from "react-native";


export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <View className="bg-background justify-center flex-1 p-10">
            {children}
        </View>
    );
}