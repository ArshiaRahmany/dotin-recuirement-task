import loading from "assets/loading/loading.svg"
interface LoadingProps {
    className?: string;
  }
  
  const Loading: React.FC<LoadingProps> = ({ className }) => {
    return (
      <img className={`${className} items-center m-auto block`} src={loading} alt="Loading..." />
    );
  };
  
  export default Loading;
  