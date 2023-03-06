import { Component } from "react";

interface Props {
  color?: string;
  bgcolor?: string;
  innerColor?: string;
  radius: number;
  percent: number;
  borderWidth?: number;
  textStyle?: object;
  disabled?: boolean;
  disabledText?: string;
}

export default class PercentageCircle extends Component<Props> {}
