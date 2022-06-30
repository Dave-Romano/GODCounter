import Button from "../../../Components/common/Button";
import { appConfig } from "../../../configs/index";
const { timeValues } = appConfig;

const TimeOperator = () => {
  return (
    <>
      {timeValues.map((item, index) => (
        <Button title={item} key={index} />
      ))}
    </>
  );
};

export default TimeOperator;
