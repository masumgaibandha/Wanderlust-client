import DestinationCard from "@/components/DestinationCard";


const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();
  console.log(destinations);

  return (
    <div>
      <h2>All Destination</h2>
      <div>
        {
            destinations.map(destination => 
            <DestinationCard 
            destination={destination} 
            key={destination._id}></DestinationCard>)
        }
      </div>
      
    </div>
  );
};

export default DestinationPage;
