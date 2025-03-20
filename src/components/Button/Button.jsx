import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ content, isPriamry = true, ...props }) {
    const { btn, primaryBtn, secondaryBtn } = styles;
    return (
        <button
            className={classNames(btn, {
                //class if else condiction
                [primaryBtn]: isPriamry,
                [secondaryBtn]: !isPriamry
            })}
            {...props}
        >
            {content}
        </button>
    );
}

export default Button;
