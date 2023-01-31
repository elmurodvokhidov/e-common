export function SkeletonND({ type }) {

    const counter = 4;

    const Skeleton = () => (
        <div className="skeletonCard1">
            <div className="sC1_left"></div>
            <div className="sC1_right">
                <div className="sC1R_top">
                    <div className="sC1RT_title"></div>
                    <div className="sC1RT_action"></div>
                </div>
                <div className="sC1R_middle">
                    <div className="sC1RM_price"></div>
                    <div className="sC1RM_about"></div>
                </div>
                <div className="sC1R_bottom">
                    <div className="sC1RB_left"></div>
                    <div className="sC1RB_right"></div>
                    <div className="sC1RB_right"></div>
                </div>
            </div>
        </div>
    )
    if (type === 'skeleton') return Array(counter).fill(<Skeleton />)
}