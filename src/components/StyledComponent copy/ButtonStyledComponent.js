import { Button } from "antd";
import styled from "styled-components";

const CustomButton = styled(Button)`
  background-color: red;
  color: white;
  font-size: 20px;
  &:hover {
    // background-color: green;
    color yellow;
    border-color: yellow;
  }
`;

export const MyButton = (props) => {
  return <CustomButton {...props} />;
};
