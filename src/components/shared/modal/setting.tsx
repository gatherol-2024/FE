import styled from "styled-components";
import useDevices from "../../../hooks/useDevices";
import Dropdown from "../dropdown";
import DropdownItem from "../dropdown/src/item";
import { HiXMark } from "react-icons/hi2";
import { useDeviceStore } from "../../../store/devices";
import Text from "../text";

const VoiceSetting = ({ setIsOpen }: { setIsOpen: (v: boolean) => void }) => {
  const { inputDevices, outputDevices } = useDevices();
  const [device, setDevice] = useDeviceStore();
  console.log(device);
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
    <StyleSetting>
      <CloseBtn>
        <HiXMark onClick={() => setIsOpen(false)} />
      </CloseBtn>
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
    </StyleSetting>
  );
};

const StyleSetting = styled.div`
  flex-wrap: wrap;
  width: 35rem;
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.background50};
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
