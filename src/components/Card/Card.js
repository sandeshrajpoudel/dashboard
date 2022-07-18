import React, { useState } from "react";
import "./card.css";
import Chart from 'react-apexcharts';
import {UilTimes} from "@iconscout/react-unicons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>

      {/* {console.log(props)} */}
      <div className="Card">

        {expanded ? (
          <ExpandedCard param={props} Expanded ={ ()=>{
            setExpanded(false)}} />
        ) : (
          <CompactCard param={props} Expanded ={ ()=>{
            setExpanded(true)}}/>
        )}
      </div>
    </>
  );
};

const CompactCard = ({param, Expanded}) => {
  //   const [title, color, circlebar,value,icon,series]=props
  const Icon = param.icon;
  return (
    <div className="CompactCard" onClick={Expanded}
    style={{background: param.color.backGround,
            boxShadow: param.color.boxShadow,
            "&:hover": {
                boxShadow:"none",
              },
            }}>
      <div className="circular">
      <h5>{param.title}</h5>
        <CircularProgressbar
          value={param.value}
          text={`${param.circlebar}%`}
          // circle ratio is calculated in range between (0-1), so making perventage into that range
          circleRatio={param.circlebar / 100}
          styles={{
            root: {
            },
            text: {
              fill: "black",
              fontSize: "15px",
              fontWeight: "bold",
            },
            path: {
              // Path color
              stroke: "purple",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "round",
              strokeWidth: "8",
              // Customize transition animation
              transition: "stroke-dashoffset 0.5s ease 0s",
              // Rotate the path
              transform: "rotate(0turn)",
              transformOrigin: "center center",
            },
            trail: {
              // Trail color
              stroke: "white",
              strokeWidth: "6",
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Rotate the trail
              transform: "rotate(0turn)",
              transformOrigin: "center center",
            },
           
          }}
        />

      </div>
      <div className="detail">
        <Icon />
        <span>$ {param.value}</span><br />
        <span>Last 48 hours </span>
      </div>
    </div>
  );
};
const ExpandedCard = ({param, Expanded}) => {
    const data ={
        options:{
            chart:'area',
            height: 'auto',
        },dropShadow:{
            enabled:false,
            enabledSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity:.35,
        },
        fill: {
            colors:["#fff"],
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
              }
        },
        dataLabels:{
            enabled: false,
        },
        stroke:{
            curve:"smooth",
            colors:["white"],

        },
        tooltip:{
            x:{format:"dd/MM/yy HH:mm"
        },
        grid:{
            show: true,

        },
        }
    };
    return (
<div className="ExpandedCard" 
style={{background:param.color.backGround,
boxShadow:param.color.boxShadow,}}
>
<div  className="closebutton">
   <UilTimes onClick={Expanded}
/>
</div>
<span>{param.title}</span>
<div className="chartBox">
<Chart series={param.series} type='area' options={data.options} />
</div>
<span>Last 48 hours </span>

</div>)
};

export default Card;
