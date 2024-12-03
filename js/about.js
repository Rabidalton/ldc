function vision() {
    const element = document.getElementById("tab-content");
    element.innerText = "At the Liberia Diplomatic Club, our vision is to unite dignitaries, stakeholders, and young professionals to foster a dynamic learning environment where diplomacy, negotiations, and leadership are taught through a blend of academic theory and practical experience."
}
function events() {
    const element = document.getElementById("tab-content")
    element.innerText = "Our event begins with engaging lectures, debates and discussions that cover essential principles, providing a strong foundation in international relations. Then, we take you beyond theory, offering immersive diplomatic simulations where you step into the shoes of diplomats and navigate complex global scenarios. As part of our experiential approach, we also host a session at the Liberia National Museum, exploring the nation's rich history and promoting tourism while discussing its historical significance in diplomacy. This hands-on methodology ensures you not only grasp key concepts but also develop the skills needed to thrive in real-world diplomatic and leadership roles."
}
function mission() {
    const element = document.getElementById("tab-content")
    element.innerText = "Our mission is to create a dynamic platform for youth development through the practice and study of diplomacy. We are committed to advancing global peace, justic, security, development, health and social inequalities. By simulating international organizations like United Nations, European Union, and African Union - the Liberia Diplomatic Club provides aspiring leaders with hands-on training in diplomacy, leadership, public speaking, and negotiations skills. Our leadership conferences connect young professionals with relevant sectors actors to drive meaningful change."
}

function lightmode() {
    const theme = document.getElementById("body");
    theme.className = "theme-light";
  }
  
  function darkmode() {
    const theme = document.getElementById("body");
    theme.className = "theme-dark";
  }
