import './index.scss';

export default function Card (props) {
  return (
    <div className={`card ${
      props.mid ? '-mid' : ''
    }`}>
      <div className={
        `card__item ${
          props.full ? '-full' : ''
        }`
      }>
        {props.children}
      </div>
    </div>
  );
}
