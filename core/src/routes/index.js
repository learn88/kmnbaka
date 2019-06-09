// Controller
const UserRoleController = require("../controllers/UserRoleController");
const AuthenticationController = require("../controllers/AuthenticationController");
const PostController = require("../controllers/PostController");
const GradeController = require("../controllers/GradeController");
const SchoolLevelController = require("../controllers/SchoolLevelController");
const SchoolController = require("../controllers/SchoolController");
const SubjectController = require("../controllers/SubjectController");
const TeacherController = require("../controllers/TeacherController");
const StudentController = require("../controllers/StudentController");

// Policy
const AuthenticationPolicy = require('../policies/auth/AuthenticationPolicy');
const TeacherPolicy = require('../policies/teacher/TeacherPolicy');
const StudentPolicy = require('../policies/student/StudentPolicy');
const SchoolPolicy = require('../policies/school/SchoolPolicy');

module.exports = (app) => {
  // User Role
  app.get("/user-roles", UserRoleController.index)
  app.post("/user-roles", UserRoleController.post)
  app.get("/user-roles/:userRoleID", UserRoleController.show)
  app.put("/user-roles/:userRoleID", UserRoleController.put)
  app.delete("/user-roles/:userRoleID", UserRoleController.remove)

  // User Route 
    /** name, role, email, password, school_id */
  app.get("/users", AuthenticationController.index)
  app.get("/users/:userID", AuthenticationController.show)
  app.put("/users/:userID", AuthenticationController.put)
  app.delete("/users/:userID", AuthenticationController.remove)
  app.post("/login", AuthenticationController.login)
  app.post("/register", AuthenticationPolicy.register, AuthenticationController.register)
  
  // For School 
  // Subject Route
    /** name, description */
  app.get("/subjects", SubjectController.index)
  app.post("/subjects", SubjectController.post)
  app.get("/subjects/:subjectID", SubjectController.show)
  app.put("/subjects/:subjectID", SubjectController.put)
  app.delete("/subjects/:subjectID", SubjectController.remove)

  // Grade Route
    /** name, description, subject_id */
  app.get("/grades", GradeController.index)
  app.post("/grades", GradeController.post)
  app.get("/grades/:gradeID", GradeController.show)
  app.put("/grades/:gradeID", GradeController.put)
  app.delete("/grades/:gradeID", GradeController.remove)

  // School Level Route
    /** name, grade_id */
  app.get("/school-levels", SchoolLevelController.index)
  app.post("/school-levels", SchoolLevelController.post)
  app.get("/school-levels/:schoolLevelID", SchoolLevelController.show)
  app.put("/school-levels/:schoolLevelID", SchoolLevelController.put)
  app.delete("/school-levels/:schoolLevelID", SchoolLevelController.remove)

  // School Route
    /** name, slogram, description, logo, profile, school_level_id */
  app.get("/schools", SchoolController.index)
  app.post("/schools", SchoolPolicy.create, SchoolController.post)
  app.get("/schools/:schoolID", SchoolController.show)
  app.put("/schools/:schoolID", SchoolController.put)
  app.delete("/schools:schoolID", SchoolController.remove)

  // For Teacher
  // Teacher Route
    /** name, position, nrc, school_id */
  app.get("/teachers", TeacherController.index)
  app.post("/teachers", TeacherPolicy.create, TeacherController.post)
  app.get("/teachers/:teacherID", TeacherController.show)
  app.put("/teachers/:teacherID", TeacherController.put)
  app.delete("/teachser/:teacherID", TeacherController.remove)

  // For Student
  // Student Route
    /** name, father_name, dob, school_id */
  app.get("/students", StudentController.index)
  app.post("/students", StudentPolicy.create, StudentController.post)
  app.get("/students/:studentID", StudentController.show)
  app.put("/students/:studentID", StudentController.put)
  app.delete("/students/:studentID", StudentController.remove)
}
