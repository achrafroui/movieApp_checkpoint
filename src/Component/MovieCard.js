
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./list.css";

import Movielist from "./Movielist";

function Card(props) {
  const [list, setList] = useState([
    {
      Title: "Avengers",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
      Descr: "Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe.",
      Rating: "3",
    },
    {
      Title: "Gangs of New York",
      Image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQH5q3fv0sN6sIFmBTb7Wqn4pb_fymvhj8aM_PpYgBHAizH8GWv",
      Descr: "When his father is killed in New York City, Amsterdam Vallon returns in 1863 to hunt down his father's killer, the ruthless, Bill 'The Butcher' Cutting. It's not easy for Amsterdam as gangs ",
      Rating: "5",
    },
    {
      Title: "John Wick 1",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg",
      Descr: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
      Rating: "5",
    },
    {
      Title: "John wick 2",
      Image:"https://vignette.wikia.nocookie.net/john-wick8561/images/b/bd/John_Wick_Chapter_2_Coming_Soon.jpg/revision/latest?cb=20161128160701",
      Descr:   "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.",
      
      Rating: "4",
    },
    {
      Title: "John Wick 3",
      Image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/John_Wick_Chapter_3_Parabellum.png/220px-John_Wick_Chapter_3_Parabellum.png",
      Descr:   "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
      Rating: "5",
    },
  ]);
 
  const [listsearch, setListsearch] = useState(list);
  const [Empty, setEmpty] = useState(true);
  const [starClicked, setstarClicked] = useState(false);
  const [searchbyrate, setSearchbyrate] = useState(list);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addmovie = () => {
    let inter = {};
    Object.assign(inter, {
      Title: document.getElementById("newtitle").value,
      Image: document.getElementById("newimg").value,
      Descr: document.getElementById("newdesc").value,
      Rating: document.getElementById("newrating").value,
    });

    setList([...list, inter]);

  
    setShow(false);

 
  };

  const search = (e) => {
    let tab = [];
    console.log(starClicked);
    if (starClicked)
      tab = searchbyrate.filter((el) =>
        el.Title.toLowerCase().includes(e.target.value.toLowerCase())
      );
    else
      tab = list.filter((el) =>
        el.Title.toLowerCase().includes(e.target.value.toLowerCase())
      );

    console.log(e.target.value);

    setListsearch(tab);
    if (e.target.value.length > 0) setEmpty(false);
    else setEmpty(true);
  };

  const searchrating = (e) => {
    let tab2 = [];
    let x = e.target.value;
    if (Empty) tab2 = list.filter((e) => e.Rating === x);
    else tab2 = listsearch.filter((e) => e.Rating === x);
    setSearchbyrate(tab2);
    setstarClicked(true);
  };

  return (
    <>
      <div className="boutton" onChange={search} >
        <Button variant="outline-danger" size='lg' onClick={handleShow}>
          Add Movie
        </Button>
        <table>
          <tbody>
            <tr>
              <td>
              Search by rate :
                <input
                  value="1"
                  type="image"
                  src="https://img.icons8.com/all/500/star.png"
                  alt="1"
                  onClick={searchrating}
                  height="23px"
                ></input>
              </td>

              <td>
                
                <input
                  value="2"
                  type="image"
                  src="https://img.icons8.com/all/500/star.png"
                  alt="2"
                  onClick={searchrating}
                  height="23px"
                ></input>
              </td>
              <td>
                <input
                  value="3"
                  type="image"
                  src="https://img.icons8.com/all/500/star.png"
                  alt="3"
                  onClick={searchrating}
                  height="23px"
                ></input>
              </td>
              <td>
                <input
                  value="4"
                  type="image"
                  src="https://img.icons8.com/all/500/star.png"
                  alt="4"
                  onClick={searchrating}
                  height="23px"
                ></input>
              </td>
              <td>
                <input
                  value="5"
                  type="image"
                  src="https://img.icons8.com/all/500/star.png"
                  alt="5"
                  onClick={searchrating}
                  height="23px"
                ></input>
              </td>
             
            </tr>
          </tbody>
        </table>

        <input style={{width: 450, marginLeft: 100, borderRadius: '15px'}} id="search" placeholder="Search by title.."></input>
        
      </div>

     


      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ alignItems: "center" }}>
            <table>
              {" "}
              <tbody>
                <tr>
                  {" "}
                  <td>
                    {" "}
                    <span> Title :</span>
                  </td>{" "}
                  <td>
                    <input id="newtitle"></input>
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td>
                    {" "}
                    <span>URL for the image :</span>
                  </td>{" "}
                  <td>
                    <input id="newimg"></input>{" "}
                  </td>{" "}
                </tr>
                <tr>
                  {" "}
                  <td>
                    {" "}
                    <span> Description :</span>
                  </td>{" "}
                  <td>
                    {" "}
                    <input id="newdesc"></input>
                  </td>
                </tr>
                <tr>
                  {" "}
                  <td>
                    <span> Rating :</span>{" "}
                  </td>{" "}
                  <td>
                    {" "}
                    <select id="newrating">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Movielist
        list={
          (Empty && !starClicked) ? list : (!Empty && !starClicked)  ? listsearch :(!Empty && starClicked) ? listsearch: searchbyrate
        }
      ></Movielist>
    </>
  );
}


export default Card;
