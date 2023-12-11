import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions, StyleSheet, View} from "react-native";

const screenWidth = Dimensions.get("window").width - 50;

const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.5,
    color: () => `black`,
    //strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const TimedChart = ({xAxis, yAxis}) => {
    const chartData = {
        labels: xAxis,
        datasets: [
          {
            data: yAxis
          }
        ]
    };

    return(
        <View style={styles.graphStyle}>
            <BarChart
                fromZero={true}
                data={chartData}
                width={screenWidth}
                withHorizontalLabels={false}
                withInnerLines={false}
                height={220}
                chartConfig={chartConfig}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    graphStyle: {
        justifyContent: 'center',
    }
})

export default TimedChart