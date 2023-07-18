import { Link } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

const Dashboard = () => {
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000/posts");
    console.log(response);
  };

  return (
    <div className="app">
      <div className="dashboard">
        <div className="dashboard-info-container">
          <div>
            <p>Keep calm & travel on</p>
          </div>
          <button>Add your adventure</button>
        </div>
        <div className="posts-container">
          {posts?.map((post) => (
            <Link to={`/posts/${post.id}`} id="link" key={post.id}>
              <Card post={post} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
