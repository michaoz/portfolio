import { useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/Skills.css';
import { SkillsData } from '../ContentMain/SkillsData';
import { Pie } from 'react-chartjs-2';
import { CategoryScale, Chart } from 'chart.js/auto';
import { PropTypePieChart } from '../../type/PropTypePieChart';

Chart.register(CategoryScale);

const PieChart = (props: PropTypePieChart) => {
    const { data, backgroundColor, borderColor, borderWidth } = props;

    const [chartData, setChartData] = useState({
        labels: data.map(d => d.skill),
        datasets: [
            {
                label: "abc",
                data: data.map(d => d),
                backgroundColor: [
                    backgroundColor                  
                ],
                borderColor: borderColor,
                borderWidth: borderWidth,
            }
        ]
    })
    
    return (
        <div></div>
        // <Pie
        //     className="piechart"
        //     data={chartData}
        //     options={{
        //         plugins: {
        //             title: {
        //             display: true,
        //             text: "Pie Chart"
        //             }
        //         }
        //     }}
        // />
    );
}

export default PieChart;