import OutputBox from "../OutputBox/OutputBox";

interface TaaticProps {
  text: string;
}

const Taatic = ({ text }: TaaticProps) => {
  return <OutputBox text={text} badgeColor="purple" badgeTitle="תעתיק"/>;
};

export default Taatic;
