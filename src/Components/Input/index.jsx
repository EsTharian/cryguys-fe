import './index.scss';
import { v4 as uuid } from 'uuid';

export default function Input (props) {
  const id = uuid();

  return (
    <div className={`input ${props.className ?? ''}`}>
      <label htmlFor={id} className={'input__label'}>
        {props.children}
      </label>
      <input id={id}
             className={'input__main'}
             placeholder={props.placeholder}
             type={props.type}
             name={props.name} />
    </div>
  );
}
