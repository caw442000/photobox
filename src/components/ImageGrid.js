import React from "react";
import { motion } from "framer-motion";
import { projectFirestore } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);
  const handleClick = (e, id) => {
    e.preventDefault();
    console.log(id);
    projectFirestore
      .collection("images")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted");
      });
  };
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div layout whileHover={{ opacity: 1 }} key={doc.id}>
            <div className="img-wrap" onClick={() => setSelectedImg(doc.url)}>
              <motion.img
                src={doc.url}
                alt="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </div>
            <button
              style={{ zIndex: 100, color: " var(--primary)" }}
              onClick={(e) => handleClick(e, doc.id)}
            >
              Delete
            </button>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
