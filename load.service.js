
App.factory("load",function($http){
  return $http.get("https://reqres.in/api/unknown")
    
});