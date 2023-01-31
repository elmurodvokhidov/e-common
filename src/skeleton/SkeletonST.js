export function Skeleton({ type }) {

    // Unique key
    // const keyST = ['abc0', 'abc1', 'abc2', 'abc3', 'abc4', 'abc5', 'abc6', 'abc7', 'abc8', 'abc9', 'abc11', 'abc12', 'abc13', 'abc14', 'abc15', 'abc16', 'abc17', 'abc18', 'abc19', 'abc20']

    let counter = 9;
    if (type === 'skeleton3') {
        counter = 8;
    }
    else if (type === 'skeleton4') {
        counter = 12;
    }

    const Skeleton = () => (
        <div className="skeletonCard">
            <div className="sC_img"></div>
            <div className="sC_title"></div>
            <div className="sC_stars"></div>
            <div className="sC_footer"></div>
        </div>
    )
    if (type === 'skeleton' || type === 'skeleton3' || type === 'skeleton4') return Array(counter).fill(<Skeleton />)
}