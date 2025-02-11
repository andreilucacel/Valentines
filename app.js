document.addEventListener("DOMContentLoaded", function () {
  const b = document.querySelector(".button--no");

  // This function will handle both mouse and touch move events
  const moveHover = (event) => {
    const i = Math.floor(Math.random() * 500) + 1;
    const j = Math.floor(Math.random() * 500) + 1;

    b.style.position = "absolute"; // Ensure it moves properly
    b.style.left = `${i}px`;
    b.style.top = `${j}px`;
  };

  const handleYesClick = () => {
    const newWindow = window.open("", "_blank"); // Open a new tab

    // Add content and style to the new tab
    newWindow.document.write(`
      <html lang="ro">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Valentine's Message</title>
          <style>
            body {
              font-family: 'Lobster', cursive;
              background-image: url('mara_andrei2.jpg');
              background-size: cover;
              background-position: center;
              color: #d5006e;
              text-align: center;
              padding: 50px;
            }
            h1 {
              font-size: 2rem;
            }
            p {
              font-size: 1.2rem;
              line-height: 1.8;
              max-width: 600px;
              margin: 0 auto;
              color: #ff4081;
            }
            .message-container {
              padding: 20px;
              border-radius: 10px;
              background-color: rgba(255, 255, 255, 0.5);
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
          </style>
        </head>
        <body>
          <div class="message-container">
            <h1>Bravo ai ales varianta corecta!</h1>
            <p>Te iubesc si iti urez un Valentine's Day fericit! Iti multumesc ca esti alaturi de mine si ca ma faci un om mai bun. Esti cea mai importanta persoana pentru mine si promit ca o sa fac orice ca sa fii intotdeauna fericita. Cu tine am trait cele mai frumoase momente din viata mea si fara tine totodata consider ca viata mea nu ar avea sens. Pentru ca nu stiu sa scriu frumos m-am gandit sa iti las mesajul asta aici pentru ca web site-ul asta nu va disprea niciodata. E ETERN! Bine sau cel putin cat timp contul meu de github e activ :)). Iti mai urez inca o data un Valentine's Day fericit, te iubesc cel mai mult din lume si daca inca nu ai testat(ceea ce si sper) intoarce-te la pagina anterioara si apasa butonul de Nu! Sper ca totul a mers bine pana acum si urmeaza sa plecam Italia!!! :)) <3</p>
 
            </div>
        </body>
      </html>
    `);
  };

  // Attach both mousemove and touchmove to the No button
  const handleNoClick = () => {
    b.addEventListener("mousemove", moveHover); // For mouse hover
    b.addEventListener("touchmove", moveHover); // For touch on mobile devices
  };

  // Add event listeners for buttons
  const yesButton = document.querySelector(".button--yes");
  yesButton.addEventListener("click", handleYesClick);

  const noButton = document.querySelector(".button--no");
  noButton.addEventListener("click", handleNoClick);
});
