import Button from '../Button/Button';
import styles from './styles.module.scss';

function Banner() {
    const { container, content, title, des } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}> Alpha Squad</h1>
                <div className={des}>
                    Giúp bạn tìm kiếm máy ảnh, thiết bị cắm trại hay đồ sự kiện
                </div>

                <div
                    style={{
                        width: '172px'
                    }}
                >
                    <Button content={'Go to shop'} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
