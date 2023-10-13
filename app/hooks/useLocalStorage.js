// import { useEffect, useState } from 'react';
//
// const useLocalStorage = (key, initialValue) => {
//   // Get the initial value from localStorage if it exists
//   const storedValue = localStorage.getItem(key);
//   const initial = storedValue ? JSON.parse(storedValue) : initialValue;
//
//   // Create a state variable to hold the current value
//   const [value, setValue] = useState(initial);
//
//   // Listen for changes to localStorage and update the value
//   useEffect(() => {
//     const handleStorageChange = (e) => {
//       if (e.key === key) {
//         setValue(e.newValue ? JSON.parse(e.newValue) : null);
//       }
//     };
//
//     // Add event listener for storage changes
//     window.addEventListener('storage', handleStorageChange);
//
//     return () => {
//       // Remove the event listener when the component unmounts
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, [key]);
//
//   // Function to set a new value to localStorage and update the state
//   const setStoredValue = (newValue) => {
//     // Update the state
//     setValue(newValue);
//
//     // Update localStorage
//     localStorage.setItem(key, JSON.stringify(newValue));
//   };
//
//   return [value, setStoredValue];
// };
//
// export default useLocalStorage;
