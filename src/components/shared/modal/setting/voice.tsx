import styled from "styled-components";
import useDevices from "../../../../hooks/useDevices";
import { useDeviceStore } from "../../../../store/devices";
import DropdownItem from "../../dropdown/src/item";
import Dropdown from "../../dropdown";
import Text from "../../text";

const VoiceSetting = () => {
  const { inputDevices, outputDevices } = useDevices();
  const [device, setDevice] = useDeviceStore();
  const handleDevice = (type: "input" | "output", data: MediaDeviceInfo) => {
    const newState = { ...device, [type]: data };
    setDevice(newState);
  };
  const Inputs = inputDevices?.map((input, idx) => (
    <DropdownItem
      selected={input.deviceId == device.input?.deviceId}
      key={idx}
      onClick={() => handleDevice("input", input)}
    >
      {input.label}
    </DropdownItem>
  ));
  const Outputs = outputDevices?.map((output, idx) => (
    <Dropdown.Item
      key={idx}
      selected={device.output?.deviceId == output.deviceId}
      onClick={() => handleDevice("output", output)}
    >
      {output.label}
    </Dropdown.Item>
  ));

  return (
    <StyleVoice>
      <DropdownLayout>
        <Text type="sm" color="gray300" fontWeight="bold">
          입력 장치
        </Text>
        <Dropdown title={device.input?.label}>{Inputs}</Dropdown>
      </DropdownLayout>
      <DropdownLayout>
        <Text type="sm" color="gray300" fontWeight="bold">
          출력 장치
        </Text>
        <Dropdown title={device.output?.label}>{Outputs}</Dropdown>
      </DropdownLayout>
    </StyleVoice>
  );
};

const StyleVoice = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;

const DropdownLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const CloseBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  background-color: inherit;
  height: fit-content;
  svg {
    color: ${({ theme }) => theme.text};
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

export default VoiceSetting;
