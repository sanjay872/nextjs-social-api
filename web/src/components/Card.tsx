import CardProps from "@/interfaces/CardProps";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation'

function Card({ fullName, headline, summary, profilePicture, location, profileUrl, username }: CardProps) {
    const router = useRouter();

    function redirect(url: string) {
        router.push(url);
    }

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
            {/* <div className="card-footer">
                <button type="button" className="btn" onClick={() => redirect(profileUrl)}>View Profile</button>
            </div> */}
        </div>
    )
}

export default Card;