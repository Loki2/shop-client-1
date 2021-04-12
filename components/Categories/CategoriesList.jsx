import React from "react";
import { MY_CATEGORIES } from "../../graphql/Category";
import { useQuery, useMutation } from "@apollo/react-hooks";
import CategoryItems from "./CategoryItems";

const CategoriesList = () => {
  const { data, loading, error } = useQuery(MY_CATEGORIES);
  console.log("Categories:", data);
  if (error) return <p>Oooops...Something went wrong!</p>;
  if (loading) return <p>Loading...!</p>;

  return (
    <>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Category Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.user.categories.length > 0 &&
              data.user.categories.map((category) => (
                <CategoryItems key={category.id} category={category} />
              ))}
            <tr>
              <td className="td-team">
                <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-modern-car-logo-concept-sports-car-speed-logo-icon-png-image_5177006.jpg" alt="" />
              </td>
              <td>Higper Cars</td>
              <td>Higper Cars bla bla bla bla</td>
              <td>
                <span className="badge success">Success</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoriesList;
