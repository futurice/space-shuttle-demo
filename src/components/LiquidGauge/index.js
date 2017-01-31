import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import React, { Component } from 'react';
import LiquidFillGauge from 'react-liquid-gauge';

import './index.css';

class LiquidGauge extends Component {
  startColor = '#6495ed';
  endColor = '#dc143c';

  shouldComponentUpdate(nextProps, nextState) {
    return Math.floor(this.props.value) !== Math.floor(nextProps.value);
  }

  render() {
    const radius = 75;
    const interpolate = interpolateRgb(this.startColor, this.endColor);
    const fillColor = interpolate(this.props.value / 100);
    const gradientStops = [
      {
        key: '0%',
        stopColor: color(fillColor).darker(0.5).toString(),
        stopOpacity: 1,
        offset: '0%'
      },
      {
        key: '50%',
        stopColor: fillColor,
        stopOpacity: 0.75,
        offset: '50%'
      },
      {
        key: '100%',
        stopColor: color(fillColor).brighter(0.5).toString(),
        stopOpacity: 0.5,
        offset: '100%'
      }
    ];

    return (
      <div className="liquid-gauge__wrapper">
        <div className="liquid-gauge">
          <LiquidFillGauge
            style={{ margin: '0 auto' }}
            width={radius * 2}
            height={radius * 2}
            margin={0}
            innerRadius={1}
            outerRadius={1}
            value={this.props.value}
            percent="%"
            textSize={1}
            textOffsetX={0}
            textOffsetY={10}
            textRenderer={(props) => {
              const value = Math.round(props.value);
              const radius = Math.min(props.height / 2, props.width / 2);
              const textPixels = (props.textSize * radius / 2);
              const valueStyle = {
                fontSize: textPixels
              };
              const percentStyle = {
                fontSize: textPixels * 0.6
              };

              return (
                <tspan>
                  <tspan className="value" style={valueStyle}>{value}</tspan>
                  <tspan style={percentStyle}>{props.percent}</tspan>
                </tspan>
              );
            }}
            riseAnimation
            waveAnimation
            waveFrequency={5}
            waveAmplitude={1}
            gradient
            gradientStops={gradientStops}
            circleStyle={{
              fill: fillColor
            }}
            waveStyle={{
              fill: fillColor
            }}
            textStyle={{
              fill: color('#444').toString(),
              fontFamily: 'Stardos Stencil'
            }}
            waveTextStyle={{
              fill: color('#fff').toString(),
              fontFamily: 'Stardos Stencil'
            }}
          />
        </div>
        <label className="liquid-gauge__label">{this.props.label.toUpperCase()}</label>
      </div>
    );
  }
}

export default LiquidGauge;
