import Section1Left from "./Section1Left";
import Section2Left from "./Section2Left";
import Section3Left from "./Section3Left";
import { Stack } from "react-bootstrap";

function LeftSide() {
  return (
    <Stack gap={5}>
      <Section1Left />
      <Section2Left />
      <Section3Left />
    </Stack>
  );
}

export default LeftSide;
