import { ReactNode, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

type GaugeProps = {
  value: number,
  max: number,
  tootip: boolean,
  gradient?: string,
  onChange: (value: number) => void
}

const Gauge = ({
  value,
  max,
  tootip,
  gradient = '',
  onChange = () => {}
}: GaugeProps) => {

  return (
    <Wrapper
      className="swiper-no-swiping"
      onClick={(event) => event.stopPropagation()}
    >
      <Inner>
        <Tootip className={(tootip || value) ? 'is-hidden' : ''}>끝까지 밀어보세요!</Tootip>
        <Range
          type="Range"
          defaultValue={value}
          max={max}
          style={{
            backgroundSize: `${(value * 100) / 100}% 100%`
          }}
          gradient={gradient}
          onChange={((event) => {
            onChange(Number(event.target.value))
          })}
        />
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const Inner = styled.div`
  position: relative;
  padding: 22px 14px;
  margin: 0 24px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9);
`

const Range = styled.input<{ gradient: string }>`
  width: 100%;
  background-color: #DFDFDF;
  background-image: linear-gradient(${({ gradient }) => gradient ? gradient : '90deg, #FC4A1A 0%, #F7B733 100%'});
  background-repeat: no-repeat;
  border-radius: 5px;
  cursor: pointer;
  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    
  }
  &::-webkit-slider-thumb {
    width: 28px;
    height: 28px;
    margin-top: -8px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2), 2px 2px 6px rgba(0, 0, 0, 0.1);    
    -webkit-appearance: none;
  }
`

const Tootip = styled.div`
  position: absolute;
  left: 10px;
  top: -14px;
  padding: 6px 8px;
  transform: translate3d(0, -100%, 0) scale(1);
  font-size: 12px;
  line-height: 18px;
  color: #242424;
  border-radius: 4px;
  background-color: #fff;
  transition: all .16s;
  opacity: 1;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.12)) drop-shadow(2px 6px 12px rgba(0, 0, 0, 0.12));
  &.is-hidden {
    opacity: 0;
    transform: translate3d(0, -100%, 0) scale(0.8);
    pointer-events: none;
  }
  &::before {
    content: "";
    position: absolute;
    left: 8px;
    bottom: -6px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: #fff transparent transparent transparent;
    transform: rotate(0deg);        
  }
`


export default Gauge