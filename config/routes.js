/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },
  
  'POST /user/createUser': 'UserController.createUser',
  'POST /department/newDepartment': 'DepartmentController.newDepartment',
  'POST /services/newService': 'ServicesController.newService',
  'POST /Task1/createtask1': 'Task1Controller.createtask1',
  'POST /car/createCar': 'CarController.createCar',
  'POST /Enginedetails/createEnginedetails': 'EnginedetailsController.createEnginedetails',
  'POST /login/userlogin': 'loginController.userlogin',
  'POST /register/register': 'RegisterController.register',
  'POST /employee/createEmployee': 'EmployeeController.createEmployee',
  'POST /student/createStudent': 'StudentController.createStudent',
  'GET /User/showuser': 'UserController.showuser',
  'GET /Car/showdata': 'CarController.showdata',
  'GET /Task1/onceagain': 'Task1Controller.onceagain',
  'GET /Department/device': 'DepartmentController.device',
  'GET /Employee/showemployee': 'EmployeeController.showemployee',
  'POST /Employee/updateemployee': 'EmployeeController.updateemployee',
  'POST /Employee/destroyemployee': 'EmployeeController.destroyemployee',
  'GET /Student/showstudent': 'StudentController.showstudent',
  'POST /Student/updatestudent': 'StudentController.updatestudent',
 // 'POST /Task1/findtask1': 'Task1Controller.findtask1',
  
  /***************************************************************************s
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
