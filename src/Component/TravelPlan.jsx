// import { useState } from "react";
// import { initialTravelPlan } from "./places";

// export default function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);
//   const root = plan[0];
//   const planetIds = root.childIds;
//   console.log("..", planetIds.title);

//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map((id) => (
//           <PlaceTree key={id} id={id} placesById={plan} />
//         ))}
//       </ol>
//     </>
//   );
// }
