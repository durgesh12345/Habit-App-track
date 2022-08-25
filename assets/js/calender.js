const date = new Date();
// getting data
const month = date.getMonth();

const monthsday =  document.getElementById('days')
// array of days and months
let months = [
     "Jannury",
     "February", 
     "March", 
     "April",
     "May",
     "June", 
     "July",
     "August",
     "September", 
     "October", 
     "November", 
     "December"
]
// getting time hours

const d = new Date();
const result = d.toLocaleString("en-US", {
 hour: "numeric",
 minute: "numeric",
 hour12: true,
});

// sore the time in localStorage
localStorage.setItem('changed', result);
let time1 =localStorage.getItem('changed');
console.log(time1);
//document.getElementById("time").innerHTML = time1;

// function to create list iteam
function my() {
  
   
        var li = document.createElement("LI");  
        var input = document.getElementById("inputGroupSelect01");
        localStorage.setItem("city", input.value);  
        const res = localStorage.getItem("city");  
   console.log(res);
          li.innerHTML = ` <div class="list">
      <div id="work">
          <p id="text">${input.value}</p>  <img id="run" src="https://cdn-icons.flaticon.com/png/128/1950/premium/1950591.png?token=exp=1660759626~hmac=b91e1ce3b750c1d35526e1de301787fc" alt=""></p> 
          <p id="time">${result}</p>
      </div>
  
      <div id="check">
          <input type="checkbox" name="" id="checkbox1" value=""> <p id="star1" ><img  id="star" src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" alt=""></p>
      </div>
      <div id="day">
          <p>1 Day</p>
          <p>9 best</p>
          <p>38/82</p>
          <p>Daily</p>
  
      </div>
      <p id="line"></p>`;

        document.getElementById("it").appendChild(li);
  
 
}
// toggle button
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }