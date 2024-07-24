document.querySelectorAll(".faq").forEach((faq) => {
  faq.addEventListener("click", () => {
    const answer = faq.querySelector(".faq-answer");
    const icon = faq.querySelector(".icon");

    // Toggle the max-height to open/close the FAQ answer
    if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
      // If answer is open, close it
      answer.style.maxHeight = "0px";
    } else {
      // If answer is closed, open it
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }

    // Toggle icons for visual cue
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle expanded class for additional styling if needed
    faq.classList.toggle("expanded");
  });
});
