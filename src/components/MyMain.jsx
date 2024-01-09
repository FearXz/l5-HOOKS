import React, { useState } from "react";
import SubtitleComp from "./SubtitleComp";
import { Container } from "react-bootstrap";
import CategoryComp from "./CategoryComp";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import ShowCategoryComp from "./ShowCategoryComp";

const allCategories = {
  fantasy: fantasy,
  history: history,
  horror: horror,
  romance: romance,
  scifi: scifi,
};

function MyMain(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [library, setLibrary] = useState(allCategories);

  const handleCategoryButton = (categoryName) => {
    setSelectedCategory(categoryName);
    console.log(categoryName);
    props.callbackSubmit("");
  };

  const handleDeleteCard = (asin) => {
    let updatedLibrary = { ...library };
    updatedLibrary[selectedCategory] = library[selectedCategory].filter((book) => book.asin !== asin);
    setLibrary(updatedLibrary);
    console.log(updatedLibrary);
  };

  return (
    <>
      <SubtitleComp />
      <div className="text-center m-5">
        <CategoryComp callbackCategory={handleCategoryButton} />
      </div>
      <Container className="min-vh-100">
        {library[selectedCategory] ? (
          (console.log(library[selectedCategory]),
          (
            <ShowCategoryComp
              callbackDetailPage={props.callbackDetailPage}
              valueToSearch={props.valueToSearch}
              callbackDelete={handleDeleteCard}
              categoryArray={library[selectedCategory]}
              callbackBook={props.callbackBook}
            />
          ))
        ) : (
          <p className="text-center">Nessun libro disponibile per questo genere.</p>
        )}
      </Container>
    </>
  );
}

export default MyMain;
