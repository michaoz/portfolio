import { useState } from 'react';
import '../../style/App.css';
import '../../style/components/ContentMain/Skills.css';
import { SkillsData } from './SkillsData';
import { Pie } from 'react-chartjs-2';
import { CategoryScale, Chart } from 'chart.js/auto';
import PieChart from '../CommonFeature/PieChart';
import { PropTypePieChart } from '../../type/PropTypePieChart';
import { PropTypeContentMainSkills } from '../../type/PropTypeContentMainSkills';

Chart.register(CategoryScale);

const Skills = (props: PropTypeContentMainSkills) => {
    const { visibleSkillsPieChart } = props;

    const backgroundColor = [
        'rgb(104, 106, 239, 0.8)',
        'rgb(94, 191, 172, 0.8)',
        'rgb(255, 255, 157, 0.8)',  
    ];
    const borderColor = "rgb(255, 255, 255)";
    const borderWidth = 1;
    const textColor = "rgb(255, 255, 255)";
    const textFontSizeTitle = 25;
    const textFontSizeLabel = 20;
    const textFontFamily = "'Courier New', monospace";
    // const textFontFamily = "'Trebuchet MS', sans-serif";
    const textFontWeight = "normal";
    const labelsPadding = 20;
    const labelsPosition = 'top';
    // const animationDuration = visibleSkillsPieChart ? 1000 : 0;
    const animationDelay = 1800;
    const skillDataColumnTuple = ["Front-End", "Back-End", "Cloud"]

    /** type */
    type TypeChartDataList = {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
            borderColor: string;
            borderWidth: number;
        }[];
    }[];
    type TypeChartData = {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
            borderColor: string;
            borderWidth: number;
        }[];
    };
    type typeOfKeyOfSkillsData = keyof typeof SkillsData;
    /** type end */

    const [chartDataList, setChartDataList] = useState<TypeChartDataList>(Object.keys(SkillsData).map((SkillsDataKey) => {
        const typeDefinedSkillsData = SkillsDataKey as typeOfKeyOfSkillsData;
        const data =  SkillsData[typeDefinedSkillsData];
        return {
            labels: data.map(d => d.skill),
            datasets: [
                {
                    label: "",
                    data: data.map(d => d.level),
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: borderWidth,
                }
            ]
        };
    }));

    return (
        <div>
            <h1>Skills</h1>
            <div className="skills-text">
                <p>
                    Tech Skills that I mainly have been using. The percentage indicates the level of my familiarity with each tech skill.
                </p>
            </div>
            {visibleSkillsPieChart ? 
                <div className="skills-content">
                    {(chartDataList).map(((chartData: TypeChartData, idx:number) => {
                        const key = skillDataColumnTuple[idx] + "_" + idx.toString();
                        return(
                            <div key={key} className="skills-piechart" id={key}>
                                <div className="piechart">
                                    <Pie
                                        className=""
                                        id="frontend"
                                        data={chartData}
                                        options={{
                                            plugins: {
                                            title: {
                                                display: true,
                                                text: skillDataColumnTuple[idx],
                                                color: textColor,
                                                font: {
                                                    size: textFontSizeTitle,
                                                    family: textFontFamily,
                                                    weight: textFontWeight,
                                                }
                                            },
                                            legend: {
                                                display: false,  // hide the labels
                                                labels: {
                                                    color: textColor,
                                                    padding: labelsPadding,
                                                    font: {
                                                        size: textFontSizeLabel,
                                                        family: textFontFamily,
                                                    }
                                                },
                                                position: labelsPosition
                                            }
                                            },
                                            animation: {
                                                // duration: animationDuration,
                                                delay: animationDelay,
                                                loop: false
                                            }
                                        }}
                                    />
                                </div>
                                <div className="labels">
                                    <ul>
                                        {(chartData.labels).map((label: string, idx: number) => {
                                            const backgroundColor = chartData.datasets[0].backgroundColor[idx];
                                            const style = {
                                                backgroundColor: backgroundColor,
                                            }
                                            return(
                                                <li className="labels-li">
                                                    <div style={style}></div>
                                                    {label}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    }))}
                </div>
            : <div></div>}
        </div>
    );
}

export default Skills;