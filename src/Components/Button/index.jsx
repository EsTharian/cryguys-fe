import './index.scss';

export default function Button (props) {
  return (
    <button onClick={props.onClick} type={props.type} className={`button ${props.className ?? ''}`}>
      {props.children}
    </button>
  );
}
