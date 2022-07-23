# Front end

This project was created by Dan Ahmed :)

## Epoch

Displays the most recently-fetched value for server time (retrieved by hitting endpoint /time), displayed in epoch seconds.

### `serverTime`

 - In Main.jsx, line 48, useEffect function runs getSetServerTime().

 - Within AppContext.jsx, getSetServerTime(), line 20, function runs which fires off getTime() function.
 
 - getTime() hits ('/time') endpoint using axios, axios.get('/time'), and returns the data.
 
 - Authorization is implemented in /api/index.js, line 4, axios.defaults.headers.common with the token = "mysecrettoken".
 
 - Once data return, serverTime is set to the returned data.

 - Epoch is displayed in Main.jsx, line 65,  Epoch: {serverTime}.
 
 - There is basic error handling on line 53 of Main.jsx to return null if there is no serverTime.

## Difference

Displays the difference between current client machine time and the most recently-fetched value for server time in epoch seconds, formatted in stopwatch format.

### `clientTime - serverTime`

 - clientTime is initially null.
 
 - The useEffect hook in Main.jsx, line 25, runs which sets the clientTime to a new epoch time value, (Math.floor(new Date().getTime() / 1000))
   and updates every second.
   
 - The difference is calculated via (clientTime - serverTime) but formatted incorrectly.
 
 - formatTime() within utils/time.js, line 6 formats (clientTime - serverTime) correctly.
 
 - formatTime() gathers seconds using the modulo function, divide by 60 and seconds = the remainder.
     
     - const seconds = time % 60.     (utils/time.js, line 8).
     
 - formatTime() gathers minutes by dividing the time by 60.

     - const minutes = Math.floor(time/60).     (utils/time.js, line 9).
     
  - formatTime() gathers hours by dividing the time by 3600, comes from 60 * 60.
  
     - const hours = Math.floor(time/3600).     (utils/time.js, line 10).
     
  - The result is then further formatted so that if the number is less than 10, a 0 is added at the start.  (utils/time.js, line 4).
  
     - If result returned is 9 ---> 09 is returned
     - If result returned is 17 ---> 17 is returned
     
  - The ende result is displayed in Main.jsx, line 69.  Diff: {formatTime(clientTime - serverTime)}.
  
     
## 1 Second interval

The displayed difference should update once per second. Eg. An initial difference of 00:00:00 would change after one second to 00:00:01.

### `setInterval(() => {}, 1000);`

  - In Main.jsx, line 25, the useEffect hook runs to update client time every second due to the value of 1000 on line 28.

  - Clean up potential memory leak on line 31 to clear the interval as to not introduce any unwanted side effects.


## HTML preformatted code block

A HTML preformatted code block containing the most recently-fetched value of all
Prometheus metrics.

### `promethusData`

 - In Main.jsx, line 48, useEffect function runs getSetServerTime().

 - Within AppContext.jsx, getSetServerTime(), line 20, function runs which fires off getTime() function.
 
 - getTime() hits ('/time') endpoint using axios, axios.get('/time'), and returns the data.
 
 - Authorization is implemented in /api/index.js, line 4, axios.defaults.headers.common with the token = "mysecrettoken".
 
 - Once data return, serverTime is set to the returned data.

 - Epoch is displayed in Main.jsx, line 65,  Epoch: {serverTime}.
 
 - There is basic error handling on line 53 of Main.jsx to return null if there is no serverTime.
