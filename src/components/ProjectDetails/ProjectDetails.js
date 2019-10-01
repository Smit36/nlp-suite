import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './ProjectDetails.css';

import { getByDay } from '../../controllers/time';
import { Typography } from '@material-ui/core';

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'day',
            },
          },
        ],
      },
      data: {
        labels: [],
        datasets: [
          {
            data: [0, 17, 5, 2, 20, 15, 45],
            label: 'Translator',
            backgroundColor:'rgba(231,98,122,0.6)',
            borderColor:'rgba(231,98,122,0.1)'
          },
          {
            data: [0, 17, 5, 2, 20, 15, 45],
            label: 'Entities',
            backgroundColor:'rgba(0,176,255,0.6)',
            borderColor:'rgba(0,176,255,0.1)' ,
          },
        ],
      },
    };
  }

  componentDidMount() {
    let arr = [1562778488940];
    for (let i = 1; i < 200; i++) {
      arr.push(arr[arr.length - 1] + Math.random() * (10000000 - 900000) + 900000);
    }

    const data = getByDay(arr);
    this.setState({
      data: {
        labels: data.labels,
        datasets: [
          { ...this.state.data.datasets[0], data: data.count },
          { ...this.state.data.datasets[1], data: data.count },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        <div className='Allowed-Apis'>
        <Typography variant='body1'><b>Allowed API Calls</b>:<span>{this.props.allowedApis.join(', ')}</span></Typography> 
        </div>
        <div className='Graphs-Container'>
          <div className='Graph'>
            <Bar
              data={this.state.data}
              options={{
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                maintainAspectRatio: true,
              }}
            />
          </div>
        </div>       
      </div>
    );
  }
}

export default ProjectDetails;
