import classNames from 'classnames/bind';
import styles from './StarRating.module.scss';

const cx = classNames.bind(styles);
function StarRating({
    halfstar = false,
    yellowstar = false,
    prayStar = false,
    smaller = false,
    medium = false,
    larger = false,
    className,
}) {
    const ImagesStar = 'img';
    let imgStar = '';
    const classes = cx('star-wrapper', {
        [className]: className,
        smaller,
        medium,
        larger,
    });

    if (yellowstar) {
        imgStar =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURfakAPelAPakAPekAPakAPelAPalAEdwTP+vAPiuAPakAPqoAPalAPalAPelAP/WAP/TAP/MAP/PAP/bAPq1APy/AP7HAGxqCN8AAAAPdFJOU/5Lu2byeuMADP2nIMmTOjbD1MQAAAD7SURBVCjPhdNbkoMgEAXQq4KhAZWn+1/qAFFjk5TTH1pwuIoIeD0WeFPJR5ZCPbASkA8sQTzOWM3keBw8HGJicfBwjIHF7zzBx8jj6MJxY/HGZpiWcQb8VjwShNVyWlXjpfSXopT3rZXLKVHtErPBS1kk77a+wg5M9eFqRP7SzVHR9u7qrqtAGM6pffuhx4c1D8GFAuUeTr2+WyOHqzyJoVsWkW58rczJ6p4OWDpekf2nyHY8YW/wvibR8YLanQmpDkgwnEfye8FZowzYM7qZi1SxLKNpA86pH2zqD5LvfbCOpaEZDxDLZ5OsFpax1Ibt6GH+eUr+OWN9/QE2YB+QdE4J4wAAAABJRU5ErkJggg==';
    }
    if (halfstar) {
        imgStar =
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABUUExURUdwTPepAP2yAPitAPemAPeqAPakAPakAP+yAP+9APeqAPmrAPelAPeoAPiqAPelAPepAPenAPakAP/OAP/UAP/RAP/aAP/XAP/eAPmyAPzAAP/KAIFqyggAAAASdFJOUwBtHPN76srzDwm/MUndqVqckA5DiAwAAAD9SURBVCjPnZKLroQgDETxgSj4HEEF//8/t0CMindN7k5MMD0ZHNsy9h/V2SsuRf1CG4HyBU+wL/ZGWP1iL2G273Yyb9t3e0bmbbO8+dvMi4VkHnaVjbITwOzxUkBUfTmomEEW8LLW7YEuJptk50uiUozlBeyu10PLuoQv5YPA4N+Iu/WqmERGSnPgxPWq6Vn9GWrVQSPXpwIV7WWOJzfapNT/M5w59KDEYU+cPzqTw82HGOPjo99XLKsE99ij5p3wJBLcBex8B3d/V37HnMrOousheM0UkuSwBHnWMNXTkUZXfkBl3AMl0WFMtgzjuWNthXv0Xt6ztHfcsJ/0AWxHFobg9zY6AAAAAElFTkSuQmCC';
    }

    return (
        <div style={{ display: 'inline' }}>
            {prayStar ? (
                prayStar && <span className={cx('pray-star')}>{prayStar}</span>
            ) : (
                <ImagesStar className={classes} src={imgStar} />
            )}
        </div>
    );
}

export default StarRating;
