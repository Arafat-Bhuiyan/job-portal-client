import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { toast } from "react-toastify";

export const ApplyJob = () => {
  const id = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(id, user);

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    // console.log(linkedin, github, resume);
    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };

    // Data sending
    fetch("http://localhost:3000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Data inserted successfully.");
          navigate('/myApplications')
        }
      });
  };

  return (
    <div className="card w-full shadow-2xl bg-base-100">
      <h1 className="text-5xl font-bold text-center">Apply now!</h1>
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input
            type="urk"
            placeholder="LinkedIn URL"
            name="linkedin"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">GitHub URL</span>
          </label>
          <input
            type="urk"
            placeholder="GitHub URL"
            name="github"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="urk"
            placeholder="Resume URL"
            name="resume"
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};
