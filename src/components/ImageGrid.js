import React from "react";
import { projectFirestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log(docs);
  const handleClick = (e, id) => {
    e.preventDefault()
    console.log(id)
    projectFirestore.collection("images").doc(id).delete().then(()=> {
      console.log("deleted")
    })

  }
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div key={doc.id}>
            <div className="img-wrap" >
              <img src={doc.url} alt="image" />
            </div>
            <button style={{ zIndex: 100, color:" var(--primary)" }} onClick={(e) => handleClick(e, doc.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
