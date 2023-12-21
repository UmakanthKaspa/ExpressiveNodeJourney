import express from "express";
const app = express();

//basic routing
app.get("/magic", (req, res) => {
  res.send("You have discovered the secret magic portal! 🎩✨");
});

app.get("/jokes", (req, res) => {
  res.send(
    "Why don't scientists trust atoms? Because they make up everything! 😄🔬"
  );
});

app.get("/space", (req, res) => {
  res.send(
    "In space, no one can hear you scream... unless you forgot to turn on the mic! 🚀🎤"
  );
});

// app.get("*", (req, res) => {
//   res.send(
//     "404 - This is not the page you are looking for. Try another galaxy? 🌌🔭"
//   );
// });

//nested routing
app.get("/", (req, res) => {
  res.send("Welcome to the secret lair! 👀🏰");
});

app.get("/explore", (req, res) => {
  res.send("You've entered the mysterious exploration zone! 🌟🔍");
});

app.get("/explore/magic", (req, res) => {
  res.send("Abracadabra! You've found the magical realm! ✨🎩");
});

app.get("/explore/jokes", (req, res) => {
  res.send("In this section, laughter reigns supreme! 😄🃏");
});

// // for all undefined routes
// app.get("*", (req, res) => {
//   res.send("404 - You've wandered into uncharted territory. Be cautious! 🌌❓");
// });

//call back functions
//single call back function
app.get('/single-call-back', (req, res) => {
    res.send("I'm a single callback route, but don't worry, I won't leave you hanging!");
})

//double call back function

// Attempted Double Callback Route 1
// app.get('/double-call-back', (req, res) => {
//     console.log('double-call-back-1');
// }, (req, res) => {
//     res.send("single-call-back");
// }) 


// Explanation: This doesn't work because there's no call to 'next()' within the first middleware function. 
// Express doesn't automatically pass control to the next middleware without 'next()' being called.

// Attempted Double Callback Route 2
// app.get('/double-call-back', (req, res,next) => {
//     res.send('double-call-back-1');
//     next();
// }, (req, res) => {
//     res.send("double-call-back-2");
// }) 


// Explanation: This also won't work because 'res.send()' sends a response and terminates the request-response cycle. 
// The 'next()' function is not reached as the response is already sent.


app.get('/double-call-back', (req, res,next) => {
    console.log("Hey, I'm the first part of a double callback route. Hang tight!");
    next()
    }, (req, res) => {
        res.send("Ta-da! I'm the second part of the double callback route. We made it through together!");
    }) 

// Array of  callbacks
const unicornMagic = (req, res, next) => {
    console.log("🦄✨ Harnessing the power of unicorn magic...");
    next();
  };
  
  const fairyDust = (req, res, next) => {
    console.log("✨ Sprinkling fairy dust over the request...");
    next();
  };
  
  const dragonFire = (req, res) => {
    console.log("🐉🔥 Unleashing the mighty dragon fire for the final response!");
    res.send("Array of mystical callbacks: Magic, Fairy Dust, and Dragon Fire! 🌟");
  };
  
  // Associating the array of mystical callbacks with the route
  app.get("/magical-route", [unicornMagic, fairyDust, dragonFire]);
  
    // app.get('*', (req, res) => {
    //     res.send('404 - Looks like you ventured into uncharted territory. Don\'t worry, I\'ll guide you back! 🌟');
    //   });


//using three callbacks combined
const windPower = (req, res, next) => {
    console.log("Harnessing the force of the wind...");
    next();
  };
  
  const earthVibes = (req, res, next) => {
    console.log("Connecting with the vibes of the earth...");
    next();
  };
  
  app.get(
    "/elements-route",
    [windPower, earthVibes], 
    (req, res, next) => {
      console.log("Gathering the essence of nature...");
      next();
    },
    (req, res) => {
      console.log("Embracing the harmony of elements!");
      res.send("A fusion of nature's elements in one route!");
    }
  );
  

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
