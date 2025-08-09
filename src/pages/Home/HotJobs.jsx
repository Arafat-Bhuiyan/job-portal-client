import { useEffect, useState } from "react";
import { HotJobsCard } from "./HotJobsCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((result) => result.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  console.log("All jobs: ", jobs);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5">
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;