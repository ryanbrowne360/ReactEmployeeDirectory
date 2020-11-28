// https://jsonplaceholder.typicode.com/

const EmpAPI = {
    getEmployees: function(cb) {
      const url = 'hhttps://jsonplaceholder.typicode.com/users';
      fetch(url)
      .then(res => res.json())
      .then(res => cb(res.results))
      .catch(cb([]));
    }
  }
  
  export default EmpAPI;