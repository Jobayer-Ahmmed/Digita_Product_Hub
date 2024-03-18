import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import useEnrollYear from '../../../hooks/useEnrollYear/useEnrollYear';
import useEnrollTotal from '../../../hooks/useEnrollTotal/useEnrollTotal';
import useEnrollToday from '../../../hooks/useEnrollToday/useEnrollToday';
import useEnrollWeek from '../../../hooks/useEnrollWeek/useEnrollWeek';
import useEnrollMonth from '../../../hooks/useEnrollMonth/useEnrollMonth';

const DashboardHome = () => {
    const chartRef = useRef(null); 
    const yearData = useEnrollYear()
    const monthData = useEnrollMonth()
    const weekData = useEnrollWeek()
    const todayData = useEnrollToday()
    const totalData = useEnrollTotal()
    // console.log(weekData)

    useEffect(() => {
        const ctx = document.getElementById('myChart');
        if (chartRef.current !== null) {
            chartRef.current.destroy(); 
        }

        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Today', 'Week', 'Month', 'Year', 'Total'],
                datasets: [{
                    label: 'Enrollment',
                    data: [todayData,weekData,monthData,yearData,totalData],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        return () => {
            if (chartRef.current !== null) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div>
            <canvas id='myChart'></canvas>
        </div>
    );
};

export default DashboardHome;
