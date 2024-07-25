// Importa React y los componentes necesarios
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const GaugeChart = ({height = 350, data = 0, title = "empty", popover="popover-default"}) => {
  
  let color;

  if (data > 50) {
    color = "#20E647"; // Verde
  } else if (data > 30) {
    color = "#FFFF00"; // Amarillo
  } else {
    color = "#FF0000"; // Rojo
  }

  const options = {
    chart: {
      type: 'radialBar',
      height: '100%', // Ajustar la altura al 100%
      width: '100%', // Ajustar el ancho al 100%
      offsetY: -10,
    },
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: "#fff",
            offsetY: -15
          },
          value: {
            offsetY: 0,
            fontSize: '20px',
            color: "#fff",
            formatter: function (val) {
              return val+ " " + "/ 100";
            }
          }
        }
      }
    },
    fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          inversColors: true,
          gradientToColors: [color],
          stops: [0, 100]
        },
        colors: [color]
    },
    
    labels: [title],
  };

  const series = [data];

  return (
    <div className='flex-1' data-popover-target={popover}>
      <ReactApexChart options={options} series={series} type="radialBar" height={height} />
    </div>
  );
};

export default GaugeChart;
