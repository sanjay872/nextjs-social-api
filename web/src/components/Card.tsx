import CardProps from "@/interfaces/CardProps";

function Card({ fullName, headline, summary, profilePicture, location, profileUrl, username }: CardProps) {
    return(    
        <div className="card w-1/3">
            <div className="card-header">
                <h3>{fullName} - ({username})</h3>
                <p>{location}</p>
            </div>
            <div className="card-body">
                {/* <img src={profilePicture} alt={fullName} /> */}
                {/* <p>{summary}</p> */}
                <p>{headline}</p>
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-dark">
                    <a href={profileUrl}>View</a>
                </button>
            </div>
        </div>
    )
}

export default Card;