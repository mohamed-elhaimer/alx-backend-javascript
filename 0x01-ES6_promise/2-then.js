export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (Promise.resolve) {
      resolve(console.log('Got a response from the API'));
    } else if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(new Error());
    }
  });
}
