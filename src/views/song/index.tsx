import './index.less';

const Song: React.FC<{}> = (props) => {
  console.log(props);
  return (
    <div className="m-song">
      <div className="m-song-bg"></div>
    </div>
  );
};

export default Song;
