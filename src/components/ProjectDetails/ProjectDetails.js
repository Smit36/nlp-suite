import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './ProjectDetails.css';

import { getByDay } from '../../controllers/time';

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
            backgroundColor: 'rgb(15,157,88)',
            borderColor: 'rgb(15,157,88)',
          },
          {
            data: [0, 17, 5, 2, 20, 15, 45],
            label: 'Entities',
            backgroundColor: 'rgb(66,133,244)',
            borderColor: 'rgb(66,133,244)',
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
      <div className='Project-Details-Content'>
        <div className='Allowed-Apis'>
          <b>Allowed API calls</b>: <span>{this.props.allowed_apis.join(', ')}</span>
        </div>
        <div className='Graphs-Container'>
          <div className='Graph'>
            <div>
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
                  maintainAspectRatio: false,
                }}
                className='Bar'
              />
            </div>
            <div>
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
                  maintainAspectRatio: false,
                }}
                className='Bar'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
