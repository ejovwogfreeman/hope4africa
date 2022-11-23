import React, { useState, useEffect } from "react";
import "../css/General.css";
import "../css/Admin.css";
import axios from "axios";
import { getToken } from "../api";

// import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const navigate = useNavigate();
  const params = useParams();
  //   const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [load, setLoad] = useState(true);

  const [project, setProject] = useState({});
  useEffect(() => {
    const getData = async (id) => {
      id = Number(params.id);
      console.log(id);
      const res = await fetch(`http://localhost:8000/api/project/${id}`);
      const data = await res.json();
      setProject(data.data);
      setLoad(false);
    };
    getData();
  }, []);

  //   console.log(project.title);
  let x = project.title && project.title;
  console.log(x);
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(project.title);
  const [content, setContent] = useState(project.description);
  const [image, setImage] = useState(project.thumbnail);
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("description", content);
    formData.append("thumbnail", image);
    const token = getToken();
    console.log(image);
    axios
      .post("http://localhost:8000/api/project", formData, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
    setToastifyState({
      ...ToastifyState,
      message: "Project added successfully",
      variant: "success",
      open: true,
    });
    navigate("/admin_dashboard");
    setLoading(false);
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h3 style={{ marginBottom: "10px" }}>Edit Project</h3>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Project Title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Desctiption</label>
            <textarea
              type="text"
              placeholder="Enter Project description"
              value={content}
              required
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label>Thumbnail</label>
            <input type="file" name="file" onChange={handleImage} />
          </div>
          <button disabled={loading}>{loading ? "LOADING..." : "EDIT"}</button>
          {/* <button>submit</button> */}
        </form>
      </div>
    </div>
  );
};

export default EditProject;