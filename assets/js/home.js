$(window).on("load", function () {
  var typed = new Typed(".auto-type", {
    strings: [
      "Developer: Sanjaya Paudel <br> Email: sanjayacodes7@gmail.com <br> LinkedIn: <a href='https://www.linkedin.com/in/sanjaya07/' target='_blank'>https://www.linkedin.com/in/sanjaya07/</a> <br> Github: <a href='https://github.com/sanjaya007' target='_blank'>sanjaya007</a><br>",
    ],
    typeSpeed: 50,
  });

  const elements = $(".head-vector");
  const headBox = $(".developer-container");
  const headBoxWidth = headBox.width();
  const headBoxHeight = headBox.height();

  elements.each(function () {
    const element = $(this);
    let speedX = parseFloat((Math.random() * 0.5 + 0.1).toFixed(1));
    let speedY = parseFloat((Math.random() * 0.5 + 0.1).toFixed(1));
    let posX = Math.random() * (headBoxWidth - 50);
    let posY = Math.random() * (headBoxHeight - 50);

    function animateElement() {
      posX += speedX;
      posY += speedY;

      if (posX >= headBoxWidth - 50 || posX <= 0) {
        speedX *= -1;
      }

      if (posY >= headBoxHeight - 50 || posY <= 0) {
        speedY *= -1;
      }

      element.css({
        left: posX,
        top: posY,
      });

      requestAnimationFrame(animateElement);
    }

    animateElement();
  });
});
