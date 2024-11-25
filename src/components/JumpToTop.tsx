import '../style/App.css';
import '../style/components/JumpToTop.css';
import { PropTypeJumpToTop } from '../type/PropTypeJumpToTop';

const JumpToTop = (props: PropTypeJumpToTop) => {
    const { visibleMobileHeaderMenu } = props;

    const jumpToTopHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        window.scrollTo({
            top:0, 
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <button className={visibleMobileHeaderMenu ? "jump-to-top visible" : "jump-to-top"} id="id-jump-to-top" type="button" aria-label="to-the-top" onClick={jumpToTopHandler}>
            <div className="icon-jump-to-top out-line">
                <i className="icon-jump-to-top in-line"></i>
            </div>
        </button>
    );
}

export default JumpToTop;
