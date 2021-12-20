

// chrome.alarms.onAlarm.addListener(function( alarm) {
//   console.log("Got an alarm!", alarm);
// })

// // chrome.app.window.create('index.html', {
// //   id: 'main',
// //   bounds: { width: 620, height: 500 }
// // });



chrome.alarms.create('testAlarm', {
	periodInMinutes: .2
});


chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "testAlarm") {


    chrome.notifications.create('test', {
      type: 'basic',
      iconUrl: '/images/SAK128.png',
      title: "https://www.algoexpert.io/product" ,
      message: 'time for algo!!',
      priority: 2,

  })

  }
});

// chrome.alarms.onAlarm.addListener(function() {
//   chrome.notifications.create('test', {
//     type: 'basic',
//     iconUrl: '/images/SAK128.png',
//     title: 'Test Message',
//     message: 'You are awesome!',
//     priority: 2
// });
// console.log('in here')
// });


// const options = {
//   type: "basic",
//   iconUrl: "/images/SAK128.png",
//   title: "Popup.js",
//   message: "Hello from popup.js!"
// };

// chrome.notifications.create(options);

// chrome.alarms.create('testAlarm', {
// 	periodInMinutes: 0
// });

// chrome.alarms.onAlarm.addListener((alarm) => {
//   if (alarm.name === "testAlarm") {
//       chrome.notifications.create('test', {
//           type: 'basic',
//           iconUrl: '/images/SAK128.png',
//           title: 'Test Message',
//           message: 'You are awesome!',
//           priority: 2
//       });
//   }
// });




// chrome.notifications.create('test', {
//   type: 'basic',
//   iconUrl: 'images/SAK128.png',
//   title: 'Test Message',
//   message: 'You are awesome!',
//   priority: 2
// });

// function notifcation () {
// chrome.notifications.create('test', {
//   type: 'basic',
//   iconUrl: 'images/SAK128.png',
//   title: 'Test Message',
//   message: 'You are awesome!',

//   priority: 2
// });
// }
// notifcation()
 console.log(chrome)

