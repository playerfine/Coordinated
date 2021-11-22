declare module "feather-icons-react" {
  import { Component } from "react";
  interface Props {
    icon: string;
    size: string;
    fill?: string;
    color?: string;
  }
  export default class FeatherIcon extends Component<Props> {}
}
