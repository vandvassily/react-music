import './index.less';

type Iprops = {
  title: string;
};

const ListTitle: React.FC<Iprops> = (props) => {
  return <h1 className="list-title">{props.title}</h1>;
};

export default ListTitle;
