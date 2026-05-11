import Image from "next/image";


const DestinationCard = ({destination}) => {
    const {destinationName, description, departureDate, country, category, duration, imageUrl, price} = destination;
    return (
        <div>
            <Image
            src={imageUrl}
            width={400}
            height={400}
            alt="Destination Image"
            ></Image>
            <div>
                <p> {country}</p>
            </div>
        </div>
    );
};

export default DestinationCard;