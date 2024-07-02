import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyList = () => {
  const [myList, setMyList] = useState([]);
  // console.log(myList);

  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // axios.get(`http://localhost:5000/mylist/${user.email}`, {withCredentials:true})
    axiosSecure.get(`/mylist/${user.email}`)
    .then(data => setMyList(data.data))
    // fetch(`http://localhost:5000/mylist/${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setMyList(data));
  }, []);
  if (myList.length < 1) {
    return <div>Add Tourist Spot First</div>;
  }

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mylist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            fetch(`http://localhost:5000/mylist/${user.email}`)
              .then((res) => res.json())
              .then((data) => {setMyList(data); Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });});
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto table-md">
        <table className="table table-md">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Country Name</th>
              <th>Location</th>
              <th>Average Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {/* <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}
            {myList.map((i, idx) => (
              <tr key={idx} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{i.country}</td>
                <td>{i.location}</td>
                <td>{i.averagecost}</td>
                <td className="gap-2">
                  <Link to={`/mylist/update/${i._id}`}>
                    <button className="btn join-item">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(i._id)}
                    className="btn join-item"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
