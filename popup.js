// function notification() {
//   chrome.notifications.create(

//     {
//       type: "basic",
//       iconUrl: "/images/SAK128.png",
//       title: "This is a notification",
//       message: "hello there!",
//     },

//   )
//   }

// let options = {
//   type:'basic',
//   title: 'first popup with chrome',
//   message: 'this is pretty good',
//    iconUrl:"/images/SAK16.png"
// }


// function callback() {
// console.log('popup done')
// }

 const button = document.getElementById('toggleAlarm')

button.addEventListener("click", alertt)

 function alertt (){
  window.open('https://www.algoexpert.io/product?r=ads&gclid=Cj0KCQiA5OuNBhCRARIsACgaiqU54rLZin0pj8c2gtQp-lftNH5gWp6jXAcabHVRZUDe4E_pE1QeqY4aAvhYEALw_wcB')

  chrome.notifications.clear("test");

 }




// callback()



