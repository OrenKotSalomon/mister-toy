
// import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { Doughnut, PolarArea } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { loadToys } from '../store/toy.action';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


export function Dashboard() {
    const toys = useSelector((storeState) => storeState.toyModule.toys)
    useEffect(() => {
        loadToys()

    }, []);


    function getLabelsNamesAndNumbers() {
        return toys.reduce((acc, toy) => {
            toy.labels.forEach(label => {
                if (!acc[label]) acc[label] = 0
                acc[label]++
            })
            return acc
        }, {})
    }

    function getLabelsPriceSum() {
        let labels = getLabelsNamesAndNumbers()
        let prices = toys.reduce((acc, toy) => {
            toy.labels.forEach(label => {
                if (!acc[label]) acc[label] = toy.price
                acc[label] += toy.price
            })
            return acc
        }, {})
        return Object.values(prices).map((value, idx) => value = value / Object.values(labels)[idx])

    }

    const data = {
        labels: Object.keys(getLabelsNamesAndNumbers()),
        datasets: [
            {
                label: 'Labels',
                data: Object.values(getLabelsNamesAndNumbers()),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };
    const data2 = {
        labels: Object.keys(getLabelsNamesAndNumbers()),
        datasets: [
            {
                label: 'sum price',
                data: Object.values(getLabelsPriceSum()),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };
    return (
        <Fragment>

            <div style={{ width: '70vw', margin: 'auto' }}>
                by labels
                <PolarArea data={data} />
            </div>
            <div style={{ width: '70vw', margin: 'auto' }}>
                by sum price per quantity
                <PolarArea data={data2} />
            </div>
        </Fragment>
    )
}



