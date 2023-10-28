
export function Tile(props) {
    const {content} = props;
    const {image, provider, title, courseType} = content;
    return (
        <div className="tile">
            <img src={image} />
            <div>{provider}</div>
            <div>{title}</div>
            <div>{courseType}</div>
        </div>
    );
}
